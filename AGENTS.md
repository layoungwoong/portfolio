# AGENTS.md — Context for coding agents working on this repo

This is a **static, dependency-free, multi-page portfolio site** for La Youngwoong
(3D Generalist / Contents Creator). No build step, no framework, no bundler.
Plain HTML + CSS + vanilla JS. Read this file before making changes — it captures
hard-won context from the site's build history so you don't re-break things that
were already fixed once.

## Run it locally

**You must serve this over http(s), never open the HTML files directly via `file://`.**
Several features (ES module dynamic `import()` in `js/prism.js`, some fetch/CORS
behavior) are blocked or unreliable under `file://` in most browsers.

```bash
npm run dev
# or, without npm:
python3 -m http.server 3000
```

Then visit `http://localhost:3000/index.html`.

## File structure

```
index.html      Hero / landing page (entry point)
menu.html       Hub page reached after clicking "Enter" — 3 nav cards
about.html      About / Skills / Journey / After Work / Education
project.html    Featured work, split into 5 sections (see below)
career.html     Work experience timeline

css/styles.css  All styles for every page (single shared stylesheet)
js/app.js       Shared: custom cursor, mouse-follow gradient tracking,
                scroll-reveal (.reveal → .in), footer, nav — loaded on every page
js/prism.js     WebGL "Prism" background effect for index.html only (see below)
js/noise.js     Canvas-based film-grain "Noise" effect for menu.html only

images/         All photos (JPEGs, pre-optimized/resized already — don't
                re-upload huge originals, keep images web-sized ~100-300KB)
```

Every page includes `css/styles.css` and `js/app.js`. `index.html` additionally
loads `js/prism.js`; `menu.html` additionally loads `js/noise.js`.

## Navigation model (important — don't "fix" this)

This is intentionally **not** a single-page app. Each `.html` file is a real,
separate page reached via normal `<a href>` navigation (the user explicitly
asked for this after an earlier SPA version felt wrong).

Flow: `index.html` (hero) → click Enter → `menu.html` (hub) → About / Project / Career.

Session-gating via `sessionStorage.getItem('hasEntered')`:
- `index.html` redirects to `menu.html` if the flag is already set (so the hero
  never shows twice in one browser session).
- `menu.html`, `about.html`, `project.html`, `career.html` each have an inline
  guard script in `<head>` that redirects back to `index.html` if the flag is
  **not** set (so you can't deep-link past the hero).
- The footer's "LA YOUNGWOONG" wordmark clears the flag before navigating to
  `index.html`, so clicking it actually shows the hero again (otherwise the
  guard above would just bounce you straight back to menu.html).

## ⚠️ CSS gotcha that cost a lot of debugging time — do not reintroduce

**Never combine two classes on the same element where both set the `padding`
shorthand.** CSS shorthand properties fully overwrite each other based on
source order, not merge per-side. This exact bug existed for a long time:

```css
.wrap{ padding:0 40px; }              /* declared early in the file */
.page-hero{ padding:72px 0 48px; }    /* declared later → WINS COMPLETELY, */
                                       /* zeroing out the horizontal padding! */
```
```html
<div class="wrap page-hero">...</div>  <!-- got 0 horizontal padding, silently -->
```

The fix in place now: `.page-hero` uses `padding-top` / `padding-bottom` only
(longhand), so it never touches the horizontal padding `.wrap` sets. **If you
add a new class meant to be combined with `.wrap` on the same element, use
longhand `padding-*` properties, not the shorthand**, unless you truly intend
to override every side.

## Design system

- Colors are CSS custom properties in `:root` (top of `css/styles.css`):
  `--bg` (#0d0d0d), `--text` (#fff), `--accent` (#fff — the "accent" is
  currently white/grayscale, not a color; the whole site is intentionally
  monochrome except real photographs, which keep their natural color).
- Fonts: `SUIT` / `SUIT Variable` (loaded from jsDelivr, sun-typeface/SUIT) for
  all body/UI text; `Geist Pixel` (Google Fonts) is used **only** for large
  display headings (hero name, hub headline, page titles, section titles) —
  it's a pixel/bitmap display face, not meant for small text.
- Class naming is loosely BEM-ish with page-scoped prefixes: `.proj-*`
  (project.html), `.aw-*` (about.html "After Work" carousel), `.ac-*` (about
  hero tag carousel), `.pm-*` (project meta stat row), `.gf-*` (global footer).
- Fixed global footer (`.global-footer`) is `position:fixed` and present on
  every page except `index.html`. Content pages need bottom padding
  (`.hub-main, .subpage { padding-bottom: ... }`) so content doesn't sit under it.
- Custom cursor (`#cursorDot` in every page, driven by `js/app.js`) replaces
  the native cursor on fine-pointer (mouse) devices only; it's disabled
  automatically on touch devices. Don't add `transform` to `<body>` or any
  ancestor of `#cursorDot` — that changes the containing block for
  `position:fixed` descendants and breaks the cursor (this happened once;
  the page-load fade-in animation on `body` was changed to animate `opacity`
  only, never `transform`, for exactly this reason).

## Reveal-on-scroll (`.reveal` class)

Elements with class `.reveal` fade in via `IntersectionObserver` (see bottom of
`js/app.js`). There's a **1.2s failsafe `setTimeout`** that force-adds the `.in`
class regardless, so content can never get stuck permanently invisible even if
the observer fails to fire for some reason (this happened once on a very tall
single-section page). If you add new `.reveal` elements, prefer applying it to
reasonably-sized sections (e.g. per `.proj-mega`), not one giant wrapper around
an entire page's content.

## `js/prism.js` — WebGL background (index.html only)

This is a line-for-line vanilla-JS port of a React/OGL component the user
provided (`Prism` from reactbits.dev), rendered inside `#prismContainer`. It's
loaded via **dynamic `import()`** of OGL from a CDN
(`https://cdn.jsdelivr.net/npm/ogl/+esm`), wrapped in try/catch:

- If the import fails for any reason (no network, `file://` restrictions,
  browser incompatibility, WebGL unavailable), it automatically falls back to
  a pure-CSS rotating pyramid (`renderCSSFallback`, styled via `.prism-fallback`
  / `.pf-*` classes in `styles.css`) instead of showing nothing.
- Current config values (height, baseWidth, glow, noise, scale, etc.) are set
  in the `opts` object inside `boot()`. **Known issue as of the last check-in:**
  with `noise: 0.3` / `glow: 1` / `bloom: 1`, the shader can render as a very
  bright, full-screen "static/noise" look on some devices rather than a
  subtle glowing pyramid — the user flagged this but a fix (tuning the
  shader params down) hasn't been applied yet. If asked to fix it, try
  lowering `glow`/`bloom`/`noise` first before touching the GLSL.
- `.prism-container canvas` currently has no CSS filter (it was made grayscale
  once, then explicitly reverted back to color per user request — don't
  re-add `filter:grayscale(1)` unless asked).

## `js/noise.js` — canvas film-grain (menu.html only)

Self-contained canvas 2D noise generator (not a shader), drawn into
`#noiseContainer`. Params (`patternSize`, `patternAlpha`, etc.) are set in the
`initNoise()` call at the bottom of the file.

## Content notes / known placeholders

- `about.html` "Building My Own Channel" carousel: 5 real YouTube videos with
  real thumbnails (click-to-embed), but the **subtitle line under each still
  reads "Actual video title pending"** — the real YouTube titles couldn't be
  fetched (search/fetch tools can't reliably reach individual YouTube video
  pages or the oEmbed API). If you can fetch them, replace those lines.
- `project.html` "CLO Student Ambassador" has no video — it shows a static
  background photo (`images/student-ambassador-bg.jpg`) inside a 16:9 frame
  instead of a clickable embed.
- `project.html` section 05 "SBS YouTube Channel" — the two items (사심인가,
  스브스밥집) intentionally have **no image carousel** (removed on request);
  they're video-only cards (thumbnail + title + description).
- Several project descriptions were rewritten from the site owner's own
  Korean notes into English portfolio copy (Event Identity & Production,
  Media Art Installations, 3D Video Projects sections) — these are meant to
  be fairly final/authoritative now, not placeholder text.
- Video IDs already wired up with click-to-embed via `data-video-id` (see
  `document.querySelectorAll('.video-placeholder[data-video-id]')` handlers
  at the bottom of `about.html` and `project.html`):
  CqDQSjbdLiA, vhfmrjSa-u4, 6aTrLL79NGo, SkqgeK6ziGQ, aDh0ikxTpfI (About),
  T9yNzYCBn_c, 5fndDGEqdak, gi1V8Y43g20, Q-Lpf6-b-K4, vc42GhhEgDM,
  luFCh5VnSnQ, ojcg2eYvq3s, icSTh7wg2fQ, IRmrZPHmAqA (Project), plus playlist
  `PLABHIPLhUAnZq16m1RlKHUZojSCyb-s4v` (Virtual Zoo Project, handled via
  `data-playlist="1"`).

## Shared UI: scroll-to-top button

`#scrollTopBtn` (`.scroll-top-btn` in CSS) is a single reusable component.
The JS in `js/app.js` (bottom of the file) is a no-op if the button isn't
present in the DOM, so it's safe to load on every page. The button markup
itself is only included in `about.html`, `menu.html`, and `project.html`
(not `index.html` — the hero page doesn't scroll — and not `career.html`,
by request). To add it to another page, just paste the same `<button
id="scrollTopBtn">` markup right before `.global-footer` — no JS/CSS
changes needed.

`.subnav` is already `position: sticky; top: 0;` site-wide (see
`css/styles.css`), so header/nav-stays-visible-on-scroll is already handled
for every page that has a subnav (about/project/career). `menu.html` has no
subnav by design (it's a single hub screen); it wasn't given one since
`.hub-main` is deliberately a full-viewport single-screen page.

## Deployment

The user has previously deployed this to Vercel (`portfolio.vercel.app`). It's
a static site — any static host (Vercel, Netlify, GitHub Pages) works with
zero config, since there's no build step.
