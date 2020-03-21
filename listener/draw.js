canvas.addEventListener('mousedown', (e) => {
    isDrawing = true,
    [lastX, lastY] = [e.offsetX, e.offsetY]; //this will update our lastX and lastY
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
