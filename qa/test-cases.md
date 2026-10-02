# Casos de prueba

Pruebas manuales de la página de muestra "Restaurante Los Olivos".
Navegadores usados: Chrome y Firefox (escritorio) y Chrome en Android (modo responsive de 375 px).

| ID | Funcionalidad | Pasos | Resultado esperado | Estado |
|----|---------------|-------|--------------------|--------|
| TC-01 | Carga de la página | Abrir la URL publicada | La página carga sin errores en la consola y se ve la portada con la primera foto | Aprobado |
| TC-02 | Carrusel de portada | Esperar 6 segundos en la portada | La foto cambia con una transición suave y se marca el indicador correspondiente | Aprobado |
| TC-03 | Indicadores del carrusel | Hacer clic en el segundo indicador | Se muestra la segunda foto y el contador de tiempo se reinicia | Aprobado |
| TC-04 | Navegación | Hacer clic en "Menú", "Nosotros" y "Contacto" | La página se desplaza a cada sección sin que el encabezado tape el título | Aprobado |
| TC-05 | Encabezado al hacer scroll | Bajar más de 40 px | El encabezado pasa de transparente a fondo blanco con texto oscuro | Aprobado |
| TC-06 | Pestañas del menú | Hacer clic en "Principales", "Postres" y "Vinos" | Se muestra solo la categoría elegida y la pestaña queda resaltada | Aprobado |
| TC-07 | Formulario vacío | Hacer clic en "Enviar reserva por WhatsApp" sin completar nada | Aparece el mensaje "Completá todos los campos..." y los campos vacíos se marcan en rojo | Aprobado |
| TC-08 | Fecha pasada | Intentar elegir una fecha anterior a hoy | El calendario no permite seleccionarla | Aprobado |
| TC-09 | Cantidad de personas fuera de rango | Escribir 0 o 15 en "Personas" y enviar | El campo se marca como inválido y no se envía | Aprobado |
| TC-10 | Reserva válida | Completar todos los campos y enviar | Se abre WhatsApp con un mensaje que incluye nombre, teléfono, fecha (dd/mm/aaaa), horario y personas | Aprobado |
| TC-11 | Corrección de error | Enviar vacío y luego escribir en un campo marcado | El borde rojo desaparece al escribir | Aprobado |
| TC-12 | Botón flotante de WhatsApp | Hacer clic en el botón verde | Se abre WhatsApp en una pestaña nueva con un mensaje inicial | Aprobado |
| TC-13 | Menú en celular | En 375 px, tocar el botón de tres líneas y luego un enlace | El menú se abre, el ícono se convierte en una X y el menú se cierra al elegir una opción | Aprobado |
| TC-14 | Diseño en celular | Recorrer toda la página en 375 px | No hay desplazamiento horizontal y las columnas pasan a una sola | Aprobado |
| TC-15 | Movimiento reducido | Activar "reducir movimiento" en el sistema operativo y recargar | Las animaciones se desactivan y todo el contenido es visible | Aprobado |
