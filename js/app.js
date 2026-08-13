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
  const clickableSelector = 'a, button, [onclick], .glass-btn, .enter-btn, .subnav-pill:not(.on), .subnav-back, .project-card, .photo-gallery-item, .chip, input, textarea, select';

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

/* ---------- personal photo gallery ---------- */
(function(){
  window.initPhotoGallery = function(root = document){
    const grid = root.querySelector?.('#photoGalleryGrid') || document.getElementById('photoGalleryGrid');
    const dialog = root.querySelector?.('#photoGalleryLightbox') || document.getElementById('photoGalleryLightbox');
    if(!grid || !dialog || grid.dataset.galleryReady === '1') return;
    grid.dataset.galleryReady = '1';

    const count = Number(grid.dataset.photoCount) || 30;
    const fragment = document.createDocumentFragment();
    for(let index = 0; index < count; index++){
      const number = String(index + 1).padStart(2, '0');
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `photo-gallery-item photo-gallery-shape-${(index % 7) + 1} reveal`;
      button.style.setProperty('--photo-hue', `${(index * 37 + 8) % 360}`);
      button.style.setProperty('--reveal-delay', `${(index % 6) * 45}ms`);
      button.dataset.photoSlot = number;
      button.setAttribute('aria-label', `Open photograph slot ${number}`);
      button.innerHTML = `<span class="photo-gallery-placeholder" aria-hidden="true"><b>${number}</b></span>`;
      fragment.appendChild(button);
    }
    grid.appendChild(fragment);

    const media = dialog.querySelector('.photo-gallery-lightbox-media');
    const countLabel = dialog.querySelector('.photo-gallery-lightbox-count');
    const close = dialog.querySelector('.photo-gallery-lightbox-close');
    let activeItem = null;
    let closeTimer = null;

    function openPhoto(item){
      clearTimeout(closeTimer);
      activeItem?.classList.remove('is-selected');
      activeItem = item;
      activeItem.classList.add('is-selected');
      const image = item.querySelector('img');
      if(image){
        const expanded = image.cloneNode();
        expanded.removeAttribute('loading');
        media.replaceChildren(expanded);
      } else {
        const placeholder = item.querySelector('.photo-gallery-placeholder').cloneNode(true);
        placeholder.style.setProperty('--photo-hue', item.style.getPropertyValue('--photo-hue'));
        media.replaceChildren(placeholder);
      }
      countLabel.textContent = `${item.dataset.photoSlot} / ${String(count).padStart(2, '0')}`;
      if(!dialog.open) dialog.showModal();
      requestAnimationFrame(()=>requestAnimationFrame(()=>dialog.classList.add('is-open')));
    }

    function closePhoto(){
      if(!dialog.open) return;
      dialog.classList.remove('is-open');
      closeTimer = window.setTimeout(()=>dialog.close(), 420);
    }

    grid.addEventListener('click', event=>{
      const item = event.target.closest('.photo-gallery-item');
      if(item) openPhoto(item);
    });
    close?.addEventListener('click', closePhoto);
    dialog.addEventListener('click', event=>{
      if(event.target === dialog) closePhoto();
    });
    dialog.addEventListener('cancel', event=>{
      event.preventDefault();
      closePhoto();
    });
    dialog.addEventListener('close', ()=>{
      activeItem?.classList.remove('is-selected');
      activeItem = null;
      media.replaceChildren();
    });

    window.initScrollReveal?.(grid);
  };

  window.initPhotoGallery(document);
})();

/* ---------- scroll reveal ---------- */
(function(){
  const observed = new WeakSet();
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const io = !reducedMotion && 'IntersectionObserver' in window ? new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('in');
      } else {
        entry.target.classList.remove('in');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -44px 0px' }) : null;

  window.initScrollReveal = function(root = document){
    const elements = [];
    if(root.matches?.('.reveal')) elements.push(root);
    const descendants = root.querySelectorAll ? root.querySelectorAll('.reveal') : [];
    elements.push(...descendants);
    elements.forEach(el=>{
      if(observed.has(el)) return;
      observed.add(el);
      if(!io){
        el.classList.add('in');
        return;
      }
      io.observe(el);
      // Failsafe only releases an element that is actually visible in the viewport.
      setTimeout(()=>{
        const rect = el.getBoundingClientRect();
        if(rect.top < window.innerHeight && rect.bottom > 0) el.classList.add('in');
      }, 1400);
    });
  };

  window.initScrollReveal(document);
})();

/* ---------- scroll to top button ---------- */
(function(){
  document.querySelectorAll('a[href^="mailto:"]').forEach(link=>{
    link.addEventListener('click', event=>{
      event.preventDefault();
      window.location.assign(link.getAttribute('href'));
    });
  });
})();

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
