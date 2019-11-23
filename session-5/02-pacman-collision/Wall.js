function Wall(x, y, width, height, color) {

    this.display = function(ctx) {
        ctx.fillStyle = color;
        ctx.fillRect(x, y, width, height);
    }

    this.isInside = function(x1, y1) {
        return (x <= x1 && x1 < x + width)
            && (y <= y1 && y1 < y + height);
    };
}

export default Wall;