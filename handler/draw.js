

function draw(e) {
  if (!isDrawing) return; // stop the function from running when user in not drawing
  console.log(e);
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`; // setting hsl 100% saturation and 50% of lightness
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // go to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];

  hue++;
  if (hue >= 360) {
    hue = 0;
  }
  if (ctx.lineWidth >= 100 || ctx.lineWidth <= 1) {
    direction = !direction;
  }

  if(direction) {
    ctx.lineWidth++;
  } else {
    ctx.lineWidth--;
  }

}

