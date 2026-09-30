(function () {
  // Loads Umami (cookieless analytics)
  var s = document.createElement('script');
  s.defer = true;
  s.src = 'https://cloud.umami.is/script.js';
  s.setAttribute('data-website-id', '72c155a8-b98e-453f-9d10-3490ae6ce052');
  s.setAttribute('data-domains', 'vistaimage.thestreamic.in');
  document.head.appendChild(s);

  // Counts clicks on important links, no need to edit each button
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a');
    if (!a || !window.umami) return;
    var href = a.href || '';
    var name = null;
    if (href.indexOf('vistaimagestudio.thestreamic.in') > -1) {
      name = /eula|privacy|notice|legal|terms/i.test(href) ? 'legal_click' : 'try_free_click';
    } else if (/\.exe(\?|$)/i.test(href) || href.indexOf('/releases') > -1) {
      name = 'windows_download_click';
    }
    if (name) window.umami.track(name);
  }, true);
})();
