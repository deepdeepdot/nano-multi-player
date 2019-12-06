import Sprite from './Sprite.js';

PacMan.prototype = new Sprite();

function PacMan(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;

  this.getArea = function() {
    return {
      x : this.x - radius,
      y : this.y - radius,
      width: radius * 2,
      height: radius * 2
    };
  };

  this.display = function(ctx) {
    ctx.fillStyle = color;

    // some shape like the Pacman
    var circle = new Path2D();
    circle.moveTo(this.x, this.y);

    let start = 10;
    let end = 0.8 * Math.PI;

    if (this.open) {
      if (this.dx < 0) {
        start = 1.2 * Math.PI;
        end = 0.8 * Math.PI;
      } else if (this.dx > 0) {
        start = 0.2 * Math.PI;
        end = 1.8 * Math.PI;
      } else if (this.dy > 0) {
        // DOWN
        start = 0.8 * Math.PI;
        end = 0.2 * Math.PI;
      } else if (this.dy < 0) {
        start = 1.8 * Math.PI;
        end = 1.2 * Math.PI;
      }
    } else {
      start = 0;
      end = 2 * Math.PI;
    }
    circle.arc(this.x, this.y, radius, start, end);
    ctx.fill(circle);
  };
}


export default PacMan;
