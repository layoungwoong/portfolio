(function () {
  const ratios = {
    'images/case-studies/ambassador-photo.jpg': 3.308824,
    'images/thumbnails/clo-student-ambassador-new.png': 1.777778,
    'images/carousel/clo-student-ambassador-07.jpg': 1.778656,
    'images/carousel/clo-student-ambassador-04.jpg': 1.5,
    'images/carousel/clo-student-ambassador-05.jpg': 1.5,
    'images/carousel/clo-student-ambassador-03.jpg': 1.502504,
    'images/carousel/clo-summit-ny-08.jpg': 1.778656,
    'images/carousel/clo-summit-ny-09.jpg': 1.778656,
    'images/case-studies/ny-venue.jpg': 1.498751,
    'images/carousel/clo-summit-ny-11.jpg': 1.778656,
    'images/case-studies/ny-audience.jpg': 1.498751,
    'images/carousel/marvelous-designer-summit-03.jpg': 1.5,
    'images/carousel/marvelous-designer-summit-02.jpg': 1.5
  };
  const pic = (src, caption) => `<figure style="--image-ratio:${ratios[src] || 1.5}"><img src="${src}" alt="${caption}" loading="lazy"><figcaption>${caption}</figcaption></figure>`;
  const stats = items => `<dl class="cs-stats">${items.map(([value,label])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('')}</dl>`;
  const flow = items => `<ol class="cs-flow">${items.map(([title,body],i)=>`<li><small>0${i+1}</small><div><h4>${title}</h4><p>${body}</p></div></li>`).join('')}</ol>`;
  const heading = (number,title) => `<header class="cs-heading"><span>${number}</span><h3>${title}</h3></header>`;
  const film = (id,label) => `<div class="cs-film"><iframe loading="lazy" src="https://www.youtube.com/embed/${id}?rel=0" title="${label}" allow="encrypted-media; picture-in-picture" allowfullscreen></iframe><a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener noreferrer">${label} ↗</a></div>`;
  const studentWork = (items) => `<div class="cs-student-grid">${items.map(([file,title,description]) => `<figure><a href="images/case-studies/ambassador/${file}.jpg" target="_blank" rel="noopener noreferrer"><img src="images/case-studies/ambassador/${file}.jpg" alt="Student team work: ${title}" loading="lazy"${file === 'p21-4' ? ' style="object-position:right center"' : ''}></a><figcaption><strong>${title}</strong><span>${description}</span></figcaption></figure>`).join('')}</div>`;
  const reportPhoto = (file,caption) => `<figure><a href="images/case-studies/ambassador/${file}.jpg" target="_blank" rel="noopener noreferrer"><img src="images/case-studies/ambassador/${file}.jpg" alt="${caption}" loading="lazy"></a><figcaption>${caption}</figcaption></figure>`;
  const bars = (rows, max) => `<div class="cs-bars">${rows.map(([label,value])=>`<div><span>${label}</span><div class="cs-bar-track"><i style="width:${value/max*100}%"></i></div><b>${value}</b></div>`).join('')}</div>`;
  window.portfolioCaseStudies = {
    'CLO Student Ambassador': `
      ${stats([['100%','VISUAL DESIGN'],['Sole visual designer / 3 organizers','TEAM'],['Mar 14 – Jul 3, 2026','PROGRAM PERIOD']])}
      <section>${heading('01 / CONCEPT','A student’s imagination, beyond the physical world.')}
      ${flow([['Product','CLO’s 3D garment simulation.'],['Idea','A student creating garments while seated on a cloud.'],['System','One concept, expressed in two visual styles.']])}</section>
      <section>${heading('02 / TWO EXPRESSIONS','One idea. Two visual languages.')}
      <div class="cs-pair">${pic('images/case-studies/ambassador-photo.jpg','A / AI PHOTOGRAPHY · ATMOSPHERE & IMMERSION')}${pic('images/thumbnails/clo-student-ambassador-new.png','B / KITSCH GRAPHICS · YOUTHFUL ENERGY')}</div>
      <p class="cs-note">A shared concept connects both styles. AI-generated photography sets the mood; simplified, kitschy graphics bring a youthful tone to student-facing touchpoints.</p></section>
      <section>${heading('03 / APPLICATION','From key visual to merchandise.')}
      <div class="cs-pair">${pic('images/carousel/clo-student-ambassador-07.jpg','VISUAL & MERCHANDISE SYSTEM')}${pic('images/carousel/clo-student-ambassador-04.jpg','PROGRAM MERCHANDISE')}</div>
      ${flow([['Key visual','Developed the concept and both visual versions.'],['Merchandise','Designed and produced the program merchandise.'],['Guidelines','Presented design guidelines to participants.']])}</section>
      <section>${heading('04 / PROGRAM','Bringing the identity into the student experience.')}
      <div class="cs-timeline"><div><b>Mar 14</b><span>Opening</span></div><div><b>May 09</b><span>Workshop</span></div><div><b>Jul 03</b><span>Closing</span></div></div>
      <p class="cs-caption">2026 · Recruitment: Feb 2–27 · Selection: Mar 2–5 · Program: Mar 14–Jul 3</p>
      <div class="cs-pair">${pic('images/carousel/clo-student-ambassador-05.jpg','DESIGN GUIDELINES IN PRACTICE')}${pic('images/carousel/clo-student-ambassador-03.jpg','CLO STUDENT AMBASSADOR COMMUNITY')}</div></section>
      <section>${heading('05 / STUDENT WORK','A platform for different creative voices.')}
      <p class="cs-note">Five teams developed two rounds of digital fashion collections. The work below was created by student ambassadors; my role was the program’s visual identity and design guidance.</p>
      <div class="cs-round"><span>ROUND 01</span><p>Original stories, from identity and belonging to nature and imagined futures.</p></div>
      ${studentWork([
        ['p21-1','On Being Late Club','Youth beyond fixed schedules and expectations.'],
        ['p21-2','Family Photobook','Belonging within an imagined family.'],
        ['p21-3','Breathe of Nature','Humanity and nature in coexistence.'],
        ['p21-5','Avatar in Martian','Body and identity in an unfamiliar world.'],
        ['p21-4','Neo Haenyeo','Jeju’s haenyeo spirit through futuristic fashion.']
      ])}
      <div class="cs-round"><span>ROUND 02</span><p>Met Gala-inspired collections, reinterpreting art, heritage, and the human form.</p></div>
      ${studentWork([
        ['p24-1','Chamber of Joseon','Joseon interiors and everyday objects.'],
        ['p24-2','The Mutant Muse','Reconfigured bodies and sculptural garments.'],
        ['p24-3','After the Flash','Digital recreations of 2026 Met Gala looks.'],
        ['p24-5','Beyond the Canvas','Painting translated into digital fashion.'],
        ['p24-4','Korean Heritage','Traditional crafts as digital haute couture.']
      ])}
      <p class="cs-caption">Student team collections · Cohort 1 report, pp. 21–26 · Select an image to view the full work.</p></section>
      <section>${heading('06 / AMBASSADOR VOICES','What participants took away.')}
      <div class="cs-feedback-layout"><div class="cs-quote-list">
        <blockquote><p>“Loved the welcome merch at the opening ceremony!”</p><cite>Participant feedback · Report p. 36</cite></blockquote>
        <blockquote><p>“Team missions significantly improved my CLO skills, and creating a lookbook with my team was a great experience.”</p><cite>Participant feedback · Report p. 32</cite></blockquote>
        <blockquote><p>“Communicating with students from different majors really broadened my perspective.”</p><cite>Participant feedback · Report p. 36</cite></blockquote>
      </div><div class="cs-photo-stack">${reportPhoto('p38-2','PEER CONVERSATIONS')}${reportPhoto('p38-10','SHARING WORK AND IDEAS')}</div></div>
      <div class="cs-survey"><div><span>Very satisfied</span><b>80%</b></div><div><span>Highly helpful for growth</span><b>86.7%</b></div><div><span>Highly likely to recommend</span><b>93.3%</b></div></div>
      <p class="cs-caption">Program survey results, as reported in the Cohort 1 report, p. 30.</p></section>
      <section>${heading('07 / ACCESSIBILITY','Participation through more than one channel.')}
      <div class="cs-access-layout"><div>
      ${flow([['Written communication','The program team used Discord messaging as the central channel for accessible communication.'],['Live interpretation','Professional sign language interpreters supported every in-person session.']])}
      <p class="cs-note">Visual identity was one part of a broader participant experience. The team paired written channels with real-time interpretation to support inclusive communication.</p>
      </div><div class="cs-photo-stack">${reportPhoto('p37-1','A HANDWRITTEN LETTER FROM AN AMBASSADOR')}${reportPhoto('p38-3','A SHARED LEARNING ENVIRONMENT')}</div></div>
      <p class="cs-caption">Team-level accessibility practices · Report p. 37; event photography from p. 38.</p></section>
      <section>${heading('08 / OUTPUT & INSIGHTS','What the program produced—and what it taught us.')}
      <p class="cs-note">Program-wide outcomes from student-created content. These figures describe the collective program, rather than the impact of the visual identity alone.</p>
      <div class="cs-results-grid"><div class="cs-result-block"><h4>Published content</h4><p class="cs-result-summary">128 pieces <span>against a target of 60–120</span></p>
      ${bars([['Instagram',80],['Blog',32],['YouTube',16]],80)}
      <p class="cs-caption">Includes in-person meetup recaps · Report p. 40.</p></div>
      <div class="cs-result-block"><h4>Reach & completion</h4><dl class="cs-result-list"><div><dt>All projects completed</dt><dd>100%</dd></div><div><dt>Views measured 7 days after posting</dt><dd>112,583</dd></div><div><dt>Cumulative video views, Aug 2026</dt><dd>284,000</dd></div></dl><p class="cs-caption">7-day results cover March–May assignments; June excluded. August totals cover Reels, Shorts, and videos; blogs excluded. The two totals use different scopes.</p></div></div>
      ${flow([['Show the process','The report found that process, trial-and-error, and problem-solving content outperformed final showcases.'],['Look beyond followers','A CLO-focused account with 270 followers generated 106K views. Craft and content strategy mattered.'],['Match the format','Instagram offered volatile reach; blogs provided steadier search-driven discovery. Evaluate each format accordingly.']])}
      <p class="cs-caption">Program review findings and recommendations · Report pp. 41–43.</p></section>
      <section>${heading('09 / FIELD NOTES','A program experienced together.')}
      <div class="cs-event-mosaic">${reportPhoto('p38-4','HANDS-ON CREATION')}${reportPhoto('p38-6','WORKSHOP CONVERSATIONS')}${reportPhoto('p38-9','PROGRAM MATERIALS')}</div>
      <div class="cs-collection-summary">${reportPhoto('p26-0','COLLECTION OVERVIEW · STUDENT-CREATED WORK')}<div><span>COHORT 01 / 2026</span><h4>One identity.<br>Many individual voices.</h4><p>A shared visual framework connected the program’s materials while leaving room for the ambassadors’ own creative expression.</p></div></div></section>`,
    'CLO Summit NY': `
      ${stats([['Approx. 4 months / 2025','INVOLVEMENT'],['80%','KEY VISUAL'],['100%','HERO FILM']])}
      <section>${heading('01 / FROM GARMENT TO IDENTITY','A garment becomes the event’s visual identity.')}
      ${flow([['Garment','Created the main 3D garment.'],['Render & layout','Rendered the garment and composed the layout.'],['Key visual','Built the visual used throughout the event.']])}
      <div class="cs-pair">${pic('images/carousel/clo-summit-ny-08.jpg','MAIN GARMENT')}${pic('images/carousel/clo-summit-ny-09.jpg','GARMENT DETAIL')}</div></section>
      <section>${heading('02 / MOTION & SPACE','From screen to venue.')}
      <p class="cs-note">I produced the hero film independently. It played at the opening and between event segments, while the key visual extended across the venue.</p>
      <div class="cs-venue-grid">${pic('images/case-studies/ny-venue.jpg','KEY VISUAL ACROSS THE VENUE')}${pic('images/carousel/clo-summit-ny-11.jpg','ON-SITE SCREEN APPLICATION')}${pic('images/case-studies/ny-audience.jpg','CLO SUMMIT NEW YORK 2025')}</div></section>
      <section>${heading('03 / COLLABORATION','Connecting production and the venue remotely.')}
      <div class="cs-network"><img class="cs-network-map" src="images/case-studies/seoul-new-york.svg?v=nats" alt="Pacific-centered world map connecting Seoul and New York with an animated, two-way communication line."><div class="cs-network-details"><div><span>SEOUL / PRODUCTION</span><p>Garment · Key visual · Hero film</p></div><div><span>VIA THE COORDINATOR</span><p>Regular communication · On-site checks</p></div><div><span>NEW YORK / VENUE</span><p>Venue graphics · Film screening</p></div></div></div><p class="cs-caption">Working without an on-site visit, I stayed in close contact with the coordinator to review applications across locations and time zones.</p></section>
      <section>${heading('04 / EVENT RECORD','The identity in context.')}
      ${film('fW9Fs1Osfx8','EVENT RECAP')}
      <p class="cs-caption">Top: independently produced hero film · Above: event documentation</p></section>`,
    'Marvelous Designer User Summit': `
      ${stats([['Approx. 2 months','INVOLVEMENT'],['Approx. 80%','KEY VISUAL & MERCHANDISE'],['Seoul / 2024','LOCATION & YEAR']])}
      <section>${heading('01 / JOIN & DEFINE','Joining mid-project. Defining the visual direction.')}
      ${flow([['Join','Joined immediately after starting at CLO, with a key visual still needed.'],['Propose','My proposed idea helped finalize the creative direction.'],['Produce','Contributed approximately 80% of the key visual and merchandise design.']])}</section>
      <section>${heading('02 / VISUAL DIRECTION','Summer energy in signature orange.')}
      <p class="cs-note">Summer’s energy and Marvelous Designer’s signature orange shaped a shared direction for the event visuals and merchandise.</p>
      <div class="cs-pair">${pic('images/carousel/marvelous-designer-summit-03.jpg','EVENT MERCHANDISE IN CONTEXT')}${pic('images/carousel/marvelous-designer-summit-02.jpg','ON-SITE BRAND EXPERIENCE')}</div></section>
      <section>${heading('03 / EVENT RECORD','From the proposed idea to the live event.')}
      ${film('9rCrYUGnCJA','EVENT RECAP')}
      <p class="cs-caption">Contribution applies to key visual and merchandise design. Recap shown as event documentation.</p></section>`
  };
})();
