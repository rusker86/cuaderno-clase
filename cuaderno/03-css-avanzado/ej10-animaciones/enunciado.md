# Ejercicio 10 — Animaciones en CSS

**Objetivo**  
Dominar `@keyframes` y las propiedades `animation-*` (name, duration, timing-function, delay, iteration-count,
direction, fill-mode, play-state), usar `steps()` y encadenar animaciones. Respetar `prefers-reduced-motion`.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea **5 demos**:

### A) Bouncing (rebote básico)

- Un círculo que sube y baja con `@keyframes` y `animation-iteration-count: infinite`.
- Usa `cubic-bezier` para simular gravedad.

### B) Loader spinner

- Un anillo que gira de forma continua (`linear`, `infinite`).

### C) Efecto “typing”

- Un título que aparece como tecleado usando `steps(n, end)` y un cursor parpadeante.

### D) Marquee moderno (solo CSS)

- Una tira de etiquetas que se desplaza horizontalmente en bucle (sin `<marquee>`).
- Usa **dos** copias del contenido para un scroll infinito suave.

### E) Encadenado y control

- Un botón que primero hace un “pop-in” y luego un “glow” sutil (dos animaciones separadas, con delay).
- Pausar/reanudar al pasar el ratón (o con una clase).

3. Añade comentarios en CSS explicando:

- Cada `@keyframes`, el papel de `fill-mode` y `direction`.
- Por qué `transform/opacity` son mejores para rendimiento.
- Cómo `steps()` avanza por saltos.

4. Accesibilidad

- Respeta `@media (prefers-reduced-motion: reduce)` → desactiva o reduce duración/iteraciones.
- Evita flashes intensos; limita contrastes y frecuencias.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución está en `/solucion`.
