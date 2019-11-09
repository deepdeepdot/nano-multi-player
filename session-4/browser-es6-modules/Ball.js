function Ball(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.display = function(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
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


export default Ball;
