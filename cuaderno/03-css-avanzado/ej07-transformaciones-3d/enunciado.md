# Ejercicio 07 — Transformaciones 3D

**Objetivo**  
Practicar 3D en CSS: `perspective` (en contenedor vs `perspective()` en el elemento),
`rotateX/rotateY/rotateZ`, `translateZ`, `transform-style: preserve-3d`, `backface-visibility`,
`perspective-origin` y un “card flip” 3D accesible.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **5 demos**:

### A) Rotación 3D con perspectiva (contenedor)

- Contenedor con `perspective: ...`.
- Un `.box3d.a` con `rotateX(25deg)` y otra `.box3d.b` con `rotateY(25deg)`.

### B) `perspective()` en el propio elemento

- Una `.box3d.c` con `transform: perspective(600px) rotateY(25deg)` y compara
  visualmente con la variante A (la perspectiva ligada al elemento).

### C) `translateZ` y escala aparente

- Una `.box3d.d` con `translateZ(40px)` y otra con `translateZ(-40px)` dentro de un
  contenedor con `perspective`. Observa cómo “acercan/alejan”.

### D) `preserve-3d` + `backface-visibility`

- Construye un “card flip”: `.tarjeta` con dos caras `.cara--front` y `.cara--back`.
- El contenedor tiene `perspective`. La tarjeta: `transform-style: preserve-3d`.
- Las caras: `backface-visibility: hidden`. La cara trasera rotada `rotateY(180deg)`.
- En `:hover` o con un botón, la tarjeta gira `rotateY(180deg)`.

### E) `perspective-origin`

- Muestra cómo cambia el punto de fuga (`center`, `left top`, etc.) en un ejemplo.

3. Añade comentarios en CSS:

- Diferencia entre `perspective` en el contenedor vs `perspective()` dentro de `transform`.
- `preserve-3d` permite que los hijos mantengan su profundidad.
- Por qué ocultar la cara trasera con `backface-visibility`.
- Nota sobre **rendimiento**: 3D activa composición; evita animar propiedades de layout.

4. Accesibilidad

- Asegura foco y activación por teclado del flip (por ejemplo, con `tabindex="0"` y `:focus`).
- Respeta `prefers-reduced-motion: reduce` desactivando la animación/rotación.

## Entregable

Edita **solo** `starter/`. Revisa la propuesta en `/solucion` cuando termines.
