# Ejercicio 27 — Atributos “de calidad de vida” en HTML

Objetivo: conocer y practicar atributos que mejoran la **edición**, **entrada de texto**, **idiomas por fragmento** y **utilidad del teclado**, sin necesidad de CSS ni JS.

## Requisitos mínimos

1. Idiomas y dirección del texto:

   - Declara `lang="es"` en `<html>`.
   - Crea un párrafo con una **cita en inglés** marcada con `lang="en"`.
   - Añade un pequeño fragmento en escritura **RTL** con `dir="rtl"` (ej., una palabra/frase en árabe o hebreo).

2. Edición y revisión:

   - Un párrafo con `contenteditable="true"` y `spellcheck="true"`.
   - Otro elemento editable con la **revisión desactivada**: `spellcheck="false"` (explica en un comentario por qué).
   - Un campo de entrada con `autocapitalize="words"` (o `sentences`) y, si tu navegador lo respalda, `autocorrect="on|off"`.

3. Arrastrar y traducción:

   - Un texto marcado como **no traducible** con `translate="no"` (p. ej., un nombre de marca).
   - Un elemento con `draggable="true"` (explica que solo demuestras el estado arrastrable; sin JS no hay “drop”).

4. Teclado y entrada en móviles:

   - Un `<input type="tel">` con `inputmode="numeric"` y `enterkeyhint="done"`.
   - Un `<input type="email">` con `autocomplete="email"`.
   - Un `<input type="search">` con `enterkeyhint="search"`.

5. Comentarios:
   - Añade comentarios `<!-- -->` explicando el propósito de cada atributo que uses.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.

> Nota: Algunos atributos como `autocorrect` o ciertos valores de `autocapitalize`/`enterkeyhint` pueden depender del navegador. No pasa nada si en tu entorno no ves cambios visibles: el objetivo es conocerlos y marcarlos correctamente.
