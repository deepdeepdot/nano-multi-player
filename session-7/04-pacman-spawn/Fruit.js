import Sprite from "./Sprite.js";

Fruit.prototype = new Sprite();

function Fruit(x, y, dx, dy, image, source, destination, points) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.points = points;

  this.getArea = function() {
    return {
      x : this.x,
      y : this.y,
      width: destination.width,
      height: destination.height
    };
  };

  this.display = function(ctx) {
      if (this.isActive) {
        ctx.drawImage(
          image,
          source.x,
          source.y,
          source.width,
          source.height,
          this.x,
          this.y,
          destination.width,
          destination.height
        );
      }
  };
}

export default Fruit;
