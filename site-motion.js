(function () {
  if (window.PropelMotion) return;
  var reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var E = 'cubic-bezier(.2,.7,.2,1)';
  var css =
    'html{overflow-x:hidden}' +
    '.lift{transition:transform .35s ' + E + ',box-shadow .35s ease,background-color .35s ease}' +
    '.lift:hover{transform:translateY(-4px);box-shadow:0 12px 32px rgba(0,0,0,.08);border-color:var(--grey-400)!important}' +
    '.roll{display:block;overflow:hidden;height:1.2em;line-height:1.2em}.roll>span>span{display:block;height:1.2em;transition:transform .4s '+E+'}button:hover .roll>span>span{transform:translateY(-100%)}button[type=submit]:hover,button[onclick]:hover{box-shadow:0 0 0 4px #f4f4f4}' +
    '.zoom img{transition:transform 1.4s ' + E + '}.zoom:hover img{transform:scale(1.035)}' +
    ':is(a,button)>span[aria-hidden]+span[aria-hidden]+span>span{transition:transform 400ms ' + E + '!important}' +
    ':is(a,button):hover>span[aria-hidden]+span[aria-hidden]+span>span{transform:translateY(-50%)!important}' +
    'button{transition:background-color .3s ease,box-shadow .3s ease,color .3s ease,border-color .3s ease,transform .3s '+E+'}button:active{transform:scale(.97)}' +
    'details{interpolate-size:allow-keywords}details::details-content{height:0;overflow:clip;opacity:0;transition:height .4s '+E+',opacity .3s ease,content-visibility .4s allow-discrete}details[open]::details-content{height:auto;opacity:1}details>summary{transition:color .25s ease}details>summary>span[aria-hidden]{display:inline-block;transition:transform .35s '+E+'}details[open]>summary>span[aria-hidden]{transform:rotate(45deg)}details{transition:background-color .3s ease}' +
    '.cq{container-type:inline-size}' +
    '.steps4{grid-template-columns:repeat(2,minmax(0,1fr))!important}' +
    '@container (min-width:760px){.steps4{grid-template-columns:repeat(4,minmax(0,1fr))!important}}' +
    '@container (max-width:380px){.steps4{grid-template-columns:minmax(0,1fr)!important}}' +
    (reduce ? '' : '.wd{display:inline-block;transition:opacity .7s ' + E + ',filter .7s ' + E + ',transform .7s ' + E + '}.wd.pre{opacity:0;filter:blur(5px);transform:translateY(20px)}.rv{opacity:0;transform:translateY(24px);transition:opacity .7s ' + E + ',transform .7s ' + E + ';transition-delay:var(--rv-d,0ms)}.rv.in{opacity:1;transform:none}');
  var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);

  var io = !reduce && 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { io.unobserve(e.target); show(e.target); } });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }) : null;
  var cio = !reduce && 'IntersectionObserver' in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { cio.unobserve(e.target); count(e.target); } });
  }, { threshold: 0.6 }) : null;

  function show(el) {
    var d = parseFloat((el.style.getPropertyValue('--rv-d') || '0')) || 0;
    el.classList.add('in');
    setTimeout(function () { el.classList.remove('rv', 'in'); el.style.removeProperty('--rv-d'); }, 800 + d);
  }
  function count(el) {
    var m = el.getAttribute('data-cnt').match(/^(\d[\d,]*)(.*)$/); if (!m) return;
    var to = parseInt(m[1].replace(/,/g, ''), 10), comma = m[1].indexOf(',') > -1, suf = m[2], t0 = null, dur = 1300;
    function fmt(n) { var s = String(n); return comma ? s.replace(/\B(?=(\d{3})+(?!\d))/g, ',') : s; }
    function step(t) {
      if (t0 === null) t0 = t;
      var p = Math.min((t - t0) / dur, 1), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
      el.textContent = fmt(v) + suf;
      if (p < 1) requestAnimationFrame(step); else el.textContent = m[1] + suf;
    }
    requestAnimationFrame(step);
  }
  function reveal(el, d) {
    if (!io || el.classList.contains('rv') || el.__rv) return;
    el.__rv = 1; el.style.setProperty('--rv-d', d + 'ms'); el.classList.add('rv'); io.observe(el);
  }
  var SEL = 'h2,figure,article,li,dl>div,details,blockquote';
  function scan(root) {
    var main = document.querySelector('main'); if (!main) return;
    var scope = root && root.nodeType === 1 ? root : main;
    // hero
    var hero = main.querySelector('section'); 
    if (hero && !hero.__hero && !reduce) {
      var q = [hero], pick = null;
      while (q.length && !pick) { var c = q.shift(); var kids = [].filter.call(c.children, function (k) { return k.getAttribute('aria-hidden') !== 'true'; }); if (kids.length >= 3) pick = kids; else q.push.apply(q, kids); }
      if (pick) { hero.__hero = 1; pick.forEach(function (k, i) { reveal(k, i * 80); }); }
    }
    var list = scope.matches && scope.matches(SEL) ? [scope] : [];
    [].push.apply(list, scope.querySelectorAll(SEL));
    var cnt = new Map();
    list.forEach(function (el) {
      if (!main.contains(el) || el.__rv || el.closest('[role=tabpanel],[role=tablist],[aria-hidden=true],nav,.rv,header,.mq-track')) return;
      var sec = el.closest('section'); if (!sec || sec === hero) return;
      var p = el.parentNode, i = cnt.get(p) || 0; cnt.set(p, i + 1);
      reveal(el, Math.min(i, 6) * 70);
    });
    // enhancements
    scope.querySelectorAll('[data-card]').forEach(function (el) { el.classList.add('lift'); });
    scope.querySelectorAll('img[width="1672"]').forEach(function (im) { im.parentNode.classList.add('zoom'); });
    scope.querySelectorAll('ol').forEach(function (ol) {
      var lis = [].filter.call(ol.children, function (c) { return c.tagName === 'LI'; });
      if (lis.length === 4 && ol.style.display === 'grid' && ol.closest('figure')) { ol.classList.add('steps4'); ol.closest('figure').classList.add('cq'); }
    });
    if (cio) scope.querySelectorAll('dd').forEach(function (dd) {
      if (dd.__cnt || dd.children.length) return;
      var tx = dd.textContent.trim();
      if (/^\d[\d,]*(?![.\d:])/.test(tx) && !/[:→]/.test(tx)) { dd.__cnt = 1; dd.setAttribute('data-cnt', tx); cio.observe(dd); }
    });
  }

  // word-by-word blur-in for the page H1
  function splitH1() {
    var h = document.getElementById('h1'); if (!h || h.__split || reduce || /article|story/.test(location.pathname)) return;
    if (!h.textContent.trim()) return; h.__split = 1;
    var i = 0;
    (function walk(node) {
      [].slice.call(node.childNodes).forEach(function (c) {
        if (c.nodeType === 3) {
          var frag = document.createDocumentFragment();
          c.textContent.split(/(\s+)/).forEach(function (w) {
            if (!w) return;
            if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
            var sp = document.createElement('span'); sp.className = 'wd pre'; sp.textContent = w; sp.style.transitionDelay = (80 + i++ * 70) + 'ms'; frag.appendChild(sp);
          });
          c.parentNode.replaceChild(frag, c);
        } else if (c.nodeType === 1) walk(c);
      });
    })(h);
    var go = function () { [].forEach.call(h.querySelectorAll('.wd'), function (w) { w.classList.remove('pre'); }); };
    void h.offsetWidth; setTimeout(go, 40); setTimeout(go, 1500);
  }
  var pend = false;
  function later() { frameLater(); splitH1(); if (pend) return; pend = true; requestAnimationFrame(function () { pend = false; scan(); }); }
  new MutationObserver(function (ms) {
    // tag synchronously to avoid a flash, then rescan
    ms.forEach(function (m) { m.addedNodes.forEach(function (n) { if (n.nodeType === 1) scan(n); }); });
    later();
  }).observe(document.documentElement, { childList: true, subtree: true });
  window.addEventListener('DOMContentLoaded', later);


  // dashed frame rails with corner blocks at section dividers
  function frame() {
    var main = document.getElementById('main'); if (!main) return;
    var cs = getComputedStyle(main); if (cs.borderLeftStyle !== 'dashed') return;
    if (cs.position === 'static') main.style.position = 'relative';
    var layer = main.querySelector(':scope > [data-corners]');
    if (!layer) { layer = document.createElement('div'); layer.setAttribute('data-corners', ''); layer.setAttribute('aria-hidden', 'true'); layer.style.cssText = 'position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;z-index:4'; main.appendChild(layer); }
    var mt = main.getBoundingClientRect().top + main.clientTop, ys = [];
    [].forEach.call(main.querySelectorAll('section'), function (sec) {
      if (getComputedStyle(sec).borderTopStyle === 'dashed') ys.push(Math.round(sec.getBoundingClientRect().top - mt));
    });
    var key = ys.join(',') + '|' + main.clientWidth; if (layer.__k === key) return; layer.__k = key;
    var sq = 'position:absolute;width:11px;height:11px;box-sizing:border-box;background:#fff;border:1px solid var(--grey-300);';
    layer.innerHTML = ys.map(function (y) { return '<i style="' + sq + 'left:-6px;top:' + (y - 5) + 'px"></i><i style="' + sq + 'right:-6px;top:' + (y - 5) + 'px"></i>'; }).join('');
  }
  var fp = 0; function frameLater() { if (fp) return; fp = 1; requestAnimationFrame(function () { fp = 0; frame(); }); }
  window.addEventListener('resize', frameLater); window.addEventListener('load', frameLater);
  if ('ResizeObserver' in window) window.addEventListener('DOMContentLoaded', function () { var m = document.getElementById('main'); if (m) new ResizeObserver(frameLater).observe(m); });

  // safety net: reveal anything hidden that is inside the viewport
  var sp = 0; function sweep() { sp = 0; var h = window.innerHeight; [].forEach.call(document.querySelectorAll('.rv:not(.in)'), function (el) { var r = el.getBoundingClientRect(); if (r.top < h && r.bottom > 0) { if (io) io.unobserve(el); show(el); } }); }
  function sweepLater() { if (sp) return; sp = setTimeout(sweep, 250); }
  window.addEventListener('scroll', sweepLater, { passive: true }); window.addEventListener('load', sweepLater); setInterval(sweep, 1500);
  window.PropelMotion = {
    replay: function (container) {
      if (!container || !io) return;
      [].forEach.call(container.children, function (el, i) {
        el.classList.remove('rv', 'in'); el.__rv = 0;
        void el.offsetWidth;
        reveal(el, Math.min(i, 8) * 55);
      });
    }
  };
})();
