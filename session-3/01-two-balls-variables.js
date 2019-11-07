var x = 50;
var y = 50;
var dx = 1;
var dy = 1;

var x2 = 250;
var y2 = 125;
var dx2 = 0.75;
var dy2 = 1.25;

function displayFrame() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // display ball 1
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "#bada55";
    ctx.closePath();
    ctx.stroke();

    // display ball 2
    ctx.beginPath();
    ctx.arc(x2, y2, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "purple";
    ctx.closePath();
    ctx.stroke();
  }

  x = x + dx;
  y = y + dy;

  x2 = x2 + dx2;
  y2 = y2 + dy2;

  if (y < 0 || y > canvas.height) {
    dy = -dy; // reverse
  }

  if (x < 0 || x > canvas.width) {
    dx = -dx; // reverse
  }

  if (y2 < 0 || y2 > canvas.height) {
    dy2 = -dy2; // reverse
  }

  if (x2 < 0 || x2 > canvas.width) {
    dx2 = -dx2; // reverse
  }
}

var animationId;
function draw() {
  // animationId = setTimeout(draw, 100);
  animationId = requestAnimationFrame(draw, 100);
  displayFrame();
}

draw();

// stopAnimationFrame(animationId);
