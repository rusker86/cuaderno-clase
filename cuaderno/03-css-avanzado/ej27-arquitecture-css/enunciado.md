# Ejercicio 27 — Arquitectura CSS escalable (BEM + utilidades + `@layer`)

**Objetivo**
Organizar CSS para crecer sin dolores:

- Nomenclatura **BEM** (Bloque, Elemento, Modificador).
- Capas con **`@layer`** (`reset`, `base`, `components`, `utilities`) y **orden de cascada**.
- Utilidades atómicas y “tokens” (variables).
- Reglas de **especificidad baja** (`:where()` / `:is()`).
- Patrón de **mods** (`.btn--primary`, `.card--featured`, etc.).
- (Opcional) **`@layer` por tema** y `@supports`/`@media` en capas.

## Requisitos

1. **Capas**

   - Declara cuatro capas: `reset`, `base`, `components`, `utilities`.
   - Asegura su **orden** (primero `@layer reset, base, components, utilities;`).

2. **Tokens**

   - En `:root`, define colores, radios, spacing y sombra. Usa esas variables en componentes.

3. **BEM**

   - Crea al menos **dos bloques** con elementos y modificadores:
     - `header` (bloque) con `.header__brand`, `.header__nav`, mod `.header--sticky`.
     - `card` con `.card__img`, `.card__title`, `.card__meta`, mod `.card--featured`.

4. **Utilidades**

   - Implementa 6–8 utilidades: `u-flex`, `u-grid`, `u-gap-*`, `u-p-*`, `u-mb-*`, `u-text-*`, `u-w-*`, `u-hide`.
   - Deben vivir en `@layer utilities` y tener **baja especificidad**.

5. **Especificidad controlada**

   - Usa `:where()` para no inflar especificidad en selectores largos.
   - Evita IDs en CSS.

6. **Demostración de cascada**

   - Muestra que una utilidad **puede sobrescribir** parte de un componente sin romper BEM.
   - Ej.: `.card--featured` pone borde; `u-p-0` quita padding.

7. **Accesibilidad**

   - `:focus-visible` consistente para `.btn` y enlaces.
   - Contraste suficiente.

8. **(Opcional) Tema**
   - Añade `@layer theme` y una clase `.theme-dark` en `<body>` que cambie tokens.

## Entregable

Rellena **solo** `starter/` siguiendo las pistas. Compara con `/solucion` al terminar.

> Consejos
>
> - Piensa primero las **capas** y su orden; después bloques BEM; al final utilidades.
> - Si algo necesita “más fuerza”, considera una **utilidad** antes que aumentar especificidad.
