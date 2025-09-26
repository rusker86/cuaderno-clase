# JS — Ejercicio 38: DOM avanzado

**Objetivo**  
Practicar APIs modernas del navegador:

- **IntersectionObserver**: lazy-loading de imágenes, revelar secciones, “infinite scroll”
- **MutationObserver**: detectar cambios en el DOM (nodos/atributos)
- Limpieza (`disconnect()`), gestión de rendimiento y accesibilidad básica

## Tareas

1. **Lazy-loading de imágenes**

   - Marca las imágenes con `data-src` (el `src` inicial será un placeholder de 1x1).
   - Crea un `IntersectionObserver` que, al entrar en viewport, asigne `img.src = img.dataset.src` y quite `data-src`.
   - Añade una clase `.loaded` cuando el `load` ocurra.

2. **Revelar secciones al hacer scroll**

   - Oculta las secciones con una clase `.reveal` (opacidad 0, translateY).
   - Con IntersectionObserver, al intersectar, quita `.reveal` (respeta `prefers-reduced-motion`).

3. **Infinite scroll sencillo**

   - Coloca un **sentinela** al final de la lista `#feed`.
   - Cuando el sentinela entre en viewport, carga más “items” (simula con `setTimeout` o genera 5 `<article>`).
   - Pausa la carga si ya hay ≥ 30 items.

4. **MutationObserver**

   - Observa `#feed`:
     - Cuando se añadan `<article>`, escribe en consola `"nuevo item"` y cuenta cuántos hay.
     - Observa atributos de las imágenes y loguea si cambia `src`.

5. **Limpieza**

   - Proporciona una función para **desconectar** los observadores (ej: al pulsar un botón `#stop`).

6. **(Opcional) Rendimiento y estado**
   - Usa `rootMargin` y `threshold` adecuados para evitar activaciones excesivas.
   - Pausa el `IntersectionObserver` del feed cuando la pestaña esté oculta (`visibilitychange`) y reanúdalo al volver.

> Entregable: completa `starter/main.js` y `starter/index.html`. No uses librerías. Prueba en navegador.
