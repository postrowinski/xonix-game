//Board const
const c = document.querySelector('#game-board');
const ctx = c.getContext('2d');
const boardWidth = c.width = window.innerWidth - 300;
const boardHeight = c.height = window.innerHeight - 300;
const spawnRadius =  400;
const borderWidth = 30;
//Ball object
let balls = {
    quantity: 14,
    every: [],
    spawnEdgeX: boardWidth / 2 - spawnRadius / 2,
    spawnEdgeY: boardHeight / 2 - spawnRadius / 2,
    speed: 1
};

const borders = [];

const borderTop = new ConstRectangle(0, 0, boardWidth, borderWidth, 'blue');
const borderBottom = new ConstRectangle(0, boardHeight - borderWidth, boardWidth, borderWidth, 'blue');
const borderLeft = new ConstRectangle(0, borderWidth, borderWidth, boardHeight - 2 * borderWidth, 'blue');
const borderRight = new ConstRectangle(boardWidth - borderWidth, borderWidth, borderWidth, boardHeight - 2 * borderWidth, 'blue');
const test = new ConstRectangle(borderWidth, borderWidth, 170, 150, 'red');

borders.push(borderTop, borderBottom, borderLeft, borderRight, test);
let rectangles = [...borders];

function direction() {
    let direction  = Math.floor(Math.random() * 2);

    direction === 1 ?  direction = 1 :  direction = -1;

    return direction;
}

for (let i = 0; i < balls.quantity; i++) {
    let spawnX = Math.floor(Math.random() * spawnRadius + balls.spawnEdgeX);
    let spawnY = Math.floor(Math.random() * spawnRadius + balls.spawnEdgeY);
    let drawBall = new Ball(spawnX, spawnY, 8, 'red', balls.speed * direction(), balls.speed * direction());
    balls.every.push(drawBall);
}




function ballAnimate() {
    ctx.clearRect(0, 0, boardWidth, boardHeight);
    borders.forEach(border => border.draw());
    balls.every.forEach(ball => ball.update());
}
setInterval(ballAnimate, 1000/30);
