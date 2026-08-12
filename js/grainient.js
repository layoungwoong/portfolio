(async function(){
  const container = document.getElementById('grainientBackground');
  if(!container) return;

  const hexToRgb = hex=>[
    parseInt(hex.slice(1, 3), 16) / 255,
    parseInt(hex.slice(3, 5), 16) / 255,
    parseInt(hex.slice(5, 7), 16) / 255
  ];

  const vertex = `#version 300 es
in vec2 position;
void main(){gl_Position=vec4(position,0.0,1.0);}`;

  const fragment = `#version 300 es
precision highp float;
uniform vec2 iResolution;
uniform float iTime;
uniform float uTimeSpeed;
uniform float uColorBalance;
uniform float uWarpStrength;
uniform float uWarpFrequency;
uniform float uWarpSpeed;
uniform float uWarpAmplitude;
uniform float uBlendAngle;
uniform float uBlendSoftness;
uniform float uRotationAmount;
uniform float uNoiseScale;
uniform float uGrainAmount;
uniform float uGrainScale;
uniform float uGrainAnimated;
uniform float uContrast;
uniform float uGamma;
uniform float uSaturation;
uniform vec2 uCenterOffset;
uniform float uZoom;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
out vec4 fragColor;
#define S(a,b,t) smoothstep(a,b,t)
mat2 Rot(float a){float s=sin(a),c=cos(a);return mat2(c,-s,s,c);}
vec2 hash(vec2 p){p=vec2(dot(p,vec2(2127.1,81.17)),dot(p,vec2(1269.5,283.37)));return fract(sin(p)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p),u=f*f*(3.0-2.0*f);float n=mix(mix(dot(-1.0+2.0*hash(i),f),dot(-1.0+2.0*hash(i+vec2(1.0,0.0)),f-vec2(1.0,0.0)),u.x),mix(dot(-1.0+2.0*hash(i+vec2(0.0,1.0)),f-vec2(0.0,1.0)),dot(-1.0+2.0*hash(i+vec2(1.0)),f-vec2(1.0)),u.x),u.y);return 0.5+0.5*n;}
void mainImage(out vec4 o,vec2 C){
  float t=iTime*uTimeSpeed;
  vec2 uv=C/iResolution.xy;
  float ratio=iResolution.x/iResolution.y;
  vec2 tuv=uv-0.5+uCenterOffset;
  tuv/=max(uZoom,0.001);
  float degree=noise(vec2(t*0.1,tuv.x*tuv.y)*uNoiseScale);
  tuv.y*=1.0/ratio;
  tuv*=Rot(radians((degree-0.5)*uRotationAmount+180.0));
  tuv.y*=ratio;
  float amplitude=uWarpAmplitude/max(uWarpStrength,0.001);
  float warpTime=t*uWarpSpeed;
  tuv.x+=sin(tuv.y*uWarpFrequency+warpTime)/amplitude;
  tuv.y+=sin(tuv.x*(uWarpFrequency*1.5)+warpTime)/(amplitude*0.5);
  float b=uColorBalance,s=max(uBlendSoftness,0.0);
  float blendX=(tuv*Rot(radians(uBlendAngle))).x;
  float edge0=-0.3-b-s,edge1=0.2-b+s,v0=0.5-b+s,v1=-0.3-b-s;
  vec3 layer1=mix(uColor3,uColor2,S(edge0,edge1,blendX));
  vec3 layer2=mix(uColor2,uColor1,S(edge0,edge1,blendX));
  vec3 col=mix(layer1,layer2,S(v0,v1,tuv.y));
  vec2 grainUv=uv*max(uGrainScale,0.001);
  if(uGrainAnimated>0.5) grainUv+=vec2(iTime*0.05);
  float grain=fract(sin(dot(grainUv,vec2(12.9898,78.233)))*43758.5453);
  col+=(grain-0.5)*uGrainAmount;
  col=(col-0.5)*uContrast+0.5;
  float luma=dot(col,vec3(0.2126,0.7152,0.0722));
  col=mix(vec3(luma),col,uSaturation);
  col=pow(max(col,0.0),vec3(1.0/max(uGamma,0.001)));
  o=vec4(clamp(col,0.0,1.0),1.0);
}
void main(){vec4 o=vec4(0.0);mainImage(o,gl_FragCoord.xy);fragColor=o;}`;

  try{
    const {Renderer,Program,Mesh,Triangle} = await import('https://cdn.jsdelivr.net/npm/ogl/+esm');
    const renderer = new Renderer({webgl:2,alpha:false,antialias:false,dpr:Math.min(devicePixelRatio||1,2)});
    const gl = renderer.gl;
    container.appendChild(gl.canvas);
    const program = new Program(gl,{vertex,fragment,uniforms:{
      iTime:{value:0},iResolution:{value:new Float32Array([1,1])},
      uTimeSpeed:{value:.25},uColorBalance:{value:0},uWarpStrength:{value:1},
      uWarpFrequency:{value:5},uWarpSpeed:{value:2},uWarpAmplitude:{value:50},
      uBlendAngle:{value:0},uBlendSoftness:{value:.05},uRotationAmount:{value:500},
      uNoiseScale:{value:2},uGrainAmount:{value:.1},uGrainScale:{value:2},
      uGrainAnimated:{value:0},uContrast:{value:1.5},uGamma:{value:1},
      uSaturation:{value:1},uCenterOffset:{value:new Float32Array([0,0])},uZoom:{value:.9},
      uColor1:{value:new Float32Array(hexToRgb('#000000'))},
      uColor2:{value:new Float32Array(hexToRgb('#96c7d0'))},
      uColor3:{value:new Float32Array(hexToRgb('#3d3d3d'))}
    }});
    const mesh = new Mesh(gl,{geometry:new Triangle(gl),program});
    const iceBlue = hexToRgb('#96c7d0');
    const enterRed = hexToRgb('#db0000');
    let enterStartedAt = 0;
    const onEnter = ()=>{
      enterStartedAt = performance.now();
      container.dataset.entering = 'true';
    };
    window.addEventListener('grainient-enter',onEnter);
    const resize = ()=>{
      const rect=container.getBoundingClientRect();
      renderer.setSize(Math.max(1,rect.width),Math.max(1,rect.height));
      program.uniforms.iResolution.value[0]=gl.drawingBufferWidth;
      program.uniforms.iResolution.value[1]=gl.drawingBufferHeight;
    };
    new ResizeObserver(resize).observe(container);
    resize();
    const start=performance.now();
    let raf=0;
    const render=now=>{
      program.uniforms.iTime.value=(now-start)*.001;
      if(enterStartedAt){
        const progress=Math.min(1,(now-enterStartedAt)/500);
        const eased=progress*progress*(3-2*progress);
        program.uniforms.uColor2.value=new Float32Array([
          iceBlue[0]+(enterRed[0]-iceBlue[0])*eased,
          iceBlue[1]+(enterRed[1]-iceBlue[1])*eased,
          iceBlue[2]+(enterRed[2]-iceBlue[2])*eased
        ]);
        container.dataset.enterBlend=eased.toFixed(3);
      }
      renderer.render({scene:mesh});
      raf=requestAnimationFrame(render);
    };
    const visibility=()=>{
      if(document.hidden){cancelAnimationFrame(raf);raf=0;}
      else if(!raf) raf=requestAnimationFrame(render);
    };
    document.addEventListener('visibilitychange',visibility);
    raf=requestAnimationFrame(render);
  }catch(error){
    console.warn('Grainient background could not be loaded; using the CSS fallback.',error);
  }
})();
