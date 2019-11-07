function createBall(x, y, dx, dy, radius) {
  // private x, y, dx, dy !
  var display = function(ctx, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
  };

  /*
  var updatePositionArray = function(width, height) {
    var d = {
        x: dx,
        y: dy
    };
    var dimensions = {
        x: width,
        y: height
    };
    [x, y].forEach(function(direction) {
        direction = direction + d[direction];
        if (direction >= dimension[direction]) {
            alert('FATAL ERROR!!!' + direction);
        }
        if (direction - radius < 0 || direction + radius > dimension[direction]) {
            d[direction] = -d[direction]
        }
    })
  }
  */

  var updatePosition = function(width, height) {
    // Move to new position
    x = x + dx;
    y = y + dy;

    if (x >= width) {
        alert('FATAL ERROR!!! x')
    }
    if (y >= height) {
        alert("FATAL ERROR!!! y");
    }

    if (x - radius < 0 || x + radius > width) {
      dx = -dx; // reverse
    }

    if (y - radius < 0 || y + radius > height) {
      dy = -dy; // reverse
    }
  };

  return {
    display,
    updatePosition
  };
}

var ball1 = createBall(50, 50, 1, 1, 30);
var ball2 = createBall(250, 125, 0.75, 1.25, 30);

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
