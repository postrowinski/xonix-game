//Board const
const c = document.querySelector('#game-board');
const ctx = c.getContext('2d');
const boardWidth = c.width = 1200;
const boardHeight = c.height = 600;
const spawnRadius =  400;
const borderWidth = 30;
//Ball object
let balls = {
    quantity: 11,
    every: [],
    spawnEdgeX: boardWidth / 2 - spawnRadius / 2,
    spawnEdgeY: boardHeight / 2 - spawnRadius / 2,
    speed: 0.6
};

//Player object
let user = {
    x: boardWidth / 2 - 10,
    y: boardHeight - 20,
    width: 20,
    height: 20
}

const borders = [];

const borderTop = new ConstRectangle(0, 0, boardWidth, borderWidth, 'blue');
const borderBottom = new ConstRectangle(0, boardHeight - borderWidth, boardWidth, borderWidth, 'blue');
const borderLeft = new ConstRectangle(0, borderWidth, borderWidth, boardHeight - 2 * borderWidth, 'blue');
const borderRight = new ConstRectangle(boardWidth - borderWidth, borderWidth, borderWidth, boardHeight - 2 * borderWidth, 'blue');
const test = new ConstRectangle(100, 100, 170, 150, 'red');
const triangle = new ConstRectangle(900, 350, 170, 150, 'red');

borders.push(borderTop, borderBottom, borderLeft, borderRight, test, triangle);

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

let player = new Player(user.x, user.y, user.width, user.height);

function gameAnimate() {
    requestAnimationFrame(gameAnimate);
    ctx.clearRect(0, 0, boardWidth, boardHeight);
    borders.forEach(border => border.draw());
    balls.every.forEach(ball => ball.update());
    player.draw();
}

gameAnimate();
player.move();