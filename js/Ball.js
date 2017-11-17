function Ball (spawnX, spawnY, radius, color, dx, dy) {
    this.spawnX = spawnX;
    this.spawnY = spawnY;
    this.radius = radius;
    this.color = color;
    this.dx = dx;
    this.dy = dy;
}

Ball.prototype.draw = function () {

    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.arc(this.spawnX, this.spawnY, this.radius, 0, 2*Math.PI, false);
    ctx.fill();
    ctx.closePath();

};

Ball.prototype.colliding = function () {
    for (let i = 0; i < rectangles.length; i++) {
        let distX = Math.abs(this.spawnX - rectangles[i].x - rectangles[i].width/2);
        let distY = Math.abs(this.spawnY - rectangles[i].y - rectangles[i].height/2);
        if (distX <= (rectangles[i].width / 2 + this.radius) && distY <= (rectangles[i].height / 2 + this.radius)) {
            if (rectangles[i].height > rectangles[i].width) {
                this.dx = -this.dx;
            }

            if (rectangles[i].width > rectangles[i].height) {
                this.dy = -this.dy;
            }
        }

        this.spawnX += this.dx;
        this.spawnY += this.dy;
    }
};

Ball.prototype.update = function () {
    this.draw();
    this.colliding();
};

