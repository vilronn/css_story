const canvas = document.getElementById("sparkleCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let sparkles = [];

document.addEventListener("mousemove", (e) => {
  for (let i = 0; i < 5; i++) {
    sparkles.push({
      x: e.clientX,
      y: e.clientY,
      size: Math.random() * 3 + 1,
      opacity: 1,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2,
      red: Math.random() * 255,
      green: Math.random() * 255,
      blue: Math.random() * 255,
    });
  }
});

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < sparkles.length; i++) {
    let s = sparkles[i];
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${s.red}, ${s.green}, ${s.blue}, ${s.opacity})`;
    ctx.fill();

    s.x += s.dx;
    s.y += s.dy;
    s.opacity -= 0.02;

    if (s.opacity <= 0) {
      sparkles.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(animate);
}

animate();
