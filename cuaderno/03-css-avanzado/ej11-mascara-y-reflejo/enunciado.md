# Ejercicio 11 — Máscaras (mask) + Imágenes reflejadas

**Objetivo**
Practicar **máscaras CSS** (`mask-image`, `-webkit-mask`, gradientes, SVG, `mask-composite`) y crear **reflejos** de imágenes con técnicas modernas (gradiente + transform) y alternativas.

## Parte A — Máscaras

1. **Máscara con gradiente**
   - Crea `.masked-grad`: usa `mask-image: linear-gradient(...)` para desvanecer un bloque hacia un borde.
2. **Máscara con imagen SVG (data URI)**
   - Crea `.masked-svg`: aplica `mask-image: url('data:image/svg+xml;utf8,...')` con zonas blancas visibles y negras ocultas.
3. **Máscara radial (spotlight)**
   - Crea `.masked-spot`: un círculo visible y el resto oculto (`radial-gradient(circle, #fff 40%, transparent 42%)`).
4. **Composición de máscaras (opcional)**
   - Crea `.masked-composite` con **dos** máscaras (p. ej. rayas + círculo) y `mask-composite`/`-webkit-mask-composite` para combinar.

> Pistas:
>
> - `mask-image` admite gradientes, URLs e imágenes SVG/PNG.
> - Blanco = visible, negro/transparent = oculto.
> - Controla con `mask-size`, `mask-position`, `mask-repeat`.
> - Soporte WebKit móvil: usa prefijos `-webkit-mask-*` cuando proceda.

## Parte B — Imágenes reflejadas

1. **Reflejo básico debajo**
   - Duplica visualmente la imagen con un pseudo-elemento (`::after`), `transform: scaleY(-1)`, y **degrada** con `mask-image: linear-gradient(...)`.
2. **Reflejo lateral (izquierda o derecha)** (opcional)
   - Igual, pero con `scaleX(-1)` y máscara horizontal.
3. **Filtro de desenfoque leve en el reflejo** (opcional)
   - Aplica `filter: blur(1px)` al pseudo-elemento.

## Accesibilidad y rendimiento

- Evita reflejos exagerados (alto contraste) que dificulten la lectura.
- Usa imágenes con `alt` descriptivo.
- Recuerda que `mask` puede no estar soportado en navegadores antiguos: prepara un **fallback** razonable.

## Entregable

Trabaja **solo en `starter/`**. La carpeta `solucion/` incluye una referencia completa.
