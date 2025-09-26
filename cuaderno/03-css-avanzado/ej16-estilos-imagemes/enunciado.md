# Ejercicio 16 — Estilos para imágenes (solo CSS + HTML mínimo)

**Objetivo**
Dominar patrones comunes de imágenes: proporción fija (`aspect-ratio`), recorte controlado (`object-fit`/`object-position`),
imagenes fluidas, figuras con pie, formas (avatar/círculo), filtros y superposiciones, y variantes responsive sin JS.

## Requisitos

1. **Imagen fluida**

   - Haz que las imágenes dentro de `.content` **nunca desborden** el contenedor (máximo 100% del ancho).

2. **Contenedor con proporción fija**

   - Crea tarjetas `.ratio` con `aspect-ratio` 16/9 y mete un `<img>` que se recorte con `object-fit: cover`.
   - Añade una segunda tarjeta 1/1 (cuadrada) para comparar.

3. **object-fit vs contain + object-position**

   - Dos imágenes idénticas en cajas iguales:
     - `.cover` (rellena y recorta)
     - `.contain` (entera visible)
   - Ajusta la **posición** del recorte con `object-position` (p.ej. `center top`).

4. **Figuras con pie**

   - Usa `<figure>` + `<figcaption>` con estilo limpio.
   - El `figcaption` debe mantener contraste y espaciado adecuados.

5. **Avatares / formas**

   - Crea un avatar `.avatar` circular con `border-radius: 50%`, tamaños S/M/L, y fallback de borde si la imagen no carga.

6. **Filtros y superposición**

   - Aplica un filtro en hover (`grayscale`, `brightness` o `blur`) y una **capa** superpuesta con degradado suave (solo CSS).
   - No animes `filter` de forma agresiva (rendimiento): usa transiciones cortas.

7. **(Opcional) image-set()**

   - Para una `background-image`, define `image-set()` con 1x/2x y un overlay con `background-blend-mode`.

8. **(Opcional) Lazy + decodificación**
   - Marca las imágenes como `loading="lazy"` y `decoding="async"` (HTML, no CSS).

## Accesibilidad

- Todas las imágenes **no decorativas** deben tener `alt` descriptivo.
- Evita filtros que empeoren el contraste en imágenes con texto superpuesto.
- Mantén foco visible si algún contenedor es interactivo (p. ej., un link envolviendo la imagen).

## Entregable

Edita **solo** `starter/`. Revisa `/solucion` cuando termines.
