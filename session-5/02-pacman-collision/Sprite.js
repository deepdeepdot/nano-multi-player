const NUM_FRAMES_PER_STATE = 4;

function isInside(area, point) {
    return  (area.x <= point.x && point.x < area.x + area.width) &&
            (area.y <= point.y && point.y < area.y + area.height);
};

function Sprite(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.open = false;
  this.active = true;

  let frameCnt = 0;

  this.updatePosition = function(width, height, walls) {
    frameCnt = (frameCnt + 1) % 60;

    if (frameCnt % NUM_FRAMES_PER_STATE === 0) {
      this.open = !this.open;
    }

    if (this.x <= 0 || this.x >= width - 1) {
      this.dx = -this.dx;
    }

    if (this.y <= 0 || this.y >= height - 1) {
      this.dy = -this.dy;
    }

    walls && walls.forEach(wall => {
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

  this.overlaps = function(otherSprite) {
      // return true;
    return isInside(this, { x: otherSprite.x, y: otherSprite.y} ) 
        || isInside(otherSprite, {x : this.x, y: this.y } );    
    // return ((this.x < otherSprite.x && otherSprite.x <= this.x + this.width) &&
    //         (this.y < otherSprite.y && otherSprite.y <= this.y + this.height)) ||
    //        ((otherSprite.x < this.x && this.x < otherSprite.x + otherSprite.width) &&
    //         (otherSprite.y < this.y && this.y < otherSprite.y + otherSprite.height));
  }

  this.setActive = function(state) {
      this.active = state;
  }

  this.isActive = function() {
      return this.active;
  }
}

export default Sprite;
