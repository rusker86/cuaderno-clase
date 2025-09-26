# Ejercicio 12 — Botones avanzados (solo CSS)

**Objetivo**
Diseñar un pequeño sistema de botones accesibles y reutilizables, con variantes y estados, usando solo CSS.

## Requisitos

1. Crea **5 variantes** de botón (como clases utilitarias combinables):

- `.btn--solid` (primario sólido)
- `.btn--outline` (borde + fondo transparente)
- `.btn--ghost` (sin borde, solo cambio en hover)
- `.btn--danger` (estado peligro)
- `.btn--link` (parece enlace, mantiene foco visible)

2. Crea **3 tamaños**:

- `.btn--sm`, `.btn--md`, `.btn--lg`

3. Estados y accesibilidad:

- `:hover`, `:focus-visible`, `:active`, `[disabled]`/`.is-loading`
- Cursor adecuado, foco **SIEMPRE** visible (no lo elimines)
- Contraste suficiente (≈ 4.5:1 en texto principal)
- `aria-busy="true"` durante loading (demo)

4. Iconos inline (opcional):

- Usa un `<span class="icon" aria-hidden="true">…</span>` antes del texto
- Alinea bien el icono y añade separación (gap)

5. Loading (solo CSS):

- `.btn--loading` muestra un spinner con `::after` y oculta el texto con `opacity:0` o `visibility:hidden` sin desplazar el layout

6. Extras (opcionales):

- Forma “pill” (`.btn--pill`)
- Grupo de botones `.btn-group` con estados de foco y separación correcta
- Variante **quiet** para fondos oscuros (tema invertido)

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución completa está en `/solucion`.

> Sugerencia de uso:
> `<button class="btn btn--md btn--solid">Comprar</button>`
