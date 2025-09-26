# Rúbrica — Mini-proyecto integrador CSS

Este checklist sirve para evaluar el mini-proyecto de CSS. Cada ítem vale **1 punto** (total 24).  
Se aprueba con al menos 16/24 y la excelencia se alcanza con ≥22.

---

## Accesibilidad y estructura (4)

- [ ] Incluye **skip link** funcional visible al foco.
- [ ] Foco siempre visible en enlaces y botones (`:focus` o `:focus-visible`).
- [ ] Uso correcto de etiquetas semánticas (`header`, `main`, `section`, `footer`).
- [ ] Texto alternativo (`alt`) en imágenes decorativas y de contenido.

## Cabecera y navegación (3)

- [ ] Logotipo tipográfico correcto.
- [ ] Menú con 4 enlaces funcionales (`:link`, `:visited`, `:hover`, `:focus`, `:active`).
- [ ] Cabecera fija o sticky con estilo coherente.

## Hero y CTA (2)

- [ ] Titular principal + subtítulo presentes.
- [ ] CTA implementado como enlace estilo botón con estados hover/focus.

## Bloques de contenido (5)

- [ ] Cards de servicios en **inline-block** (no flex/grid).
- [ ] Cards se apilan en móviles mediante media query.
- [ ] Imagen flotada (`float:left`) con texto alrededor.
- [ ] Tabla de precios con `thead`, `tbody`, `tfoot`.
- [ ] Zebra + hover en filas de la tabla.

## Listas y pseudoelementos (3)

- [ ] Lista de testimonios con `::marker` personalizado.
- [ ] Uso de `::before`/`::after` o `::selection` en algún bloque.
- [ ] Ejemplo de pseudoclases estructurales (`:first-child`, `:nth-child`, etc.).

## Formulario (4)

- [ ] Labels asociados a inputs y textarea.
- [ ] Inputs con `required` y `placeholder` estilizado.
- [ ] Checkbox con estilo al estar `:checked`.
- [ ] Foco visible en campos (`:focus-visible` u otro).

## Footer y extras (3)

- [ ] Footer con enlaces secundarios (mailto y PDF).
- [ ] Selectores de atributo aplicados (`[href^="mailto:"]`, `[href$=".pdf"]`).
- [ ] Botón “volver arriba” con `position: fixed` y `z-index` alto.

## Buenas prácticas (0–2 bonus)

- [ ] Uso de unidades relativas (`rem`, `%`, `vw/vh`, `max-width`).
- [ ] Ejemplo comentado de `!important` como caso didáctico (no abuso).

---

## Escala de logro

- **<16 puntos** → No alcanza lo esperado.
- **16–21 puntos** → Correcto, cumple lo esencial.
- **22–24 puntos** → Excelente: dominio sólido del bloque CSS.
