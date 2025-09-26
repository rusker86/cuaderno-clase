# Ejercicio 14 — Links (enlaces) en CSS3

**Objetivo**: estilizar enlaces en sus distintos **estados** sin perder accesibilidad.

## Requisitos

1. Enlaza `style.css` desde `index.html`.
2. Crea una sección con al menos **4 enlaces**:
   - Un enlace **externo** (usa `href` a un dominio real).
   - Un enlace **interno** a un id de la página.
   - Un enlace con clase `.btn-link` (estilo “botón” solo con CSS).
   - Un enlace **deshabilitado visualmente** (añade clase `.is-disabled` pero mantén `href="#"`).
3. Define estilos para **estados**:
   - `a:link` (estado inicial/no visitado).
   - `a:visited` (visitado, **diferente** al `:link`).
   - `a:hover` (ratón encima).
   - `a:focus` **o** `a:focus-visible` (foco accesible con teclado).
   - `a:active` (mientras haces clic).
4. Accesibilidad:
   - **No elimines** el foco sin alternativa. Usa `outline` u otro estilo claramente visible.
   - Para `.is-disabled`, evita que parezca interactivo (color, cursor), pero **no** elimines el `href` (es una demo).
5. `.btn-link`:
   - Dale aspecto de botón con `padding`, `border`, `border-radius`, `text-decoration: none`.
   - Debe responder a `:hover`, `:focus`, `:active`, igual que los enlaces normales.
6. Añade **comentarios en CSS** sobre:
   - Orden recomendado de estados (sugerencia: `:link`, `:visited`, `:focus`, `:hover`, `:active`).
   - Por qué el foco es importante.
   - Por qué `:visited` tiene limitaciones de seguridad (no se permiten muchos cambios).

## Pistas

- Evita usar solo color para diferenciar estados; añade cambios de **subrayado** o **outline** en foco.
- Para `.is-disabled`, puedes usar `pointer-events: none;` en la demo (explica en comentario que no existe “a deshabilitado” real en HTML).

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución completa está en `solucion/`.
