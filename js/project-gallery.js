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
      category: '3D BRAND DESIGN', title: '3D Emblem Production', year: '2024',
      subtitle: 'Product Identity · Material & Motion Study',
      image: 'images/thumbnails/project-09-3d-emblem.webp',
      description: 'A motion-led 3D emblem study for five company products. Each flat mark was translated into a dimensional object and explored through clay, acrylic, and metallic material systems, creating a consistent family while preserving the identity and silhouette of every product.',
      emblems: [
        {
          name: 'CLO',
          materials: [
            ['CLAY', 'images/emblem/materials/clo-clay.mp4'],
            ['ACRYLIC', 'images/emblem/materials/clo-acrylic.mp4'],
            ['METALLIC', 'images/emblem/materials/clo-metallic.mp4']
          ]
        },
        {
          name: 'CONNECT',
          materials: [
            ['CLAY', 'images/emblem/materials/connect-clay.mp4'],
            ['ACRYLIC', 'images/emblem/materials/connect-acrylic.mp4'],
            ['METALLIC', 'images/emblem/materials/connect-metallic.mp4']
          ]
        },
        {
          name: 'CLO-SET',
          materials: [
            ['CLAY', 'images/emblem/materials/clo-set-clay.mp4'],
            ['ACRYLIC', 'images/emblem/materials/clo-set-acrylic.mp4'],
            ['METALLIC', 'images/emblem/materials/clo-set-metallic.mp4']
          ]
        },
        {
          name: 'MARVELOUS DESIGNER',
          materials: [
            ['CLAY', 'images/emblem/materials/md-clay.mp4'],
            ['ACRYLIC', 'images/emblem/materials/md-acrylic.mp4'],
            ['METALLIC', 'images/emblem/materials/md-metallic.mp4']
          ]
        },
        {
          name: 'JINNY',
          materials: [
            ['CLAY ORIGINAL', 'images/emblem/materials/jinny-clay-original.mp4'],
            ['ACRYLIC', 'images/emblem/materials/jinny-acrylic.mp4'],
            ['METALLIC', 'images/emblem/materials/jinny-metallic.mp4'],
            ['CLAY CREAM', 'images/emblem/materials/jinny-clay-cream.mp4']
          ]
        }
      ],
      connectStudies: [
        'images/emblem/video/connect-study-02.m4v',
        'images/emblem/video/connect-study-03.m4v',
        'images/emblem/video/connect-study-04.m4v',
        'images/emblem/video/connect-study-06.m4v'
      ],
      meta: {
        period: 'About 3 Months',
        contribution: '100%',
        contributionLabel: 'CONTRIBUTION',
        tools: ['Blender', 'After Effects']
      }
    },
    {
      category: 'MEDIA ART', title: 'SEOULCon K-Beauty Boost', year: '2025',
      subtitle: 'Media Wall · DDP Art Hall 2', image: 'images/nuri/seoulcon-kbeauty-boost-thumbnail.jpg', video: '7kODjJ_ODhE',
      loopVideo: 'images/nuri/seoulcon-kbeauty-boost-loop.mp4',
      description: 'Created a panoramic 3D media-wall film for K-Beauty Boost, an official 2025 SEOULCon program held at Dongdaemun Design Plaza. Built around Nurilounge’s creator community, the event connected global beauty creators with leading Korean beauty brands through an invitation-only exhibition and experiential showcase. The two-week production translated the community’s playful identity into a vivid urban world designed specifically for the venue’s ultra-wide screen.',
      meta: {
        period: 'About 2 Weeks',
        contribution: '100%',
        contributionLabel: 'CONTRIBUTION',
        tools: ['Blender', 'Premiere Pro', 'After Effects']
      }
    },
    {
      category: 'YOUTUBE', title: '사심인가', year: '',
      subtitle: 'IU Video Project', image: 'https://img.youtube.com/vi/icSTh7wg2fQ/hqdefault.jpg', video: 'icSTh7wg2fQ',
      description: "An original Inkigayo video project edited from IU fancam footage. The video brought together lyrics from IU's 10-year career to express the heartfelt messages of her fans."
    },
    {
      category: 'SNS MARKETING', title: 'CONNECT Instagram', year: '2026',
      subtitle: 'Editorial Curation & Social Media Content', image: 'images/connect/connect-instagram-thumbnail-2.jpg',
      description: 'Produced Instagram editorial content for CONNECT, a digital fashion asset marketplace, curating assets available on the platform and spotlighting artwork created with digital garment-making software.',
      instagram: 'https://www.instagram.com/letsconnect3d/',
      meta: {
        period: '2026.02 — Ongoing',
        contribution: 'Design 100%',
        contributionLabel: 'CONTRIBUTION',
        tools: ['Figma', 'Higgsfield', 'Seedance', 'GPT 2.0', 'Photoshop', 'Premiere Pro']
      },
      features: [
        {
          title: 'What is CONNECT?',
          label: 'PLATFORM INTRODUCTION',
          description: 'An introductory carousel positioning CONNECT as a place where creative work and meaningful connections pay off. It presents the platform through four core experiences: selling 3D fashion assets, joining design contests, trading game-ready wearables, and participating in a creator community built around spotlights, practical tips, and job opportunities.',
          slides: [
            ['video', 'images/connect/what-connect-00.m4v'],
            ['image', 'images/connect/what-connect-01.jpg'],
            ['video', 'images/connect/what-connect-02.m4v'],
            ['video', 'images/connect/what-connect-03.m4v'],
            ['video', 'images/connect/what-connect-04.m4v'],
            ['video', 'images/connect/what-connect-05.m4v']
          ]
        },
        {
          title: 'OHSOOHWAN User Spotlight',
          label: 'ARTIST STORY',
          description: 'A narrative profile of Seoul-based 3D generalist Oh Soohwan and the way he translates imagination into garment logic with Marvelous Designer. The content follows his reinterpretations of Korean hahoe masks, streetwear, biker culture, and AKIRA while pairing the visual story with practical insights into complex pattern work, texture mapping, and structured leather.',
          slides: [
            ['video', 'images/connect/ohsoohwan-00.m4v'],
            ['video', 'images/connect/ohsoohwan-01.m4v'],
            ['image', 'images/connect/ohsoohwan-03.jpg'],
            ['image', 'images/connect/ohsoohwan-04.jpg'],
            ['image', 'images/connect/ohsoohwan-05.jpg'],
            ['image', 'images/connect/ohsoohwan-06.jpg'],
            ['image', 'images/connect/ohsoohwan-07.jpg'],
            ['image', 'images/connect/ohsoohwan-08.jpg']
          ]
        },
        {
          title: 'Cannes',
          label: 'EDITORIAL CURATION',
          description: "A Cannes-inspired editorial that asks, ‘What if fashion had no boundaries?’ Five sculptural looks from CONNECT creators are staged for the red carpet, bringing together metallic drape, luminous volume, intricate knit structures, floral couture, and surreal silhouettes in a celebration of borderless digital craftsmanship.",
          slides: [
            ['image', 'images/connect/cannes-00.jpg'],
            ['image', 'images/connect/cannes-01.jpg'],
            ['image', 'images/connect/cannes-02.jpg'],
            ['image', 'images/connect/cannes-03.jpg'],
            ['image', 'images/connect/cannes-04.jpg'],
            ['image', 'images/connect/cannes-05.jpg']
          ]
        },
        {
          title: 'Create Your Persona',
          label: 'EDUCATION COLLABORATION',
          description: 'A campaign developed with Professor Sangyeop Jeong of Konkuk University and Marvelous Designer. Through a semester-long character-making class and contest, students used officially supported software licenses to build original personas, garments, and props. The carousel presents five winning works as game-style character selection screens, celebrating both technical craft and individual storytelling.',
          slides: [
            ['image', 'images/connect/persona-00.jpg'],
            ['video', 'images/connect/persona-01.m4v'],
            ['video', 'images/connect/persona-02.m4v'],
            ['video', 'images/connect/persona-03.m4v'],
            ['video', 'images/connect/persona-04.m4v'],
            ['video', 'images/connect/persona-05.m4v'],
            ['image', 'images/connect/persona-06.jpg']
          ]
        },
        {
          title: 'HAZZYS Realization',
          label: 'BRAND COLLABORATION · REELS',
          description: 'A collaboration with HAZZYS that brought a digital garment from the virtual world into a physical collection. I created the campaign reel to connect both forms of the design, and the finished film was also screened in HAZZYS stores as part of the customer-facing brand experience.',
          reel: 'images/connect/hazzys-realization.m4v'
        }
      ]
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
    '重慶森林 · Chungking Express': ['chungking-express', 6]
  };
  const projectMeta = {
    '日月五峰圖 · Irworobongdo': { period: '1 Month', contribution: '100%', contributionLabel: 'CONTRIBUTION', tools: ['Blender', 'Pr', 'Ae'] },
    'Garden of Dolmens': { period: '3 Months', contribution: '90%', contributionLabel: 'CONTRIBUTION', tools: ['Unreal', 'Pr', 'Ae'] },
    'Sohn Won-yil': { period: '2 Months', contribution: '80%', contributionLabel: '3D PART', tools: ['Blender', 'Pr', 'Ae'] },
    'Virtual Zoo Project': { period: '6 Days', contribution: 'Personal', contributionLabel: 'PROJECT', tools: ['Unreal', 'Pr', 'Ae'] },
    '重慶森林 · Chungking Express': { period: '3 Months', contribution: 'Personal', contributionLabel: 'PROJECT', tools: ['Cinema4D', 'Ae'] }
  };
  const thumbnailOverrides = {
    '日月五峰圖 · Irworobongdo': 'images/thumbnails/project-04-irworobongdo.jpg',
    'Garden of Dolmens': 'images/carousel/garden-of-dolmens-03.jpg',
    'Sohn Won-yil': 'images/carousel/sohn-won-yil-04.jpg',
    '重慶森林 · Chungking Express': 'images/thumbnails/project-08-chungking-express.jpg',
    'SEOULCon K-Beauty Boost': 'images/nuri/seoulcon-kbeauty-boost-thumbnail.jpg'
  };

  projects.forEach(project => {
    const series = imageSeries[project.title];
    project.gallery = series
      ? Array.from({ length: series[1] }, (_, index) => `images/carousel/${series[0]}-${String(index + 1).padStart(2, '0')}.jpg`)
      : [];
    project.meta = project.meta || projectMeta[project.title] || null;
    if (project.video) project.thumbnail = `https://img.youtube.com/vi/${project.video}/hqdefault.jpg`;
    else project.thumbnail = project.image;
    if (thumbnailOverrides[project.title]) project.thumbnail = thumbnailOverrides[project.title];
  });

  const cards = projects.map((project, index) => {
    const button = document.createElement('button');
    button.className = 'selected-work-card reveal';
    button.style.setProperty('--reveal-delay', `${(index % 3) * 80}ms`);
    button.type = 'button';
    button.setAttribute('aria-label', `View ${project.title}`);
    button.setAttribute('aria-expanded', 'false');
    const thumbnail = project.thumbnail
      ? `<img src="${project.thumbnail}" alt="" loading="lazy">`
      : '';
    button.innerHTML = `<span class="selected-work-number">${String(index + 1).padStart(2, '0')}</span><span class="selected-work-thumb${project.thumbnail ? '' : ' is-empty'}">${thumbnail}</span>`;
    button.addEventListener('click', () => openProject(project, button));
    grid.appendChild(button);
    return button;
  });
  window.initScrollReveal?.(grid);

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
  const loopMedia = document.createElement('div');
  const gallery = panel.querySelector('#projectDialogGallery');
  const category = panel.querySelector('#projectDialogCategory');
  const title = panel.querySelector('#projectDialogTitle');
  const subtitle = panel.querySelector('#projectDialogSubtitle');
  const description = panel.querySelector('#projectDialogDescription');
  const meta = panel.querySelector('#projectDialogMeta');
  const close = panel.querySelector('[data-project-dialog-close]');
  const projectLink = document.createElement('a');
  const connectShowcase = document.createElement('div');
  const emblemShowcase = document.createElement('div');
  loopMedia.className = 'project-loop-video';
  loopMedia.hidden = true;
  projectLink.className = 'project-dialog-external';
  projectLink.target = '_blank';
  projectLink.rel = 'noopener noreferrer';
  projectLink.hidden = true;
  connectShowcase.className = 'connect-showcase';
  connectShowcase.hidden = true;
  emblemShowcase.className = 'emblem-showcase';
  emblemShowcase.hidden = true;
  media.after(loopMedia);
  description.after(projectLink);
  meta.before(connectShowcase);
  meta.before(emblemShowcase);
  let activeCard = null;
  let closeTimer = null;
  let galleryFrame = null;
  let emblemVideoObserver = null;

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
    destroyConnectCarousels();
    panel.classList.toggle('is-connect-project', Boolean(project.features));
    panel.classList.toggle('is-emblem-project', Boolean(project.emblems));
    if (project.video || project.playlist) {
      const source = project.playlist
        ? `https://www.youtube.com/embed/videoseries?list=${project.playlist}&autoplay=1&mute=1&playsinline=1&rel=0`
        : `https://www.youtube.com/embed/${project.video}?autoplay=1&mute=1&playsinline=1&rel=0`;
      media.innerHTML = `<iframe src="${source}" title="${project.title}" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`;
      media.hidden = false;
    } else if (project.heroImage) {
      media.innerHTML = `<img src="${project.heroImage}" alt="${project.title}">`;
      media.hidden = false;
    } else {
      media.replaceChildren();
      media.hidden = true;
    }
    loopMedia.innerHTML = project.loopVideo
      ? `<video autoplay muted loop playsinline preload="metadata" aria-label="${project.title} panoramic media wall loop"><source src="${project.loopVideo}" type="video/mp4"></video>`
      : '';
    loopMedia.hidden = !project.loopVideo;
    if (project.loopVideo) loopMedia.querySelector('video')?.play().catch(() => {});
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
    const bilingualTitle = project.title.match(/^([\u3400-\u9fff]+)\s·\s(.+)$/);
    title.innerHTML = bilingualTitle
      ? `<span class="project-title-bilingual"><span class="project-title-cjk">${bilingualTitle[1]}</span><span class="project-title-divider">·</span><span class="project-title-latin">${bilingualTitle[2]}</span></span>`
      : project.title;
    subtitle.textContent = project.subtitle;
    description.textContent = project.description;
    const externalUrl = project.instagram || project.external;
    projectLink.hidden = !externalUrl;
    projectLink.href = externalUrl || '#';
    projectLink.textContent = project.instagram ? 'VISIT INSTAGRAM ↗' : (project.externalLabel || 'VIEW PROJECT ↗');
    connectShowcase.hidden = !project.features;
    connectShowcase.innerHTML = project.features ? project.features.map((feature, featureIndex) => `
      <section class="connect-feature reveal${feature.reel ? ' connect-feature--reel' : ''}">
        ${feature.reel ? `
          <div class="connect-reel">
            <video autoplay muted loop playsinline controls preload="metadata" aria-label="${feature.title} reel"><source src="${feature.reel}" type="video/mp4"></video>
          </div>
        ` : `
          <div class="connect-carousel" data-connect-carousel>
            <div class="connect-carousel-track">
              ${feature.slides.map(([type, source], slideIndex) => `
                <div class="connect-carousel-slide" data-connect-slide>
                  ${type === 'video'
                    ? `<video muted loop playsinline preload="metadata" aria-label="${feature.title} slide ${slideIndex + 1}"><source src="${source}" type="video/mp4"></video>`
                    : `<img src="${source}" alt="${feature.title} slide ${slideIndex + 1}" loading="lazy">`}
                </div>
              `).join('')}
            </div>
            <button class="connect-carousel-arrow connect-carousel-prev" type="button" data-connect-prev aria-label="Previous ${feature.title} slide">‹</button>
            <button class="connect-carousel-arrow connect-carousel-next" type="button" data-connect-next aria-label="Next ${feature.title} slide">›</button>
            <div class="connect-carousel-dots" aria-label="${feature.title} slide position">
              ${feature.slides.map((slide, slideIndex) => `<button type="button" data-connect-dot="${slideIndex}" aria-label="Go to ${feature.title} slide ${slideIndex + 1}"></button>`).join('')}
            </div>
          </div>
        `}
        <div class="connect-feature-copy">
          <span>${String(featureIndex + 1).padStart(2, '0')} · ${feature.label}</span>
          <h3>${feature.title}</h3>
          <p>${feature.description}</p>
        </div>
      </section>
    `).join('') : '';
    emblemShowcase.hidden = !project.emblems;
    emblemShowcase.innerHTML = project.emblems ? `
      <section class="emblem-family reveal">
        <div class="emblem-section-heading">
          <span>01 · EMBLEM FAMILY</span>
          <h3>Five products.<br>Three material systems.</h3>
          <p>CLO, CONNECT, CLO-SET, Marvelous Designer, and JINNY were rebuilt as animated 3D forms. Clay, acrylic, and metallic studies reveal how each mark responds to a shared material language, with an additional cream clay direction developed for JINNY.</p>
        </div>
        <div class="emblem-product-list">
          ${project.emblems.map((emblem, emblemIndex) => `
            <section class="emblem-product">
              <header class="emblem-product-heading">
                <span>${String(emblemIndex + 1).padStart(2, '0')}</span>
                <h4>${emblem.name}</h4>
                <small>${emblem.materials.length} MATERIAL${emblem.materials.length > 1 ? 'S' : ''}</small>
              </header>
              <div class="emblem-material-grid${emblem.materials.length === 4 ? ' is-four' : ''}">
                ${emblem.materials.map(([material, source]) => `
                  <figure class="emblem-material-card">
                    <video muted loop playsinline preload="metadata" aria-label="${emblem.name} ${material} 3D emblem animation"><source src="${source}" type="video/mp4"></video>
                    <figcaption>${material}</figcaption>
                  </figure>
                `).join('')}
              </div>
            </section>
          `).join('')}
        </div>
      </section>
      <section class="emblem-process reveal">
        <div class="emblem-section-heading emblem-section-heading--process">
          <span>02 · CONNECT PROCESS</span>
          <h3>Finding volume<br>inside abstraction.</h3>
          <p>CONNECT required the most iteration. Because the original mark is abstract and its overlapping forms do not suggest one obvious volume, I tested multiple constructions, depths, edge treatments, and material combinations. The variations document the search for a form that feels structurally convincing while remaining instantly recognizable.</p>
        </div>
        <div class="emblem-process-grid">
          ${project.connectStudies.map((source, studyIndex) => `
            <figure class="emblem-process-card">
              <video muted loop playsinline preload="metadata" aria-label="CONNECT emblem iteration ${studyIndex + 1}"><source src="${source}" type="video/mp4"></video>
              <figcaption>ITERATION ${String(studyIndex + 1).padStart(2, '0')}${studyIndex === project.connectStudies.length - 1 ? ' · SELECTED' : ''}</figcaption>
            </figure>
          `).join('')}
        </div>
      </section>
    ` : '';
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
    window.initScrollReveal?.(connectShowcase);
    window.initScrollReveal?.(emblemShowcase);
    if (project.features) initConnectCarousels();
    if (project.emblems) initEmblemVideos();
    inlineDetail.classList.remove('is-closing');
    requestAnimationFrame(() => requestAnimationFrame(() => inlineDetail.classList.add('is-open')));
  }

  function destroyConnectCarousels() {
    loopMedia.querySelector('video')?.pause();
    connectShowcase.querySelectorAll('video').forEach(video => video.pause());
    emblemVideoObserver?.disconnect();
    emblemVideoObserver = null;
    emblemShowcase.querySelectorAll('video').forEach(video => video.pause());
  }

  function initEmblemVideos() {
    const videos = emblemShowcase.querySelectorAll('video');
    if (!('IntersectionObserver' in window)) {
      videos.forEach(video => video.play().catch(() => {}));
      return;
    }
    emblemVideoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        const video = entry.target;
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      });
    }, { rootMargin: '180px 0px', threshold: 0.05 });
    videos.forEach(video => emblemVideoObserver.observe(video));
  }

  function initConnectCarousels() {
    connectShowcase.querySelectorAll('.connect-reel video').forEach(video => video.play().catch(() => {}));
    connectShowcase.querySelectorAll('[data-connect-carousel]').forEach(carousel => {
      const track = carousel.querySelector('.connect-carousel-track');
      const slides = Array.from(carousel.querySelectorAll('[data-connect-slide]'));
      const dots = Array.from(carousel.querySelectorAll('[data-connect-dot]'));
      const prev = carousel.querySelector('[data-connect-prev]');
      const next = carousel.querySelector('[data-connect-next]');
      let current = 0;

      const sync = () => {
        dots.forEach((dot, index) => {
          dot.classList.toggle('is-active', index === current);
          if (index === current) dot.setAttribute('aria-current', 'true');
          else dot.removeAttribute('aria-current');
        });
        slides.forEach((slide, index) => {
          const video = slide.querySelector('video');
          if (!video) return;
          if (index === current) video.play().catch(() => {});
          else video.pause();
        });
      };

      const show = (nextIndex, smooth = true) => {
        current = (nextIndex + slides.length) % slides.length;
        track.scrollTo({ left: current * track.clientWidth, behavior: smooth ? 'smooth' : 'auto' });
        sync();
      };

      prev.addEventListener('click', () => show(current - 1));
      next.addEventListener('click', () => show(current + 1));
      dots.forEach(dot => dot.addEventListener('click', () => show(Number(dot.dataset.connectDot))));
      track.addEventListener('scroll', () => {
        const width = track.clientWidth;
        if (!width) return;
        const nextIndex = Math.round(track.scrollLeft / width);
        if (nextIndex !== current && nextIndex >= 0 && nextIndex < slides.length) {
          current = nextIndex;
          sync();
        }
      }, { passive: true });
      show(0, false);
      requestAnimationFrame(() => requestAnimationFrame(() => show(0, false)));
    });
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
      destroyConnectCarousels();
      media.replaceChildren();
      loopMedia.replaceChildren();
      loopMedia.hidden = true;
      inlineDetail.remove();
      inlineDetail.classList.remove('is-closing');
      activeCard = null;
    }, 760);
  }

  close.addEventListener('click', closeProject);
})();
