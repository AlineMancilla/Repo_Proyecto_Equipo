/* =========================================================================
   DATOS VERIFICADOS DE LOS DOS CÓDIGOS ADJUNTOS (41 COMUNAS URBANAS)
   ========================================================================= */

// Código 1 (Danae): [Comuna, Ingreso promedio (CLP), m² de área verde por habitante, Categoría IPS 2022]
const RAW = [
  ["Recoleta", 748137, 19.6, 1],
  ["Vitacura", 2128023, 19.13, 4],
  ["La Reina", 1587617, 15.35, 4],
  ["Providencia", 1797751, 14.97, 4],
  ["Cerrillos", 822318, 14.53, 2],
  ["Lo Barnechea", 1781918, 14.3, 4],
  ["Huechuraba", 1265786, 10.99, 3],
  ["Colina", 1281069, 9.57, 3],
  ["Padre Hurtado", 873036, 8.26, 2],
  ["La Granja", 679636, 7.9, 1],
  ["Talagante", 869862, 7.5, 2],
  ["Buin", 889886, 7.36, 2],
  ["Lampa", 961260, 6.53, 2],
  ["Las Condes", 1935473, 6.29, 4],
  ["Peñalolén", 1025659, 6.25, 2],
  ["Pedro Aguirre Cerda", 707589, 5.99, 1],
  ["Maipú", 935903, 5.84, 3],
  ["Lo Espejo", 629630, 5.56, 0],
  ["Cerro Navia", 626151, 5.53, 0],
  ["Peñaflor", 879562, 5.11, 2],
  ["Renca", 709407, 5.07, 1],
  ["Melipilla", 702238, 5.05, 1],
  ["Pudahuel", 844696, 5.04, 2],
  ["San Ramón", 657161, 5.03, 0],
  ["San Joaquín", 772440, 5.02, 1],
  ["Puente Alto", 864959, 4.97, 2],
  ["San Bernardo", 785232, 4.45, 1],
  ["Santiago", 1001246, 4.38, 3],
  ["Quilicura", 863021, 4.33, 3],
  ["La Florida", 995239, 4.07, 2],
  ["Quinta Normal", 754050, 4.04, 1],
  ["Macul", 1036119, 3.96, 3],
  ["La Pintana", 595253, 3.83, 0],
  ["Conchalí", 720532, 3.71, 0],
  ["Lo Prado", 687574, 3.48, 1],
  ["Estación Central", 740039, 3.21, 1],
  ["El Bosque", 691029, 2.49, 1],
  ["Ñuñoa", 1568029, 2.15, 4],
  ["La Cisterna", 863400, 1.6, 2],
  ["San Miguel", 1158765, 1.5, 3],
  ["Independencia", 718622, 1.41, 2]
];

const CATS = [
  { n: "Alta Prioridad Social", c: "#602C2C", ink: "#FAF7F2" },
  { n: "Media Alta Prioridad Social", c: "#8C4334", ink: "#FAF7F2" },
  { n: "Media Baja Prioridad Social", c: "#C29243", ink: "#602C2C" },
  { n: "Baja Prioridad Social", c: "#F6E7A6", ink: "#602C2C" },
  { n: "Sin Prioridad Social", c: "#4F6815", ink: "#F6E7A6" }
];

// Código 2 (Danitza): Calidad de zonas verdes por comuna
const rawData = [
  { "COMUNA": "BUIN", "CALIDAD": 22.621272189349114 },
  { "COMUNA": "CERRILLOS", "CALIDAD": 37.733030303030304 },
  { "COMUNA": "CERRO NAVIA", "CALIDAD": 44.51018181818182 },
  { "COMUNA": "COLINA", "CALIDAD": 42.89176470588235 },
  { "COMUNA": "CONCHALÍ", "CALIDAD": 62.35226851851852 },
  { "COMUNA": "EL BOSQUE", "CALIDAD": 58.7936559139785 },
  { "COMUNA": "ESTACIÓN CENTRAL", "CALIDAD": 66.65043010752687 },
  { "COMUNA": "HUECHURABA", "CALIDAD": 31.63511627906977 },
  { "COMUNA": "INDEPENDENCIA", "CALIDAD": 66.33828125 },
  { "COMUNA": "LA CISTERNA", "CALIDAD": 51.26327272727273 },
  { "COMUNA": "LA FLORIDA", "CALIDAD": 58.33439767779391 },
  { "COMUNA": "LA GRANJA", "CALIDAD": 65.82517948717948 },
  { "COMUNA": "LA PINTANA", "CALIDAD": 64.43660583941606 },
  { "COMUNA": "LA REINA", "CALIDAD": 45.082368421052635 },
  { "COMUNA": "LAMPA", "CALIDAD": 31.832222222222224 },
  { "COMUNA": "LAS CONDES", "CALIDAD": 60.408414322250636 },
  { "COMUNA": "LO BARNECHEA", "CALIDAD": 49.68906574394463 },
  { "COMUNA": "LO ESPEJO", "CALIDAD": 52.34125874125874 },
  { "COMUNA": "LO PRADO", "CALIDAD": 37.144400000000005 },
  { "COMUNA": "MACUL", "CALIDAD": 41.92160220994475 },
  { "COMUNA": "MAIPÚ", "CALIDAD": 60.013420822397194 },
  { "COMUNA": "MELIPILLA", "CALIDAD": 57.831160714285716 },
  { "COMUNA": "PADRE HURTADO", "CALIDAD": 56.45089552238806 },
  { "COMUNA": "PEDRO AGUIRRE CERDA", "CALIDAD": 60.34365384615384 },
  { "COMUNA": "PEÑAFLOR", "CALIDAD": 43.88110236220472 },
  { "COMUNA": "PEÑALOLÉN", "CALIDAD": 39.39719262295082 },
  { "COMUNA": "PROVIDENCIA", "CALIDAD": 71.01413461538462 },
  { "COMUNA": "PUDAHUEL", "CALIDAD": 50.92177049180328 },
  { "COMUNA": "PUENTE ALTO", "CALIDAD": 44.866231527093596 },
  { "COMUNA": "QUILICURA", "CALIDAD": 49.63932795698925 },
  { "COMUNA": "QUINTA NORMAL", "CALIDAD": 45.36849056603774 },
  { "COMUNA": "RECOLETA", "CALIDAD": 58.30401234567901 },
  { "COMUNA": "RENCA", "CALIDAD": 58.63163636363636 },
  { "COMUNA": "SAN BERNARDO", "CALIDAD": 62.65081196581196 },
  { "COMUNA": "SAN JOAQUÍN", "CALIDAD": 59.583000000000006 },
  { "COMUNA": "SAN MIGUEL", "CALIDAD": 65.23142857142858 },
  { "COMUNA": "SAN RAMÓN", "CALIDAD": 64.4990977443609 },
  { "COMUNA": "SANTIAGO", "CALIDAD": 50.137692307692305 },
  { "COMUNA": "TALAGANTE", "CALIDAD": 16.86745341614907 },
  { "COMUNA": "VITACURA", "CALIDAD": 62.38537190082645 },
  { "COMUNA": "ÑUÑOA", "CALIDAD": 59.68818181818182 }
];

const calidadMap = new Map(rawData.map(d => [d.COMUNA.toUpperCase(), d.CALIDAD]));
const CLP = d => "$" + Math.round(d).toLocaleString("es-CL");
const fmtDecimal = (n, dec = 2) => n.toFixed(dec).replace(".", ",");

const MERGED_DATA = RAW.map(([comuna, ing, m2, k]) => ({
  comuna,
  ing,
  m2,
  k,
  ipsLabel: CATS[k].n,
  calidad: calidadMap.get(comuna.toUpperCase()) ?? 0
}));

/* =========================================================================
   NAVEGACIÓN ACTIVA AL HACER SCROLL
   ========================================================================= */
const navLinks = Array.from(document.querySelectorAll(".leaf-btn"));
const sectionIds = ["inicio", "areas-verdes", "prioridad", "calidad", "comparacion"];
const sections = sectionIds.map(id => document.getElementById(id));

function updateActiveNav() {
  const scrollY = window.scrollY + 140;
  let current = "inicio";
  sections.forEach(sec => {
    if (sec && sec.offsetTop <= scrollY) {
      current = sec.id;
    }
  });
  navLinks.forEach(link => {
    link.classList.toggle("is-active", link.dataset.nav === current);
  });
}
window.addEventListener("scroll", updateActiveNav, { passive: true });
updateActiveNav();

/* =========================================================================
   CARRUSEL DE 3 FOTOS AÉREAS (Foto 1, Foto 2, Foto 3 + flechas + dots)
   ========================================================================= */
(function initPhotoCarousel() {
  const cards = Array.from(document.querySelectorAll(".photo-card"));
  const dots = Array.from(document.querySelectorAll(".dot-btn"));
  const prevBtn = document.getElementById("prevPhoto");
  const nextBtn = document.getElementById("nextPhoto");
  let activeIndex = 0;

  function setSlide(idx) {
    activeIndex = (idx + cards.length) % cards.length;
    cards.forEach((card, i) => {
      card.classList.toggle("is-focused", i === activeIndex);
    });
    dots.forEach((dot, i) => {
      const on = i === activeIndex;
      dot.classList.toggle("is-active", on);
      dot.setAttribute("aria-selected", String(on));
    });
  }

  prevBtn.addEventListener("click", () => setSlide(activeIndex - 1));
  nextBtn.addEventListener("click", () => setSlide(activeIndex + 1));
  dots.forEach((dot, i) => dot.addEventListener("click", () => setSlide(i)));
  cards.forEach((card, i) => {
    card.addEventListener("click", () => setSlide(i));
    card.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        setSlide(i);
      }
    });
  });
})();

/* =========================================================================
   GRÁFICO 1 (DANAE): DISPERSIÓN INGRESOS VS ÁREAS VERDES (D3.js)
   ========================================================================= */
(function initDanaeChart() {
  const DATA = RAW.map(([comuna, ing, m2, k]) => ({ comuna, ing, m2, k }));
  const OMS = 9;
  const R = 9;
  const active = new Set(CATS.map((_, i) => i));
  const BR = "#602C2C";

  function drawCoin(g, k, r) {
    const c = CATS[k];
    g.append("circle").attr("r", r).attr("fill", c.c).attr("stroke", BR).attr("stroke-width", 1);
    g.append("circle").attr("r", r * 0.74).attr("fill", "none").attr("stroke", c.ink).attr("stroke-opacity", 0.6).attr("stroke-width", 0.9);
    g.append("text").text("$").attr("text-anchor", "middle").attr("dy", "0.35em").attr("fill", c.ink)
      .attr("font-size", r * 1.05).attr("font-weight", 800).attr("font-family", "Figtree,sans-serif").style("pointer-events", "none");
  }

  const leg = d3.select("#legend");
  CATS.forEach((c, i) => {
    const b = leg.append("button").attr("class", "chip").attr("type", "button").attr("aria-pressed", "true");
    const s = b.append("svg").attr("width", 20).attr("height", 20).attr("viewBox", "-10 -10 20 20");
    drawCoin(s.append("g"), i, 9);
    b.append("span").text(c.n);
    b.on("click", () => {
      if (active.has(i)) {
        if (active.size > 1) active.delete(i);
      } else {
        active.add(i);
      }
      leg.selectAll(".chip").each(function(_, j) {
        const on = active.has(j);
        d3.select(this).classed("off", !on).attr("aria-pressed", on);
      });
      update();
    });
  });

  const root = d3.select("#chart");
  const tip = d3.select("#tip");
  let svg;

  function render() {
    root.select("svg").remove();
    const W = Math.max(320, root.node().clientWidth);
    const H = Math.round(Math.min(520, Math.max(380, W * 0.58)));
    const m = { t: 20, r: 22, b: 54, l: 56 };
    const iw = W - m.l - m.r;
    const ih = H - m.t - m.b;
    const x = d3.scaleLinear().domain([500000, 2250000]).range([0, iw]);
    const y = d3.scaleLinear().domain([0, 22]).range([ih, 0]);

    svg = root.insert("svg", "#tip")
      .attr("class", "main")
      .attr("viewBox", `0 0 ${W} ${H}`)
      .attr("role", "img")
      .attr("aria-label", "Gráfico de dispersión de ingreso promedio versus áreas verdes por habitante");

    const g = svg.append("g").attr("transform", `translate(${m.l},${m.t})`);
    const xt = W < 560 ? [600000, 1000000, 1400000, 1800000, 2200000] : d3.range(600000, 2300000, 200000);

    g.append("g").attr("class", "grid").call(d3.axisLeft(y).ticks(5).tickSize(-iw).tickFormat(""));
    g.append("g").attr("class", "axis").attr("transform", `translate(0,${ih})`)
      .call(d3.axisBottom(x).tickValues(xt).tickFormat(d => W < 560 ? "$" + (d / 1e6).toFixed(1).replace(".", ",") + "M" : CLP(d)));
    g.append("g").attr("class", "axis").call(d3.axisLeft(y).ticks(5));
    g.append("text").attr("class", "atitle").attr("x", iw / 2).attr("y", ih + 44).attr("text-anchor", "middle").text("Ingreso promedio imponible (CLP)");
    g.append("text").attr("class", "atitle").attr("transform", "rotate(-90)").attr("x", -ih / 2).attr("y", -40).attr("text-anchor", "middle").text("Áreas verdes (m² por habitante)");

    // Línea OMS
    g.append("line")
      .attr("x1", 0).attr("x2", iw)
      .attr("y1", y(OMS)).attr("y2", y(OMS))
      .attr("stroke", CATS[4].c)
      .attr("stroke-width", 1.5)
      .attr("stroke-dasharray", "6 4");
    g.append("text")
      .attr("class", "who")
      .attr("x", iw).attr("y", y(OMS) - 6)
      .attr("text-anchor", "end")
      .text("Recomendación OMS: 9 m²/hab");

    // Posiciones con repulsión para evitar solapamiento
    const nodes = DATA.map(d => ({ ...d, tx: x(d.ing), ty: y(d.m2), x: x(d.ing), y: y(d.m2) }));
    const sim = d3.forceSimulation(nodes)
      .force("x", d3.forceX(d => d.tx).strength(0.35))
      .force("y", d3.forceY(d => d.ty).strength(0.35))
      .force("c", d3.forceCollide(R + 1.6).strength(1).iterations(4))
      .stop();
    for (let i = 0; i < 400; i++) {
      sim.tick();
      nodes.forEach(n => {
        n.x = Math.max(R, Math.min(iw - R, n.x));
        n.y = Math.max(R, Math.min(ih - R, n.y));
      });
    }

    const coins = g.append("g").selectAll("g").data(nodes).join("g")
      .attr("class", "coin")
      .attr("transform", d => `translate(${d.x},${d.y})`)
      .attr("tabindex", 0)
      .attr("aria-label", d => `${d.comuna}: ${CLP(d.ing)}, ${d.m2.toFixed(2)} metros cuadrados por habitante`);

    coins.each(function(d) {
      drawCoin(d3.select(this).append("g").attr("class", "s"), d.k, R);
    });

    const show = (e, d) => {
      const [px, py] = d3.pointer(e, root.node());
      tip.html(`<b>${d.comuna}</b><span>Ingreso promedio:</span> ${CLP(d.ing)}<br><span>Áreas verdes:</span> ${d.m2.toFixed(2).replace(".", ",")} m²/hab<br><span>Prioridad social:</span> ${CATS[d.k].n.replace(" Prioridad Social", "")}`);
      const tw = tip.node().offsetWidth;
      tip.style("left", Math.min(W - tw - 4, Math.max(4, px + 14)) + "px")
        .style("top", Math.max(4, py - 70) + "px")
        .style("opacity", 1);
      coins.style("opacity", c => c === d ? 1 : (active.has(c.k) ? 0.35 : 0));
      d3.select(e.currentTarget).raise().select(".s").attr("transform", "scale(1.5)");
    };

    const hide = e => {
      tip.style("opacity", 0);
      d3.select(e.currentTarget).select(".s").attr("transform", null);
      update();
    };

    coins.on("mousemove", (e, d) => show(e, d))
      .on("mouseleave", hide)
      .on("focus", (e, d) => {
        const r = e.currentTarget.getBoundingClientRect();
        show({ currentTarget: e.currentTarget, clientX: r.left + r.width / 2, clientY: r.top + r.height / 2 }, d);
      })
      .on("blur", hide);

    update();
  }

  function update() {
    svg.selectAll(".coin")
      .style("opacity", d => active.has(d.k) ? 1 : 0)
      .style("pointer-events", d => active.has(d.k) ? "all" : "none");
  }

  if (typeof d3 !== "undefined") {
    render();
    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(render, 120);
    });
  } else {
    document.getElementById("chart").innerHTML = '<div style="color:#602C2C;font-weight:700;padding:16px;">Error al cargar la librería de visualización D3.</div>';
  }
})();

/* =========================================================================
   GRÁFICO 2 (DANITZA): PROMEDIO DE CALIDAD POR COMUNA (Vega-Lite)
   ========================================================================= */
(function initDanitzaChart() {
  function colorForCalidad(val) {
    if (val < 40) return "#602C2C";
    if (val < 58) return "#8C5A2B";
    return "#4F6815";
  }

  function makeHandPlantDataUri(strokeColor) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none">
      <circle cx="50" cy="50" r="45" stroke="${strokeColor}" stroke-width="5.5"/>
      <path d="M50 74V30" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M50 18C45 23 45 29 50 32C55 29 55 23 50 18Z" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 39L37 32C37 38 41 42 50 42Z" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 39L63 32C63 38 59 42 50 42Z" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 51L37 44C37 50 41 54 50 54Z" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M50 51L63 44C63 50 59 54 50 54Z" stroke="${strokeColor}" stroke-width="4" stroke-linejoin="round"/>
      <path d="M25 65C30 59 38 58 46 60L64 57C68 56.5 71 59 70 62.5C69 65 65 66.5 61 67.5L44 76C39 78.5 34 77 31 73L25 65Z" stroke="${strokeColor}" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
    return "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svg);
  }

  const orderedComunas = [...rawData]
    .sort((a, b) => b.CALIDAD - a.CALIDAD)
    .map(d => d.COMUNA);

  const step = 10;
  const pictogramRows = [];
  rawData.forEach(d => {
    const count = Math.max(1, Math.round(d.CALIDAD / step));
    const hexColor = colorForCalidad(d.CALIDAD);
    const iconUri = makeHandPlantDataUri(hexColor);
    for (let i = 0; i < count; i++) {
      pictogramRows.push({
        COMUNA: d.COMUNA,
        CALIDAD: d.CALIDAD,
        ICONOS_MOSTRADOS: count,
        UNIDAD_PUNTOS: (i + 0.5) * step,
        ICONO_URL: iconUri
      });
    }
  });

  const visEl = document.getElementById("vis");
  const chartWidth = Math.max(480, Math.min(760, (visEl.parentElement.clientWidth || 720) - 180));

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "background": "#FAF7F2",
    "padding": { "top": 12, "left": 16, "right": 24, "bottom": 16 },
    "width": chartWidth,
    "height": 860,
    "config": {
      "view": { "stroke": null },
      "font": "Montserrat",
      "axis": {
        "labelFont": "Montserrat",
        "titleFont": "Montserrat",
        "labelColor": "#602C2C",
        "titleColor": "#602C2C",
        "domainColor": "#602C2C",
        "tickColor": "#602C2C",
        "gridColor": "rgba(96, 44, 44, 0.14)",
        "gridWidth": 1
      }
    },
    "data": {
      "values": pictogramRows
    },
    "mark": {
      "type": "image",
      "width": 15,
      "height": 15
    },
    "encoding": {
      "y": {
        "field": "COMUNA",
        "type": "nominal",
        "sort": orderedComunas,
        "title": "Comuna (mayor a menor calidad)",
        "axis": {
          "grid": true,
          "labelFontSize": 10.5,
          "titleFontSize": 12,
          "titleFontWeight": 700
        }
      },
      "x": {
        "field": "UNIDAD_PUNTOS",
        "type": "quantitative",
        "title": "Promedio de Índice General de Calidad (cada ícono = 10 pts)",
        "scale": { "domain": [0, 80] },
        "axis": {
          "grid": false,
          "values": [0, 10, 20, 30, 40, 50, 60, 70, 80],
          "labelFontSize": 11,
          "titleFontSize": 12,
          "titleFontWeight": 700
        }
      },
      "url": {
        "field": "ICONO_URL",
        "type": "nominal"
      },
      "tooltip": [
        { "field": "COMUNA", "type": "nominal", "title": "Comuna" },
        { "field": "CALIDAD", "type": "quantitative", "title": "Índice General Calidad", "format": ".2f" },
        { "field": "ICONOS_MOSTRADOS", "type": "quantitative", "title": "Íconos mostrados" }
      ]
    }
  };

  if (typeof vegaEmbed !== "undefined") {
    vegaEmbed("#vis", spec, { "mode": "vega-lite", "actions": false }).catch(error => {
      visEl.innerHTML = `<div style="color:#602C2C;font-weight:700;">Error al cargar la visualización: ${error.message}</div>`;
    });
  } else {
    visEl.innerHTML = '<div style="color:#602C2C;font-weight:700;padding:16px;">Error al cargar Vega-Lite.</div>';
  }
})();

/* =========================================================================
   GRÁFICO 3 (NUEVO - UNTITLED6): ÁREAS VERDES POR HABITANTE (1 ÁRBOL = 1 M²)
   ========================================================================= */
(function initAreasVerdesTreeChart() {
  const ARBOL_VERDE_URI = "data:image/png;base64,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";
  const ARBOL_ALERTA_URI = "data:image/png;base64,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";

  const areasVerdesRows = [...RAW]
    .sort((a, b) => b[2] - a[2])
    .map(([comuna, , m2]) => ({
      "COMUNA": comuna.toUpperCase(),
      "VALOR DEL INDICADOR EN M2": m2,
      "imagen_url": m2 < 5 ? ARBOL_ALERTA_URI : ARBOL_VERDE_URI
    }));

  const visAreasEl = document.getElementById("visAreasVerdes");

  const spec = {
    "$schema": "https://vega.github.io/schema/vega-lite/v5.20.1.json",
    "background": "#FAF7F2",
    "padding": { "top": 12, "left": 14, "right": 18, "bottom": 14 },
    "config": {
      "view": { "stroke": null, "continuousWidth": 300, "continuousHeight": 300 },
      "font": "Montserrat",
      "axis": {
        "labelFont": "Montserrat",
        "titleFont": "Montserrat",
        "labelColor": "#602C2C",
        "titleColor": "#602C2C",
        "domainColor": "#602C2C",
        "tickColor": "#602C2C",
        "gridColor": "rgba(96, 44, 44, 0.12)",
        "gridWidth": 1
      }
    },
    "data": { "values": areasVerdesRows },
    "mark": {
      "type": "image",
      "cursor": "pointer",
      "height": 20,
      "width": 20
    },
    "encoding": {
      "opacity": {
        "condition": [
          {
            "test": { "or": [{ "param": "select" }, { "param": "highlight" }] },
            "value": 1
          }
        ],
        "value": 0.85
      },
      "tooltip": [
        { "field": "COMUNA", "title": "Comuna", "type": "nominal" },
        { "field": "VALOR DEL INDICADOR EN M2", "title": "Indicador (m²)", "type": "quantitative" },
        { "field": "num_arboles", "title": "Total Árboles (1 m² c/u)", "type": "quantitative" }
      ],
      "url": { "field": "imagen_url", "type": "nominal" },
      "x": {
        "axis": { "labelAngle": -45, "labelFontSize": 10.5, "titleFontSize": 12, "titleFontWeight": 700 },
        "field": "COMUNA",
        "sort": null,
        "title": "Comuna",
        "type": "ordinal"
      },
      "y": {
        "axis": { "tickMinStep": 1, "labelFontSize": 11, "titleFontSize": 12, "titleFontWeight": 700 },
        "field": "indice_arbol",
        "scale": { "domain": [0.5, 20.5] },
        "title": "Metros cuadrados de áreas verdes (1 árbol = 1 m²)",
        "type": "quantitative"
      }
    },
    "height": 550,
    "params": [
      {
        "name": "select",
        "select": { "type": "point", "fields": ["COMUNA"], "on": "click" }
      },
      {
        "name": "highlight",
        "select": { "type": "point", "fields": ["COMUNA"], "on": "pointerover" }
      }
    ],
    "transform": [
      { "calculate": "round(datum['VALOR DEL INDICADOR EN M2'])", "as": "num_arboles" },
      { "calculate": "sequence(1, datum.num_arboles + 1)", "as": "indice_arbol" },
      { "flatten": ["indice_arbol"] }
    ],
    "width": 1107
  };

  if (typeof vegaEmbed !== "undefined") {
    vegaEmbed("#visAreasVerdes", spec, { "mode": "vega-lite", "actions": false }).catch(error => {
      visAreasEl.innerHTML = `<div style="color:#602C2C;font-weight:700;">Error al cargar la visualización: ${error.message}</div>`;
    });
  } else {
    visAreasEl.innerHTML = '<div style="color:#602C2C;font-weight:700;padding:16px;">Error al cargar Vega-Lite.</div>';
  }
})();

/* =========================================================================
   COMPARACIÓN DIRECTA ENTRE DOS COMUNAS
   ========================================================================= */
(function initComparator() {
  const selA = document.getElementById("selectComunaA");
  const selB = document.getElementById("selectComunaB");
  const boxA = document.getElementById("metricsComunaA");
  const boxB = document.getElementById("metricsComunaB");
  const verdictEl = document.getElementById("compareVerdict");

  const sortedNames = [...MERGED_DATA].sort((a, b) => a.comuna.localeCompare(b.comuna, "es"));

  sortedNames.forEach(d => {
    const optA = document.createElement("option");
    optA.value = d.comuna;
    optA.textContent = d.comuna;
    selA.appendChild(optA);

    const optB = document.createElement("option");
    optB.value = d.comuna;
    optB.textContent = d.comuna;
    selB.appendChild(optB);
  });

  // Comunas mencionadas en la bajada: Lo Barnechea (La Dehesa) vs Puente Alto
  selA.value = "Lo Barnechea";
  selB.value = "Puente Alto";

  function renderMetrics(target, d) {
    const omsDiff = d.m2 - 9;
    const omsText = omsDiff >= 0
      ? `+${fmtDecimal(omsDiff)} m² sobre la norma OMS`
      : `${fmtDecimal(Math.abs(omsDiff))} m² bajo la norma OMS`;

    target.innerHTML = `
      <div class="metric-cell">
        <div class="metric-label">Áreas verdes</div>
        <div class="metric-value ${d.m2 >= 9 ? "olive" : ""}">${fmtDecimal(d.m2)} m²/hab</div>
        <div class="metric-note">${omsText}</div>
      </div>
      <div class="metric-cell">
        <div class="metric-label">Índice General de Calidad</div>
        <div class="metric-value ${d.calidad >= 58 ? "olive" : ""}">${fmtDecimal(d.calidad)} pts</div>
        <div class="metric-note">${Math.max(1, Math.round(d.calidad / 10))} íconos (escala 10 pts)</div>
      </div>
      <div class="metric-cell">
        <div class="metric-label">Ingreso promedio imponible</div>
        <div class="metric-value">${CLP(d.ing)}</div>
        <div class="metric-note">AFC 2020 ÷ 10</div>
      </div>
      <div class="metric-cell">
        <div class="metric-label">Prioridad social (IPS 2022)</div>
        <div class="metric-value" style="font-size:15px;padding-top:4px;">${d.ipsLabel.replace(" Prioridad Social", "")}</div>
        <div class="metric-note">Categoría IPS</div>
      </div>
    `;
  }

  function updateCompare() {
    const a = MERGED_DATA.find(d => d.comuna === selA.value);
    const b = MERGED_DATA.find(d => d.comuna === selB.value);
    if (!a || !b) return;

    renderMetrics(boxA, a);
    renderMetrics(boxB, b);

    const m2Ratio = b.m2 > 0 ? (a.m2 / b.m2) : 0;
    const ingRatio = b.ing > 0 ? (a.ing / b.ing) : 0;
    const calDiff = a.calidad - b.calidad;

    if (a.comuna === b.comuna) {
      verdictEl.innerHTML = `Selecciona dos comunas distintas para contrastar superficie verde por habitante, ingresos promedio y calidad de zonas verdes.`;
      return;
    }

    const greenLeader = a.m2 >= b.m2 ? a : b;
    const greenOther = a.m2 >= b.m2 ? b : a;
    const ratioDisplay = fmtDecimal(greenLeader.m2 / greenOther.m2, 1);

    verdictEl.innerHTML = `<strong>${greenLeader.comuna}</strong> cuenta con <strong>${ratioDisplay} veces</strong> más superficie de áreas verdes por habitante que <strong>${greenOther.comuna}</strong> (${fmtDecimal(greenLeader.m2)} vs. ${fmtDecimal(greenOther.m2)} m²/hab). En ingresos promedio, la relación entre ${a.comuna} y ${b.comuna} es de ${fmtDecimal(ingRatio, 1)}x (${CLP(a.ing)} vs. ${CLP(b.ing)}), y en el Índice General de Calidad la diferencia es de ${fmtDecimal(Math.abs(calDiff))} puntos (${fmtDecimal(a.calidad)} vs. ${fmtDecimal(b.calidad)} pts).`;
  }

  selA.addEventListener("change", updateCompare);
  selB.addEventListener("change", updateCompare);
  updateCompare();
})();
