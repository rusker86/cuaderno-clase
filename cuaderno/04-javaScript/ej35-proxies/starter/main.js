// Ej35 — Proxies (starter)

const user = {
  nombre: "Ada",
  edad: 28,
  password: "secreta",
};

// TODO: crea handler con traps get, set, has, deleteProperty, ownKeys
// - get: log y valores por defecto "N/D"
// - set: validar edad (entero >= 0). (Opcional) no permitir cambiar nombre
// - has: que "password" in proxy → false
// - deleteProperty: impedir borrado (return false)
// - ownKeys: ocultar "password" en keys

// const pUser = new Proxy(user, handler);

// Pruebas sugeridas:
// console.log(pUser.nombre);
// console.log(pUser.noExiste);
// pUser.edad = 30;
// try { pUser.edad = -1; } catch(e){ console.error(e.message); }
// console.log("password" in pUser);
// console.log(Object.keys(pUser));
// console.log("Intento de borrar edad:", delete pUser.edad);
// console.log("Edad tras intentar borrar:", pUser.edad);

// (Opcional) deepProxy:
// function deepProxy(obj){ ... }
// const cfg = deepProxy({ ui:{ theme:"dark" } });
// console.log(cfg.ui.theme);
// cfg.ui.theme = "light";
