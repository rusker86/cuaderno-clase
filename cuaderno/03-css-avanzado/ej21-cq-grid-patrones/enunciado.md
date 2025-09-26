# Ejercicio 21 — Container Queries + Grid (patrones componibles)

**Objetivo**
Componer **componentes** que se auto-adapten usando **@container** (por ancho del contenedor) y **CSS Grid**:

- `container-type/name`
- `@container (min-width …)`
- Grid con `grid-template-areas`, `minmax()`, `auto-fit`
- Unidades `cq*` dentro del contenedor

## Requisitos

1. **Shell componible**

   - Crea un contenedor `.shell` con `container-type: inline-size; container-name: shell;`
   - Dentro, mete 3 widgets `.widget` idénticos. Cada widget es **otro contenedor** (`container-type: inline-size; container-name: widget;`).

2. **Widget “Media Card”**

   - Estructura: imagen (`.w__img`), título (`.w__title`), meta (`.w__meta`), texto (`.w__body`) y CTA (`.w__cta`).
   - Layout base: **columna** (1fr) con Grid.
   - Si **el widget** ≥ **420px** → cambia a 2 columnas (`grid-template-areas` con imagen a la izquierda).
   - Si **el widget** ≥ **640px** → añade una **columna lateral** para CTA fija.

3. **Widget “Stats grid” (auto-fit)**

   - Dentro del mismo `.widget`, crea `.w__stats` con un grid interno:
     `grid-template-columns: repeat(auto-fit, minmax( clamp(7rem, 20cqw, 10rem), 1fr ));`
   - Espaciado con `gap: clamp(.5rem, 2cqw, 1rem)`.

4. **Independencia por contenedor**

   - Coloca un widget en una `.shell` **estrecha** (≈ 460px) y otro en una `.shell` **fluida** (100%).
   - Deben **renderizar distinto** sin depender del viewport.

5. **Tokens dependientes del contenedor**

   - Usa `padding: clamp(.75rem, 2cqw, 1.25rem)` en `.widget`.
   - Limita alto de imagen con `max-block-size: min(42cqh, 320px)` en versiones anchas.

6. **Accesibilidad**
   - Imágenes con `alt`.
   - Foco visible en `.btn`.
   - Texto meta con contraste suficiente.

> Nota: todos los **breakpoints** son por **ancho del widget**, no del viewport.

## Entregable

Edita **solo** `starter/`. Consulta `/solucion` para comparar.
