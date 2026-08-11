(function(){
  const stage = document.getElementById('cassetteStage');
  const object = document.getElementById('cassetteObject');
  const viewer = document.getElementById('wm2Viewer');
  const clickSound = document.getElementById('cassetteClickSound');
  if(!stage || !viewer) return;

  const FPS = 30;
  const FRAME = {
    hoverStart: 175,
    hoverEnd: 208,
    clickStart: 209,
    clickEnd: 250
  };
  const TIME = Object.fromEntries(
    Object.entries(FRAME).map(([key, frame])=>[key, frame / FPS])
  );

  let proximity = 0;
  let targetTiltX = 0;
  let targetTiltY = 0;
  let currentTiltX = 0;
  let currentTiltY = 0;
  let targetPlayhead = TIME.hoverStart;
  let playhead = TIME.hoverStart;
  let modelReady = false;
  let transitioning = false;
  let mixer = null;
  let tiltGroup = null;
  let clock = null;
  let renderer = null;
  let camera = null;
  let scene = null;

  const clamp01 = value=>Math.min(1, Math.max(0, value));
  const smoothstep = value=>value * value * (3 - 2 * value);

  function updatePointer(event){
    if(transitioning) return;
    const rect = stage.getBoundingClientRect();
    const x = clamp01((event.clientX - rect.left) / rect.width);
    const y = clamp01((event.clientY - rect.top) / rect.height);
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(dx, dy);
    const innerRadius = Math.min(rect.width, rect.height) * .1;
    const outerRadius = Math.hypot(rect.width, rect.height) * .52;

    proximity = smoothstep(clamp01(1 - (distance - innerRadius) / (outerRadius - innerRadius)));
    targetPlayhead = TIME.hoverStart + (TIME.hoverEnd - TIME.hoverStart) * proximity;
    targetTiltX = (0.5 - y) * 12 * Math.PI / 180;
    targetTiltY = (x - 0.5) * 18 * Math.PI / 180;

    stage.style.setProperty('--pointer-x', `${x * 100}%`);
    stage.style.setProperty('--pointer-y', `${y * 100}%`);
    stage.style.setProperty('--proximity', proximity.toFixed(3));
  }

  function resetPointer(){
    if(transitioning) return;
    proximity = 0;
    targetPlayhead = TIME.hoverStart;
    targetTiltX = 0;
    targetTiltY = 0;
    stage.style.setProperty('--proximity', '0');
  }

  function render(){
    requestAnimationFrame(render);
    const delta = clock ? Math.min(clock.getDelta(), .05) : 1 / 60;

    if(transitioning){
      playhead = Math.min(TIME.clickEnd, playhead + delta);
      if(playhead >= TIME.clickEnd){
        location.href = stage.href;
        return;
      }
    } else {
      const frameDamping = 1 - Math.exp(-9 * delta);
      playhead += (targetPlayhead - playhead) * frameDamping;
    }

    const tiltDamping = 1 - Math.exp(-7 * delta);
    currentTiltX += (targetTiltX - currentTiltX) * tiltDamping;
    currentTiltY += (targetTiltY - currentTiltY) * tiltDamping;
    if(object){
      object.style.transform = `rotateX(${currentTiltX * 180 / Math.PI}deg) rotateY(${currentTiltY * 180 / Math.PI}deg) scale(${1 + proximity * .025})`;
    }

    if(tiltGroup){
      tiltGroup.rotation.x = currentTiltX;
      tiltGroup.rotation.y = currentTiltY;
    }
    if(mixer) mixer.setTime(playhead);
    stage.dataset.currentFrame = (playhead * FPS).toFixed(2);
    stage.dataset.tilt = `${(currentTiltX * 180 / Math.PI).toFixed(2)},${(currentTiltY * 180 / Math.PI).toFixed(2)}`;
    if(renderer && scene && camera) renderer.render(scene, camera);
  }

  async function initWebGLModel(){
    try {
      const THREE = await import('three');
      const {GLTFLoader} = await import('three/addons/loaders/GLTFLoader.js');
      const {DRACOLoader} = await import('three/addons/loaders/DRACOLoader.js');

      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(32, 1, .01, 100);
      camera.position.set(0, 0, 5.4);

      renderer = new THREE.WebGLRenderer({alpha:true, antialias:true, powerPreference:'high-performance'});
      renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = .92;
      viewer.appendChild(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xf6f8fa, 0x5b5b5b, 1.75));
      const key = new THREE.DirectionalLight(0xfff8ee, 2.35);
      key.position.set(3, 4, 5);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0xe8edf0, 1.05);
      fill.position.set(-4, 1, 3);
      scene.add(fill);
      const rim = new THREE.DirectionalLight(0xffffff, 1.35);
      rim.position.set(-2, 3, -4);
      scene.add(rim);

      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath('https://cdn.jsdelivr.net/npm/three@0.169.0/examples/jsm/libs/draco/');
      const gltfLoader = new GLTFLoader();
      gltfLoader.setDRACOLoader(dracoLoader);
      const gltf = await new Promise((resolve, reject)=>{
        gltfLoader.load('assets/WM2.glb', resolve, undefined, reject);
      });

      const bodyMaterials = new Set([
        'BACK', 'FRONT BODY', 'FRONT BODY_BATTERY PART', 'FRONT BODY_BOTTOM'
      ]);
      const blackMaterials = new Set([
        'MATERIAL.009', 'BLACK PARTS_MAIN', 'BLACK PARTS_DATAIL'
      ]);
      const metalMaterials = new Set([
        'BUTTON DETAIL', 'SILVER', 'BASIC METAL.001', 'OPEN BUTTON', 'ALUMINIUM', 'WHEEL_FRONT'
      ]);
      const clearTextureChannels = material=>{
        material.map = null;
        material.normalMap = null;
        material.roughnessMap = null;
        material.metalnessMap = null;
        material.aoMap = null;
      };

      gltf.scene.traverse(node=>{
        if(!node.isMesh) return;
        const materials = Array.isArray(node.material) ? node.material : [node.material];
        materials.forEach(material=>{
          if(!material) return;
          const name = (material.name || '').toUpperCase();

          if(bodyMaterials.has(name)){
            clearTextureChannels(material);
            material.color.set(0x86a9c2);
            material.metalness = .26;
            material.roughness = .4;
            material.clearcoat = .28;
            material.clearcoatRoughness = .34;
          } else if(blackMaterials.has(name)){
            clearTextureChannels(material);
            material.color.set(0x101416);
            material.metalness = .16;
            material.roughness = .48;
            material.clearcoat = .18;
            material.clearcoatRoughness = .42;
          } else if(metalMaterials.has(name)){
            clearTextureChannels(material);
            material.color.set(name === 'BUTTON DETAIL' ? 0x76838d : 0xb8c0c5);
            material.metalness = .82;
            material.roughness = .27;
            material.clearcoat = .12;
          } else if(name === 'BASIC METAL.004'){
            clearTextureChannels(material);
            material.color.set(0x17232d);
            material.metalness = .52;
            material.roughness = .3;
          } else if(name === 'COVER GLASS'){
            clearTextureChannels(material);
            material.color.set(0xe7f2f8);
            material.metalness = 0;
            material.roughness = .12;
            material.transmission = .72;
            material.thickness = .025;
            material.transparent = true;
            material.opacity = .34;
            material.depthWrite = false;
          } else if(name === 'STICKER.001'){
            material.normalMap = null;
            material.roughnessMap = null;
            material.metalnessMap = null;
            material.metalness = 0;
            material.roughness = .45;
          }
          material.needsUpdate = true;
        });
      });

      tiltGroup = new THREE.Group();
      const fitGroup = new THREE.Group();
      tiltGroup.add(fitGroup);
      gltf.scene.rotation.y = Math.PI;
      fitGroup.add(gltf.scene);
      scene.add(tiltGroup);

      if(gltf.animations.length){
        mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach(clip=>{
          const action = mixer.clipAction(clip);
          action.setLoop(THREE.LoopOnce, 1);
          action.clampWhenFinished = true;
          action.play();
        });
        mixer.setTime(TIME.hoverStart);
      }

      gltf.scene.updateWorldMatrix(true, true);
      const player = gltf.scene.getObjectByName('PLAYER') || gltf.scene;
      const box = new THREE.Box3().setFromObject(player);
      const size = box.getSize(new THREE.Vector3());
      const center = box.getCenter(new THREE.Vector3());
      const maxDimension = Math.max(size.x, size.y, size.z);
      const fit = maxDimension > 0 && Number.isFinite(maxDimension) ? 1.25 / maxDimension : 1;
      fitGroup.scale.setScalar(fit);
      fitGroup.position.copy(center).multiplyScalar(-fit);
      fitGroup.position.y += .12;
      viewer.dataset.modelBounds = JSON.stringify({size:size.toArray(), center:center.toArray(), fit});

      const resize = ()=>{
        const rect = viewer.getBoundingClientRect();
        renderer.setSize(rect.width, rect.height, false);
        camera.aspect = rect.width / Math.max(rect.height, 1);
        camera.updateProjectionMatrix();
      };
      new ResizeObserver(resize).observe(viewer);
      resize();
      clock = new THREE.Clock();
      modelReady = true;
      stage.classList.add('has-webgl-model');
    } catch(error) {
      viewer.replaceChildren();
      console.warn('WM2 GLB could not be loaded; using the CSS cassette fallback.', error);
    }
  }

  stage.addEventListener('pointermove', updatePointer);
  stage.addEventListener('pointerleave', resetPointer);
  stage.addEventListener('click', event=>{
    event.preventDefault();
    if(transitioning) return;
    transitioning = true;
    stage.classList.add('is-entering');
    window.dispatchEvent(new CustomEvent('grainient-enter'));
    targetTiltX = 0;
    targetTiltY = 0;
    playhead = TIME.clickStart;
    targetPlayhead = TIME.clickEnd;
    if(clickSound){
      clickSound.currentTime = 0;
      clickSound.volume = .72;
      clickSound.play().catch(()=>{});
    }

    if(!modelReady){
      window.setTimeout(()=>location.href = stage.href, 900);
    }
  });

  initWebGLModel();
  render();
})();
