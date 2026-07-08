(function(){
  const isFinePointer = window.matchMedia('(pointer: fine)').matches;
  const cursorDot = document.getElementById('cursorDot');
  if(!cursorDot) return;

  if(!isFinePointer){
    cursorDot.style.display = 'none';
    return;
  }

  document.documentElement.classList.add('has-custom-cursor');

  document.addEventListener('mousemove', (e)=>{
    const xPct = (e.clientX/window.innerWidth*100).toFixed(2)+'%';
    const yPct = (e.clientY/window.innerHeight*100).toFixed(2)+'%';
    document.documentElement.style.setProperty('--mx', xPct);
    document.documentElement.style.setProperty('--my', yPct);
    cursorDot.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%,-50%)`;
  });

  document.addEventListener('mousedown', ()=> cursorDot.classList.add('click'));
  document.addEventListener('mouseup', ()=> cursorDot.classList.remove('click'));

  // any clickable element -> cursor opacity goes to 100%
  const clickableSelector = 'a, button, [onclick], .glass-btn, .enter-btn, .subnav-pill:not(.on), .subnav-back, .project-card, .chip, input, textarea, select';

  document.addEventListener('mouseover', (e)=>{
    if(e.target.closest(clickableSelector)){
      cursorDot.classList.add('hover-grow');
    }
  });
  document.addEventListener('mouseout', (e)=>{
    if(e.target.closest(clickableSelector)){
      cursorDot.classList.remove('hover-grow');
    }
  });
})();

/* ---------- scroll reveal ---------- */
(function(){
  const els = document.querySelectorAll('.reveal');
  if(!els.length) return;

  const io = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

  els.forEach(el => {
    io.observe(el);
    // failsafe: never let content stay hidden if the observer doesn't fire for any reason
    setTimeout(()=> el.classList.add('in'), 1200);
  });
})();

/* ---------- scroll to top button ---------- */
(function(){
  const btn = document.getElementById('scrollTopBtn');
  if(!btn) return;

  function toggle(){
    if(window.scrollY > 480){
      btn.classList.add('show');
    } else {
      btn.classList.remove('show');
    }
  }

  window.addEventListener('scroll', toggle, { passive: true });
  toggle();

  btn.addEventListener('click', ()=>{
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();
