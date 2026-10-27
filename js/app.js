/* Remember Kit — lógica del sitio. No hace falta editar este archivo:
   los datos están en config.js y productos.js. */
(function () {
  const C = window.RK_CONFIG;
  const P = (window.RK_PRODUCTOS || []).filter((p) => p.visible !== false);
  const CATS = window.RK_CATEGORIAS || [];
  const $ = (s, el = document) => el.querySelector(s);

  /* ---------- Utilidades ---------- */
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const money = (n) => "$ " + Number(n).toLocaleString("es-AR", { maximumFractionDigits: 0 });
  const precioFinal = (p) => p.precioOferta || p.precio;

  // Imagen: primero la copia local (img/...), si no existe usa el CDN de Wix.
  function imgLocal(ref) {
    if (/^(img\/|media\/|https?:)/.test(ref)) return ref;
    return "img/" + ref.replace(/\.(png|jpe?g|webp)$/i, "") + ".webp";
  }
  function imgWix(ref, w = 1200) {
    return `https://static.wixstatic.com/media/${ref}/v1/fit/w_${w},h_${w},q_80/file.webp`;
  }
  function img(ref, alt = "", cls = "", attrs = "") {
    const remote = /^(img\/|media\/|https?:)/.test(ref) ? "" : ` data-wix="${esc(ref)}"`;
    return `<img src="${esc(imgLocal(ref))}"${remote} alt="${esc(alt)}" class="${cls}" loading="lazy" decoding="async" ${attrs}>`;
  }
  // Respaldo global para cualquier <img data-wix> que no se encuentre localmente
  document.addEventListener("error", (e) => {
    const t = e.target;
    if (t.tagName === "IMG" && t.dataset.wix && !t.dataset.fb) {
      t.dataset.fb = "1";
      t.src = imgWix(t.dataset.wix);
    }
  }, true);
  window.RK_IMG = { img, imgLocal, imgWix };

  const waLink = (msg) => `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(msg)}`;

  /* ---------- Meta Pixel ---------- */
  function pixel(ev, data, custom) {
    try { window.fbq && window.fbq(custom ? "trackCustom" : "track", ev, data || {}); } catch (_) {}
  }
  if (C.metaPixelId) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments) }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s) }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    window.fbq("init", C.metaPixelId);
    window.fbq("track", "PageView");
  }
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[data-track]");
    if (!a) return;
    const p = P.find((x) => x.id === a.dataset.prod);
    const data = p ? { content_ids: [p.id], content_name: p.nombre, content_type: "product", value: precioFinal(p), currency: "ARS" } : {};
    if (a.dataset.track === "mp") pixel("InitiateCheckout", data);
    if (a.dataset.track === "wa") pixel("Contact", data);
    if (a.dataset.track === "ml") pixel("ClickMercadoLibre", data, true);
  });

  /* ---------- Header / footer ---------- */
  const page = document.body.dataset.page;
  const navItem = (href, label, key) => `<a href="${href}"${page === key ? ' aria-current="page"' : ""}>${label}</a>`;

  const waIcon = `<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.4.8 3.2.6a2.8 2.8 0 0 0 1.8-1.3 2.3 2.3 0 0 0 .2-1.3c-.1-.1-.2-.2-.5-.3Z"/></svg>`;
  window.RK_WAICON = waIcon;

  const header = $("#site-header");
  if (header) {
    header.innerHTML = `
      <div class="announce"><div class="wrap">${esc(C.anuncio)}</div></div>
      <div class="nav-bar"><div class="wrap nav">
        <a href="./" class="logo" aria-label="Remember Kit, inicio">${img("8713cb_ff6d7616b0634d79af1bd8ad1e45ab3d~mv2.png", "Remember Hands Kit", "", 'loading="eager" width="180" height="60"')}</a>
        <button class="menu-btn" id="menu-btn" aria-expanded="false" aria-controls="menu">Menú</button>
        <nav id="menu" class="menu">
          ${navItem("./", "Inicio", "home")}
          ${navItem("productos.html", "Productos", "productos")}
          ${navItem("quienes-somos.html", "Quiénes somos", "nosotros")}
          <a href="${waLink("Hola! Tengo una consulta sobre los kits Remember.")}" target="_blank" rel="noopener" data-track="wa">Contacto</a>
        </nav>
      </div></div>`;
    const btn = $("#menu-btn");
    btn.addEventListener("click", () => {
      const open = header.classList.toggle("open");
      btn.setAttribute("aria-expanded", open);
    });
  }

  const footer = $("#site-footer");
  if (footer) {
    const y = new Date().getFullYear();
    footer.innerHTML = `
      <div class="wave-top" aria-hidden="true"></div>
      <div class="wrap foot-grid">
        <div>
          ${img("8713cb_ff6d7616b0634d79af1bd8ad1e45ab3d~mv2.png", "Remember Kit", "foot-logo")}
          <p>Kits para crear en casa una escultura de las manos de las personas que más querés.</p>
        </div>
        <div>
          <h3>Contacto</h3>
          <p><a href="${waLink("Hola! Tengo una consulta.")}" target="_blank" rel="noopener" data-track="wa">WhatsApp ${esc(C.whatsappVisible)}</a></p>
          ${C.whatsapp2Visible ? `<p>WhatsApp ${esc(C.whatsapp2Visible)}</p>` : ""}
          <p><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></p>
          <p><a href="${esc(C.instagram)}" target="_blank" rel="noopener">Instagram @remember.kit</a></p>
        </div>
        <div>
          <h3>Retiro sin cargo</h3>
          ${C.retiro.puntos.map((p) => `<p>${esc(p)}</p>`).join("")}
          <p class="muted">${esc(C.retiro.horario)}</p>
        </div>
        <div>
          <h3>Tienda</h3>
          <p><a href="productos.html">Todos los kits</a></p>
          ${CATS.map((c) => `<p><a href="productos.html#${c.id}">${esc(c.nombre)}</a></p>`).join("")}
        </div>
      </div>
      <div class="wrap foot-legal">© ${y} Remember Kit · Buenos Aires, Argentina</div>`;
  }

  // Botón flotante de WhatsApp
  const fab = document.createElement("a");
  fab.className = "wa-fab";
  fab.href = waLink("Hola! Quiero info sobre los kits Remember.");
  fab.target = "_blank"; fab.rel = "noopener";
  fab.dataset.track = "wa";
  fab.setAttribute("aria-label", "Escribinos por WhatsApp");
  fab.innerHTML = waIcon;
  document.body.appendChild(fab);

  /* ---------- Tarjeta de producto ---------- */
  function card(p) {
    const oferta = p.precioOferta && p.precioOferta < p.precio;
    return `<article class="card">
      <a href="producto.html?id=${encodeURIComponent(p.id)}" class="card-link">
        <div class="card-img">${img(p.imagenes[0], p.nombre)}${p.etiqueta ? `<span class="tag">${esc(p.etiqueta)}</span>` : ""}</div>
        <div class="card-body">
          <h3>${esc(p.nombre)}</h3>
          <p class="price">${oferta ? `<s>${money(p.precio)}</s> ` : ""}<strong>${money(precioFinal(p))}</strong></p>
          ${p.precioTransferencia ? `<p class="transfer">${money(p.precioTransferencia)} por transferencia</p>` : ""}
        </div>
      </a>
    </article>`;
  }
  window.RK_CARD = card;

  /* ---------- Inicio ---------- */
  const grid = $("#product-grid");
  if (grid && page === "home") grid.innerHTML = P.filter((p) => p.categoria !== "repuestos").map(card).join("");

  /* ---------- Productos (con filtro por categoría) ---------- */
  if (page === "productos") {
    const tabs = $("#cat-tabs");
    const g = $("#product-grid");
    const usadas = CATS.filter((c) => P.some((p) => p.categoria === c.id));
    tabs.innerHTML = `<button data-cat="">Todos</button>` + usadas.map((c) => `<button data-cat="${c.id}">${esc(c.nombre)}</button>`).join("");
    const show = () => {
      const cat = location.hash.slice(1);
      const valid = usadas.some((c) => c.id === cat) ? cat : "";
      tabs.querySelectorAll("button").forEach((b) => b.setAttribute("aria-pressed", b.dataset.cat === valid));
      const list = valid ? P.filter((p) => p.categoria === valid) : P;
      g.innerHTML = list.map(card).join("");
      $("#cat-title").textContent = valid ? "Kits " + usadas.find((c) => c.id === valid).nombre : "Todos los productos";
    };
    tabs.addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (!b) return;
      history.replaceState(null, "", b.dataset.cat ? "#" + b.dataset.cat : location.pathname);
      show();
    });
    window.addEventListener("hashchange", show);
    show();
  }

  /* ---------- Ficha de producto ---------- */
  function renderDesc(txt) {
    let html = "", inList = false;
    for (const raw of txt.split("\n")) {
      const line = raw.trim();
      if (!line) continue;
      if (line.startsWith("- ")) {
        if (!inList) { html += "<ul>"; inList = true; }
        html += `<li>${esc(line.slice(2))}</li>`;
        continue;
      }
      if (inList) { html += "</ul>"; inList = false; }
      html += line.startsWith("## ") ? `<h3>${esc(line.slice(3))}</h3>` : `<p>${esc(line)}</p>`;
    }
    return html + (inList ? "</ul>" : "");
  }

  if (page === "producto") {
    const id = new URLSearchParams(location.search).get("id");
    const p = P.find((x) => x.id === id || (x.aliasWix || []).includes(id));
    const root = $("#product");
    if (!p) {
      root.innerHTML = `<div class="empty"><h1>No encontramos ese producto</h1><p><a class="btn" href="productos.html">Ver todos los kits</a></p></div>`;
      return;
    }
    document.title = p.nombre + " | Remember Kit";
    const md = document.querySelector('meta[name="description"]');
    if (md) md.content = p.resumen;
    const oferta = p.precioOferta && p.precioOferta < p.precio;
    const precio = precioFinal(p);
    const msg = `Hola! Quiero comprar el ${p.nombre} (${money(precio)}). ¿Cómo sigo?`;
    const t = C.transferencia;
    const relacionados = P.filter((x) => x.id !== p.id && x.categoria !== "repuestos").slice(0, 4);

    root.innerHTML = `
      <nav class="crumbs wrap"><a href="./">Inicio</a> / <a href="productos.html#${p.categoria}">${esc((CATS.find((c) => c.id === p.categoria) || {}).nombre || "Productos")}</a></nav>
      <div class="wrap pdp">
        <div class="gallery">
          <div class="g-main">${img(p.imagenes[0], p.nombre, "", 'id="g-main" loading="eager"')}</div>
          ${p.imagenes.length > 1 ? `<div class="g-thumbs">${p.imagenes.map((r, i) => `<button data-i="${i}" aria-label="Ver foto ${i + 1}"${i === 0 ? ' aria-current="true"' : ""}>${img(r, "")}</button>`).join("")}</div>` : ""}
        </div>
        <div class="buy">
          ${p.etiqueta ? `<span class="tag static">${esc(p.etiqueta)}</span>` : ""}
          <h1>${esc(p.nombre)}</h1>
          <p class="lead">${esc(p.resumen)}</p>
          <p class="price big">${oferta ? `<s>${money(p.precio)}</s> ` : ""}<strong>${money(precio)}</strong></p>
          ${p.precioTransferencia ? `<p class="transfer">${money(p.precioTransferencia)} pagando por transferencia</p>` : ""}
          <ul class="perks">
            ${p.cuotas ? "<li>3 cuotas sin interés</li>" : ""}
            ${p.envioGratis ? "<li>Envío gratis a todo el país</li>" : "<li>Envíos a todo el país</li>"}
            <li>Retiro sin cargo en CABA</li>
          </ul>
          <div class="ctas">
            ${p.mercadoPago ? `<a class="btn btn-mp" href="${esc(p.mercadoPago)}" target="_blank" rel="noopener" data-track="mp" data-prod="${p.id}">Pagar con Mercado Pago</a>` : ""}
            <a class="btn ${p.mercadoPago ? "btn-wa-out" : "btn-wa"}" href="${waLink(msg)}" target="_blank" rel="noopener" data-track="wa" data-prod="${p.id}">${waIcon} Comprar por WhatsApp</a>
            ${p.mercadoLibre ? `<a class="btn btn-ml" href="${esc(p.mercadoLibre)}" target="_blank" rel="noopener" data-track="ml" data-prod="${p.id}">Comprar en Mercado Libre</a>` : ""}
          </div>
          <details class="acc" open><summary>Descripción</summary><div class="desc">${renderDesc(p.descripcion)}</div></details>
          ${p.categoria !== "repuestos" ? `<details class="acc"><summary>¿Te salió mal a la primera?</summary><div class="desc">
            <p>Sin problema: la primera vez puede traer sorpresas. Tenemos un kit de repuesto con todos los insumos para volver a intentarlo (sin la base de madera, que se reutiliza).</p>
            <p><a href="producto.html?id=repuesto-kit">Repuesto Kit Parejas</a> · <a href="producto.html?id=extra-repuesto-kit-familias-materiales">Repuesto Kit Familias</a></p></div></details>` : ""}
          <details class="acc"><summary>Envíos y retiros</summary><div class="desc">
            <p>Enviamos a todo el país por Correo Argentino y Andreani. Despachamos dentro de las 24 hs hábiles de acreditado el pago; la entrega estimada es de 2 días hábiles desde el despacho. Te mandamos el número de seguimiento por email.</p>
            <h3>Retiro sin cargo</h3>
            <ul>${C.retiro.puntos.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
            <p>Listo para retirar dentro de las 24 hs hábiles de acreditado el pago. ${esc(C.retiro.horario)}. Presentá el comprobante o número de pedido; si retira otra persona, necesita la autorización del titular.</p></div></details>
          <details class="acc"><summary>Formas de pago</summary><div class="desc">
            <p><strong>Mercado Pago:</strong> tarjeta de crédito, débito o dinero en cuenta.</p>
            <p><strong>Transferencia bancaria (15% OFF):</strong> ${t.alias ? `Alias <strong>${esc(t.alias)}</strong>${t.cvu ? ` · CVU ${esc(t.cvu)}` : ""} · Titular ${esc(t.titular)}.` : "te pasamos los datos por WhatsApp."} Envianos el comprobante por WhatsApp y confirmamos tu compra.</p>
            <p><strong>Pago al retirar:</strong> si elegís retiro, podés abonar en el momento.</p></div></details>
        </div>
      </div>
      ${relacionados.length ? `<section class="section"><div class="wrap"><h2 class="h2">También te puede gustar</h2><div class="grid">${relacionados.map(card).join("")}</div></div></section>` : ""}`;

    const main = $("#g-main");
    root.querySelectorAll(".g-thumbs button").forEach((b) => b.addEventListener("click", () => {
      const ref = p.imagenes[+b.dataset.i];
      main.dataset.fb = "";
      main.dataset.wix = /^(img\/|media\/|https?:)/.test(ref) ? "" : ref;
      main.src = imgLocal(ref);
      root.querySelectorAll(".g-thumbs button").forEach((x) => x.removeAttribute("aria-current"));
      b.setAttribute("aria-current", "true");
    }));

    pixel("ViewContent", { content_ids: [p.id], content_name: p.nombre, content_type: "product", value: precio, currency: "ARS" });

    // Datos estructurados para Google
    const ld = document.createElement("script");
    ld.type = "application/ld+json";
    ld.textContent = JSON.stringify({
      "@context": "https://schema.org/", "@type": "Product", name: p.nombre, description: p.resumen,
      image: p.imagenes.map((r) => new URL(imgLocal(r), location.href).href), brand: { "@type": "Brand", name: "Remember Kit" },
      offers: { "@type": "Offer", priceCurrency: "ARS", price: precio, availability: "https://schema.org/InStock", url: location.href },
    });
    document.head.appendChild(ld);
  }

  /* ---------- Video del inicio ---------- */
  const vid = $("#home-video");
  if (vid) {
    // Si el video todavía no está en media/, se oculta la sección
    vid.addEventListener("error", () => { const s = vid.closest("section"); if (s) s.hidden = true; });
    const poster = new Image();
    poster.onerror = () => { vid.poster = imgWix("4d2cf1_292849098573445b8f4439083b106ce8f002.jpg", 1280); };
    poster.src = vid.getAttribute("poster");
  }

  /* ---------- Contacto (Quiénes somos) ---------- */
  const cc = $("#contact-cards");
  if (cc) {
    cc.innerHTML = `
      <div><h3>WhatsApp</h3><p><a href="${waLink("Hola! Tengo una consulta.")}" target="_blank" rel="noopener" data-track="wa">${esc(C.whatsappVisible)}</a></p>${C.whatsapp2Visible ? `<p>${esc(C.whatsapp2Visible)}</p>` : ""}</div>
      <div><h3>Correo</h3><p><a href="mailto:${esc(C.email)}">${esc(C.email)}</a></p><p><a href="${esc(C.instagram)}" target="_blank" rel="noopener">Instagram @remember.kit</a></p></div>
      <div><h3>Retiros sin cargo</h3>${C.retiro.puntos.map((x) => `<p>${esc(x)}</p>`).join("")}<p class="muted">${esc(C.retiro.horario)}</p></div>`;
  }
})();
