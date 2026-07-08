# La Youngwoong — Portfolio

A static, framework-free portfolio site (plain HTML/CSS/JS, no build step).

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
index.html, menu.html, about.html, project.html, career.html   pages
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
