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

Ball.prototype.rectColliding = function () {
    for (let i = 0; i < rectangles.length; i++) {
        const halfWidth = rectangles[i].width/2;
        const halfHeight = rectangles[i].height/2;

        let distX = Math.sqrt(Math.pow((this.spawnX - rectangles[i].x - halfWidth), 2));
        let distY = Math.sqrt(Math.pow((this.spawnY - rectangles[i].y - halfHeight), 2));

        if (distX <= (rectangles[i].width / 2 + this.radius) && distY <= (rectangles[i].height / 2 + this.radius)) {
            const rcX = (rectangles[i].x + halfWidth);
            const rcY = (rectangles[i].y + halfHeight);
            if (rcX >= this.spawnX && Math.abs(this.spawnY - rcY) < halfHeight || rcX <= this.spawnX && Math.abs(this.spawnY - rcY) < halfHeight) {
                this.dx = -this.dx;
            } else if (rcY >= this.spawnY && Math.abs(this.spawnX - rcX) < halfWidth || rcY <= this.spawnY && Math.abs(this.spawnX - rcX) < halfWidth) {
                this.dy = -this.dy;
            } else {
                this.dx = -this.dx;
                this.dy = -this.dy;
            }

        }
        this.spawnX += this.dx;
        this.spawnY += this.dy;
    }
};

Ball.prototype.playerColliding = function () {
    let playerCenter = player.width / 2;
    let distX = Math.sqrt(Math.pow(this.spawnX - player.x - playerCenter ,2));
    let distY = Math.sqrt(Math.pow(this.spawnY - player.y - playerCenter ,2));

    if (distX <= playerCenter + this.radius && distY <= playerCenter + this.radius) {
        return true;
    }
};

Ball.prototype.update = function () {
    this.draw();
    this.rectColliding();
    if (this.playerColliding) {
        return;
    }
};


