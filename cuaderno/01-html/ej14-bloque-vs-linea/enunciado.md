# Ejercicio 14 — Elementos en bloque vs en línea (HTML5)

Objetivo: comprender las **diferencias de comportamiento** entre elementos de **bloque** y **en línea**: ocupación de ancho, salto de línea, márgenes/padding y cómo `display` altera el flujo.

## Requisitos mínimos

1. Crea una página con:
   - Un `h1` y un breve párrafo introductorio.
   - Una **sección “Bloque”** con varios elementos típicos de bloque (`div`, `p`, `section`, `h2`) dentro de un contenedor con borde.  
     Observa cómo **ocupan todo el ancho** disponible y **fuerzan salto de línea**.
   - Una **sección “En línea”** con elementos `span`, `a`, `strong`, `em` y (opcional) `img` con `alt`.  
     Observa cómo **se alinean en la misma línea** y solo ocupan su contenido.
2. Crea una **sección de experimentos**:
   - **Experimento A (márgenes/padding)**: Aplica `margin-top` y `padding-top` a un elemento en línea y observa el efecto; compáralo con un elemento de bloque.
   - **Experimento B (display)**: Convierte un `span` a `display:block` y un `a` a `display:inline-block`.  
     Observa la diferencia entre `inline`, `block` e `inline-block`.
   - **Experimento C (ancho/alto)**: Intenta fijar `width` y `height` en un elemento en línea vs el mismo elemento con `inline-block`.
3. Añade **comentarios en el HTML** explicando lo observado en cada experimento.

## Pistas

- Por defecto: _bloque_ ocupa 100% del contenedor y genera salto de línea; _en línea_ fluye con el texto.
- En elementos **en línea** no suele aplicarse `width/height`; con `inline-block` sí.
- Los márgenes verticales en elementos en línea no empujan como en bloque; el `padding` sí afecta el área de fondo.
- No confundas **semántica** con **presentación**: `display` cambia el layout, no el significado del elemento.

## Entregable

Edita `starter/index.html` y `starter/styles.css` hasta cumplir los requisitos.
