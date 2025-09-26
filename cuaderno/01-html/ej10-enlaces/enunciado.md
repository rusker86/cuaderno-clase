# Ejercicio 10 — Enlaces en HTML5

Objetivo: aprender a crear y configurar enlaces (`<a>`) con diferentes atributos y usos.

## Requisitos mínimos

1. Crea un documento con un encabezado (`h1`) y una sección de enlaces que incluya:
   - Un enlace a una página externa (ej. https://developer.mozilla.org) que se abra en una nueva pestaña usando `target="_blank"` y `rel="noopener noreferrer"`.
   - Un enlace interno a otra sección del mismo documento usando un `id`.
   - Un enlace a un correo electrónico (`mailto:`).
   - Un enlace a un número de teléfono (`tel:`).
   - Un enlace de descarga (`download`) para un archivo ficticio (ej. `documento.pdf`).
2. Agrupa los enlaces en una lista no ordenada (`ul`).
3. Añade al menos un enlace dentro de un párrafo para simular navegación contextual.
4. Usa el atributo `title` en al menos 2 enlaces.

## Pistas

- `rel="noopener noreferrer"` es buena práctica de seguridad cuando usas `target="_blank"`.
- Para enlaces internos, usa el mismo documento con `href="#idDelElemento"`.
- El atributo `download` solo funciona para recursos del mismo origen o rutas relativas.
- `mailto:` abre el cliente de correo del usuario con el destinatario prellenado.
- `tel:` permite iniciar una llamada desde dispositivos móviles.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
