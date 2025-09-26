# Ejercicio 12 — Tablas en HTML5

Objetivo: aprender a crear tablas con estructura completa y semántica, usando etiquetas propias de HTML5.

## Requisitos mínimos

1. Crea una tabla con:
   - Un `<caption>` que describa el contenido de la tabla.
   - Una cabecera (`<thead>`) con nombres de columna (`<th>`).
   - Un cuerpo (`<tbody>`) con al menos **3 filas de datos** (`<tr>`).
   - Un pie (`<tfoot>`) con una fila resumen.
2. Usa el atributo `scope` en los encabezados (`th`) para indicar si corresponden a **columnas** o **filas**.
3. Incluye al menos una celda con `colspan` o `rowspan` para combinar celdas.
4. Añade un ejemplo de tabla con **horario de clases** o **productos en inventario**.
5. En el documento, incluye un `h1` antes de la tabla y un párrafo introductorio.

## Pistas

- Usa `<caption>` para dar un título breve a la tabla.
- `scope="col"` para encabezados de columna y `scope="row"` para encabezados de fila.
- `tfoot` suele usarse para totales o notas al final de la tabla.
- Usa `colspan` para celdas que ocupan varias columnas y `rowspan` para celdas que ocupan varias filas.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
