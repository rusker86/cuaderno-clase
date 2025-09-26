const canvas = document.getElementById("lienzo");
const ctx = canvas.getContext("2d");

// ===== Escalado HiDPI (retina) =====
function setupHiDPI() {
  const dpr = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  // Ajustamos el buffer interno al tamaño CSS * DPR
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  // Escalamos el contexto para dibujar en “píxeles lógicos”
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
setupHiDPI();
window.addEventListener("resize", setupHiDPI);

// ===== Dibujo estático =====
function dibujarEstatico() {
  // Fondo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Rectángulo relleno
  ctx.fillStyle = "#e6f0ff";
  ctx.fillRect(20, 20, 160, 90);

  // Rectángulo con borde
  ctx.strokeStyle = "#2b6cb0";
  ctx.lineWidth = 2;
  ctx.strokeRect(200, 20, 160, 90);

  // Línea diagonal
  ctx.beginPath();
  ctx.moveTo(20, 130);
  ctx.lineTo(360, 130);
  ctx.strokeStyle = "#555";
  ctx.lineWidth = 1.5;
  ctx.stroke();

  // Círculo
  ctx.beginPath();
  ctx.arc(420, 70, 40, 0, Math.PI * 2);
  ctx.fillStyle = "#68d391";
  ctx.fill();

  // Degradado lineal para texto
  const grad = ctx.createLinearGradient(20, 180, 380, 180);
  grad.addColorStop(0, "#7928CA");
  grad.addColorStop(1, "#FF0080");

  ctx.fillStyle = grad;
  ctx.font = "bold 24px system-ui, sans-serif";
  ctx.fillText("Texto con degradado en Canvas", 20, 180);

  // Subtítulo
  ctx.fillStyle = "#333";
  ctx.font = "16px system-ui, sans-serif";
  ctx.fillText("Figuras: rectángulos, línea, círculo y texto", 20, 210);
}

// ===== Animación: pelota que rebota =====
const ball = {
  x: 520,
  y: 260,
  vx: 3.2,
  vy: 2.4,
  r: 14,
  color: "#3182ce",
};

function actualizar() {
  const rect = canvas.getBoundingClientRect();
  // Usamos el tamaño CSS como referencia para los límites lógicos
  const maxX = rect.width;
  const maxY = rect.height;

  ball.x += ball.vx;
  ball.y += ball.vy;

  // Rebote horizontal
  if (ball.x - ball.r < 0) {
    ball.x = ball.r;
    ball.vx *= -1;
  } else if (ball.x + ball.r > maxX) {
    ball.x = maxX - ball.r;
    ball.vx *= -1;
  }

  // Rebote vertical
  if (ball.y - ball.r < 0) {
    ball.y = ball.r;
    ball.vy *= -1;
  } else if (ball.y + ball.r > maxY) {
    ball.y = maxY - ball.r;
    ball.vy *= -1;
  }
}

function dibujarFrame() {
  // Limpia todo
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Vuelve a dibujar la parte estática (para que siempre esté visible)
  dibujarEstatico();

  // Dibuja la pelota
  ctx.beginPath();
  ctx.arc(ball.x, ball.y, ball.r, 0, Math.PI * 2);
  ctx.fillStyle = ball.color;
  ctx.fill();
}

function bucle() {
  actualizar();
  dibujarFrame();
  requestAnimationFrame(bucle);
}

// Init
dibujarEstatico();
bucle();
