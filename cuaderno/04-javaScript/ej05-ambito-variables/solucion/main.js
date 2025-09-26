// Ej05 — Ámbito de las variables

// 1) Ámbito global
let globalVar = "Soy global";

function saludar() {
  console.log("Dentro de función, globalVar:", globalVar);
}
saludar();

{
  console.log("Dentro de bloque, globalVar:", globalVar);
}

// 2) Ámbito de función
function pruebaFuncion() {
  let interna = "Solo dentro de la función";
  console.log("Dentro de función, interna:", interna);
}
pruebaFuncion();
try {
  console.log(interna); // ReferenceError
} catch (e) {
  console.log("Error accediendo a interna:", e.message);
}

// 3) Ámbito de bloque
{
  let bloqueVar = "Solo dentro del bloque";
  console.log("Dentro del bloque:", bloqueVar);
}
try {
  console.log(bloqueVar); // ReferenceError
} catch (e) {
  console.log("Error accediendo a bloqueVar:", e.message);
}

// 4) Encadenamiento de scopes
let mensaje = "mensaje global";
function externa() {
  let mensaje = "mensaje en externa";
  function interna() {
    console.log("Mensaje desde interna:", mensaje);
  }
  interna();
}
externa(); // → usa el de externa, no el global

// 5) Diferencia con var
{
  var conVar = "Soy var en bloque";
}
console.log("var en bloque sí existe fuera:", conVar); // var ignora el bloque
