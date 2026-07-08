function initNoise(container, opts = {}) {
  const {
    patternSize = 250,
    patternScaleX = 1,
    patternScaleY = 1,
    patternRefreshInterval = 2,
    patternAlpha = 15
  } = opts;

  if (!container) return () => {};

  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block;';
  container.appendChild(canvas);
  const ctx = canvas.getContext('2d');

  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    canvas.width = Math.max(1, container.clientWidth * dpr);
    canvas.height = Math.max(1, container.clientHeight * dpr);
  }
  resize();
  const ro = new ResizeObserver(resize);
  ro.observe(container);

  const patternCanvas = document.createElement('canvas');
  patternCanvas.width = patternSize;
  patternCanvas.height = patternSize;
  const pctx = patternCanvas.getContext('2d');
  const patternData = pctx.createImageData(patternSize, patternSize);

  function updatePattern() {
    const data = patternData.data;
    for (let i = 0; i < data.length; i += 4) {
      const v = (Math.random() * 255) | 0;
      data[i] = v;
      data[i + 1] = v;
      data[i + 2] = v;
      data[i + 3] = patternAlpha;
    }
    pctx.putImageData(patternData, 0, 0);
  }

  let frame = 0;
  let raf = 0;

  function draw() {
    frame++;
    if (frame % patternRefreshInterval === 0) {
      updatePattern();
    }
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const pattern = ctx.createPattern(patternCanvas, 'repeat');
    ctx.save();
    ctx.scale(patternScaleX, patternScaleY);
    ctx.fillStyle = pattern;
    ctx.fillRect(0, 0, canvas.width / patternScaleX, canvas.height / patternScaleY);
    ctx.restore();
    raf = requestAnimationFrame(draw);
  }

  updatePattern();
  draw();

  return () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    if (canvas.parentElement === container) container.removeChild(canvas);
  };
}

window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('noiseContainer');
  if (!el) return;
  initNoise(el, {
    patternSize: 250,
    patternScaleX: 1,
    patternScaleY: 1,
    patternRefreshInterval: 2,
    patternAlpha: 15
  });
});
