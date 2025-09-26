# Ejercicio 09 — Tooltips solo con CSS

**Objetivo**  
Crear _tooltips_ sin JS usando pseudoelementos, `positioning` y atributos `data-*`, cuidando foco de teclado y contraste.

## Requisitos

1. Enlaza `style.css` desde `index.html`.
2. Crea **4 demos**:

   - **A) Tooltip básico arriba**: botón con tooltip al `:hover` **y** `:focus`.
   - **B) Tooltip con `data-tooltip`**: usa contenido desde `attr(data-tooltip)`.
   - **C) Variantes de posición**: `.tip--top | .tip--right | .tip--bottom | .tip--left`.
   - **D) Tooltip accesible**: usa `aria-describedby` apuntando a un nodo **visible solo para SR** (fallback si CSS no aplica).

3. Detalles de estilo:

   - Caja del tooltip con `::after` (texto) y **punta** con `::before`.
   - Transición en `opacity`/`transform` (no animes `top/left`).
   - Ocultar por defecto con `opacity:0; pointer-events:none;` y mostrar en `:hover, :focus-visible`.

4. Accesibilidad:

   - El disparador debe recibir foco de teclado (`button`, `a`, o `tabindex="0"`).
   - Usa `:focus-visible` para no robar foco a usuarios de ratón.
   - Contraste mínimo recomendado 4.5:1 para el texto del tooltip.
   - Provee fallback con `aria-describedby` (demo D).

5. Comentarios en CSS:
   - Cómo se posiciona cada variante.
   - Por qué `transform` + `opacity`.
   - Cómo se construye la “punta” con bordes y `transform: rotate(45deg)`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La propuesta está en `solucion/`.
