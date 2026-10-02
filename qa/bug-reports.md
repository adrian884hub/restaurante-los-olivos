# Reporte de errores

Errores encontrados en la primera versión de la página y cómo se resolvieron en la versión actual.

## BUG-01: El botón "Reservar ahora" no hacía una reserva real

- **Severidad:** Media
- **Pasos:** abrir la página y hacer clic en "Reservar ahora".
- **Resultado esperado:** que el usuario pueda enviar los datos de su reserva.
- **Resultado obtenido:** solo aparecía una alerta del navegador con "Reserva enviada!", sin pedir ni enviar ningún dato.
- **Solución:** se reemplazó por un formulario de reserva que arma el mensaje y lo envía por WhatsApp.
- **Estado:** Corregido. Verificado con TC-10.

## BUG-02: Se podía "reservar" sin completar datos

- **Severidad:** Alta
- **Pasos:** intentar reservar sin ingresar nombre, fecha ni cantidad de personas.
- **Resultado esperado:** un mensaje que indique qué falta completar.
- **Resultado obtenido:** la reserva se confirmaba igual.
- **Solución:** validación de todos los campos, mensaje de error visible, campos marcados en rojo y bloqueo de fechas pasadas.
- **Estado:** Corregido. Verificado con TC-07, TC-08, TC-09 y TC-11.

## BUG-03: Diseño desordenado en el celular

- **Severidad:** Baja
- **Pasos:** abrir la página en un celular o en el modo responsive del navegador.
- **Resultado esperado:** que el contenido se adapte al ancho de la pantalla.
- **Resultado obtenido:** el menú de navegación no se adaptaba y los enlaces no llevaban a ninguna sección.
- **Solución:** menú desplegable para celular, enlaces funcionando y columnas que pasan a una sola en pantallas chicas.
- **Estado:** Corregido. Verificado con TC-04, TC-13 y TC-14.

## BUG-04: Foto de portada con marca de agua de terceros

- **Severidad:** Baja
- **Pasos:** abrir la página y mirar la esquina inferior derecha de la primera foto.
- **Resultado esperado:** fotos sin marcas de agua y con licencia de uso libre.
- **Resultado obtenido:** una de las fotos tenía el nombre de un fotógrafo y no tenía licencia indicada.
- **Solución:** se reemplazaron todas las fotos por imágenes de Wikimedia Commons con licencia libre y se agregaron los créditos.
- **Estado:** Corregido.
