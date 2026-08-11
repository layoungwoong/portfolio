(function () {
  const projects = [
    {
      category: 'EVENT PREP.', title: 'CLO Summit NY', year: '2025',
      subtitle: 'Event Production & On-site Content', image: 'images/carousel/clo-summit-ny-01.jpg', video: 'T9yNzYCBn_c',
      description: 'Contributed to the key visual and hero video production for the 2025 CLO Summit in New York. The visual resources were expanded across multiple event touchpoints, from merchandise to large-scale venue banners, shaping a cohesive on-site brand experience.'
    },
    {
      category: 'EVENT PREP.', title: 'Marvelous Designer User Summit', year: '2024',
      subtitle: 'Event Production & On-site Content', image: 'images/carousel/marvelous-designer-summit-01.jpg', video: '5fndDGEqdak',
      description: "Produced key visuals, hero video assets, and event merchandise for the 2024 Marvelous Designer User Summit in Seoul. Inspired by the energy of summer and Marvelous Designer's signature orange, the visual direction created a bright, seasonal atmosphere."
    },
    {
      category: 'EVENT PREP.', title: 'CLO Student Ambassador', year: '2026',
      subtitle: 'Campus Program & Content', image: 'images/carousel/clo-student-ambassador-01.jpg',
      description: 'Led visual production and supported on-site operations for a four-month student ambassador program in Seoul. Designed trend-driven visuals and merchandise tailored to university students, while presenting design guidelines and engaging directly with participants.'
    },
    {
      category: 'MEDIA ART', title: '日月五峰圖 · Irworobongdo', year: '2024',
      subtitle: 'Incheon Airport Terminal 1 Arrivals Hall', image: 'images/carousel/irworobongdo-01.jpg', video: 'gi1V8Y43g20',
      description: "A media art installation themed on the royal Irworobongdo motif. The concept was selected among multiple proposals, and the entire process from planning through production was led independently."
    },
    {
      category: 'MEDIA ART', title: 'Garden of Dolmens', year: '2023',
      subtitle: 'Gochang Dolmen Museum', image: 'images/carousel/garden-of-dolmens-01.jpg', video: 'Q-Lpf6-b-K4',
      description: "Created a media art piece for the Gochang Dolmen Museum, designed to blend naturally with the remodeled lobby's indoor garden concept. The video depicts the Garden of Dolmens across day and night."
    },
    {
      category: 'MEDIA ART', title: 'Sohn Won-yil', year: '2023',
      subtitle: 'Naval History Exhibition Hall', image: 'images/carousel/sohn-won-yil-01.jpg',
      description: "A media art project for the Naval History Exhibition Hall. I built key 3D assets ranging from the ship model to detailed props, focusing closely on historical accuracy and convincing visual detail."
    },
    {
      category: '3D VIDEO', title: 'Virtual Zoo Project', year: '2023',
      subtitle: 'One-Zoo-a-Day 3D Challenge', image: 'images/carousel/virtual-zoo-01.jpg', playlist: 'PLABHIPLhUAnZq16m1RlKHUZojSCyb-s4v',
      description: 'A personal 3D challenge designed around the Instagram grid, where three posts formed one zoo cage. Across 18 posts, I created six different virtual zoos, producing one zoo per day.'
    },
    {
      category: '3D VIDEO', title: '重慶森林 · Chungking Express', year: '2022',
      subtitle: 'Moving Poster — MBC 3D Video Content Course', image: 'images/carousel/chungking-express-01.jpg', video: 'vc42GhhEgDM',
      description: 'My first 3D work, created as a moving poster inspired by Chungking Express. Symbolic objects representing each character were placed inside an aquarium to express their emotions as submerged, contained, or drifting.'
    },
    {
      category: '3D VIDEO', title: 'Bukchang-dong', year: '2023',
      subtitle: 'BCD Media Wall Simulation', image: 'images/carousel/bcd-01.jpg', video: 'luFCh5VnSnQ',
      description: 'A detailed 3D street simulation created to visualize a media screen installation near City Hall. Each part of the street was carefully built to support a realistic installation preview.'
    },
    {
      category: '3D VIDEO', title: 'Heavy Rain', year: '2023',
      subtitle: 'Personal 3D Motion Study', image: 'https://img.youtube.com/vi/ojcg2eYvq3s/hqdefault.jpg', video: 'ojcg2eYvq3s',
      description: 'A 3D motion piece created for an anamorphic screen, exploring how weather systems could be implemented in a 3D environment through heavy rain, atmosphere, and natural motion.'
    },
    {
      category: 'YOUTUBE', title: '사심인가', year: '',
      subtitle: 'IU Video Project', image: 'https://img.youtube.com/vi/icSTh7wg2fQ/hqdefault.jpg', video: 'icSTh7wg2fQ',
      description: "An original Inkigayo video project edited from IU fancam footage. The video brought together lyrics from IU's 10-year career to express the heartfelt messages of her fans."
    },
    {
      category: 'YOUTUBE', title: '스브스밥집', year: '',
      subtitle: 'SBS Restaurant Content', image: 'https://img.youtube.com/vi/IRmrZPHmAqA/hqdefault.jpg', video: 'IRmrZPHmAqA',
      description: "YouTube content created by editing and repackaging highlight clips from Baek Jong-won's Alley Restaurant, focusing on moments likely to capture audience interest on the platform."
    }
  ];

  const grid = document.getElementById('selectedWorkGrid');
  const dialog = document.getElementById('projectGlassDialog');
  if (!grid || !dialog) return;

  const imageSeries = {
    'CLO Summit NY': ['clo-summit-ny', 12],
    'Marvelous Designer User Summit': ['marvelous-designer-summit', 10],
    'CLO Student Ambassador': ['clo-student-ambassador', 7],
    '日月五峰圖 · Irworobongdo': ['irworobongdo', 7],
    'Garden of Dolmens': ['garden-of-dolmens', 7],
    'Sohn Won-yil': ['sohn-won-yil', 9],
    'Virtual Zoo Project': ['virtual-zoo', 7],
    '重慶森林 · Chungking Express': ['chungking-express', 6],
    'Bukchang-dong': ['bcd', 3]
  };
  const projectMeta = {
    '日月五峰圖 · Irworobongdo': { period: '1 Month', contribution: '100%', contributionLabel: 'CONTRIBUTION', tools: ['Blender', 'Pr', 'Ae'] },
    'Garden of Dolmens': { period: '3 Months', contribution: '90%', contributionLabel: 'CONTRIBUTION', tools: ['Unreal', 'Pr', 'Ae'] },
    'Sohn Won-yil': { period: '2 Months', contribution: '80%', contributionLabel: '3D PART', tools: ['Blender', 'Pr', 'Ae'] },
    'Virtual Zoo Project': { period: '6 Days', contribution: 'Personal', contributionLabel: 'PROJECT', tools: ['Unreal', 'Pr', 'Ae'] },
    '重慶森林 · Chungking Express': { period: '3 Months', contribution: 'Personal', contributionLabel: 'PROJECT', tools: ['Cinema4D', 'Ae'] },
    'Bukchang-dong': { period: '2 Weeks', contribution: '100%', contributionLabel: 'CONTRIBUTION', tools: ['Blender', 'Unreal', 'Pr', 'Ae'] },
    'Heavy Rain': { period: '—', contribution: 'Personal', contributionLabel: 'PROJECT', tools: ['Blender', 'Pr'] }
  };
  const thumbnailOverrides = {
    'Garden of Dolmens': 'images/carousel/garden-of-dolmens-03.jpg',
    'Sohn Won-yil': 'images/carousel/sohn-won-yil-04.jpg',
    'Bukchang-dong': 'images/carousel/bcd-02.jpg'
  };

  projects.forEach(project => {
    const series = imageSeries[project.title];
    project.gallery = series
      ? Array.from({ length: series[1] }, (_, index) => `images/carousel/${series[0]}-${String(index + 1).padStart(2, '0')}.jpg`)
      : [];
    project.meta = projectMeta[project.title] || null;
    if (project.video) project.thumbnail = `https://img.youtube.com/vi/${project.video}/hqdefault.jpg`;
    else project.thumbnail = project.image;
    if (thumbnailOverrides[project.title]) project.thumbnail = thumbnailOverrides[project.title];
  });

  const cards = projects.map((project, index) => {
    const button = document.createElement('button');
    button.className = 'selected-work-card';
    button.type = 'button';
    button.setAttribute('aria-label', `View ${project.title}`);
    button.setAttribute('aria-expanded', 'false');
    button.innerHTML = `<span class="selected-work-number">${String(index + 1).padStart(2, '0')}</span><span class="selected-work-thumb"><img src="${project.thumbnail}" alt="" loading="lazy"></span>`;
    button.addEventListener('click', () => openProject(project, button));
    grid.appendChild(button);
    return button;
  });

  const panel = dialog.querySelector('.project-glass-panel');
  const reveal = document.createElement('div');
  const inlineDetail = document.createElement('section');
  inlineDetail.className = 'project-inline-detail';
  inlineDetail.setAttribute('aria-live', 'polite');
  reveal.className = 'project-inline-reveal';
  panel.classList.add('project-inline-panel');
  reveal.appendChild(panel);
  inlineDetail.appendChild(reveal);
  dialog.remove();

  const media = panel.querySelector('#projectDialogMedia');
  const gallery = panel.querySelector('#projectDialogGallery');
  const category = panel.querySelector('#projectDialogCategory');
  const title = panel.querySelector('#projectDialogTitle');
  const subtitle = panel.querySelector('#projectDialogSubtitle');
  const description = panel.querySelector('#projectDialogDescription');
  const meta = panel.querySelector('#projectDialogMeta');
  const close = panel.querySelector('[data-project-dialog-close]');
  let activeCard = null;
  let closeTimer = null;
  let galleryFrame = null;

  function columnCount() {
    return getComputedStyle(grid).gridTemplateColumns.split(' ').length;
  }

  function placeAfterRow(sourceCard) {
    const index = cards.indexOf(sourceCard);
    const columns = columnCount();
    const rowEndIndex = Math.min(cards.length - 1, Math.ceil((index + 1) / columns) * columns - 1);
    cards[rowEndIndex].after(inlineDetail);
    const gridRect = grid.getBoundingClientRect();
    const cardRect = sourceCard.getBoundingClientRect();
    panel.style.setProperty('--inline-origin-x', `${cardRect.left + cardRect.width / 2 - gridRect.left}px`);
    panel.style.setProperty('--inline-source-scale', `${cardRect.width / gridRect.width}`);
  }

  function openProject(project, sourceCard) {
    if (project.video || project.playlist) {
      const source = project.playlist
        ? `https://www.youtube.com/embed/videoseries?list=${project.playlist}&autoplay=1&mute=1&playsinline=1&rel=0`
        : `https://www.youtube.com/embed/${project.video}?autoplay=1&mute=1&playsinline=1&rel=0`;
      media.innerHTML = `<iframe src="${source}" title="${project.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      media.hidden = false;
    } else {
      media.replaceChildren();
      media.hidden = true;
    }
    const gallerySet = project.gallery.map((image, index) =>
      `<a href="${image}" target="_blank" rel="noreferrer"><img src="${image}" alt="${project.title} project image ${index + 1}" loading="lazy"></a>`
    ).join('');
    gallery.innerHTML = project.gallery.length
      ? `<div class="project-dialog-gallery-track"><div class="project-dialog-gallery-set">${gallerySet}</div><div class="project-dialog-gallery-set" aria-hidden="true">${gallerySet}</div></div>`
      : '';
    gallery.classList.toggle('is-contain-strip', project.title === '重慶森林 · Chungking Express');
    gallery.hidden = project.gallery.length === 0;
    if (project.gallery.length) initGalleryControls();
    category.textContent = `${project.category}${project.year ? ` · ${project.year}` : ''}`;
    title.textContent = project.title;
    subtitle.textContent = project.subtitle;
    description.textContent = project.description;
    meta.innerHTML = project.meta ? `
      <div class="project-dialog-stat"><strong>${project.meta.period}</strong><span>PERIOD</span></div>
      <div class="project-dialog-stat"><strong>${project.meta.contribution}</strong><span>${project.meta.contributionLabel}</span></div>
      <div class="project-dialog-tools"><span>TOOLS</span><div>${project.meta.tools.map(tool => `<b>${tool}</b>`).join('')}</div></div>
    ` : '';
    meta.hidden = !project.meta;
    clearTimeout(closeTimer);
    if (activeCard && activeCard !== sourceCard) activeCard.setAttribute('aria-expanded', 'false');
    activeCard = sourceCard;
    activeCard.setAttribute('aria-expanded', 'true');
    placeAfterRow(sourceCard);
    inlineDetail.classList.remove('is-closing');
    requestAnimationFrame(() => requestAnimationFrame(() => inlineDetail.classList.add('is-open')));
  }

  function initGalleryControls() {
    if (galleryFrame) cancelAnimationFrame(galleryFrame);
    gallery.scrollLeft = 0;
    const set = gallery.querySelector('.project-dialog-gallery-set');
    let dragging = false;
    let moved = false;
    let startX = 0;
    let startScroll = 0;
    const step = () => {
      if (!gallery.isConnected || gallery.hidden) return;
      if (!dragging) gallery.scrollLeft += 0.42;
      if (set && gallery.scrollLeft >= set.scrollWidth) gallery.scrollLeft -= set.scrollWidth;
      galleryFrame = requestAnimationFrame(step);
    };
    gallery.addEventListener('pointerdown', event => {
      dragging = true;
      moved = false;
      startX = event.clientX;
      startScroll = gallery.scrollLeft;
      gallery.classList.add('is-dragging');
      gallery.setPointerCapture(event.pointerId);
    });
    gallery.addEventListener('pointermove', event => {
      if (!dragging) return;
      const distance = event.clientX - startX;
      if (Math.abs(distance) > 5) moved = true;
      gallery.scrollLeft = startScroll - distance;
      if (set && gallery.scrollLeft <= 0) {
        gallery.scrollLeft += set.scrollWidth;
        startScroll += set.scrollWidth;
      }
    });
    const stopDrag = event => {
      if (!dragging) return;
      dragging = false;
      gallery.classList.remove('is-dragging');
      if (gallery.hasPointerCapture(event.pointerId)) gallery.releasePointerCapture(event.pointerId);
    };
    gallery.addEventListener('pointerup', stopDrag);
    gallery.addEventListener('pointercancel', stopDrag);
    gallery.addEventListener('click', event => {
      if (moved) {
        event.preventDefault();
        event.stopPropagation();
        moved = false;
      }
    }, true);
    galleryFrame = requestAnimationFrame(step);
  }

  function closeProject() {
    if (!inlineDetail.isConnected || inlineDetail.classList.contains('is-closing')) return;
    inlineDetail.classList.add('is-closing');
    inlineDetail.classList.remove('is-open');
    activeCard?.setAttribute('aria-expanded', 'false');
    closeTimer = window.setTimeout(() => {
      if (galleryFrame) cancelAnimationFrame(galleryFrame);
      galleryFrame = null;
      media.replaceChildren();
      inlineDetail.remove();
      inlineDetail.classList.remove('is-closing');
      activeCard = null;
    }, 760);
  }

  close.addEventListener('click', closeProject);
})();
