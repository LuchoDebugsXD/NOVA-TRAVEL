/**
 * ============================================================================
 * NOVA TRAVEL — Validación de Formularios y Simulación de Contacto
 * Archivo: js/formulario.js
 * ============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const formContacto = document.getElementById("form-contacto-novatravel");
  if (!formContacto) return;

  // Auto-completar destino si viene en URL (?destino=...)
  const urlParams = new URLSearchParams(window.location.search);
  const destinoParam = urlParams.get('destino');
  if (destinoParam) {
    const selectDestino = document.getElementById("contacto-destino");
    if (selectDestino) {
      // Buscar si existe en las opciones o agregarlo
      let existe = false;
      for (let i = 0; i < selectDestino.options.length; i++) {
        if (selectDestino.options[i].text.toLowerCase().includes(destinoParam.toLowerCase())) {
          selectDestino.selectedIndex = i;
          existe = true;
          break;
        }
      }
      if (!existe) {
        const nuevaOpcion = new Option(destinoParam, destinoParam, true, true);
        selectDestino.add(nuevaOpcion);
      }
    }
  }

  // Manejador del evento Submit
  formContacto.addEventListener("submit", (e) => {
    e.preventDefault();

    // Obtener campos
    const nombre = document.getElementById("contacto-nombre")?.value.trim();
    const telefono = document.getElementById("contacto-telefono")?.value.trim();
    const correo = document.getElementById("contacto-correo")?.value.trim();
    const destino = document.getElementById("contacto-destino")?.value;
    const tipoViaje = document.getElementById("contacto-tipo")?.value;
    const fecha = document.getElementById("contacto-fecha")?.value;
    const mensaje = document.getElementById("contacto-mensaje")?.value.trim();

    // Validaciones estrictas y amigables
    if (!nombre || nombre.length < 3) {
      mostrarErrorValidacion("Nombre requerido", "Por favor, ingresa tu nombre completo (mínimo 3 caracteres).");
      document.getElementById("contacto-nombre")?.focus();
      return;
    }

    // Validación de teléfono (Perú: típicamente 9 dígitos o al menos 7)
    const regexTelefono = /^[0-9+() -]{7,15}$/;
    if (!telefono || !regexTelefono.test(telefono)) {
      mostrarErrorValidacion("Teléfono no válido", "Por favor, ingresa un número de teléfono de contacto válido (7 a 12 dígitos).");
      document.getElementById("contacto-telefono")?.focus();
      return;
    }

    // Validación de correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!correo || !regexCorreo.test(correo)) {
      mostrarErrorValidacion("Correo electrónico no válido", "Por favor, revisa que el correo tenga el formato correcto (ejemplo: usuario@correo.com).");
      document.getElementById("contacto-correo")?.focus();
      return;
    }

    if (!destino || destino === "") {
      mostrarErrorValidacion("Destino no seleccionado", "Por favor, selecciona el destino del Perú que te gustaría visitar.");
      document.getElementById("contacto-destino")?.focus();
      return;
    }

    if (!tipoViaje || tipoViaje === "") {
      mostrarErrorValidacion("Tipo de viaje", "Por favor, selecciona si prefieres Full Day, Fin de semana u otra modalidad.");
      document.getElementById("contacto-tipo")?.focus();
      return;
    }

    if (!mensaje || mensaje.length < 8) {
      mostrarErrorValidacion("Mensaje breve", "Por favor, escribe un breve mensaje o consulta sobre las personas que viajan o tus dudas (mínimo 8 caracteres).");
      document.getElementById("contacto-mensaje")?.focus();
      return;
    }

    // Construcción del mensaje preparado para WhatsApp
    const textoWhatsApp = encodeURIComponent(
      `¡Hola NOVA TRAVEL! 👋\n` +
      `Mi nombre es: ${nombre}\n` +
      `Deseo consultar sobre el viaje a: ${destino}\n` +
      `Modalidad: ${tipoViaje}\n` +
      (fecha ? `Fecha estimada: ${fecha}\n` : '') +
      `Mensaje: ${mensaje}\n` +
      `Correo de contacto: ${correo}`
    );

    const enlaceWhatsApp = `https://wa.me/51999999999?text=${textoWhatsApp}`;

    // Alerta SweetAlert2 informativa y transparente (no finge un backend que no existe)
    if (typeof Swal !== 'undefined') {
      Swal.fire({
        title: '¡Formulario verificado con éxito!',
        html: `
          <div class="text-start small p-2">
            <div class="alert alert-success d-flex align-items-center mb-3 p-2" role="alert">
              <i class="bi bi-check-circle-fill me-2 fs-5"></i>
              <div>Todos los campos han sido validados correctamente para la demostración académica de <strong>NOVA TRAVEL</strong>.</div>
            </div>
            
            <p class="text-muted mb-2"><strong>Resumen de tu solicitud:</strong></p>
            <ul class="list-group list-group-flush border rounded-3 mb-3">
              <li class="list-group-item py-2"><strong>Viajero:</strong> ${nombre}</li>
              <li class="list-group-item py-2"><strong>Destino:</strong> ${destino}</li>
              <li class="list-group-item py-2"><strong>Modalidad:</strong> ${tipoViaje}</li>
              <li class="list-group-item py-2"><strong>Teléfono:</strong> ${telefono}</li>
              <li class="list-group-item py-2"><strong>Correo:</strong> ${correo}</li>
              ${fecha ? `<li class="list-group-item py-2"><strong>Fecha de salida:</strong> ${fecha}</li>` : ''}
            </ul>

            <p class="text-muted mb-0">
              <i class="bi bi-info-circle text-primary me-1"></i>
              <em>Nota: Dado que este es un proyecto frontend estático sin base de datos, tus datos no han sido guardados en un servidor. Sin embargo, puedes hacer clic abajo para enviar esta misma consulta directamente por WhatsApp.</em>
            </p>
          </div>
        `,
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: '<i class="bi bi-whatsapp me-1"></i> Abrir en WhatsApp',
        cancelButtonText: 'Cerrar y limpiar formulario',
        customClass: {
          popup: 'nova-swal-modal',
          confirmButton: 'btn btn-whatsapp',
          cancelButton: 'btn btn-nova-outline'
        },
        buttonsStyling: false
      }).then((result) => {
        if (result.isConfirmed) {
          window.open(enlaceWhatsApp, '_blank');
        }
        // Limpiar el formulario
        formContacto.reset();
      });
    }
  });
});

/**
 * Muestra alertas de error estandarizadas con SweetAlert2
 */
function mostrarErrorValidacion(titulo, mensaje) {
  if (typeof Swal !== 'undefined') {
    Swal.fire({
      title: titulo,
      text: mensaje,
      icon: 'warning',
      confirmButtonText: 'Entendido',
      customClass: {
        popup: 'nova-swal-modal',
        confirmButton: 'btn btn-nova-primary'
      },
      buttonsStyling: false
    });
  } else {
    alert(`${titulo}: ${mensaje}`);
  }
}
