/*
 * Sungwon Yoon, Ph.D. · personal website · behavior
 *
 *  - Theme switch (top right): switches light/dark and remembers the choice
 *  - Mobile menu: the sidebar becomes a drop-down below 960px
 *  - Navigation: highlights the section currently on screen
 *  - Publications: fixed numbering and the All / First-author filter
 *
 * Plain JavaScript with no dependencies.
 */
(function () {
  'use strict';

  var root = document.documentElement;
  var mqDark = window.matchMedia ? window.matchMedia('(prefers-color-scheme: dark)') : null;

  /* Theme switch: flip light/dark, save the choice (read back by the inline script
     in index.html), and keep the switch's on/off state correct for screen readers. */
  var themeSwitch = document.getElementById('theme-switch');
  function currentTheme() {
    var set = root.getAttribute('data-theme');
    if (set) return set;
    return mqDark && mqDark.matches ? 'dark' : 'light';
  }
  function syncSwitch() {
    if (themeSwitch) themeSwitch.setAttribute('aria-checked', String(currentTheme() === 'dark'));
  }
  if (themeSwitch) {
    themeSwitch.addEventListener('click', function () {
      var next = currentTheme() === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
      syncSwitch();
    });
  }
  if (mqDark && mqDark.addEventListener) mqDark.addEventListener('change', syncSwitch);
  syncSwitch();

  /* Mobile menu: open/close the sidebar panel; close it after a link is chosen or on Escape. */
  var panel = document.getElementById('side-panel');
  var menuBtn = document.getElementById('menu-toggle');
  function setMenu(open) {
    panel.classList.toggle('is-open', open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  }
  menuBtn.addEventListener('click', function () { setMenu(!panel.classList.contains('is-open')); });
  panel.addEventListener('click', function (e) { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') setMenu(false); });

  /* Navigation: mark the section that is 30% down the screen as active. */
  var links = Array.prototype.slice.call(document.querySelectorAll('.side-nav a'));
  var targets = links.map(function (a) { return document.querySelector(a.getAttribute('href')); });
  function onScroll() {
    var y = window.innerHeight * 0.3;
    var active = -1;
    targets.forEach(function (t, i) { if (t && t.getBoundingClientRect().top <= y) active = i; });
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = targets.length - 1;
    links.forEach(function (a, i) {
      var on = i === active;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true'); else a.removeAttribute('aria-current');
    });
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll);
  onScroll();

  /* Publications: number papers from oldest (01) to newest, then wire up the filter.
     Numbers stay fixed when the filter hides papers. */
  var pubs = Array.prototype.slice.call(document.querySelectorAll('.pubs li'));
  pubs.forEach(function (li, i) {
    var n = pubs.length - i;
    li.setAttribute('data-n', (n < 10 ? '0' : '') + n);
  });
  var chips = Array.prototype.slice.call(document.querySelectorAll('.filters .chip'));
  chips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var f = chip.getAttribute('data-filter');
      chips.forEach(function (c) {
        var on = c === chip;
        c.classList.toggle('is-active', on);
        c.setAttribute('aria-pressed', String(on));
      });
      pubs.forEach(function (li) {
        li.classList.toggle('is-hidden', f === 'first' && li.getAttribute('data-first') !== 'true');
      });
    });
  });
})();
