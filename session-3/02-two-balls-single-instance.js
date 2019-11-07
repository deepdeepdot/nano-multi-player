var ball1 = {
  x: 50,
  y: 50,
  dx: 1,
  dy: 1,
  display: function(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
  },
  updatePosition: function(width, height) {
    // Move to new position
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;

    if (this.x < 0 || this.x > width) {
      this.dx = -this.dx; // reverse
    }

    if (this.y < 0 || this.y > height) {
      this.dy = -this.dy; // reverse
    }
  }
};

var x2 = 250;
var y2 = 125;
var dx2 = 0.75;
var dy2 = 1.25;

function displayFrame() {
  var canvas = document.getElementById("tutorial");
  if (canvas.getContext) {
    var ctx = canvas.getContext("2d");

    // display ball 1
    ball1.display(ctx, "#bada55");

    // display ball 2
    ctx.beginPath();
    ctx.arc(x2, y2, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = "purple";
    ctx.closePath();
    ctx.stroke();
  }

  ball1.updatePosition(canvas.width, canvas.height);

  // Move to new position
  x2 = x2 + dx2;
  y2 = y2 + dy2;

  // update position
  if (y2 < 0 || y2 > canvas.height) {
    dy2 = -dy2; // reverse
  }

  if (x2 < 0 || x2 > canvas.width) {
    dx2 = -dx2; // reverse
  }
}

var animationId;
function draw() {
  animationId = requestAnimationFrame(draw, 100);
  displayFrame();
}

draw();
