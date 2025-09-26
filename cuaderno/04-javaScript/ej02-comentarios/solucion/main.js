// Ej02 — Comentarios

// Comentario de una línea:
// Declaramos una constante con el nombre del usuario
const usuario = "Ada Lovelace";

/* Comentario multilínea:
   En este bloque vamos a mostrar en consola un saludo
   al usuario definido arriba. Esto no es estrictamente
   necesario, pero lo usamos para ilustrar comentarios largos.
*/
console.log("Bienvenida,", usuario);

/**
 * Función que suma dos números
 * @param {number} a - primer número
 * @param {number} b - segundo número
 * @returns {number} resultado de a + b
 */
function suma(a, b) {
  return a + b;
}

console.log("2 + 3 =", suma(2, 3)); // salida esperada: 5

// TODO: mejorar la función suma para aceptar n números en lugar de solo 2
