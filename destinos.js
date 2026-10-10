/**
 * ============================================================================
 * NOVA TRAVEL — Base de Datos de Demostración y Lógica de Destinos
 * Archivo: js/destinos.js
 * ============================================================================
 */

// Datos de demostración de los destinos turísticos del Perú
const DESTINOS_DATA = [
  {
    id: "paracas",
    nombre: "Paracas e Islas Ballestas",
    ubicacion: "Ica, Costa Sur del Perú",
    categoria: "full-day",
    categoriaLabel: "Full Day / Fin de semana",
    badgeClass: "badge-mint",
    duracion: "1 día (18 hrs)",
    duracionDias: 1,
    precio: 119.00,
    calificacion: 4.9,
    descripcion: "Navegación marina hacia las Islas Ballestas, avistamiento de lobos marinos, pingüinos de Humboldt y la enigmática figura del Candelabro.",
    imagen: "https://images.unsplash.com/photo-1589556264800-08ae9e129a8c?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/paracas.html",
    destacado: true,
    tipoViaje: "costa"
  },
  {
    id: "huacachina",
    nombre: "Ica y Laguna de Huacachina",
    ubicacion: "Ica, Oasis de América",
    categoria: "full-day",
    categoriaLabel: "Full Day / Aventura",
    badgeClass: "badge-mint",
    duracion: "1 día (16 hrs)",
    duracionDias: 1,
    precio: 135.00,
    calificacion: 4.8,
    descripcion: "Arenal desértico, emocionante paseo en tubulares areneros (buggies), sandboarding en dunas doradas y cata de piscos en bodegas tradicionales.",
    imagen: "https://images.unsplash.com/photo-1544986581-efac024faf62?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/huacachina.html",
    destacado: true,
    tipoViaje: "desierto"
  },
  {
    id: "lunahuana",
    nombre: "Lunahuaná Valle Aventura",
    ubicacion: "Cañete, Lima Provincias",
    categoria: "full-day",
    categoriaLabel: "Full Day Aventura",
    badgeClass: "badge-mint",
    duracion: "1 día (14 hrs)",
    duracionDias: 1,
    precio: 89.00,
    calificacion: 4.7,
    descripcion: "Canotaje en el río Cañete, circuito de canopy, paseo en cuatrimotos y almuerzo campestre con camarones y pisco artesanal.",
    imagen: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/lunahuana.html",
    destacado: true,
    tipoViaje: "valle"
  },
  {
    id: "churin",
    nombre: "Baños Termales de Churín",
    ubicacion: "Oyón, Sierra de Lima",
    categoria: "full-day",
    categoriaLabel: "Full Day Relajación",
    badgeClass: "badge-mint",
    duracion: "1 día (16 hrs)",
    duracionDias: 1,
    precio: 99.00,
    calificacion: 4.6,
    descripcion: "Aguas termales medicinales y sulfurosas en el Complejo Mamahuarmi y Tingo. Relajación total rodeado de naturaleza andina.",
    imagen: "https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/churin.html",
    destacado: true,
    tipoViaje: "sierra"
  },
  {
    id: "huaraz",
    nombre: "Huaraz y Lagunas del Huascarán",
    ubicacion: "Áncash, Cordillera Blanca",
    categoria: "fin-semana",
    categoriaLabel: "Fin de Semana / Montaña",
    badgeClass: "badge-lilac",
    duracion: "3 días / 2 noches",
    duracionDias: 3,
    precio: 290.00,
    calificacion: 4.9,
    descripcion: "Trekking hacia la emblemática Laguna 69, visita a Llanganuco y Glaciar Pastoruri, rodeados de los nevados más altos del Perú.",
    imagen: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/huaraz.html",
    destacado: true,
    tipoViaje: "montaña"
  },
  {
    id: "cusco",
    nombre: "Cusco, Valle Sagrado y Machu Picchu",
    ubicacion: "Cusco, Capital Inca",
    categoria: "fin-semana",
    categoriaLabel: "Fin de Semana Largo",
    badgeClass: "badge-blue",
    duracion: "4 días / 3 noches",
    duracionDias: 4,
    precio: 580.00,
    calificacion: 5.0,
    descripcion: "La maravilla del mundo moderno: Santuario Histórico de Machu Picchu, Ollantaytambo, Salineras de Maras y calles empedradas milenarias.",
    imagen: "https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/cusco.html",
    destacado: true,
    tipoViaje: "cultural"
  },
  {
    id: "arequipa",
    nombre: "Arequipa y Cañón del Colca",
    ubicacion: "Arequipa, Ciudad Blanca",
    categoria: "fin-semana",
    categoriaLabel: "Fin de Semana / Cañón",
    badgeClass: "badge-lilac",
    duracion: "3 días / 2 noches",
    duracionDias: 3,
    precio: 450.00,
    calificacion: 4.9,
    descripcion: "Mirador de la Cruz del Cóndor para apreciar el vuelo del cóndor andino, arquitectura en sillar volcánico y campiña tradicional.",
    imagen: "https://images.unsplash.com/photo-1589802829985-817e51171b92?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos/arequipa.html",
    destacado: true,
    tipoViaje: "sierra"
  },
  {
    id: "marcahuasi",
    nombre: "Marcahuasi Meseta Mística",
    ubicacion: "Huarochirí, Sierra de Lima",
    categoria: "fin-semana",
    categoriaLabel: "Fin de Semana / Camping",
    badgeClass: "badge-lilac",
    duracion: "2 días / 1 noche",
    duracionDias: 2,
    precio: 140.00,
    calificacion: 4.7,
    descripcion: "Meseta a 4,000 msnm con figuras pétreas enigmáticas (Monumento a la Humanidad), cielo estrellado inolvidable y campamento al aire libre.",
    imagen: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos.html",
    destacado: false,
    tipoViaje: "montaña"
  },
  {
    id: "huaral",
    nombre: "Huaral Campiña y Castillo Chancay",
    ubicacion: "Huaral, Norte Chico de Lima",
    categoria: "full-day",
    categoriaLabel: "Full Day Gastronómico",
    badgeClass: "badge-mint",
    duracion: "1 día (12 hrs)",
    duracionDias: 1,
    precio: 75.00,
    calificacion: 4.6,
    descripcion: "Tradicional Chancho al Palo en Huaral, recorrido por el místico Castillo de Chancay frente al mar y visita al pueblo de Aucallama.",
    imagen: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    urlDetalle: "paginas/destinos.html",
    destacado: false,
    tipoViaje: "gastronomico"
  }
];

/**
 * Corrige la ruta relativa dependiendo de la ubicación de la página actual
 * Si estamos en la raíz (index.html), relativePrefix = ""
 * Si estamos en paginas/, relativePrefix = "../"
 * Si estamos en paginas/destinos/, relativePrefix = "../../"
 */
function getRelativePrefix() {
  const path = window.location.pathname;
  if (path.includes("/paginas/destinos/")) {
    return "../../";
  } else if (path.includes("/paginas/")) {
    return "../";
  }
  return "";
}

/**
 * Renderiza tarjetas de destinos en el contenedor especificado
 * @param {Array} destinos - Lista filtrada de destinos
 * @param {string} containerId - ID del contenedor HTML
 */
function renderizarTarjetasDestinos(destinos, containerId = "contenedor-destinos") {
  const container = document.getElementById(containerId);
  if (!container) return;

  const prefix = getRelativePrefix();

  if (!destinos || destinos.length === 0) {
    container.innerHTML = `
      <div class="col-12 text-center py-5">
        <div class="p-5 bg-white rounded-4 border shadow-sm">
          <i class="bi bi-search text-muted display-4 mb-3 d-block"></i>
          <h4 class="fw-bold mb-2">No se encontraron destinos coincidentes</h4>
          <p class="text-muted mb-4">Intenta ajustar los criterios de búsqueda o categoría para descubrir más opciones.</p>
          <button class="btn btn-nova-primary" onclick="resetearFiltrosCatalogo()">
            <i class="bi bi-arrow-repeat me-1"></i> Restablecer filtros
          </button>
        </div>
      </div>
    `;
    return;
  }

  container.innerHTML = destinos.map(d => {
    // Ajustar url de detalle con el prefijo
    let targetUrl = d.urlDetalle;
    if (prefix === "../") {
      // Estamos en paginas/
      // d.urlDetalle original es "paginas/destinos/paracas.html"
      // entonces desde paginas/ debe ser "destinos/paracas.html" o si va a destinos.html
      targetUrl = targetUrl.replace("paginas/", "");
    } else if (prefix === "../../") {
      // Desde paginas/destinos/
      targetUrl = targetUrl.replace("paginas/destinos/", "");
    }

    // Enlace directo a consulta por WhatsApp
    const waText = encodeURIComponent(`Hola NOVA TRAVEL, deseo consultar disponibilidad y detalles sobre el viaje a: ${d.nombre}`);
    const waLink = `https://wa.me/51999999999?text=${waText}`;

    return `
      <div class="col-12 col-md-6 col-lg-4 mb-4" data-aos="fade-up">
        <div class="destination-card">
          <div class="card-img-wrap">
            <img src="${d.imagen}" alt="${d.nombre}" loading="lazy" onerror="this.src='https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=800&q=80'">
            <div class="card-top-badges">
              <span class="badge-pill ${d.badgeClass}">${d.categoriaLabel}</span>
              <span class="badge-pill badge-neutral"><i class="bi bi-star-fill text-warning me-1"></i>${d.calificacion}</span>
            </div>
          </div>
          <div class="card-body-content">
            <div class="card-location">
              <i class="bi bi-geo-alt-fill text-primary"></i> ${d.ubicacion}
            </div>
            <h3 class="card-title">${d.nombre}</h3>
            <p class="card-text">${d.descripcion}</p>
            
            <div class="d-flex align-items-center gap-2 mb-3 text-muted small">
              <i class="bi bi-clock"></i> <span>${d.duracion}</span>
            </div>

            <div class="card-meta-bar">
              <div>
                <span class="card-price-label">Precio demo desde</span>
                <span class="card-price-value">S/ ${d.precio.toFixed(2)}</span>
                <span class="card-price-demo">/ persona</span>
              </div>
            </div>

            <div class="d-flex gap-2 mt-3">
              <a href="${targetUrl}" class="btn btn-nova-primary flex-grow-1 text-center">
                Ver detalles <i class="bi bi-arrow-right ms-1"></i>
              </a>
              <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-nova-pastel" title="Consultar por WhatsApp">
                <i class="bi bi-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join("");

  // Re-inicializar AOS si está presente
  if (typeof AOS !== 'undefined') {
    AOS.refresh();
  }
}

/**
 * Función para buscador de la página de Inicio (Hero Search)
 */
function ejecutarBuscadorHero() {
  const inputDestino = document.getElementById("search-destino")?.value.trim().toLowerCase() || "";
  const selectTipo = document.getElementById("search-tipo")?.value || "";
  const inputFecha = document.getElementById("search-fecha")?.value || "";

  const resultados = DESTINOS_DATA.filter(item => {
    const coincideNombre = inputDestino === "" || 
                           item.nombre.toLowerCase().includes(inputDestino) || 
                           item.ubicacion.toLowerCase().includes(inputDestino);

    const coincideTipo = selectTipo === "" || selectTipo === "todos" || item.categoria === selectTipo;

    return coincideNombre && coincideTipo;
  });

  if (resultados.length === 0) {
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: 'Sin coincidencias exactas',
        text: `No encontramos salidas para tu criterio de búsqueda${inputFecha ? ` en la fecha ${inputFecha}` : ''}. ¿Deseas ver todo nuestro catálogo de viajes?`,
        icon: 'info',
        confirmButtonText: 'Ver todos los destinos',
        showCancelButton: true,
        cancelButtonText: 'Modificar búsqueda',
        customClass: {
          popup: 'nova-swal-modal',
          confirmButton: 'btn btn-nova-primary',
          cancelButton: 'btn btn-nova-outline'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          const prefix = getRelativePrefix();
          window.location.href = prefix ? `${prefix}destinos.html` : 'paginas/destinos.html';
        }
      });
    }
  } else {
    // Si estamos en index y existe contenedor de resultados de búsqueda rápida
    const contenedorResultados = document.getElementById("contenedor-resultados-busqueda");
    if (contenedorResultados) {
      renderizarTarjetasDestinos(resultados, "contenedor-resultados-busqueda");
      document.getElementById("seccion-resultados")?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Redirigir a catálogo con query param
      const prefix = getRelativePrefix();
      const target = prefix ? `${prefix}destinos.html?query=${encodeURIComponent(inputDestino)}&tipo=${encodeURIComponent(selectTipo)}` : `paginas/destinos.html?query=${encodeURIComponent(inputDestino)}&tipo=${encodeURIComponent(selectTipo)}`;
      window.location.href = target;
    }
  }
}

/**
 * Filtrador interactivo en la página de Catálogo (destinos.html)
 */
function aplicarFiltrosCatalogo() {
  const texto = document.getElementById("filtro-texto")?.value.trim().toLowerCase() || "";
  const categoria = document.getElementById("filtro-categoria")?.value || "todos";
  const precioMax = parseFloat(document.getElementById("filtro-precio")?.value) || 999999;
  const duracion = document.getElementById("filtro-duracion")?.value || "todos";

  const filtrados = DESTINOS_DATA.filter(item => {
    const matchTexto = texto === "" || 
                       item.nombre.toLowerCase().includes(texto) || 
                       item.ubicacion.toLowerCase().includes(texto) ||
                       item.descripcion.toLowerCase().includes(texto);

    const matchCategoria = categoria === "todos" || item.categoria === categoria;
    const matchPrecio = item.precio <= precioMax;
    
    let matchDuracion = true;
    if (duracion === "1") {
      matchDuracion = item.duracionDias === 1;
    } else if (duracion === "mas") {
      matchDuracion = item.duracionDias > 1;
    }

    return matchTexto && matchCategoria && matchPrecio && matchDuracion;
  });

  renderizarTarjetasDestinos(filtrados, "contenedor-destinos");

  // Actualizar contador
  const contadorEl = document.getElementById("contador-destinos");
  if (contadorEl) {
    contadorEl.innerText = `${filtrados.length} destino${filtrados.length === 1 ? '' : 's'} disponible${filtrados.length === 1 ? '' : 's'}`;
  }
}

function resetearFiltrosCatalogo() {
  if (document.getElementById("filtro-texto")) document.getElementById("filtro-texto").value = "";
  if (document.getElementById("filtro-categoria")) document.getElementById("filtro-categoria").value = "todos";
  if (document.getElementById("filtro-duracion")) document.getElementById("filtro-duracion").value = "todos";
  if (document.getElementById("filtro-precio")) {
    document.getElementById("filtro-precio").value = "600";
    if (document.getElementById("precio-valor-label")) {
      document.getElementById("precio-valor-label").innerText = "S/ 600";
    }
  }
  aplicarFiltrosCatalogo();
}

// Inicialización de escuchadores al cargar el DOM
document.addEventListener("DOMContentLoaded", () => {
  // Inicializar en destinos.html si existe el contenedor
  if (document.getElementById("contenedor-destinos")) {
    // Revisar si viene de un query param
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('query');
    const tipo = urlParams.get('tipo');

    if (query && document.getElementById("filtro-texto")) {
      document.getElementById("filtro-texto").value = query;
    }
    if (tipo && document.getElementById("filtro-categoria")) {
      document.getElementById("filtro-categoria").value = tipo;
    }

    aplicarFiltrosCatalogo();

    // Event listeners
    document.getElementById("filtro-texto")?.addEventListener("input", aplicarFiltrosCatalogo);
    document.getElementById("filtro-categoria")?.addEventListener("change", aplicarFiltrosCatalogo);
    document.getElementById("filtro-duracion")?.addEventListener("change", aplicarFiltrosCatalogo);
    
    const sliderPrecio = document.getElementById("filtro-precio");
    if (sliderPrecio) {
      sliderPrecio.addEventListener("input", (e) => {
        const label = document.getElementById("precio-valor-label");
        if (label) label.innerText = `S/ ${e.target.value}`;
        aplicarFiltrosCatalogo();
      });
    }

    document.getElementById("btn-reset-filtros")?.addEventListener("click", resetearFiltrosCatalogo);
  }

  // Inicializar destacados en index.html si existe
  if (document.getElementById("contenedor-destacados-index")) {
    const destacados = DESTINOS_DATA.filter(d => d.destacado);
    renderizarTarjetasDestinos(destacados, "contenedor-destacados-index");
  }

  // Inicializar full days destacados si existe
  if (document.getElementById("contenedor-fulldays-index")) {
    const fullDays = DESTINOS_DATA.filter(d => d.categoria === "full-day");
    renderizarTarjetasDestinos(fullDays.slice(0, 3), "contenedor-fulldays-index");
  }

  // Botón buscar en Hero
  document.getElementById("btn-buscar-hero")?.addEventListener("click", (e) => {
    e.preventDefault();
    ejecutarBuscadorHero();
  });
});
