# Ejercicio 16 — Tablas en CSS3

**Objetivo**: aplicar estilos básicos a tablas HTML para mejorar su legibilidad.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea una tabla con:
   - Encabezado (`<thead>`) con fila de títulos (`<th>`).
   - Cuerpo (`<tbody>`) con al menos 4 filas y 3 columnas.
   - Pie (`<tfoot>`) con una fila de resumen.
3. En CSS:
   - Aplica `border` a las celdas.
   - Usa `border-collapse: collapse;`.
   - Añade `padding` en celdas para espaciar el contenido.
   - Alterna colores de fila (`nth-child(even)` o `odd`).
   - Estiliza el encabezado con fondo diferente y texto en negrita.
   - Alinea el texto: izquierda para la primera columna, centrado para las demás.
4. (Opcional) Al pasar el ratón por una fila (`tr:hover`), cambia el color de fondo.
5. Documenta en comentarios:
   - Qué hace `border-collapse`.
   - Por qué `padding` es clave para legibilidad.

## Entregable

Edita los archivos de la carpeta `starter/`. La carpeta `solucion/` contiene una propuesta de resolución.
