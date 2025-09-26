# Ejercicio 22 — `float` y `clear`

**Objetivo**: dominar los casos típicos de `float` y cómo restablecer el flujo con `clear` o _clearfix_.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea estas demos (secciones separadas):
   - **A) Imagen flotada a la izquierda**: una imagen pequeña con `float: left;` y texto que la rodee. Añade `margin` para que el texto no se pegue.
   - **B) Imagen flotada a la derecha**: lo mismo con `float: right;`.
   - **C) Cards con float**: dos cajas `.card` dentro de un contenedor `.wrap` flotadas (izq/der) para simular dos columnas.
     - El contenedor debe “colapsar” por el float: solucionalo con **clearfix** (pseudo-elemento).
   - **D) Romper el flujo con `clear`**: un elemento `.fin` bajo las cards que use `clear: both;` para bajar por debajo de los floats.
3. Añade **comentarios** en CSS explicando:
   - Qué hace `float`, cuándo usarlo hoy en día.
   - Por qué el contenedor pierde altura y cómo se corrige con clearfix.
   - Qué hace `clear` (`left`, `right`, `both`).
4. (Opcional) Crea una **inicial capitular** (drop cap) flotada a la izquierda con una primera letra grande.

> Nota: Evita usar `float` para maquetar páginas completas; usa **Flex** o **Grid**.
