function Ball(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
}

// Prototype inheritance
// - Shared "live" property

Ball.prototype.display = function(ctx, color) {
  ctx.beginPath();
  ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
  ctx.strokeStyle = color;
  ctx.closePath();
  ctx.stroke();
};

Ball.prototype.updatePosition = function(width, height) {
  if (this.x < 0 || this.x > width) {
    this.dx = -this.dx; // reverse
  }

  if (this.y < 0 || this.y > height) {
    this.dy = -this.dy; // reverse
  }

  // Move to new position
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
};

var ball1 = new Ball(50, 50, 1, 1);
var ball2 = new Ball(250, 125, 0.75, 1.25);

// Ball.prototype.food = "Hamburger";
// alert(ball1.food);

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
