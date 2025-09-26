// Ej26 — typeof

// 1) Tipos primitivos
let numero = 42;
let texto = "Hola";
let booleano = true;
let indefinido;
let simbolo = Symbol("id");
let grande = 123456789012345678901234567890n;

console.log("number:", typeof numero);
console.log("string:", typeof texto);
console.log("boolean:", typeof booleano);
console.log("undefined:", typeof indefinido);
console.log("symbol:", typeof simbolo);
console.log("bigint:", typeof grande);

// 2) Objetos y arrays
let objeto = {};
let array = [];
console.log("objeto:", typeof objeto); // "object"
console.log("array:", typeof array); // "object"

// 3) Funciones
function saludar() {
  return "Hola";
}
console.log("función:", typeof saludar);

// 4) Valores especiales
let nulo = null;
let noNumero = NaN;
console.log("null:", typeof nulo); // "object" (quirk histórico)
console.log("NaN:", typeof noNumero); // "number"

// 5) Función mostrarTipo
function mostrarTipo(valor) {
  console.log(valor, "→", typeof valor);
}
mostrarTipo(123);
mostrarTipo("cadena");
mostrarTipo(true);
mostrarTipo(undefined);
mostrarTipo({ clave: "valor" });
mostrarTipo([1, 2, 3]);

// 6) Opcional
console.log("¿Es array?", Array.isArray(array));
console.log("¿Es array un objeto normal?", Array.isArray(objeto));
