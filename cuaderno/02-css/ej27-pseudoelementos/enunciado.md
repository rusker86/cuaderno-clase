# Ejercicio 27 — Pseudoelementos en CSS

**Objetivo**: añadir contenido decorativo o seleccionar partes específicas del contenido usando pseudoelementos.

## Qué practicarás

- `::before` y `::after` (badges/ornamentos, separadores).
- `::first-line` (estilo de la **primera línea**).
- `::first-letter` (capital o letra inicial).
- `::selection` (resaltado al seleccionar texto).
- (Opcional) `::marker` (viñetas de listas) y `::placeholder` (texto fantasma en inputs).

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea secciones para:
   - **A) `::before`/`::after`**: un titular `.title` con un adorno antes o después; otra demo con un “badge” (p. ej. `NEW`) en una tarjeta `.card`.
   - **B) `::first-line`**: párrafo largo al que se le cambie tipografía/espaciado solo en la primera línea.
   - **C) `::first-letter`**: párrafo con una capital (letra inicial grande).
   - **D) `::selection`**: cambiar el color/fondo del texto seleccionado.
   - **E) (Opcional) `::marker`**: personaliza el marcador de un `ul`.
   - **F) (Opcional) `::placeholder`**: estiliza el placeholder de un input.
3. Añade **comentarios** en CSS explicando:
   - `content` es necesario en `::before/::after`.
   - Qué propiedades afectan a `::first-line` y `::first-letter` (no todas aplican).
   - `::selection` no admite todas las propiedades (color/fondo suelen bastar).
   - Accesibilidad: el contenido añadido con `content` es **decorativo**; no lo uses para información esencial.
4. No uses `!important`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución se incluye en `solucion/`.
