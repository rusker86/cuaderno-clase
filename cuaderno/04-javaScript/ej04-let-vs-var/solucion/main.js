// Ej04 — let vs var

// 1) Ámbito de bloque
{
  var x = "var dentro de bloque";
  let y = "let dentro de bloque";
}
console.log("x con var:", x); // existe fuera del bloque
try {
  console.log("y con let:", y); // ReferenceError
} catch (e) {
  console.log("Error accediendo a y:", e.message);
}

// 2) Ámbito en bucles
for (var i = 0; i < 3; i++) {
  // var i es accesible fuera del bucle
}
console.log("i con var tras bucle:", i); // 3

for (let j = 0; j < 3; j++) {
  // let j solo existe en este bloque
}
try {
  console.log("j con let tras bucle:", j); // ReferenceError
} catch (e) {
  console.log("Error accediendo a j:", e.message);
}

// 3) Hoisting
console.log("antes de declarar con var:", z); // undefined (hoisting)
var z = "ahora sí existe";

try {
  console.log("antes de declarar con let:", w); // ReferenceError
  let w = "no debería llegar aquí";
} catch (e) {
  console.log("Error con let antes de declararla:", e.message);
}

// 4) Conclusiones
// var → ámbito de función o global, sufre hoisting (inicializada como undefined).
// let → ámbito de bloque, no accesible antes de declararse (zona temporal muerta).
