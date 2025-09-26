# Ejercicio 19 — Tipografía fluida avanzada (clamp, escala modular, leading-trim opcional)

**Objetivo**  
Diseñar un sistema tipográfico **fluido** que responda al ancho, usando `clamp()` y variables CSS para una **escala modular**.
Controlar `line-height`/ritmo vertical y explorar `leading-trim` (opcional, experimental).

## Requisitos

1. **Tokens tipográficos**

   - Define en `:root` una escala modular con variables: `--step--2` … `--step-4`.
   - Calcula cada `--step-*` con `clamp(min, calc(fluid), max)`.  
     Pista: usa `vw` (o `vi`) para la parte fluida.

2. **Roles tipográficos**

   - Asigna tokens a: `h1, h2, h3, .lead, body` (texto base).
   - Usa `font-weight` y `letter-spacing` coherentes.
   - Mantén **contraste** y tamaño mínimo legible (≥ 16px base).

3. **Ritmo vertical**

   - Define un `--lh` (line-height) base y variantes para títulos.
   - Usa `margin-top/bottom` consistentes (p. ej., `margin: 0 0 var(--space-2)`).

4. **Tabla de la escala**

   - Renderiza una tabla/listado `.scale` mostrando cada paso: nombre, clamp usado y vista previa.

5. **Componente “card” con texto**

   - Aplica los roles a una `.card` con `h3`, `.meta`, `p`.
   - Títulos fluidos; meta más pequeña (usa `--step--1` o `--step--2`).

6. **(Opcional) leading-trim**

   - Crea una clase `.trimmed` en un título y aplica `leading-trim: both; text-edge: cap alphabetic;`  
     Nota: **experimental**; no todos los navegadores lo soportan → no debe romper layout.

7. **Accesibilidad**
   - Respeta `prefers-reduced-motion` (si animas tamaño).
   - Asegura contraste suficiente y foco visible donde aplique.

## Entregable

Edita **solo** `starter/`. Revisa `/solucion` cuando termines.

### Tips

- Fórmula típica fluida: `clamp(MIN, calc(BASE + FACTOR * vw), MAX)`
- Mantén el **salto** entre pasos (escala modular) consistente, p. ej. ratio 1.2–1.25.
