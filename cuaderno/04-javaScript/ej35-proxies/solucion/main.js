// Ej35 — Proxies (solución)

const user = {
  nombre: "Ada",
  edad: 28,
  password: "secreta",
};

const handler = {
  get(target, prop, receiver) {
    console.log("[get]", String(prop));
    if (!(prop in target)) return "N/D"; // valor por defecto
    // Reflect.get respeta getters y el this correcto
    return Reflect.get(target, prop, receiver);
  },

  set(target, prop, value, receiver) {
    console.log("[set]", String(prop), "=", value);
    if (prop === "edad") {
      const n = Number(value);
      if (!Number.isInteger(n) || n < 0) {
        throw new Error("Edad debe ser un entero >= 0");
      }
    }
    // (Opcional) bloquear cambios de nombre
    if (prop === "nombre" && target.nombre !== undefined) {
      throw new Error("El nombre es inmutable");
    }
    return Reflect.set(target, prop, value, receiver);
  },

  has(target, prop) {
    if (prop === "password") return false; // ocultar existencia
    return Reflect.has(target, prop);
  },

  deleteProperty(target, prop) {
    console.log("[delete]", String(prop));
    // bloquear cualquier borrado
    return false; // indica fallo al borrar
  },

  ownKeys(target) {
    // ocultar password en listados de claves
    return Reflect.ownKeys(target).filter((k) => k !== "password");
  },
};

const pUser = new Proxy(user, handler);

// Pruebas
console.log("nombre:", pUser.nombre); // get + valor real
console.log("noExiste:", pUser.noExiste); // get → "N/D"

pUser.edad = 30; // set válido
try {
  pUser.edad = -1;
} catch (e) {
  console.error("error set edad:", e.message);
}

console.log("'password' in pUser:", "password" in pUser); // false por has
console.log("keys:", Object.keys(pUser)); // ownKeys sin "password"

console.log("Intento borrar edad:", delete pUser.edad); // false
console.log("Edad sigue:", pUser.edad);

// (Opcional) Inmutabilidad de nombre
try {
  pUser.nombre = "Grace";
} catch (e) {
  console.warn("bloqueado nombre:", e.message);
}

// (Opcional) Proxy profundo
function isObject(x) {
  return x !== null && (typeof x === "object" || typeof x === "function");
}

function deepProxy(obj, seen = new WeakMap()) {
  if (!isObject(obj)) return obj;
  if (seen.has(obj)) return seen.get(obj);

  const deepHandler = {
    get(t, prop, recv) {
      const value = Reflect.get(t, prop, recv);
      // envuelve recursivamente objetos anidados
      return isObject(value) ? deepProxy(value, seen) : value;
    },
    set(t, prop, value, recv) {
      console.log("[deep-set]", String(prop), "=", value);
      return Reflect.set(t, prop, value, recv);
    },
  };

  const prox = new Proxy(obj, deepHandler);
  seen.set(obj, prox);
  return prox;
}

// Demo deepProxy
const cfg = deepProxy({ ui: { theme: "dark", layout: { cols: 3 } } });
console.log("cfg.ui.theme:", cfg.ui.theme); // get recursivo
cfg.ui.theme = "light"; // deep-set
cfg.ui.layout.cols = 4; // deep-set anidado
console.log("cfg:", cfg.ui.theme, cfg.ui.layout.cols);
