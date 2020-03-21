const canvas = document.querySelector('#draw');
let isDrawing = false;
canvas.addEventListener('mousemove', draw);
canvas.addEventListener("mouseup", () => isDrawing = false);
canvas.addEventListener("mouseout", () => isDrawing = false);