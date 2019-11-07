function Ball(x, y, dx, dy) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.updatePosition = function(width, height) {
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
}

module.exports = Ball;
