let score = 0;
let snake = [{ row: 0, col: 0 }]; // Initial snake position

function updateScore() {
    const scoreElement = document.createElement('div');
    scoreElement.textContent = `Score: ${score}`;
    document.body.appendChild(scoreElement);
}

function updateSnakePosition() {
    // Remove the last segment of the snake's body
    let tail = snake.pop();
    board[tail.row][tail.col].classList.remove('snake');

    // Calculate the new position of the snake's head based on mouse movement
    // Update the snake array and the corresponding cell's class to 'snake'

    let head = snake[0];
    board[head.row][head.col].classList.add('snake');

    checkWallCollision();
    checkPointCollision();
}

function checkWallCollision() {
    let head = snake[0];

    if (head.row < 0 || head.row >= boardSize || head.col < 0 || head.col >= boardSize) {
        endGame();
    }
}

function checkPointCollision() {
    let head = snake[0];

    // Assume pointRow and pointCol are the row and column of the point on the board

    if (head.row === pointRow && head.col === pointCol) {
        // Increase snake length by adding a new segment to the snake array
        // Update the point row and column to a new random position
        // Increase the score
    }
}

function endGame() {
    // Stop the game loop, remove event listener
    // Display the final score using updateScore() function
}

function startGame() {
    createGameBoard();
    updateScore();
    // Attach event listener to track mouse movement and call updateSnakePosition()
    // Call checkWallCollision() and checkPointCollision() in a game loop
}

startGame();
