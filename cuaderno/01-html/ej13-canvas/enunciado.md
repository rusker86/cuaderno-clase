# Ejercicio 13 — Canvas en HTML5

Objetivo: aprender a usar `<canvas>` para dibujar formas y texto con JavaScript, y crear una animación sencilla.

## Requisitos mínimos

1. Crea una página con:

   - Un `<canvas id="lienzo" width="600" height="400">` con **texto alternativo** dentro (accesibilidad).
   - Un título (`h1`) y un párrafo breve que describa qué se dibuja.

2. En `main.js`, usando `getContext('2d')`:

   - Dibuja un **rectángulo relleno** y otro solo con **borde**.
   - Dibuja una **línea** diagonal.
   - Dibuja un **círculo** (o arco).
   - Escribe **texto** en el canvas (elige una fuente y tamaño).
   - Crea y aplica un **degradado** (linear o radial) a alguna forma o al texto.

3. Escalado HiDPI (pantallas retina):

   - Ajusta el canvas para `window.devicePixelRatio` para que no se vea borroso.
   - Pista: multiplicar tamaño interno y escalar el contexto.

4. **Animación sencilla**:

   - Anima una figura (por ejemplo, una **pelota** que rebota\*\* dentro del canvas) con `requestAnimationFrame`.

5. Organización:
   - Coloca la lógica en `main.js`.
   - No uses librerías externas.
   - Deja **comentarios** explicando cada bloque de dibujo.

## Extra (opcional)

- Carga una imagen y dibújala en el canvas (`drawImage`).
- Añade controles simples (botones) para pausar/reanudar la animación.

## Entregable

Edita `starter/index.html`, `starter/main.js` y `starter/styles.css` hasta cumplir los requisitos.
Valida que el HTML es correcto y que el canvas se ve nítido.
