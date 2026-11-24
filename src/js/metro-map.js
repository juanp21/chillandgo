// ==========================================================================
// RED DE TRANSPORTE CHILL&GO — mapa interactivo del hero
// --------------------------------------------------------------------------
// Todo el mapa se genera a partir de la configuración de abajo:
//   - METRO_LINES:    líneas (color, nombre, trazo en el mapa de escritorio)
//   - METRO_STATIONS: estaciones (sección a la que llevan, ícono, posición)
// Para agregar una estación: añade un objeto en METRO_STATIONS, ponle su
// posición sobre el trazo de su línea y agrégala a `stations` de la línea.
// Coordenadas en un lienzo de 1200 x 720 (se escala a la pantalla).
// Debe cargarse ANTES de main.js (main.js aplica las traducciones).
// ==========================================================================

(() => {
  const SVG_NS = 'http://www.w3.org/2000/svg';
  const VISITED_KEY = 'chillandgo-visited';

  // Terminal central (el logo). Las líneas pasan "por dentro" de ella.
  const HUB = { x: 360, y: 225, w: 480, h: 270, href: '#bio', img: 'src/assets/images/hero/hero-photo.png' };

  const METRO_LINES = [
    {
      id: 'l1', num: '1', color: 'var(--metro-verde)', ink: 'var(--paper)',
      nameKey: 'metro.l1', name: 'Línea Verde · Música',
      path: 'M120 150 H170 L270 250 H910 L1010 150',
      stations: ['musica', 'tour'],
    },
    {
      id: 'l2', num: '2', color: 'var(--rojo)', ink: 'var(--paper)',
      nameKey: 'metro.l2', name: 'Línea Roja · Imagen',
      path: 'M120 570 H330 L430 470 H900 L1000 570 H1010',
      stations: ['galeria', 'fotos', 'merch'],
    },
    {
      id: 'l3', num: '3', color: 'var(--paper)', ink: 'var(--ink)',
      nameKey: 'metro.l3', name: 'Línea Crema · Escena',
      path: 'M600 80 H940 L1010 150 V330 L1080 400 V500 L1010 570',
      stations: ['contacto', 'tour', 'prensa', 'merch'],
    },
  ];

  // Tramo decorativo "en obra": espacio para estaciones futuras.
  const CONSTRUCTION_PATH = 'M120 212 V508';

  // label: lado donde va el pictograma + nombre ('n' | 's' | 'e' | 'w');
  //        'E' = pictograma a la derecha con el nombre debajo
  const METRO_STATIONS = {
    musica:   { href: '#musica',   key: 'nav.music',   name: 'Lanzamientos', icon: 'music',  x: 120,  y: 150, label: 'n' },
    tour:     { href: '#tour',     key: 'nav.tour',    name: 'Tour',         icon: 'ticket', x: 1010, y: 150, label: 'e' },
    galeria:  { href: '#galeria',  key: 'gallery.title', name: 'Flyers',     icon: 'poster', x: 120,  y: 570, label: 's' },
    fotos:    { href: '#fotos',    key: 'nav.photos',  name: 'Fotos',        icon: 'camera', x: 330,  y: 570, label: 's' },
    merch:    { href: '#merch',    key: 'nav.merch',   name: 'Merch',        icon: 'shirt',  x: 1010, y: 570, label: 's' },
    prensa:   { href: '#prensa',   key: 'nav.press',   name: 'Prensa',       icon: 'press',  x: 1080, y: 450, label: 'E' },
    contacto: { href: '#contacto', key: 'nav.contact', name: 'Contacto',     icon: 'mail',   x: 600,  y: 80,  label: 'w' },
  };

  // Pictogramas propios (24x24, solo trazo)
  const ICONS = {
    music:  '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/><path d="M12 5.5a6.5 6.5 0 0 1 6.5 6.5"/>',
    ticket: '<path d="M3 7h18v3a2 2 0 0 0 0 4v3H3v-3a2 2 0 0 0 0-4z"/><path d="M15 7v10" stroke-dasharray="2 2"/>',
    poster: '<rect x="6" y="3" width="12" height="18" rx="1"/><circle cx="12" cy="10" r="3"/><path d="M9 17h6"/>',
    camera: '<path d="M3.5 8h3.5l2-3h6l2 3h3.5v11h-17z"/><circle cx="12" cy="13" r="3.5"/>',
    shirt:  '<path d="M8 4 3 7l2 4 3-1v10h8V10l3 1 2-4-5-3a4 4 0 0 1-8 0z"/>',
    press:  '<rect x="4" y="5" width="16" height="14" rx="1"/><path d="M8 9h8M8 12h8M8 15h5"/>',
    mail:   '<rect x="3" y="6" width="18" height="12" rx="1.5"/><path d="m3 7 9 6 9-6"/>',
  };

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const linesOf = (id) => METRO_LINES.filter((l) => l.stations.includes(id));

  // --------------------------------------------------------------------------
  // Estaciones visitadas (se guardan entre visitas)
  // --------------------------------------------------------------------------
  let visited;
  try { visited = new Set(JSON.parse(localStorage.getItem(VISITED_KEY) || '[]')); }
  catch { visited = new Set(); }

  function markVisited(id) {
    if (visited.has(id)) return;
    visited.add(id);
    localStorage.setItem(VISITED_KEY, JSON.stringify([...visited]));
    paintVisited();
  }
  function paintVisited() {
    document.querySelectorAll('[data-station]').forEach((el) => {
      el.classList.toggle('is-visited', visited.has(el.dataset.station));
    });
  }

  // --------------------------------------------------------------------------
  // Helpers SVG
  // --------------------------------------------------------------------------
  function el(tag, attrs = {}, parent) {
    const node = document.createElementNS(SVG_NS, tag);
    for (const [k, v] of Object.entries(attrs)) node.setAttribute(k, v);
    if (parent) parent.appendChild(node);
    return node;
  }
  function iconSVG(name, color) {
    return `<svg viewBox="0 0 24 24" fill="none" stroke="${color}" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[name]}</svg>`;
  }

  // --------------------------------------------------------------------------
  // MAPA DE ESCRITORIO (SVG)
  // --------------------------------------------------------------------------
  function buildDesktopMap(svg) {
    const gLines = el('g', { class: 'metro-lines' }, svg);
    const gTrain = el('g', { class: 'metro-train-layer' }, svg);
    const gHub = el('g', { class: 'metro-hub-layer' }, svg);
    const gStations = el('g', { class: 'metro-stations' }, svg);

    // Tramo en obra
    el('path', { d: CONSTRUCTION_PATH, class: 'metro-construction' }, gLines);

    // Líneas: "casing" oscuro + color
    const pathById = {};
    METRO_LINES.forEach((line) => {
      const g = el('g', { class: 'metro-line', 'data-line': line.id, style: `--c:${line.color}` }, gLines);
      el('path', { d: line.path, class: 'metro-line-casing' }, g);
      pathById[line.id] = el('path', { d: line.path, class: 'metro-line-stroke' }, g);
    });

    // Terminal CHILL&GO: anillos concéntricos + logo + letrero "Inicio"
    const hubLink = el('a', { href: HUB.href, class: 'metro-hub', 'data-hub': '' }, gHub);
    [36, 24, 12].forEach((o, i) => {
      el('rect', {
        x: HUB.x - o, y: HUB.y - o, width: HUB.w + o * 2, height: HUB.h + o * 2,
        rx: 24 + o, class: `metro-hub-ring metro-hub-ring-${i}`,
      }, hubLink);
    });
    const defs = el('defs', {}, svg);
    const clip = el('clipPath', { id: 'metro-hub-clip' }, defs);
    el('rect', { x: HUB.x, y: HUB.y, width: HUB.w, height: HUB.h, rx: 22 }, clip);
    const tileClip = el('clipPath', { id: 'metro-tile-clip' }, defs);
    el('rect', { x: -26, y: -26, width: 52, height: 52, rx: 12 }, tileClip);
    el('rect', { x: HUB.x, y: HUB.y, width: HUB.w, height: HUB.h, rx: 22, class: 'metro-hub-bg' }, hubLink);
    el('image', {
      href: HUB.img, x: HUB.x, y: HUB.y, width: HUB.w, height: HUB.h,
      preserveAspectRatio: 'xMidYMid slice', 'clip-path': 'url(#metro-hub-clip)',
    }, hubLink);
    const pill = el('g', { class: 'metro-hub-pill', transform: `translate(${HUB.x + HUB.w / 2} ${HUB.y + HUB.h + 56})` }, hubLink);
    el('rect', { x: -84, y: -18, width: 168, height: 36, rx: 18 }, pill);
    const pillText = el('text', { y: 6, 'text-anchor': 'middle', 'data-i18n': 'nav.home' }, pill);
    pillText.textContent = 'Inicio';
    const hubTitle = el('title', { 'data-i18n': 'nav.home' }, hubLink);
    hubTitle.textContent = 'Inicio';

    // Estaciones
    const OFF = { n: [0, -62], s: [0, 62], e: [66, 0], w: [-66, 0], E: [66, 0] };
    Object.entries(METRO_STATIONS).forEach(([id, st]) => {
      const lines = linesOf(id);
      const isXfer = lines.length > 1;
      const main = lines[0];
      const a = el('a', { href: st.href, class: `metro-station${isXfer ? ' is-xfer' : ''}`, 'data-station': id }, gStations);
      a.style.setProperty('--c', main.color);
      a.style.setProperty('--ci', main.ink);

      const [ox, oy] = OFF[st.label];
      const tx = st.x + ox, ty = st.y + oy;

      // conector estación → pictograma
      el('line', { x1: st.x, y1: st.y, x2: tx, y2: ty, class: 'metro-stub' }, a);

      // pictograma (color de la línea; correspondencia = franjas de cada línea)
      const tile = el('g', { class: 'metro-tile', transform: `translate(${tx} ${ty})` }, a);
      const tileInner = el('g', { class: 'metro-tile-inner' }, tile);
      el('rect', { x: -26, y: -26, width: 52, height: 52, rx: 12, class: 'metro-tile-bg' }, tileInner);
      if (isXfer) {
        lines.forEach((l, i) => {
          el('rect', { x: -26 + i * 26, y: 16, width: 26, height: 10, style: `fill:${l.color}`, 'clip-path': 'url(#metro-tile-clip)' }, tileInner);
        });
      }
      const ico = el('g', { transform: `translate(-15 ${isXfer ? -19 : -15}) scale(1.25)` }, tileInner);
      ico.innerHTML = ICONS[st.icon];
      ico.setAttribute('fill', 'none');
      ico.setAttribute('stroke', main.ink);
      ico.setAttribute('stroke-width', '1.9');
      ico.setAttribute('stroke-linecap', 'round');
      ico.setAttribute('stroke-linejoin', 'round');

      // nombre
      let lx = tx, ly = ty, anchor = 'middle';
      if (st.label === 'n') { lx = tx - 26; ly = ty - 40; anchor = 'start'; } // alineado al pictograma: admite nombres largos
      if (st.label === 's') ly = ty + 52;
      if (st.label === 'E') { lx = tx + 12; ly = ty + 52; }
      if (st.label === 'e') { lx = tx + 38; ly = ty + 6; anchor = 'start'; }
      if (st.label === 'w') { lx = tx - 38; ly = ty + 6; anchor = 'end'; }
      const label = el('text', { x: lx, y: ly, 'text-anchor': anchor, class: 'metro-label', 'data-i18n': st.key }, a);
      label.textContent = st.name;

      // marcador sobre la vía
      if (isXfer) {
        el('circle', { cx: st.x, cy: st.y, r: 14, class: 'metro-node-xfer' }, a);
        el('circle', { cx: st.x, cy: st.y, r: 5, class: 'metro-node-dot' }, a);
      } else {
        el('circle', { cx: st.x, cy: st.y, r: 10, class: 'metro-node' }, a);
      }

      // área de clic generosa
      const bb = { x: Math.min(st.x, tx) - 34, y: Math.min(st.y, ty) - 34, x2: Math.max(st.x, tx) + 34, y2: Math.max(st.y, ty) + 34 };
      el('rect', { x: bb.x, y: bb.y, width: bb.x2 - bb.x, height: bb.y2 - bb.y, class: 'metro-hit' }, a);
    });

    // Tren
    const train = el('g', { class: 'metro-train' }, gTrain);
    const trainBody = el('g', {}, train);
    el('rect', { x: -17, y: -7, width: 34, height: 14, rx: 7, class: 'metro-train-body' }, trainBody);
    [-8, 0, 8].forEach((x) => el('rect', { x: x - 2.5, y: -3, width: 5, height: 6, rx: 1.2, class: 'metro-train-window' }, trainBody));

    return { svg, pathById, train, hubLink };
  }

  // Muestreo de trazos para ubicar estaciones / el tren sobre la vía
  function samplePath(path) {
    const len = path.getTotalLength();
    const pts = [];
    for (let s = 0; s <= len; s += 3) {
      const p = path.getPointAtLength(s);
      pts.push({ s, x: p.x, y: p.y });
    }
    return { len, pts };
  }
  function nearestLength(samples, x, y) {
    let best = 0, bestD = Infinity;
    for (const p of samples.pts) {
      const d = (p.x - x) ** 2 + (p.y - y) ** 2;
      if (d < bestD) { bestD = d; best = p.s; }
    }
    return best;
  }

  function setupDesktopInteractions(map) {
    const { svg, pathById, train, hubLink } = map;
    const samples = {};
    for (const id in pathById) samples[id] = samplePath(pathById[id]);

    // Animación de entrada: se dibujan las vías
    if (!reduceMotion) {
      const drawn = svg.querySelectorAll('.metro-line-stroke, .metro-line-casing');
      drawn.forEach((p) => {
        const len = p.getTotalLength();
        p.style.strokeDasharray = `${len} ${len}`;
        p.style.strokeDashoffset = len;
      });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        svg.classList.add('is-drawn');
        drawn.forEach((p) => {
          const idx = METRO_LINES.findIndex((l) => l.id === p.parentNode.dataset.line);
          p.style.transitionDelay = `${idx * 0.18}s`;
          p.style.strokeDashoffset = 0;
        });
      }));
      setTimeout(() => {
        svg.querySelectorAll('.metro-line-stroke, .metro-line-casing').forEach((p) => {
          p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; p.style.transitionDelay = '';
        });
      }, 2200);
    } else {
      svg.classList.add('is-drawn');
    }

    // Resaltado al pasar el cursor
    const focusLines = (ids) => {
      svg.classList.add('is-focus');
      svg.querySelectorAll('.metro-line').forEach((g) => g.classList.toggle('is-active', ids.includes(g.dataset.line)));
    };
    const clearFocus = () => {
      svg.classList.remove('is-focus');
      svg.querySelectorAll('.metro-line').forEach((g) => g.classList.remove('is-active'));
    };
    svg.querySelectorAll('.metro-station').forEach((a) => {
      const ids = linesOf(a.dataset.station).map((l) => l.id);
      a.addEventListener('mouseenter', () => focusLines(ids));
      a.addEventListener('focus', () => focusLines(ids));
      a.addEventListener('mouseleave', clearFocus);
      a.addEventListener('blur', clearFocus);
    });
    hubLink.addEventListener('mouseenter', () => focusLines(METRO_LINES.map((l) => l.id)));
    hubLink.addEventListener('mouseleave', clearFocus);

    // ---- Tren -------------------------------------------------------------
    const state = { line: null, s: 0, raf: 0, mode: 'idle', idleTimer: 0 };

    function place(lineId, s) {
      const path = pathById[lineId];
      const p = path.getPointAtLength(s);
      const q = path.getPointAtLength(Math.min(s + 1, samples[lineId].len));
      const r = path.getPointAtLength(Math.max(s - 1, 0));
      const ang = Math.atan2(q.y - r.y, q.x - r.x) * 180 / Math.PI;
      train.setAttribute('transform', `translate(${p.x} ${p.y}) rotate(${ang})`);
      train.style.setProperty('--train-c', 'var(--tacos)');
      state.line = lineId; state.s = s;
    }

    function ride(lineId, from, to, duration, done) {
      cancelAnimationFrame(state.raf);
      const t0 = performance.now();
      const ease = (t) => (t < 0.5 ? 2 * t * t : 1 - (-2 * t + 2) ** 2 / 2);
      const step = (now) => {
        const t = Math.min((now - t0) / duration, 1);
        place(lineId, from + (to - from) * ease(t));
        if (t < 1) state.raf = requestAnimationFrame(step);
        else if (done) done();
      };
      state.raf = requestAnimationFrame(step);
    }

    // Recorrido ocioso: el tren va de línea en línea, despacio
    let idleIdx = 0;
    function idleLoop() {
      if (state.mode !== 'idle') return;
      if (!svg.getBoundingClientRect().height || document.hidden) {
        state.idleTimer = setTimeout(idleLoop, 1500);
        return;
      }
      const line = METRO_LINES[idleIdx % METRO_LINES.length];
      idleIdx++;
      const len = samples[line.id].len;
      train.classList.add('is-on');
      ride(line.id, 0, len, len * 11, () => {
        train.classList.remove('is-on');
        state.idleTimer = setTimeout(idleLoop, 1400);
      });
    }
    function scheduleIdle(delay) {
      clearTimeout(state.idleTimer);
      if (reduceMotion) return;
      state.idleTimer = setTimeout(() => { state.mode = 'idle'; idleLoop(); }, delay);
    }

    // Clic en estación: el tren viaja hasta ella y luego se hace scroll
    svg.querySelectorAll('.metro-station').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.dataset.station;
        const st = METRO_STATIONS[id];
        const target = document.querySelector(st.href);
        if (!target) return;
        e.preventDefault();

        const go = () => {
          markVisited(id);
          history.pushState(null, '', st.href);
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
          scheduleIdle(9000);
        };
        if (reduceMotion) { go(); return; }

        clearTimeout(state.idleTimer);
        state.mode = 'nav';
        // si el tren ya está en una de las líneas de la estación, parte de ahí;
        // si no, "transborda" al punto más cercano de la línea destino
        const lines = linesOf(id).map((l) => l.id);
        const lineId = lines.includes(state.line) ? state.line : lines[0];
        const to = nearestLength(samples[lineId], st.x, st.y);
        let from;
        if (state.line === lineId) from = state.s;
        else if (state.line) {
          const p = pathById[state.line].getPointAtLength(state.s);
          from = nearestLength(samples[lineId], p.x, p.y);
        } else {
          from = nearestLength(samples[lineId], HUB.x + HUB.w / 2, HUB.y + HUB.h / 2);
        }
        const dist = Math.abs(to - from);
        const duration = Math.max(320, Math.min(dist * 1.1, 850));
        train.classList.add('is-on');
        a.classList.add('is-arriving');
        ride(lineId, from, to, duration, () => {
          setTimeout(() => a.classList.remove('is-arriving'), 500);
          go();
        });
      });
    });

    hubLink.addEventListener('click', (e) => {
      const target = document.querySelector(HUB.href);
      if (!target) return;
      e.preventDefault();
      history.pushState(null, '', HUB.href);
      target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
    });

    scheduleIdle(2400);
  }

  // --------------------------------------------------------------------------
  // MÓVIL / TABLET: diagramas de recorrido verticales
  // --------------------------------------------------------------------------
  function buildStrips(container) {
    METRO_LINES.forEach((line) => {
      const strip = document.createElement('div');
      strip.className = 'metro-strip';
      strip.style.setProperty('--c', line.color);
      strip.style.setProperty('--ci', line.ink);

      const rows = line.stations.map((id) => {
        const st = METRO_STATIONS[id];
        const others = linesOf(id).filter((l) => l.id !== line.id);
        const badges = others.map((l) =>
          `<span class="metro-badge" style="--c:${l.color};--ci:${l.ink}">${l.num}</span>`).join('');
        return `
          <li>
            <a href="${st.href}" class="metro-stop${others.length ? ' is-xfer' : ''}" data-station="${id}">
              <span class="metro-stop-node"></span>
              <span class="metro-stop-tile">${iconSVG(st.icon, line.ink)}</span>
              <span class="metro-stop-name" data-i18n="${st.key}">${st.name}</span>
              ${badges ? `<span class="metro-stop-xfer">${badges}</span>` : ''}
            </a>
          </li>`;
      }).join('');

      strip.innerHTML = `
        <div class="metro-strip-head">
          <span class="metro-badge metro-badge-lg">${line.num}</span>
          <span data-i18n="${line.nameKey}">${line.name}</span>
        </div>
        <div class="metro-strip-track">
          <span class="metro-strip-train" aria-hidden="true"></span>
          <ol>${rows}</ol>
        </div>`;
      container.appendChild(strip);
    });

    container.querySelectorAll('.metro-stop').forEach((a) => {
      a.addEventListener('click', (e) => {
        const id = a.dataset.station;
        const target = document.querySelector(METRO_STATIONS[id].href);
        if (!target) return;
        e.preventDefault();
        const track = a.closest('.metro-strip-track');
        const trainEl = track.querySelector('.metro-strip-train');
        const node = a.querySelector('.metro-stop-node');
        const y = node.getBoundingClientRect().top - track.getBoundingClientRect().top + node.offsetHeight / 2;
        trainEl.classList.add('is-on');
        trainEl.style.top = `${y}px`;
        a.classList.add('is-arriving');
        setTimeout(() => {
          a.classList.remove('is-arriving');
          markVisited(id);
          history.pushState(null, '', METRO_STATIONS[id].href);
          target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
        }, reduceMotion ? 0 : 480);
      });
    });
  }

  // --------------------------------------------------------------------------
  // Init
  // --------------------------------------------------------------------------
  const svg = document.getElementById('metro-map');
  const strips = document.getElementById('metro-strips');
  if (svg) setupDesktopInteractions(buildDesktopMap(svg));
  if (strips) buildStrips(strips);

  // Leyenda: mismos números/colores que el mapa
  document.querySelectorAll('[data-metro-legend-lines]').forEach((wrap) => {
    wrap.innerHTML = METRO_LINES.map((l) =>
      `<span class="metro-legend-item"><span class="metro-badge" style="--c:${l.color};--ci:${l.ink}">${l.num}</span><span data-i18n="${l.nameKey}">${l.name}</span></span>`).join('');
  });

  // Una sección cuenta como "visitada" cuando se ve en pantalla
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (en.isIntersecting) {
          const id = Object.keys(METRO_STATIONS).find((k) => METRO_STATIONS[k].href === `#${en.target.id}`);
          if (id) markVisited(id);
        }
      });
    }, { threshold: 0.35 });
    Object.values(METRO_STATIONS).forEach((st) => {
      const t = document.querySelector(st.href);
      if (t) io.observe(t);
    });
  }
  paintVisited();
})();
