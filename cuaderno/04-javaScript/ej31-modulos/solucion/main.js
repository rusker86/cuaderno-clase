// Ej31 — main.js (solución)

// Importaciones nombradas y default
import areaCirculo, { sumar, restar, PI } from "./math.js";

// Uso
console.log("Suma 5 + 3 =", sumar(5, 3));
console.log("Resta 10 - 4 =", restar(10, 4));
console.log("PI =", PI);
console.log("Área círculo radio 2 =", areaCirculo(2));

// Import con alias
import { sumar as add } from "./math.js";
console.log("Alias add(7,8) =", add(7, 8));
