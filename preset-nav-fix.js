/* preset-nav-fix.js — repairs dead section-anchor navigation in preset SPAs.
 *
 * Two bug classes found auditing all 157 preset routes:
 *  1. Subpages keep the home nav with section anchors (#use-cases, #philosophy)
 *     that only exist on the home route — clicks silently do nothing.
 *     Fix: navigate to the home route, then scroll to the section once rendered.
 *  2. Some navs render href="#undefined" (broken template variable).
 *     Fix: derive the section id from the link text and retry; else go home.
 */
(function () {
  function slugify(text) {
    return (text || '')
      .toLowerCase()
      .trim()
      .replace(/&/g, 'and')
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-+|-+$/g, '');
  }

  function jumpTo(el) {
    // Instant, absolute scroll — smooth scrolls get cancelled by template
    // animation engines and SPA route-change scroll resets.
    var y = el.getBoundingClientRect().top + (window.scrollY || window.pageYOffset) - 80;
    window.scrollTo(0, Math.max(0, y));
    if (document.scrollingElement) document.scrollingElement.scrollTop = Math.max(0, y);
  }

  function scrollToId(id, attempts) {
    var el = document.getElementById(id);
    if (el) {
      jumpTo(el);
      // SPA routers often scroll-to-top AFTER our scroll on route change —
      // keep correcting until the section actually stays in view.
      var corrections = 6;
      var keep = setInterval(function () {
        var t = document.getElementById(id);
        if (!t) { clearInterval(keep); return; }
        var top = t.getBoundingClientRect().top;
        if (top > 300 || top < -300) jumpTo(t);
        else { clearInterval(keep); return; }
        if (--corrections <= 0) clearInterval(keep);
      }, 600);
      return;
    }
    if (attempts > 0) setTimeout(function () { scrollToId(id, attempts - 1); }, 400);
  }

  document.addEventListener(
    'click',
    function (e) {
      var a = e.target && e.target.closest ? e.target.closest('a[href^="#"]') : null;
      if (!a) return;
      var href = a.getAttribute('href') || '';
      // Hash ROUTES (#/about) are the router's job — leave them alone.
      if (href.indexOf('#/') === 0) return;

      var id = href.slice(1);
      if (id === 'undefined' || id === 'null' || id === '') {
        id = slugify(a.textContent);
        if (!id) return;
        e.preventDefault();
        e.stopPropagation();
      } else if (document.getElementById(id)) {
        return; // target exists on this page — native behavior is fine
      } else {
        // Stop the SPA's own nav handler from re-routing while we recover
        e.preventDefault();
        e.stopPropagation();
      }

      // Target missing here. If we're on a sub-route, the section likely
      // lives on the home route — go there first, then scroll.
      if (location.hash && location.hash.indexOf('#/') === 0 && location.hash !== '#/') {
        location.hash = '';
        setTimeout(function () { scrollToId(id, 20); }, 500);
      } else {
        scrollToId(id, 8);
      }
    },
    true,
  );
})();
