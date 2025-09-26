# Ejercicio 13 — Iconos (fuente vs SVG)

**Objetivo**: insertar iconos de dos formas y aplicar estilos desde CSS, cuidando accesibilidad.

## Lo que vas a practicar

1. **Fuentes de iconos** (solo demostración básica):

   - Declara un `@font-face` ficticio `IconFont` (no necesitas archivos reales; déjalo comentado).
   - Crea un elemento `<span class="if if-home" aria-hidden="true"></span>` que simule un glifo (usa `content` en `::before` con un carácter Unicode, p. ej. `\2605` estrella).
   - Cambia color y tamaño con `font-size`/`color`.
   - Añade texto accesible cercano (p. ej., `<span class="sr-only">Inicio</span>` o un `aria-label` en el contenedor).

2. **SVG** (recomendado):

   - **Inline**: inserta un icono con `<svg>` y `<title>` (accesible). Cambia color con `fill: currentColor;`.
   - **Sprite**: crea `icons.svg` con al menos **2 `<symbol>`** (por ejemplo: `#home`, `#search`). En `index.html`, usa `<svg class="icon"><use href="icons.svg#home"></use></svg>` y `<svg class="icon"><use href="icons.svg#search"></use></svg>`.

3. Estilos:

   - Clase común `.icon` con tamaño y `vertical-align: middle;`.
   - Usa `currentColor` para que hereden el color del texto.
   - Estados `:hover` que cambian `color`.

4. Accesibilidad:
   - Para iconos **decorativos**: `aria-hidden="true"` y sin `<title>`.
   - Para iconos **informativos**: añade `<title>` dentro del `<svg>` o `aria-label` en el elemento contenedor.
   - No dependas del color solamente para comunicar significado.

## Entregable

- Edita `starter/index.html`, `starter/style.css` e `starter/icons.svg` hasta cumplir los requisitos.
