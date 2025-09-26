# Mini-proyecto integrador CSS — “Landing básica sin frameworks”

**Objetivo**  
Maquetar una landing de una marca ficticia (elige tema: cafetería, taller, curso…) usando SOLO HTML + CSS del bloque visto:
colores, tipografía, box model, display, inline-block, float/clear, position, z-index, overflow, links/estados, listas, tablas,
formularios, selectores, pseudoclases/pseudoelementos, atributos, unidades, `max-width`, `!important`/specificity (controlado),
y media queries básicas. Sin Flex ni Grid.

## Requisitos funcionales

1. **Cabecera** con logotipo tipográfico (texto), **nav** con 4 enlaces (home/servicios/precios/contacto).
   - Estados `:link/:visited/:hover/:focus/:active`.
   - “Saltar al contenido” (skip link) visible al foco.
2. **Hero** con titular, subtítulo y **CTA** (enlace estilo botón).
3. **Bloque de “servicios/ventajas”**: 3 cards en **fila con `inline-block`** que apilen verticalmente en pantallas estrechas (media query).
4. **Imagen flotada** (`float:left`) con texto alrededor (márgenes para respiración).
5. **Tabla** simple de precios (thead/tbody/tfoot) con zebra y hover.
6. **Testimonios** en lista, personaliza el `::marker` (decorativo).
7. **Formulario de contacto** con `label` asociado, `required`, `:focus-visible`, placeholder personalizado, y un checkbox `:checked`.
8. **Footer** con enlaces secundarios; añade un **botón “volver arriba”** `position: fixed` con `z-index` alto.
9. **Accesibilidad**: foco siempre visible; contraste razonable; `aria-label` donde aplique.
10. **Responsive**: usa `max-width`, `%`, `rem`, `vw/vh` y **una** media query para breakpoints (~640–768px).

## Requisitos CSS (muestrario)

- Tipografía base; escalas con `rem`.
- Paleta: variables opcionales (o constantes directas).
- Box model, `border`, `padding`, `margin`.
- `display: inline-block`, `float` + `clear`, `position: relative/absolute/fixed/sticky` (usa `sticky` en el nav o en un subtítulo).
- `overflow` en un bloque con contenido largo.
- Selectores de **atributo** (icono a `mailto:` y `.pdf` con sufijo/prefijo).
- Pseudoclases `:first-child/:last-child/:nth-child`, `:not()`.
- Pseudoelementos `::before/::after`, `::selection`, `::placeholder`, `::marker`.
- Un ejemplo controlado de `!important` (documenta por qué **no** usarlo por defecto).

## Entregable

Rellena **starter/index.html** y **starter/style.css**. No modifiques `/solucion`.  
Incluye comentarios breves donde uses una técnic
