# Ejercicio 24 — Accesibilidad visual avanzada

**Objetivo**  
Diseñar componentes con **contraste adecuado**, **foco visible** y estados coherentes, respetando preferencias del usuario:
`prefers-contrast`, `forced-colors`, `prefers-reduced-motion`, `:focus-visible`, `:focus-within`, `:target`, `[aria-*]`, `:disabled`.

## Requisitos

1. **Tokens de color y modo**

   - Define variables de color (fg/bg/border/primary/success/warn/error) y ajusta tema oscuro/claro con `prefers-color-scheme`.
   - Aumenta **contraste** cuando `(prefers-contrast: more)`.

2. **Foco visible consistente**

   - Crea un anillo de foco reutilizable (outline + outline-offset) en `.btn`, enlaces y campos.
   - Diferencia `:focus-visible` de `:focus` (no muestres foco al click con ratón).

3. **Enlaces accesibles**

   - Enlace con `:hover`, `:focus-visible`, `:active`, `:visited`.
   - Sube el contraste y usa `text-decoration-thickness` + `text-underline-offset` (subrayado grueso en hover/focus).

4. **Botones y estados**

   - Botón primario `.btn` con estados `:hover`, `:focus-visible`, `:active`, `:disabled` (cursor, opacidad).
   - Variante `.btn--danger`.

5. **Campos de formulario**

   - `.field` con `label`, `input` y `.hint`.
   - Estilos para `[aria-invalid="true"]` y `[aria-invalid="false"]`.
   - Resalta `.field:focus-within`.

6. **Alertas y roles**

   - Crea `.alert[role="status"]` y `.alert[role="alert"]` con icono textual (emoji) y contraste correcto.

7. **Salto de contenido**

   - “**Skip link**” visible al foco que salte a `#main`.

8. **Señalización sin color**

   - Además del color, usa **forma/contorno/texto** (ej.: borde + icono + texto).

9. **Compatibilidad de alto contraste**

   - Añade un bloque `@media (forced-colors: active)` para asegurar borde y foco en modos de alto contraste del SO.

10. **(Opcional)**
    - `accent-color` para checkboxes/radios.
    - `caret-color` y selección de texto `::selection`.

## Entregable

Edita **solo** `starter/`. La referencia está en `/solucion`.

> Notas
>
> - Mínimos WCAG: **4.5:1** para texto normal, **3:1** para grande (≥18.66px bold / 24px regular).
> - No dependas solo del color para transmitir estado.
