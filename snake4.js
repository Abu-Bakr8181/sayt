const gameWidth = canvas.width;
const gameHeight = canvas.height;

function checkCollision() {
    if (snakeX < 0 || snakeY < 0 || snakeX >= gameWidth || snakeY >= gameHeight) {
        alert("Game Over");
        clearInterval(gameLoop);
    }

    // Check collision with own body
    // ...

    if (snakeX === dotX && snakeY === dotY) {
        snakeSize += 1;

        dotX = Math.floor(Math.random() * gameWidth / snakeSize) * snakeSize;
        dotY = Math.floor(Math.random() * gameHeight / snakeSize) * snakeSize;
    }
}

function updateGame() {
    // ...

    checkCollision();
    drawSnake();
    drawDot();
}

const gameLoop = setInterval(updateGame, 100);
