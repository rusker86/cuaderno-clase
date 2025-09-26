# Ejercicio 22 — `:has()` y selectores relacionales (UI sin JS)

**Objetivo**  
Practicar `:has()` como **selector de padre** y combinarlo con `:is()`, `:where()`, `:not()`, `:nth-*()` para patrones de UI sin JavaScript.

## Retos

1. **Tarjeta reactiva por contenido**

   - `.card` cambia de estilo **si contiene** una imagen (`.card:has(img)`).
   - Si la imagen tiene `.wide`, muestra un banner “Panorámica”.

2. **Formulario con validación reactiva (sin JS)**

   - `.field:has(input:invalid)` pinta el borde en rojo y muestra `.hint--error`.
   - `.field:has(input:valid)` pinta verde y oculta el error.
   - En foco: `.field:has(:focus)` eleva sutilmente la tarjeta del campo.

3. **Acordeón con checkboxes**

   - Cada `.accordion__item` abre/cierra con un `<input type="checkbox">`.
   - Estilos del **contenedor** con `.accordion__item:has(input:checked)` (fondo, flecha rota, etc.).
   - Solo CSS.

4. **Menú activo por “ruta actual”**

   - En una `.nav`, resaltar `li:has(a[aria-current="page"])`.
   - En hover/focus del link, hacer hover del **li** con `li:has(a:hover, a:focus-visible)`.

5. **Tarjeta “selectable” sin JS**

   - Estructura: un `<input type="checkbox" class="select">` oculto + `.product`.
   - `.product:has(.select:checked)` añade borde/halo y muestra un tick en la esquina.

6. (Opcional) **Listado con reglas avanzadas**
   - Dar estilo a cada `.item` **que no** tenga imagen: `.item:not(:has(img)) { … }`.
   - Alternar estilos con `:nth-child(odd/even)` combinado con `:has()`.

### Accesibilidad

- Mantén foco visible (`:focus-visible`), textos con buen contraste.
- Inputs con `aria-invalid` cuando proceda.
- Usa `aria-expanded` reflejando el estado del acordeón vía CSS si lo deseas (opcional).

## Entregable

Edita **solo** `starter/`. La referencia completa está en `/solucion`.

> Tips
>
> - `:has()` selecciona el **padre** si contiene el patrón.
> - `:where()` **no añade especificidad** → útil para agrupar sin escalar guerras de specificity.
> - Prueba combinaciones: `.card:has(.badge-danger):not(:has(img))`.
