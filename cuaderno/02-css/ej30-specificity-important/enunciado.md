# Ejercicio 30 — `!important` y especificidad

**Objetivo**: entender cómo se resuelven los conflictos de reglas CSS y por qué evitar `!important` salvo casos muy justificados.

## Qué practicarás

- Cálculo básico de especificidad:
  - Etiquetas → 0,0,1
  - Clases/atributos/pseudoclases → 0,1,0
  - IDs → 1,0,0
  - Inline styles → 1,0,0,0 (máxima)
- Reglas en cascada y último valor declarado.
- `!important` fuerza la prioridad **pero puede romper la mantenibilidad**.

## Requisitos

1. Enlaza `style.css` en `index.html`.
2. Crea una tarjeta `.card` con un párrafo dentro.
   - Aplica diferentes estilos al texto (color, font-size) usando:
     - Selector de tipo (`p { ... }`)
     - Selector de clase (`.card p { ... }`)
     - Selector de ID (`#especial { ... }`)
     - Inline style en el HTML
   - Observa qué estilo gana.
3. Añade un ejemplo donde `!important` anule una regla más específica.
4. Añade comentarios en CSS explicando la puntuación de cada selector.
5. (Opcional) Muestra un caso real de mal uso (ej. `* { margin:0 !important; }`).

## Entregable

Edita **solo** los archivos en `starter/`. La carpeta `solucion/` incluye una propuesta de resolución.
