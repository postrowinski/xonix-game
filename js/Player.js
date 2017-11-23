function Player (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
}

Player.prototype.draw = function () {
    ctx.beginPath();
    ctx.fillStyle = 'green';
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.fill();
    ctx.closePath();
};

Player.prototype.move = function () {
    window.addEventListener('keydown', (function (canMove) {
        return function (e) {
            if (!canMove) return false;
            canMove = false;
            setTimeout(function () {
                canMove = true;
            }, 5);

            switch (e.keyCode) {
            case 83: // S
                if (!(this.y >= boardHeight - this.height)) {
                    this.y += this.height / 2;
                }
                break;

            case 87: // W
                if (!(this.y) <= 0) {
                    this.y -= this.height / 2;
                }
                break;

            case 65: // A
                if(!(this.x <= 0)) {
                    this.x -= this.width / 2;
                }
                break;

            case 68: // D
                if (!(this.x >= boardWidth - this.width)) {
                    this.x += this.width / 2;
                }
                break;
            }
        }.bind(this)
    }.bind(this))(true));
};

