# Ejercicio 05 — Efectos en el texto

**Objetivo**  
Aplicar efectos visuales a tipografía usando solo CSS: sombras múltiples, contorno (stroke), rellenos con gradiente o imagen, subrayados controlados y efectos “neón/relieve” accesibles.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea las siguientes demos:

### A) Sombra múltiple (“neón” controlado)

- Un `h2.neon` con **varias** `text-shadow` apiladas (sutil, legible).
- Añade un estado `:hover` con ligera variación (sin perder contraste).

### B) Relieve / Emboss

- Un `h2.emboss` con **dos** sombras opuestas de baja opacidad que simulen relieve.

### C) Contorno (stroke) y relleno transparente

- Un `h2.stroke` con `-webkit-text-stroke` y `color: transparent` (o `currentColor` + `background-clip:text`).
- Explica limitaciones de compatibilidad (prefijo WebKit).

### D) Texto con gradiente

- Un `h2.grad` con **gradiente** aplicado vía `background-clip:text` (+ prefijo) y `color: transparent`.

### E) Texto con imagen (recorte)

- Un `h2.img-in-text` con `background-image` (cualquier imagen web) recortada al texto.

### F) Subrayado tipográfico moderno

- Un párrafo con enlaces que usen `text-decoration-thickness`, `text-underline-offset` y `text-decoration-color`.

3. (Opcional)

- `mix-blend-mode` para efectos “knockout” sobre fondos.
- Efecto “long-shadow” creado con múltiples sombras (generadas a mano para 10–15 pasos).

4. Accesibilidad

- Mantén **contraste suficiente** cuando el texto sea contenido principal.
- Evita depender solo del color para estados (añade grosor/offset en subrayados).
- Provee un fallback legible si el efecto no está soportado.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución está en `/solucion`.
