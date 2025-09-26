# Ejercicio 08 — Transiciones en CSS

**Objetivo**  
Dominar `transition` (propiedad, duración, timing, delay), transiciones múltiples y buenas prácticas de rendimiento.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **5 demos**:

### A) Botón con color + background + transform

- En `:hover` cambia `color`, `background` y aplica `transform: translateY(-2px)`.
- Define transición **explícita** con varias propiedades o `all` (explica pros/contras).

### B) Tarjeta “elevación”

- En `:hover` aumenta `box-shadow` y eleva con `transform`.
- Usa `transition` con **duraciones distintas** por propiedad.

### C) Acordeón puro CSS

- Un bloque con título clicable (checkbox + label) que expande/colapsa contenido.
- Anima con `max-height` y `opacity`. Evita animar `height:auto`.

### D) Orquestación con `transition-delay`

- Lista de 4 ítems `.stagger li` que entran con retraso escalonado al `:hover` del contenedor.

### E) Timing functions

- Tres cajas con la **misma** duración pero distinto `cubic-bezier`: `ease`, `ease-in-out`, y una bezier personalizada.
- (Opcional) `steps(…)` para efecto escalonado.

3. Accesibilidad y rendimiento

- Respeta `prefers-reduced-motion: reduce` desactivando o acortando transiciones.
- Prioriza `transform`/`opacity` frente a `top/left/width/height`.
- Evita `transition: all` en producción: declara solo lo necesario.

## Entregable

Edita **solo** `starter/`. La solución está en `/solucion`.
