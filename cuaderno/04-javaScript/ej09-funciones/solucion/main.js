// Ej09 — Funciones

// 1) Declarada
function saludar(nombre) {
  return `Hola, ${nombre}`;
}
console.log(saludar("Ada"));

// 2) Expresada
const sumar = function (a, b) {
  return a + b;
};
console.log("Suma:", sumar(3, 4));

// 3) Flecha
const multiplicar = (a, b) => a * b;
console.log("Multiplicación:", multiplicar(5, 6));

// 4) Parámetros por defecto
function saludoPersonalizado(nombre = "invitado") {
  return `Bienvenido, ${nombre}`;
}
console.log(saludoPersonalizado("Alan"));
console.log(saludoPersonalizado()); // usa "invitado"

// 5) Return
function esPar(n) {
  return n % 2 === 0;
}
console.log("¿4 es par?", esPar(4));
console.log("¿7 es par?", esPar(7));

// 6) Funciones dentro de funciones
function operacionesBasicas(a, b) {
  function suma(x, y) {
    return x + y;
  }
  function resta(x, y) {
    return x - y;
  }
  return {
    suma: suma(a, b),
    resta: resta(a, b),
  };
}
console.log("Operaciones básicas:", operacionesBasicas(10, 4));
