// Ej33 — Asincronía (solución)

// 1) Callback básico
function esperar(ms, cb) {
  setTimeout(cb, ms);
}
console.log("Antes del callback");
esperar(200, () => {
  console.log("Dentro del callback tras 200ms");
});
console.log("Después de programar el callback");

// 2) Callback hell (mini)
esperar(300, () => {
  console.log("300ms");
  esperar(200, () => {
    console.log("200ms");
    esperar(100, () => {
      console.log("100ms");
      // Comentario: anidar callbacks dificulta el manejo de errores y legibilidad.
    });
  });
});

// 3) Promesa básica
function esperarP(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
console.time("promesa-basica");
esperarP(150)
  .then(() => console.log("Promesa resuelta tras 150ms"))
  .catch((e) => console.error("Esto no debería fallar:", e))
  .finally(() => {
    console.timeEnd("promesa-basica");
  });

// 4) Promesa que puede fallar
function tareaAleatoria() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      Math.random() < 0.5 ? resolve({ ok: true }) : reject(new Error("falló"));
    }, 120);
  });
}
tareaAleatoria()
  .then((r) => console.log("Aleatoria OK:", r))
  .catch((e) => console.warn("Aleatoria error:", e.message));

// 5) async/await
async function flujo() {
  try {
    console.log("flujo: esperando 200ms...");
    await esperarP(200);
    console.log("flujo: probando tareaAleatoria()");
    const res = await tareaAleatoria(); // puede lanzar
    console.log("flujo: resultado:", res);
  } catch (e) {
    console.error("flujo: capturado error:", e.message);
  } finally {
    console.log("flujo terminado");
  }
}
flujo();

// 6) Promise.all (paralelo)
console.time("paralelo");
Promise.all([esperarP(300), esperarP(200), esperarP(100)]).then(() => {
  console.timeEnd("paralelo"); // ~300ms total
  console.log("Todas listas (100, 200, 300)");
});

// 7) (Opcional) Carreras con race
Promise.race([
  esperarP(1000).then(() => "lenta 1000ms"),
  esperarP(150).then(() => "rápida 150ms"),
]).then((gana) => console.log("Ganó:", gana));
