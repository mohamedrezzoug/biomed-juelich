(function () {
  'use strict';
  var KEY = 'bme_juelich_v1';
  var DEF = { name: '', lang: 'de', theme: 'auto', read: {}, quiz: {}, cards: {}, notes: {} };
  var S = load();
  var Q = null;   // quiz en cours
  var D = null;   // paquet de fiches en cours
  var $app = document.getElementById('app');

  function load() {
    try {
      var o = JSON.parse(localStorage.getItem(KEY) || '{}');
      var s = {}; for (var k in DEF) s[k] = (o[k] !== undefined) ? o[k] : (typeof DEF[k] === 'object' ? JSON.parse(JSON.stringify(DEF[k])) : DEF[k]);
      return s;
    } catch (e) { return JSON.parse(JSON.stringify(DEF)); }
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) {} }
  function t(k) { return (UI[S.lang] && UI[S.lang][k]) || UI.de[k] || k; }
  function tx(o) { if (o == null) return ''; if (typeof o === 'string') return o; return o[S.lang] || o.de || ''; }
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function mod(id) { return MODULES.filter(function (m) { return m.id === id; })[0]; }
  function shuffle(a) { a = a.slice(); for (var i = a.length - 1; i > 0; i--) { var j = Math.floor(Math.random() * (i + 1)); var x = a[i]; a[i] = a[j]; a[j] = x; } return a; }

  function applyTheme() {
    document.documentElement.setAttribute('data-theme', S.theme);
    document.documentElement.lang = S.lang;
    document.title = t('title');
  }

  /* ---------- progression ---------- */
  function modProgress(m) {
    var n = m.chapters.length, r = 0;
    m.chapters.forEach(function (c) { if (S.read[c.id]) r++; });
    return { n: n, r: r, pct: n ? Math.round(100 * r / n) : 0 };
  }
  function overall() {
    var n = 0, r = 0, qs = [], mpct = 0;
    MODULES.forEach(function (m) { var p = modProgress(m); n += p.n; r += p.r; m.chapters.forEach(function (c) { if (S.quiz[c.id] !== undefined) qs.push(S.quiz[c.id]); }); });
    var avg = qs.length ? Math.round(qs.reduce(function (a, b) { return a + b; }, 0) / qs.length) : 0;
    return { n: n, r: r, pct: n ? Math.round(100 * r / n) : 0, avg: avg, hasQ: qs.length > 0 };
  }

  /* ---------- header ---------- */
  function header(isHome) {
    var h = document.getElementById('top');
    h.innerHTML =
      (isHome ? '' : '<button id="hb" aria-label="' + esc(t('back')) + '">←</button>') +
      '<h1>' + esc(isHome ? t('title') : t('title')) + '</h1>' +
      '<div class="langs">' + ['de', 'fr', 'en'].map(function (l) { return '<button data-l="' + l + '" class="' + (S.lang === l ? 'on' : '') + '">' + l.toUpperCase() + '</button>'; }).join('') + '</div>' +
      '<button id="hs" aria-label="' + esc(t('settings')) + '">⚙</button>';
    var hb = document.getElementById('hb'); if (hb) hb.onclick = function () { history.back(); };
    document.getElementById('hs').onclick = function () { location.hash = '#/settings'; };
    Array.prototype.forEach.call(h.querySelectorAll('[data-l]'), function (b) { b.onclick = function () { S.lang = b.getAttribute('data-l'); save(); applyTheme(); render(); }; });
  }

  /* ---------- vues ---------- */
  function viewHome() {
    header(true);
    var o = overall();
    var hello = S.name ? esc(t('hello')) + ', ' + esc(S.name) + ' 👋' : esc(t('title'));
    var h = '<div class="hero"><h2>' + hello + '</h2><p>' + esc(t('sub')) + '</p>' +
      '<div class="bar"><i style="width:' + o.pct + '%"></i></div>' +
      '<div class="stats"><span>' + o.r + '/' + o.n + ' ' + esc(t('chaptersRead')) + '</span>' + (o.hasQ ? '<span>' + esc(t('quizAvg')) + ': ' + o.avg + ' %</span>' : '') + '</div></div>';
    if (!S.name) h += '<div class="card"><label for="nm"><b>' + esc(t('namePrompt')) + '</b></label><div class="row"><input type="text" id="nm" style="flex:1"><button class="btn" id="nms">' + esc(t('nameSave')) + '</button></div></div>';
    h += '<input type="search" id="q" placeholder="' + esc(t('search')) + '"><div class="grid" id="grid"></div>';
    $app.innerHTML = h;
    var nms = document.getElementById('nms');
    if (nms) nms.onclick = function () { var v = document.getElementById('nm').value.trim(); if (v) { S.name = v; save(); render(); } };
    var q = document.getElementById('q');
    function draw() {
      var term = q.value.toLowerCase();
      document.getElementById('grid').innerHTML = MODULES.filter(function (m) {
        return !term || (m.code + ' ' + tx(m.title) + ' ' + m.title.de).toLowerCase().indexOf(term) >= 0;
      }).map(function (m) {
        var p = modProgress(m);
        return '<a class="mod" style="--c:' + m.color + '" href="#/m/' + m.id + '/course"><div class="em">' + m.emoji + '</div><h3>' + esc(tx(m.title)) + '</h3>' +
          '<small>' + esc(t('credits')) + ' ' + esc(m.code) + ' · ' + p.r + '/' + p.n + ' ' + esc(t('chapters')) + '</small><div class="bar"><i style="width:' + p.pct + '%;background:' + m.color + '"></i></div></a>';
      }).join('');
    }
    q.oninput = draw; draw();
  }

  function tabs(m, cur) {
    return '<div class="tabs">' + [['course', t('course')], ['quiz', t('quiz')], ['cards', t('cards')], ['notes', t('notes')]].map(function (x) {
      return '<a href="#/m/' + m.id + '/' + x[0] + '" class="' + (cur === x[0] ? 'on' : '') + '">' + esc(x[1]) + '</a>';
    }).join('') + '</div>';
  }

  function viewModule(id, tab) {
    header(false);
    var m = mod(id); if (!m) { location.hash = '#/'; return; }
    var p = modProgress(m);
    var h = '<a class="back" href="#/">← ' + esc(t('modules')) + '</a><div class="card" style="border-left:6px solid ' + m.color + '"><div style="font-size:1.8rem">' + m.emoji + '</div><h2 style="margin:4px 0">' + esc(tx(m.title)) + '</h2><span class="muted">' + esc(t('credits')) + ' ' + esc(m.code) + '</span><div class="bar"><i style="width:' + p.pct + '%;background:' + m.color + '"></i></div></div>' + tabs(m, tab);
    $app.innerHTML = h + '<div id="tab"></div>';
    var $t = document.getElementById('tab');
    if (tab === 'course') tabCourse(m, $t);
    else if (tab === 'quiz') tabQuiz(m, $t);
    else if (tab === 'cards') tabCards(m, $t);
    else tabNotes(m, $t);
  }

  function tabCourse(m, $t) {
    $t.innerHTML = m.chapters.map(function (c, i) {
      return '<details class="card" data-c="' + c.id + '"><summary>' + (S.read[c.id] ? '✅ ' : '') + (i + 1) + '. ' + esc(tx(c.title)) + '</summary><div class="body">' + tx(c.body) +
        '</div><div class="row"><button class="btn ' + (S.read[c.id] ? 'sec' : '') + '" data-r="' + c.id + '">' + esc(S.read[c.id] ? t('unread') : t('markRead')) + '</button>' +
        '<a class="btn sec" href="#/m/' + m.id + '/quiz" data-q="' + c.id + '">' + esc(t('quiz')) + '</a></div></details>';
    }).join('');
    Array.prototype.forEach.call($t.querySelectorAll('[data-r]'), function (b) {
      b.onclick = function () {
        var cid = b.getAttribute('data-r'); if (S.read[cid]) delete S.read[cid]; else S.read[cid] = 1; save();
        var open = Array.prototype.map.call($t.querySelectorAll('details[open]'), function (d) { return d.getAttribute('data-c'); });
        viewModule(m.id, 'course');
        open.forEach(function (c) { var d = document.querySelector('details[data-c="' + c + '"]'); if (d) d.open = true; });
      };
    });
    Array.prototype.forEach.call($t.querySelectorAll('[data-q]'), function (a) { a.onclick = function () { Q = null; }; });
  }

  /* ---- quiz ---- */
  function tabQuiz(m, $t) {
    if (!Q || Q.mod !== m.id) Q = null;
    if (!Q) {
      var h = '<div class="card"><p class="muted" style="margin-top:0">' + esc(t('quiz')) + '</p>';
      m.chapters.forEach(function (c, i) {
        var b = S.quiz[c.id];
        h += '<button class="opt" data-k="' + c.id + '">' + (i + 1) + '. ' + esc(tx(c.title)) + (b !== undefined ? ' <b style="float:right">' + esc(t('best')) + ': ' + b + ' %</b>' : '') + '</button>';
      });
      h += '<button class="btn" data-k="all" style="margin-top:8px">' + esc(t('startAll')) + '</button></div>';
      $t.innerHTML = h;
      Array.prototype.forEach.call($t.querySelectorAll('[data-k]'), function (b) { b.onclick = function () { startQuiz(m, b.getAttribute('data-k')); }; });
      return;
    }
    drawQuiz(m, $t);
  }
  function startQuiz(m, key) {
    var items = [];
    m.chapters.forEach(function (c) { if (key === 'all' || key === c.id) c.quiz.forEach(function (q) { items.push(q); }); });
    Q = { mod: m.id, key: key, items: shuffle(items), i: 0, score: 0, done: null };
    viewModule(m.id, 'quiz');
  }
  function drawQuiz(m, $t) {
    if (Q.i >= Q.items.length) {
      var pct = Q.items.length ? Math.round(100 * Q.score / Q.items.length) : 0;
      var keys = Q.key === 'all' ? m.chapters.map(function (c) { return c.id; }) : [Q.key];
      keys.forEach(function (k) { if (Q.key !== 'all' || true) { if (Q.key === 'all') return; if (S.quiz[k] === undefined || pct > S.quiz[k]) S.quiz[k] = pct; } });
      save();
      $t.innerHTML = '<div class="card center"><h2>' + esc(t('score')) + '</h2><div style="font-size:2.4rem;font-weight:800">' + Q.score + ' / ' + Q.items.length + '</div><p>' + pct + ' % ' + (pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '💪') + '</p><div class="row" style="justify-content:center"><button class="btn" id="rt">' + esc(t('retry')) + '</button><button class="btn sec" id="bk">' + esc(t('toQuizList')) + '</button></div></div>';
      document.getElementById('rt').onclick = function () { startQuiz(m, Q.key); };
      document.getElementById('bk').onclick = function () { Q = null; viewModule(m.id, 'quiz'); };
      return;
    }
    var q = Q.items[Q.i];
    var h = '<div class="card"><div class="qh"><span>' + esc(t('question')) + ' ' + (Q.i + 1) + '/' + Q.items.length + '</span><span>' + Q.score + ' ✓</span></div><h3>' + tx(q.q) + '</h3>';
    var order = shuffle(q.o.map(function (_, i) { return i; }));
    order.forEach(function (i) { h += '<button class="opt" data-o="' + i + '">' + tx(q.o[i]) + '</button>'; });
    h += '<div id="fb"></div></div>';
    $t.innerHTML = h;
    Q.done = null;
    Array.prototype.forEach.call($t.querySelectorAll('[data-o]'), function (b) {
      b.onclick = function () {
        if (Q.done !== null) return;
        var i = +b.getAttribute('data-o'); Q.done = i;
        var ok = i === q.a; if (ok) Q.score++;
        Array.prototype.forEach.call($t.querySelectorAll('[data-o]'), function (x) {
          var xi = +x.getAttribute('data-o'); if (xi === q.a) x.classList.add('right'); else if (xi === i) x.classList.add('wrong');
        });
        document.getElementById('fb').innerHTML = '<div class="expl"><b>' + esc(ok ? t('correct') : t('wrong')) + '</b> ' + tx(q.e) + '</div><div class="row"><button class="btn" id="nx">' + esc(Q.i + 1 >= Q.items.length ? t('finish') : t('next')) + '</button></div>';
        document.getElementById('nx').onclick = function () { Q.i++; drawQuiz(m, $t); };
      };
    });
  }

  /* ---- fiches ---- */
  function tabCards(m, $t) {
    var st = S.cards[m.id] || (S.cards[m.id] = {});
    if (!D || D.mod !== m.id) D = { mod: m.id, mode: 'all', i: 0, flip: false, order: null };
    var idx = [], known = 0;
    m.cards.forEach(function (c, i) { if (st[i]) known++; if (D.mode === 'all' || !st[i]) idx.push(i); });
    var h = '<div class="row" style="margin:0 0 10px"><button class="btn ' + (D.mode === 'all' ? '' : 'sec') + '" data-m="all">' + esc(t('allCards')) + '</button><button class="btn ' + (D.mode === 'todo' ? '' : 'sec') + '" data-m="todo">' + esc(t('onlyTodo')) + '</button><span class="muted" style="align-self:center">' + known + '/' + m.cards.length + ' ' + esc(t('cardsKnown')) + '</span></div>';
    if (!idx.length) { $t.innerHTML = h + '<div class="card center">' + esc(t('noCards')) + '</div>'; bindModes(m, $t); return; }
    if (D.i >= idx.length) D.i = 0;
    var ci = idx[D.i], c = m.cards[ci];
    h += '<div class="card flash" id="fl">' +
      (D.flip ? '<div class="b"><div><span class="lang">FR</span><br>' + esc(c[1]) + '</div><div><span class="lang">EN</span><br>' + esc(c[2]) + '</div></div>' : '<div><span class="lang">DE</span><br>' + esc(c[0]) + '</div><small>' + esc(t('tapFlip')) + '</small>') +
      '</div><div class="row" style="justify-content:center"><button class="btn bad" id="ag">' + esc(t('again')) + '</button><button class="btn ok" id="kn">' + esc(t('known')) + '</button></div><p class="center muted">' + (D.i + 1) + ' / ' + idx.length + '</p>';
    $t.innerHTML = h; bindModes(m, $t);
    document.getElementById('fl').onclick = function () { D.flip = !D.flip; tabCards(m, $t); };
    document.getElementById('kn').onclick = function () { st[ci] = 1; save(); D.flip = false; tabCards(m, $t); };
    document.getElementById('ag').onclick = function () { delete st[ci]; save(); D.flip = false; D.i++; tabCards(m, $t); };
  }
  function bindModes(m, $t) {
    Array.prototype.forEach.call($t.querySelectorAll('[data-m]'), function (b) { b.onclick = function () { D.mode = b.getAttribute('data-m'); D.i = 0; D.flip = false; tabCards(m, $t); }; });
  }

  function tabNotes(m, $t) {
    $t.innerHTML = '<textarea id="nt" placeholder="' + esc(t('notesPh')) + '">' + esc(S.notes[m.id] || '') + '</textarea>';
    document.getElementById('nt').oninput = function () { S.notes[m.id] = this.value; save(); };
  }

  function viewSettings() {
    header(false);
    $app.innerHTML =
      '<a class="back" href="#/">← ' + esc(t('modules')) + '</a><div class="card"><h2 style="margin-top:0">' + esc(t('settings')) + '</h2>' +
      '<div class="setrow"><label>' + esc(t('namePrompt')) + '</label><input type="text" id="sn" value="' + esc(S.name) + '"></div>' +
      '<div class="setrow"><label>' + esc(t('language')) + '</label><select id="sl"><option value="de">Deutsch</option><option value="fr">Français</option><option value="en">English</option></select></div>' +
      '<div class="setrow"><label>' + esc(t('theme')) + '</label><select id="st"><option value="auto">' + esc(t('auto')) + '</option><option value="light">' + esc(t('light')) + '</option><option value="dark">' + esc(t('dark')) + '</option></select></div>' +
      '<div class="row"><button class="btn" id="ex">' + esc(t('export')) + '</button><label class="btn sec" style="margin:0">' + esc(t('import')) + '<input type="file" id="im" accept="application/json" hidden></label></div>' +
      '<div class="row"><button class="btn bad" id="rs">' + esc(t('resetAll')) + '</button></div></div><p class="muted">' + esc(t('note')) + '</p>';
    document.getElementById('sl').value = S.lang; document.getElementById('st').value = S.theme;
    document.getElementById('sn').oninput = function () { S.name = this.value.trim(); save(); };
    document.getElementById('sl').onchange = function () { S.lang = this.value; save(); applyTheme(); render(); };
    document.getElementById('st').onchange = function () { S.theme = this.value; save(); applyTheme(); };
    document.getElementById('ex').onclick = function () {
      var a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([JSON.stringify(S, null, 2)], { type: 'application/json' })); a.download = 'bme-fortschritt.json'; a.click();
    };
    document.getElementById('im').onchange = function () {
      var f = this.files[0]; if (!f) return; var r = new FileReader();
      r.onload = function () { try { var o = JSON.parse(r.result); for (var k in DEF) if (o[k] !== undefined) S[k] = o[k]; save(); applyTheme(); alert(t('importOk')); render(); } catch (e) { alert(t('importErr')); } };
      r.readAsText(f);
    };
    document.getElementById('rs').onclick = function () { if (confirm(t('resetConfirm'))) { S = JSON.parse(JSON.stringify(DEF)); save(); Q = null; D = null; applyTheme(); location.hash = '#/'; render(); } };
  }

  function render() {
    var h = location.hash.replace(/^#\/?/, '').split('/');
    applyTheme();
    if (h[0] === 'm' && h[1]) viewModule(h[1], h[2] || 'course');
    else if (h[0] === 'settings') viewSettings();
    else viewHome();
    window.scrollTo(0, 0);
  }
  window.addEventListener('hashchange', render);
  render();

  if ('serviceWorker' in navigator && location.protocol.indexOf('http') === 0) {
    navigator.serviceWorker.register('./sw.js').catch(function () {});
  }
})();
