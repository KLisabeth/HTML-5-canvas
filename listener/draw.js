const canvas = document.querySelector('#draw');
let isDrawing = false;
let lastX = 0;
let lastY = 0;
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});