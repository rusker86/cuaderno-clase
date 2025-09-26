# JS — Ejercicio 35: Proxies

**Objetivo**
Comprender cómo **Proxy** y **Reflect** permiten interceptar operaciones sobre objetos:

- Traps: `get`, `set`, `has`, `deleteProperty`, `ownKeys`
- Validaciones y logs
- Valores por defecto
- Inmutabilidad controlada
- Proxies anidados (shallow vs deep)

## Tareas

1. **Logger básico (get/set)**

   - Crea un objeto `user = { nombre: "Ada", edad: 28 }`.
   - Crea un proxy `pUser` que:
     - En `get`, loguee la clave y devuelva el valor con `Reflect.get`.
     - En `set`, valide que si la clave es `edad`, debe ser entero ≥ 0; si no, lanza Error. Usa `Reflect.set`.

2. **Valores por defecto**

   - Si se accede a una clave inexistente, devuelve `"N/D"` (sin mutar el objeto).

3. **Bloquear eliminación**

   - Intercepta `deleteProperty` para **impedir** borrar propiedades, devolviendo `false`.

4. **Comprobación de existencia**

   - Intercepta `has` para que `("password" in pUser)` siempre dé `false` aunque exista.

5. **Listar claves filtradas**

   - Intercepta `ownKeys` para ocultar `password` al hacer `Object.keys(pUser)`.

6. **(Opcional) Inmutabilidad parcial**

   - Impide reasignar `nombre` (lanzando Error).

7. **(Opcional) Proxy profundo**
   - Función `deepProxy(obj)` que devuelva un proxy que, en `get`, si el valor es objeto, lo envuelva también (recursivo).

> Entregable: completa `starter/main.js` y observa la consola.
