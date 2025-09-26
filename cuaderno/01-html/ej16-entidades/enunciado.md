# Ejercicio 16 — Caracteres especiales y entidades en HTML5

Objetivo: aprender a representar caracteres especiales en HTML usando **entidades**.

## Requisitos mínimos

1. Crea un documento que incluya un `h1` con el título: "Caracteres especiales en HTML".
2. Añade un párrafo donde aparezcan los siguientes símbolos usando entidades:
   - Símbolo de menor que `<` → `&lt;`
   - Símbolo de mayor que `>` → `&gt;`
   - Ampersand `&` → `&amp;`
   - Comillas dobles `"` → `&quot;`
   - Comillas simples `'` → `&apos;`
3. Crea un segundo párrafo con entidades de uso común:
   - Euro `€` → `&euro;`
   - Dólar `$` → `&#36;` (o `&dollar;`)
   - Copyright → `&copy;`
   - Marca registrada → `&reg;`
   - Flecha derecha → `&rarr;`
4. Añade comentarios en el HTML indicando cuándo es obligatorio usar entidades.
5. Opcional: muestra tu **nombre con acentos** usando entidades numéricas (ejemplo: `Óscar` → `&#211;scar`).

## Pistas

- `<` y `>` deben escaparse si se quieren mostrar como texto, porque HTML los interpreta como etiquetas.
- `&amp;` se usa para el carácter `&` en URLs o texto.
- Se pueden usar **entidades con nombre** (`&copy;`) o con código numérico (`&#169;`).
- No todos los navegadores reconocen todas las entidades con nombre; los códigos numéricos son más universales.

## Entregable

Edita solo `starter/index.html` hasta cumplir los requisitos.
