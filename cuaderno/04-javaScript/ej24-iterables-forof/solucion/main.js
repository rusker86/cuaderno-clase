// Ej24 — Iterables y for...of

// 1) Array
let nombres = ["Ada", "Alan", "Grace"];
for (let nombre of nombres) {
  console.log("Nombre:", nombre);
}

// 2) String
let saludo = "Hola";
for (let letra of saludo) {
  console.log("Letra:", letra);
}

// 3) Set
let conjunto = new Set([1, 2, 3, 3, 2]);
for (let valor of conjunto) {
  console.log("Set valor:", valor);
}

// 4) Map
let persona = new Map([
  ["nombre", "Ada"],
  ["edad", 28],
  ["rol", "programadora"],
]);
for (let [clave, valor] of persona) {
  console.log(`${clave}: ${valor}`);
}

// 5) for...of con entries
for (let [indice, valor] of nombres.entries()) {
  console.log(`Índice ${indice} → ${valor}`);
}

// 6) Opcional: iterable personalizado
let iterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  },
};
for (let num of iterable) {
  console.log("Iterable personalizado:", num);
}
