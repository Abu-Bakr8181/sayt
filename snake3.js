let dotX = Math.floor(Math.random() * canvas.width / snakeSize) * snakeSize;
let dotY = Math.floor(Math.random() * canvas.height / snakeSize) * snakeSize;

function drawDot() {
    context.fillStyle = "red";
    context.fillRect(dotX, dotY, snakeSize, snakeSize);
}

function checkCollision() {
    if (snakeX === dotX && snakeY === dotY) {
        snakeSize += 1;

        dotX = Math.floor(Math.random() * canvas.width / snakeSize) * snakeSize;
        dotY = Math.floor(Math.random() * canvas.height / snakeSize) * snakeSize;
    }
}

function updateGame() {
    snakeX += dx * snakeSize;
    snakeY += dy * snakeSize;

    checkCollision();
    drawSnake();
    drawDot();
}

setInterval(updateGame, 100);
