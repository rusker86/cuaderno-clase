# Ejercicio 15 — Media Queries modernas

**Objetivo**
Practicar _media queries_ con sintaxis de rangos moderna, temas (dark/light), movimiento reducido, capacidades de entrada (hover/pointer) y `print`. Orquestar un layout responsive simple.

## Requisitos

1. **Rangos modernos (anchos)**

   - Usa `@media (width < 640px)`, `(640px <= width < 1024px)` y `(width >= 1024px)` para adaptar un **grid** de tarjetas `.grid`:
     - Móvil: 1 columna
     - Tablet: 2 columnas
     - Desktop: 3+ columnas

2. **Dark mode**

   - Aplica una paleta oscura cuando `(prefers-color-scheme: dark)`.
   - Mantén contraste y foco visibles.

3. **Reduced motion**

   - Cuando `(prefers-reduced-motion: reduce)`, desactiva o simplifica transiciones/animaciones.

4. **Hover/Pointer**

   - Solo en dispositivos con **hover fino** (`(hover: hover) and (pointer: fine)`), añade un _hover_ con elevación a `.card:hover`.
   - En puntero tosco (`(pointer: coarse)`) incrementa el **tamaño de toque** (padding) de los botones `.btn`.

5. **Print**

   - Simplifica: fondo blanco, texto negro, oculta decorativos, bordes mínimos y muestra URLs de los enlaces entre paréntesis (`content: " (" attr(href) ")"`).

6. (Opcional) **Altura reducida**
   - Ajusta el header cuando `(max-height: 700px)` para ahorrar espacio vertical.

> Nota: La **sintaxis de rangos** (`width < 640px`) es preferible a `max/min-width` clásicos cuando esté disponible.

## Entregable

Edita **solo** `starter/`. La referencia completa está en `/solucion`.
