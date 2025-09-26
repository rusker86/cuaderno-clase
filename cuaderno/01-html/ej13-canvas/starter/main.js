// ===== Configuración base del canvas =====
const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// TODO: Escalado HiDPI para pantallas retina
// Pista:
// const dpr = window.devicePixelRatio || 1;
// const rect = canvas.getBoundingClientRect();
// canvas.width = rect.width * dpr;
// canvas.height = rect.height * dpr;
// ctx.scale(dpr, dpr);

// ===== Dibujo estático =====
// TODO: Rectángulo relleno y con borde
// ctx.fillStyle = "...";
// ctx.fillRect(x, y, w, h);
// ctx.strokeStyle = "...";
// ctx.strokeRect(x, y, w, h);

// TODO: Línea diagonal
// ctx.beginPath();
// ctx.moveTo(x1, y1);
// ctx.lineTo(x2, y2);
// ctx.stroke();

// TODO: Círculo
// ctx.beginPath();
// ctx.arc(cx, cy, r, 0, Math.PI * 2);
// ctx.fill();

// TODO: Degradado (linear o radial) y aplicarlo
// const grad = ctx.createLinearGradient(x0, y0, x1, y1);
// grad.addColorStop(0, "...");
// grad.addColorStop(1, "...");
// ctx.fillStyle = grad;

// TODO: Texto
// ctx.font = "20px system-ui, sans-serif";
// ctx.fillText("Texto en canvas", x, y);

// ===== Animación sencilla (pelota que rebota) =====
let ball = { x: 100, y: 100, vx: 2, vy: 3, r: 12 };

function actualizar() {
  // TODO: actualizar posición, rebotar en bordes, etc.
  // ball.x += ball.vx; ...
}

function dibujarFrame() {
  // TODO: limpiar canvas y dibujar la pelota
  // ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.beginPath(); ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2); ctx.fill();
}

function bucle() {
  actualizar();
  dibujarFrame();
  requestAnimationFrame(bucle);
}

// Inicia la animación
bucle();
