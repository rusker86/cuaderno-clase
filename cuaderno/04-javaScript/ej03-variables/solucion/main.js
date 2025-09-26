// Ej03 — Variables

// 1) let
let edad = 20;
console.log("Edad inicial:", edad);
edad = 21; // podemos reasignar
console.log("Edad actualizada:", edad);

// 2) const
const PI = 3.1416;
console.log("PI =", PI);
console.log("Área de un círculo radio 5 =", PI * 5 * 5);
// PI = 3.14; // ❌ Error: Assignment to constant variable

// 3) var vs let
{
  var globalVar = "Soy var dentro de un bloque";
  let bloqueLet = "Soy let dentro de un bloque";
}
console.log(globalVar); // existe fuera → "Soy var dentro de un bloque"
try {
  console.log(bloqueLet); // ReferenceError: bloqueLet is not defined
} catch (e) {
  console.log("Error accediendo a bloqueLet fuera del bloque:", e.message);
}

// 4) buenas prácticas
// - Usar const por defecto, ya que impide reasignaciones accidentales.
// - Usar let cuando realmente necesitas reasignar el valor.
// - Evitar var porque ignora el ámbito de bloque y puede causar errores difíciles de depurar.
