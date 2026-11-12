# La Youngwoong — Portfolio

A static, framework-free portfolio site (plain HTML/CSS/JS, no build step). The landing page opens a unified scrolling portfolio containing Project, Career, and About sections.

## Run locally

```bash
npm install -g serve   # one-time, or use npx
npm run dev
```

Then open **http://localhost:3000/index.html**.

> Don't double-click the HTML files to open them directly (`file://...`) —
> some features (the WebGL background on the home page) require the site to
> be served over `http://` or `https://`.

## Structure

```
index.html                                                     landing page
project.html                                                   unified portfolio page
about.html, career.html                                        section content sources / legacy redirects
css/styles.css                                                  all styles
js/app.js, js/prism.js, js/noise.js                              scripts
images/                                                          photos
```

## Deploying

This is a static site with zero build step — drag-and-drop the whole folder
into Netlify/Vercel, or push to GitHub and enable GitHub Pages. No build
command or output directory needed.

## For AI coding agents

See [`AGENTS.md`](./AGENTS.md) for a detailed map of the codebase, known
quirks, and things to avoid re-breaking.

## English / 한국어

The top language control is available on the landing page and portfolio page.
English is the default. The choice is saved locally and can be shared explicitly
with `index.html?lang=ko` or `project.html?lang=en#about`.

- `js/translations-ko.js` contains reviewed Korean copy, keyed by the English
  source text (case and repeated whitespace are ignored).
- `js/i18n.js` translates muted descriptive copy, explanatory project subheadings and the About greeting
  (안녕하세요, 라영웅입니다.). The `copySelector` list explicitly defines this scope,
  including fetched sections and newly opened project details. Project titles, section labels, menus,
  labels, image captions, accessible names and metadata remain in English.
  Elements, videos and user-entered form values are preserved.
- `css/i18n.css` uses Lexend for English and Pretendard for translated Korean
  copy, with the original italic Playfair display face retained for the hero.
  The borderless language control uses red text for the selected language.
  Pretendard Variable v1.3.9 is self-hosted in `fonts/`; its SIL Open Font License
  is included alongside it.
- The hero heading remains English in both versions; switching languages does
  not restart its typing animation.

When editing English descriptions, update the matching translation key as well.
The language control is marked `data-no-translate` so language names remain
recognizable in either version. User-entered form values are never translated.

## Tokyo summit case study

`js/project-tokyo.js` contains the Tokyo 2026 case study. Set `recapYouTubeId`
to the published 11-character YouTube video ID to replace the final coming-soon
panel with the recap player. The optimized opening video and all Tokyo image
assets live in `images/tokyo/`; layout rules live in `css/tokyo.css`.

The selected project list is defined in `js/project-gallery.js`. Tokyo is first
with a NEW badge; the list stays at 12 projects. The IU/사심인가 video is linked
in the SBS entry in `career.html`. Participant testimonials are translated by
`js/i18n.js` and `js/translations-ko.js` when Korean is selected.
