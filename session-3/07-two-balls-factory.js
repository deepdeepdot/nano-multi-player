function createBall(x, y, dx, dy) {
  // private x, y, dx, dy !
  var display = function(ctx, color) {
    ctx.beginPath();
    ctx.arc(x, y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
  };

  var updatePosition = function(width, height) {
    if (x < 0 || x > width) {
      dx = -dx; // reverse
    }

    if (y < 0 || y > height) {
      dy = -dy; // reverse
    }

    // Move to new position
    x = x + dx;
    y = y + dy;
  };

  return {
    display,
    updatePosition
  };
}

var ball1 = createBall(50, 50, 1, 1);
var ball2 = createBall(250, 125, 0.75, 1.25);

function displayFrame() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    ball1.display(ctx, "#bada55");
    ball2.display(ctx, "purple");

    ball1.updatePosition(canvas.width, canvas.height);
    ball2.updatePosition(canvas.width, canvas.height);
  }
}

var animationId;
function draw() {
  animationId = requestAnimationFrame(draw, 100);
  displayFrame();
}

draw();
