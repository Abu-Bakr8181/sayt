// ...

// Checking for collision with the point
if (snakeX === pointX && snakeY === pointY) {
    // The snake eats the point
    // Increase the length of the snake
    // Generate a new point in a random position

    // Increase the length of the snake
    snakeSize += pointSize;

    // Generate a new point in a random position
    pointX = getRandomCoordinate(canvas.width - pointSize);
    pointY = getRandomCoordinate(canvas.height - pointSize);
}

// Checking for collision with the boundaries of the canvas
if (snakeX < 0 || snakeY < 0 || snakeX >= canvas.width || snakeY >= canvas.height) {
    // The snake hit the boundary, game over
    // Display game over message and reset the game
    alert("Game Over");
    snakeX = canvas.width / 2;
    snakeY = canvas.height / 2;
    snakeSize = 20;
    dx = 0;
    dy = 0;
    pointX = getRandomCoordinate(canvas.width - pointSize);
    pointY = getRandomCoordinate(canvas.height - pointSize);
}

// ...
document.addEventListener("keydown", changeDirection);

let dx = 0;
let dy = 0;

function changeDirection(event) {
    const LEFT_KEY = 37;
    const RIGHT_KEY = 39;
    const UP_KEY = 38;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;

    if (keyPressed === LEFT_KEY && dx !== 1) {
        dx = -1;
        dy = 0;
    }

    if (keyPressed === UP_KEY && dy !== 1) {
        dx = 0;
        dy = -1;
    }

    if (keyPressed === RIGHT_KEY && dx !== -1) {
        dx = 1;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && dy !== -1) {
        dx = 0;
        dy = 1;
    }
}

function updateGame() {
    snakeX += dx * snakeSize;
    snakeY += dy * snakeSize;

    drawSnake();
}

setInterval(updateGame, 100);
