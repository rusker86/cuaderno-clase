// Ej34 — Generators (solución)

// 1) Generador básico
function* contador3() {
  yield 1;
  yield 2;
  yield 3;
}
const g1 = contador3();
console.log("g1.next():", g1.next()); // { value:1, done:false }
console.log("g1.next():", g1.next()); // { value:2, done:false }
console.log("g1.next():", g1.next()); // { value:3, done:false }
console.log("g1.next():", g1.next()); // { value:undefined, done:true }

// 2) for...of y spread
for (const n of contador3()) {
  console.log("for...of contador3:", n);
}
console.log("[...contador3()]:", [...contador3()]);

// 3) Generador con parámetros
function* rango(inicio, fin, paso = 1) {
  try {
    for (let i = inicio; i <= fin; i += paso) {
      yield i;
    }
  } finally {
    console.log("rango: cerrando");
  }
}
console.log("rango(0,5,2):", [...rango(0, 5, 2)]);

// 4) Enviar valores al generador
function* eco() {
  const recibido = yield "¿dato?"; // primer next() devuelve esta string
  return `recibí: ${recibido}`;
}
const gEco = eco();
console.log("eco #1:", gEco.next()); // { value:"¿dato?", done:false }
console.log("eco #2:", gEco.next("hola")); // { value:"recibí: hola", done:true }

// 5) return + finally
const gR = rango(1, 10);
console.log("gR next:", gR.next()); // 1
console.log("gR next:", gR.next()); // 2
console.log("Llamando return()...");
console.log("gR return():", gR.return("fin"));
console.log("gR next post-return:", gR.next()); // {value:undefined, done:true}

// 6) Delegación yield*
function* secuencia() {
  yield* contador3(); // 1,2,3
  yield* rango(4, 6, 1); // 4,5,6
}
console.log("secuencia:", [...secuencia()]);

// 7) IDs infinitos
function* ids() {
  let i = 1;
  while (true) {
    yield i++;
  }
}
const genId = ids();
const idsTomados = [];
for (let k = 0; k < 5; k++) {
  idsTomados.push(genId.next().value);
}
console.log("Primeros 5 IDs:", idsTomados);
