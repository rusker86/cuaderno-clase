// JS — Ej01 Tipos de datos (solución)

// 1) Primitivos
const s = "hola";
const n = 42;
const bi = 9007199254740993n; // BigInt > Number.MAX_SAFE_INTEGER
const b = true;
let u; // undefined
const sym = Symbol("id");
const nl = null;

console.log("1) Primitivos → typeof:");
console.log(typeof s, "← 'hola'"); // string
console.log(typeof n, "← 42"); // number
console.log(typeof bi, "← BigInt"); // bigint
console.log(typeof b, "← true"); // boolean
console.log(typeof u, "← undefined"); // undefined
console.log(typeof sym, "← Symbol"); // symbol
console.log(typeof nl, "← null (histórico bug: 'object')"); // object

// 2) No primitivos
const persona = { nombre: "Ada", rol: "dev", activo: true };
const mezcla = [1, "dos", { t: 3 }];
function saluda(nombre) {
  return `Hola, ${nombre}`;
}
const fecha = new Date();

console.log("\n2) No primitivos:");
console.log("objeto:", persona);
console.log("array:", mezcla);
console.log("función:", saluda("Ada"));
console.log("fecha:", fecha.toISOString());

// 3) Comprobaciones
console.log("\n3) Comprobaciones:");
console.log("typeof persona:", typeof persona); // object
console.log("Array.isArray(mezcla):", Array.isArray(mezcla)); // true
console.log("fecha instanceof Date:", fecha instanceof Date); // true

// 4) Coerciones y NaN
console.log("\n4) Coerciones y NaN:");
console.log("'5' + 5 =", "5" + 5, "← concatenación por coerción a string");
const nanResult = Number("abc");
console.log("Number('abc'):", nanResult, "isNaN?", Number.isNaN(nanResult));
console.log("1 / 0 =", 1 / 0, "(Infinity)");
console.log("0 / 0 =", 0 / 0, "(NaN: resultado indeterminado)");

// 5) BigInt & Symbol
console.log("\n5) BigInt & Symbol:");
const grande = 123456789012345678901234567890n;
console.log("BigInt suma:", grande + 10n);
// Mezclar BigInt con number lanza TypeError:
// console.log(grande + 1); // ❌
// Symbols:
const a = Symbol("clave");
const a2 = Symbol("clave");
console.log("Symbols con misma descripción son iguales?", a === a2); // false

// 6) Mutabilidad: valor vs referencia
console.log("\n6) Mutabilidad:");
let aPrim = "JS";
let bPrim = aPrim; // copia por valor
bPrim = "TS";
console.log("primitivos:", aPrim, bPrim, "← 'JS' no cambia");

const obj1 = { n: 1 };
const obj2 = obj1; // copia por referencia
obj2.n = 2;
console.log("referencia:", obj1.n, obj2.n, "← ambos 2");

// Clonado superficial para evitar referencia compartida
const obj3 = { n: 1, info: { x: 1 } };
const clonShallow = { ...obj3 };
clonShallow.n = 99;
console.log("clon superficial cambia n:", obj3.n, clonShallow.n); // 1 vs 99

// OJO: shallow clone no rompe anidado
clonShallow.info.x = 42;
console.log(
  "anidado compartido:",
  obj3.info.x,
  clonShallow.info.x,
  "← ambos 42"
);

// Clonado profundo (simple) con structuredClone (moderno)
const deep = structuredClone(obj3);
deep.info.x = 7;
console.log("deep clone:", obj3.info.x, deep.info.x); // 42 vs 7
