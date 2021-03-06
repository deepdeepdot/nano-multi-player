var actions = {
  display: function(ctx, color) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
  },
  updatePosition: function(width, height) {
    if (this.x < 0 || this.x > width) {
      this.dx = -this.dx; // reverse
    }

    if (this.y < 0 || this.y > height) {
      this.dy = -this.dy; // reverse
    }

    // Move to new position
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  }
};

var ball1State = {
  x: 50,
  y: 50,
  dx: 1,
  dy: 1
};

var ball1 = { ...ball1State, ...actions };

var ball2State = {
  x: 250,
  y: 125,
  dx: 0.75,
  dy: 1.25
};

var ball2 = { ...ball2State, ...actions };

// actions.food = "Hamburger";
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
