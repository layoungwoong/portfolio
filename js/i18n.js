/* Translate descriptive copy, explanatory subheadings and the About greeting.
 * Project titles, navigation, labels, metadata and accessible names stay English. */
(function () {
  'use strict';
  const dictionary = window.portfolioKorean || {};
  const normalize = value => value.replace(/\s+/g, ' ').trim();
  const lookup = new Map(Object.entries(dictionary).map(([en, ko]) => [normalize(en).toLowerCase(), ko]));
  const originals = new WeakMap();
  const storageKey = 'portfolio.language';
  const ignored = 'script,style,code,textarea,[data-no-translate],.type-line';
  let language = 'en';
  try { language = localStorage.getItem(storageKey) === 'ko' ? 'ko' : 'en'; } catch (_) {}
  const requested = new URLSearchParams(location.search).get('lang');
  if (requested === 'ko' || requested === 'en') language = requested;

  // Explicit component scope preserves project titles and UI/statistic labels.
  // These selectors also cover asynchronously fetched and rendered project copy.
  const copySelector = [
    '.page-desc', '.job-item-desc', '.project-dialog-description',
    '.project-dialog-subtitle', '.proj-item-desc', '.afterwork-intro',
    '.extra-card p', '.about-card-education p', '.about-contact-intro p',
    '.cs-note', '.cs-caption', '.cs-flow p', '.cs-round p',
    '.cs-student-grid figcaption span', '.cs-collection-summary p',
    '.cs-network-details p', '.connect-feature-copy p', '.emblem-section-heading p',
    '.cs-heading h3', '.emblem-section-heading h3',
    '.cs-collection-summary h4', '.tokyo-copy', '.cs-quote-list blockquote p', '.cs-quote-list cite',
    '.project-video-hero-copy > p', '.about-classic-hero-copy .page-title',
    '.about-feature-intro h1'
  ].join(',');

  function korean(source) {
    return lookup.get(normalize(source).toLowerCase()) || normalize(source);
  }

  function translated(source) {
    if (language === 'en') return source;
    const result = korean(source);
    return result === normalize(source) ? source : source.replace(/\S(?:[\s\S]*\S)?/, result);
  }

  function translateText(node) {
    if (!node.parentElement || node.parentElement.closest(ignored)) return;
    const block = node.parentElement.closest(copySelector);
    if (!block) return;
    block.classList.toggle('is-korean-copy', language === 'ko');
    block.lang = language;
    const current = node.nodeValue;
    let record = originals.get(node);
    // A renderer may reuse a node for a different project or playback state.
    if (!record || current !== record.output) record = {source: current};
    record.output = translated(record.source);
    // Explanatory Korean titles omit full stops; the About greeting keeps its punctuation.
    if (language === 'ko' && block.matches('.cs-heading h3, .emblem-section-heading h3, .cs-collection-summary h4')) {
      record.output = record.output.replace(/[.。]/g, '');
    }
    originals.set(node, record);
    if (current !== record.output) node.nodeValue = record.output;
  }

  function apply(root) {
    if (root.nodeType === Node.TEXT_NODE) { translateText(root); return; }
    if (root.nodeType !== Node.ELEMENT_NODE || root.closest(ignored)) return;
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) translateText(walker.currentNode);
  }

  function updateLinks() {
    document.querySelectorAll('a[href]').forEach(link => {
      const url = new URL(link.getAttribute('href'), location.href);
      if (url.origin !== location.origin || !/\/(index|project|about|career)\.html$/.test(url.pathname)) return;
      if (link.getAttribute('href').startsWith('#')) return;
      url.searchParams.set('lang', language);
      link.setAttribute('href', `${url.pathname}${url.search}${url.hash}`);
    });
  }

  function setLanguage(next, updateURL = true) {
    if (next !== 'en' && next !== 'ko') return;
    language = next;
    document.documentElement.lang = language;
    document.body.lang = 'en';
    try { localStorage.setItem(storageKey, language); } catch (_) {}
    if (updateURL) {
      const url = new URL(location.href);
      url.searchParams.set('lang', language);
      history.replaceState(history.state, '', url);
    }
    apply(document.body);
    document.querySelectorAll('[data-language]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.language === language));
    });
    updateLinks();
    window.dispatchEvent(new CustomEvent('portfolio:languagechange', {detail: {language}}));
  }

  window.portfolioI18n = {get language() {return language;}, translate: source => translated(source), apply, setLanguage};
  document.querySelectorAll('[data-language]').forEach(button => {
    button.addEventListener('click', () => setLanguage(button.dataset.language));
  });
  setLanguage(language, requested === 'en' || requested === 'ko');
  // Fetched About/Career content and project details arrive after page startup.
  // Observe only copy changes, not animation classes/styles or form input values.
  new MutationObserver(records => {
    const roots = new Set();
    for (const record of records) {
      if (record.type === 'characterData') translateText(record.target);
      else record.addedNodes.forEach(node => roots.add(node));
    }
    roots.forEach(apply);
  }).observe(document.body, {subtree: true, childList: true, characterData: true});
})();
