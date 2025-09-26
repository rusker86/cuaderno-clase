# Ejercicio 18 — Media queries de **contenedor**

**Objetivo**
Aprender a diseñar **componentes** que se adapten al _ancho del contenedor_, no al viewport:
`container-type`, `container-name`, `@container (inline-size)`, unidades `cqw/cqh/cqi/cqb/cqmin/cqmax`
y (opcional) **style queries**.

## Requisitos

1. Habilita el contenedor

- Crea un contenedor `.region` con `container-type: inline-size;` (y nombre `layout`).
- Dentro, mete **dos** tarjetas `.card` idénticas para ver cómo reaccionan según el ancho de su contenedor.

2. Card adaptable por **container**

- Estructura `.card` con: imagen, título, texto y meta.
- Layout **vertical** por defecto.
- A partir de **480px de ancho de contenedor**, cambia a layout **lado a lado** (imagen + contenido en columnas).
- A partir de **700px**, añade una **sidebar** dentro de la card (p. ej., precio/CTA a la derecha).

3. Demostración de independencia

- Crea **dos regiones**: una estrecha (≈ 380px) y otra ancha (fluida). La misma `.card` debe verse distinta en cada región sin depender del viewport.

4. Unidades de **container** (cqw…)

- En la card grande, establece el `max-height` de la imagen con `min(40cqh, 320px)`.
- Usa `padding` o `gap` dependiente del contenedor (p. ej., `clamp(.75rem, 2cqw, 1.25rem)`).

5. (Opcional) Style query

- Señala una card como **compacta** con una custom property: `.card { --variant: "compact"; }`.
- Aplica estilos dentro de `@container style(--variant: "compact") { ... }` (si tu navegador lo soporta).

6. Accesibilidad

- Imagen con `alt` descriptivo.
- Foco visible en el CTA.
- Mantén contraste adecuado.

## Entregable

Edita **solo** `starter/`. Revisa `/solucion` como referencia.

> Nota: `container-type: inline-size` habilita consultas por **ancho lógico**. Si necesitas alto, usa `size` (más costoso).
