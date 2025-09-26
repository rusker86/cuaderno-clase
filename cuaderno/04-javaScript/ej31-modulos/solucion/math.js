// Ej31 — math.js (solución)

// Exportación nombrada
export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
  return a - b;
}

export const PI = 3.1416;

// Exportación por defecto
export default function areaCirculo(radio) {
  return PI * radio * radio;
}
