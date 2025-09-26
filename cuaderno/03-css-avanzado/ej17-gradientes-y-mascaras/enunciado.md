# Ejercicio 17 — Gradientes avanzados + Máscaras combinadas

**Objetivo**  
Dominar `linear-gradient`, `radial-gradient`, `conic-gradient`, variantes `repeating-*`, capas múltiples y su combinación con **máscaras** (`mask-image`, `-webkit-mask-image`, `mask-composite`) para crear patrones complejos.

## Requisitos

1. **Tarjeta con overlay en capas**

   - Fondo base con **dos gradientes lineales** cruzados.
   - Overlay sutil (degradado a negro al pie) para mejorar legibilidad del título.

2. **Patrón de rayas repetidas**

   - `repeating-linear-gradient(...)` para crear un patrón rayado configurable con variables CSS.

3. **“Sol” con `conic-gradient`**

   - Disco central con `conic-gradient` y halo con `radial-gradient`.
   - Añade una **máscara radial** (spotlight) para recortar bordes.

4. **Aros concéntricos**

   - `repeating-radial-gradient` para generar aros.
   - Combina con máscara en rayas diagonales para “recortar” sectores.

5. **Texto con recorte por gradiente**

   - Aplica un gradiente en el texto via `background-clip:text` (con prefijo) y `color: transparent`.
   - Encima, una **máscara lineal** para “bar de brillo” diagonal.

6. **(Opcional) Patrón “tablero”**
   - Usa **dos** `repeating-linear-gradient` perpendiculares en capas para simular un tablero.

### Notas y tips

- Capas se separan por **comas**; el **último** fondo se pinta **debajo**.
- Combina gradientes y máscaras (blanco visible, negro/transparente oculta).
- Prefijos `-webkit-mask-*` mejoran soporte en Safari/iOS.
- Cuida rendimiento: evita demasiadas capas/blur grandes.

## Entregable

Trabaja **solo en `/starter`**. La referencia está en `/solucion`.
