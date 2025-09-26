# Ejercicio 01 — Fundamentos y principios básicos de CSS3

**Objetivo**: asentar la base de CSS: cómo **enlazar** la hoja de estilo, la **sintaxis** de una regla, **selectores** básicos, **cascada**, **herencia** y una pizca de **especificidad** (sin profundizar aún).

## Requisitos

1. **Enlaza** `style.css` desde `index.html` dentro de `<head>`.
2. Crea al menos **5 reglas** en `style.css` que demuestren:
   - Selector **de elemento** (ej.: `header`, `p`).
   - Selector **de clase** (ej.: `.destacado`).
   - Selector **de ID** (ej.: `#hero`).
   - Selector **descendiente** (ej.: `main p`).
   - Selector **agrupado** (ej.: `h1, h2`).
3. **Cascada y especificidad (básico)**:
   - Define dos reglas que entren en **conflicto** sobre el mismo elemento (por ejemplo, color de un párrafo) y resuélvelo:
     - una por **tipo** (ej. `p { color: ... }`)
     - otra por **clase** (ej. `.destacado { color: ... }`)
   - Explica con un **comentario** cuál gana y por qué.
4. **Herencia**:
   - Define `font-family` en `body` y comprueba que los textos internos lo **heredan**.
   - Define `color` en `main` y observa la herencia en sus párrafos.
5. **Comentarios**:
   - Añade al menos **dos comentarios** en `style.css` explicando decisiones (cascada/herencia).
6. **Prohibido** usar `!important` (lo veremos más adelante).

## Pistas

- Sintaxis básica:
  ```css
  selector {
    propiedad: valor;
  }
  ```
