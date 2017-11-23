function ConstRectangle (x, y, width, height, color) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
};

ConstRectangle.prototype.draw = function () {
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.rect(this.x, this.y, this.width, this.height);
  ctx.fill();
};
