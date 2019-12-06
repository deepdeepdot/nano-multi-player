const NUM_FRAMES_PER_STATE = 10;

Sprite.prototype.updatePosition = function(width, height, walls) {
  this.frameCnt = (this.frameCnt + 1) % 60;

  if (this.frameCnt % NUM_FRAMES_PER_STATE === 0) {
    this.open = !this.open;
  }

  if (this.x <= 0 || this.x >= width - 1) {
    this.dx = -this.dx;
  }

  if (this.y <= 0 || this.y >= height - 1) {
    this.dy = -this.dy;
  }

  walls &&
    walls.forEach(wall => {
      if (wall.isInside(this.x + this.dx, this.y)) {
        this.dx = -this.dx; // reverse
      }
      if (wall.isInside(this.x, this.y + this.dy)) {
        this.dy = -this.dy; // reverse
      }
    });

  // Move to new position
  this.x = this.x + this.dx;
  this.y = this.y + this.dy;
};

function Sprite() {
  this.open = false;
  this.frameCnt = 0;
}

PacMan.prototype = new Sprite();

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

    let start = 10;
    let end = 0.8 * Math.PI;

    if (this.dx < 0) {
      start = 1.2 * Math.PI;
      end = 0.8 * Math.PI;
    }
    else if (this.dx > 0) {
      start = 0.2 * Math.PI;
      end = 1.8 * Math.PI;
    }
    else if (this.dy > 0) { // DOWN
      start = 0.8 * Math.PI;
      end = 0.2 * Math.PI;
    }
    else if (this.dy < 0) {
      start = 1.8 * Math.PI;
      end = 1.2 * Math.PI;
    }

    if (this.open) {
      circle.arc(this.x, this.y, radius, start, end);
    } else {
      circle.arc(this.x, this.y, radius, 0, 2 * Math.PI);
    }
    ctx.fill(circle);
  };
}


export default PacMan;
