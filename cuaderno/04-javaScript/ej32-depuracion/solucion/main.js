// Ej32 — Depuración (solución)

// 1) Consola para inspeccionar
const usuarios = [
  { id: 1, nombre: "Ada" },
  { id: 2, nombre: "Alan" },
  { id: 3, nombre: "Grace" },
];

console.table(usuarios);

console.time("loop");
let total = 0;
for (let i = 0; i < 1_000_0; i++) {
  // 10k iteraciones
  total += i;
}
console.timeEnd("loop");

const todosConIdNumerico = usuarios.every((u) => Number.isInteger(u.id));
console.assert(todosConIdNumerico, "Algún usuario no tiene id numérico");

function nivel1() {
  function nivel2() {
    console.trace("rastro"); // Muestra la pila de llamadas
  }
  nivel2();
}
nivel1();

// 2) debugger + breakpoints
function calcularTotal(items) {
  let total = 0;
  for (const it of items) {
    debugger; // ← Pausa aquí para inspeccionar it, it.precio, it.cantidad
    total += it.precio * it.cantidad;
  }
  return total;
}
const items = [
  { nombre: "A", precio: 10, cantidad: 1 },
  { nombre: "B", precio: 5, cantidad: 4 }, // prueba breakpoint condicional: cantidad > 3
];
console.log("Total:", calcularTotal(items));

// 3) Errores controlados
function parseEdad(valor) {
  const n = Number(valor);
  if (!Number.isInteger(n) || n < 0) {
    throw new Error("Edad inválida");
  }
  return n;
}

try {
  console.log("Edad válida:", parseEdad("23"));
  console.log("Edad inválida:", parseEdad("-5")); // lanza
} catch (e) {
  console.error("Error al parsear edad:", e.message);
} finally {
  console.log("validación completada");
}

// 4) Errores asíncronos
function fetchFake(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (id > 0) resolve({ ok: true, id });
      else reject(new Error("ID inválido"));
    }, 200);
  });
}

async function probarFetchFake() {
  try {
    const ok = await fetchFake(1);
    console.log("OK:", ok);
  } catch (e) {
    console.error("Error esperado OK:", e);
  }

  try {
    const fail = await fetchFake(-1);
    console.log("NO debería verse:", fail);
  } catch (e) {
    console.error("Error (rechazo):", e.message);
  }
}
probarFetchFake();

// 5) (Opcional) Captura global
window.addEventListener("error", (e) => {
  console.error("⚠️ Error global:", e.message, "en", e.filename, ":", e.lineno);
});

window.addEventListener("unhandledrejection", (e) => {
  console.error("⚠️ Promesa no manejada:", e.reason);
});

// Forzar (comentado):
// setTimeout(() => { throw new Error("Fallo global simulado"); }, 500);
// Promise.reject(new Error("Rechazo global simulado"));
