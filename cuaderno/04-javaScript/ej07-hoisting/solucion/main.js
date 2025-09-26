// Ej07 — Hoisting

// 1) var
console.log("var antes de declararla:", miVar); // undefined
var miVar = 10;
console.log("var después:", miVar); // 10

// 2) let / const
try {
  console.log("let antes:", miLet); // ReferenceError (TDZ)
  let miLet = 20;
} catch (e) {
  console.log("Error con let antes de declararla:", e.message);
}

try {
  console.log("const antes:", miConst); // ReferenceError (TDZ)
  const miConst = 30;
} catch (e) {
  console.log("Error con const antes de declararla:", e.message);
}

// 3) Funciones declaradas
saludo(); // funciona por hoisting
function saludo() {
  console.log("Hola desde una función declarada");
}

// 4) Funciones expresadas
try {
  despedida(); // TypeError: despedida is not a function
} catch (e) {
  console.log("Error con función expresada antes:", e.message);
}
const despedida = function () {
  console.log("Adiós desde función expresada");
};
despedida(); // funciona aquí

// 5) Conclusión
// var → se eleva y queda inicializada como undefined.
// let / const → se elevan pero no se inicializan (zona temporal muerta).
// function declarada → se eleva completamente y se puede usar antes.
// función expresada → se comporta como variable, no usable antes de asignar.
