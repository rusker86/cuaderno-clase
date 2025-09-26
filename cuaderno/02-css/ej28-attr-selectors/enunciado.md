# Ejercicio 28 — Selectores de atributos

**Objetivo**: seleccionar elementos mediante atributos y patrones de valor.

## Lo que debes practicar

- Presencia: `[attr]`
- Igualdad exacta: `[attr="valor"]`
- Prefijo: `[attr^="val"]`
- Sufijo: `[attr$="val"]`
- Subcadena: `[attr*="val"]`
- Palabra completa (separada por espacios): `[attr~="val"]`
- Lista separada por comas/valores `lang|region`: `[attr|="val"]` (opcional)

## Requisitos

1. Enlaza `style.css` desde `index.html`.
2. Crea una lista de enlaces con diferentes `href` (http, https, mailto, pdf, internos `#id`).
3. Crea un grupo de inputs con diferentes atributos (`required`, `type="email"`, `placeholder`, `data-rol="..."`, `lang="en-US"`).
4. En CSS:
   - Resalta todos los elementos que **tengan** cierto atributo (p. ej., `[required]`).
   - Estilos específicos para:
     - Enlaces `mailto:` (`[href^="mailto:"]`)
     - Enlaces a PDFs (`[href$=".pdf"]`)
     - Enlaces externos (`[href^="http"]`) vs internos (`[href^="#"]`)
     - Inputs cuyo placeholder **contenga** una palabra (`[placeholder*="nombre"]`)
     - Elementos con clases en una lista de palabras (`[class~="tag"]`)
     - (Opcional) `lang` con `[lang|="en"]`
5. Añade **comentarios** explicando cada selector y el caso de uso.
6. No uses `!important`.

## Entregable

Edita **solo** `starter/index.html` y `starter/style.css`. La solución va en `solucion/`.
