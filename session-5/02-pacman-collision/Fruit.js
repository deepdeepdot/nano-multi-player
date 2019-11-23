import Sprite from "./Sprite.js";

Fruit.prototype = new Sprite();

function Fruit(x, y, dx, dy, image, source, destination) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.invisible = false;

  this.display = function(ctx) {
      if (!this.invisible) {
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
