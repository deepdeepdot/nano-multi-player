function PacMan(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.display = function(ctx) {
    ctx.fillStyle = "yellow";

    // some shape like the Pacman
    var circle = new Path2D();
    circle.moveTo(this.x, this.y);
    circle.arc(100, 35, 25, 10, 0.8 * Math.PI);
    ctx.fill(circle);
  };

  this.updatePosition = function(width, height, wall) {
    if (this.x < 0 || this.x > width) {
      this.dx = -this.dx; // reverse
    }

    if (this.y < 0 || this.y > height) {
      this.dy = -this.dy; // reverse
    }

    if (wall) {
      if (wall.isInside(this.x + this.dx, this.y)) {
        this.dx = -this.dx; // reverse
      }
      if (wall.isInside(this.x, this.y + this.dy)) {
        this.dy = -this.dy; // reverse
      }
    }

    // Move to new position
    this.x = this.x + this.dx;
    this.y = this.y + this.dy;
  };
}

export default PacMan;
