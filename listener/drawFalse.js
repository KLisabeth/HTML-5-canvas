const canvas = document.querySelector('#draw');
canvas.addEventListener('mousemove', draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);