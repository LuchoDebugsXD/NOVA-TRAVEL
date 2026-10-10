/**
 * ============================================================================
 * NOVA TRAVEL — Interacciones Generales y Navegación
 * Archivo: js/main.js
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // 1. Inicialización de AOS (Animate on Scroll)
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 60,
      disable: window.matchMedia('(prefers-reduced-motion: reduce)').matches
    });
  }

  // 2. Efecto de Navbar translúcida al hacer scroll
  const navbar = document.querySelector('.nova-navbar');
  if (navbar) {
    const checkScroll = () => {
      if (window.scrollY > 30) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', checkScroll, { passive: true });
    checkScroll();
  }

  // 3. Cerrar automáticamente el menú móvil de Bootstrap al hacer clic en un enlace
  const navLinks = document.querySelectorAll('.nova-navbar .nav-link, .nova-navbar .btn');
  const navbarCollapse = document.querySelector('.navbar-collapse');
  if (navbarCollapse) {
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navbarCollapse.classList.contains('show')) {
          const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
          if (bsCollapse) {
            bsCollapse.hide();
          }
        }
      });
    });
  }

  // 4. Marcado automático de enlace activo según URL actual
  const currentPath = window.location.pathname;
  const menuLinks = document.querySelectorAll('.nova-navbar .nav-link');
  menuLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    
    // Comparación limpia considerando carpetas relativas
    const linkFileName = href.split('/').pop().split('?')[0];
    const currentFileName = currentPath.split('/').pop().split('?')[0] || 'index.html';

    if (linkFileName === currentFileName && currentFileName !== '') {
      menuLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });

  // 5. Botón interactivo de consulta rápida por WhatsApp
  const waFloatingBtn = document.querySelector('.whatsapp-float-btn');
  if (waFloatingBtn && !waFloatingBtn.getAttribute('href')) {
    waFloatingBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const defaultMsg = encodeURIComponent("¡Hola NOVA TRAVEL! Deseo información sobre sus próximos viajes y promociones.");
      window.open(`https://wa.me/51999999999?text=${defaultMsg}`, '_blank');
    });
  }
});

/**
 * Función utilitaria para modal informativo de SweetAlert2 en viajes de demostración
 */
function abrirConsultaModal(nombreDestino, precioDemo) {
  if (typeof Swal === 'undefined') return;

  Swal.fire({
    title: `Consultar ${nombreDestino}`,
    html: `
      <div class="text-start p-2">
        <p class="text-muted mb-2">Estás a un paso de planear tu viaje. Este es un registro de consulta rápida.</p>
        <div class="p-3 bg-white rounded-3 border mb-3">
          <div class="fw-bold text-dark">${nombreDestino}</div>
          <div class="text-muted small">Tarifa de referencia: <span class="text-dark fw-semibold">S/ ${precioDemo}</span> (Dato demo editable)</div>
        </div>
        <p class="small text-muted mb-0">Selecciona el canal por el que deseas recibir el itinerario detallado y fechas disponibles:</p>
      </div>
    `,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText: '<i class="bi bi-whatsapp me-1"></i> WhatsApp Inmediato',
    denyButtonText: '<i class="bi bi-envelope me-1"></i> Formulario Web',
    cancelButtonText: 'Cerrar',
    customClass: {
      popup: 'nova-swal-modal',
      confirmButton: 'btn btn-whatsapp',
      denyButton: 'btn btn-nova-primary',
      cancelButton: 'btn btn-nova-outline'
    },
    buttonsStyling: false
  }).then((result) => {
    if (result.isConfirmed) {
      const waText = encodeURIComponent(`Hola NOVA TRAVEL, me interesa el paquete "${nombreDestino}" (Referencia S/ ${precioDemo}). ¿Tienen salidas para este mes?`);
      window.open(`https://wa.me/51999999999?text=${waText}`, '_blank');
    } else if (result.isDenied) {
      // Redirigir a contacto
      const path = window.location.pathname;
      let contactoUrl = "paginas/contacto.html";
      if (path.includes("/paginas/destinos/")) {
        contactoUrl = "../contacto.html";
      } else if (path.includes("/paginas/")) {
        contactoUrl = "contacto.html";
      }
      window.location.href = `${contactoUrl}?destino=${encodeURIComponent(nombreDestino)}`;
    }
  });
}
