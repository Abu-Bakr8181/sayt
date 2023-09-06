const canvas = document.getElementById("gameCanvas");
const context = canvas.getContext("2d");

const snakeSize = 20;
const canvasSize = 400;
const maxScore = 10;

let snake = [{
    x: 200,
    y: 200
}];
let dx = 0;
let dy = 0;
let foodX;
let foodY;
let score = 0;

function generateFood() {
    foodX = Math.floor(Math.random() * (canvasSize / snakeSize)) * snakeSize;
    foodY = Math.floor(Math.random() * (canvasSize / snakeSize)) * snakeSize;
}

function drawSnake() {
    snake.forEach(snakePart => {
        context.fillStyle = "green";
        context.fillRect(snakePart.x, snakePart.y, snakeSize, snakeSize);
    });
}

function drawFood() {
    context.fillStyle = "red";
    context.fillRect(foodX, foodY, snakeSize, snakeSize);
}

function checkCollision() {
    if (
        snake[0].x < 0 ||
        snake[0].x >= canvasSize ||
        snake[0].y < 0 ||
        snake[0].y >= canvasSize
    ) {
        return true; // Snake hit the wall
    }

    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === snake[0].x && snake[i].y === snake[0].y) {
            return true; // Snake hit itself
        }
    }

    return false;
}

function updateScore() {
    score++;
    document.getElementById("score").textContent = score;
}

function moveSnake() {
    const head = { x: snake[0].x + dx, y: snake[0].y + dy };
    snake.unshift(head);

    if (head.x === foodX && head.y === foodY) {
        updateScore();
        generateFood();
    } else {
        snake.pop();
    }
}

function changeDirection(event) {
    const LEFT_KEY = 37;
    const UP_KEY = 38;
    const RIGHT_KEY = 39;
    const DOWN_KEY = 40;

    const keyPressed = event.keyCode;

    if (keyPressed === LEFT_KEY && dx !== 20) {
        dx = -20;
        dy = 0;
    }

    if (keyPressed === UP_KEY && dy !== 20) {
        dx = 0;
        dy = -20;
    }

    if (keyPressed === RIGHT_KEY && dx !== -20) {
        dx = 20;
        dy = 0;
    }

    if (keyPressed === DOWN_KEY && dy !== -20) {
        dx = 0;
        dy = 20;
    }
}

document.addEventListener("keydown", changeDirection);

function gameLoop() {
    context.clearRect(0, 0, canvasSize, canvasSize);

    drawSnake();
    drawFood();
    moveSnake();

    if (checkCollision()) {
        clearInterval(gameInterval);
        alert("Game Over\nScore: " + score);
        if (score >= maxScore) {
            alert("Congratulations! You reached the maximum score!");
        }
    }
}

generateFood();
const gameInterval = setInterval(gameLoop, 150);
