// Ej17 — Booleanos

// 1) Creación
let verdadero = true;
let falso = false;
console.log("Verdadero:", verdadero);
console.log("Falso:", falso);

// 2) Operadores lógicos
console.log("true && false:", verdadero && falso);
console.log("true || false:", verdadero || falso);
console.log("!true:", !verdadero);

// 3) Comparaciones
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("7 === '7':", 7 === "7");
console.log("7 !== '7':", 7 !== "7");

// 4) Truthy y Falsy
let valores = [0, "", null, undefined, NaN, "hola", 42];
for (let v of valores) {
  console.log(v, "=>", Boolean(v) ? "truthy" : "falsy");
}

// 5) Condiciones
let activo = true;
if (activo) {
  console.log("El usuario está activo");
} else {
  console.log("El usuario está inactivo");
}

// 6) Conversión explícita
console.log("Boolean('texto'):", Boolean("texto"));
console.log("!!'cadena':", !!"cadena");
console.log("!!0:", !!0);
