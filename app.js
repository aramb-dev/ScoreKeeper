
// Define the players, their buttons, and display elements
const [p1, p2] = [
    { button: '#p1Button', display: '#p1Display' },
    { button: '#p2Button', display: '#p2Display' }
].map(({ button, display }) => ({
    // Start with a score of 0 for each player
    score: 0,
    // Find the button and display elements in the DOM
    button: document.querySelector(button),
    display: document.querySelector(display)
}));

// Find the reset button and the select element for the winning score
const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');

// Initialize the winning score
let winningScore = 3;
// Initialize the game state
let isGameOver = false;

// Function to update the score for a player
function updateScore(player) {
    // If the game is not over
    if (!isGameOver) {
        // Increment the player's score
        player.score += 1;
        // If the player's score is equal to the winning score
        if (player.score === winningScore) {
            // Set the game state to over
            isGameOver = true;
            // Add a success class to the player's display element
            player.display.classList.add('has-text-success');
            // Disable both player's buttons
            p1.button.disabled = p2.button.disabled = true;
        }
        // Update the player's display element with the new score
        player.display.textContent = player.score;
    }
}

// Add event listeners to the player buttons
for (const player of [p1, p2]) {
    player.button.addEventListener('click', () => updateScore(player));
}

// Add event listener to the select element for the winning score
winningScoreSelect.addEventListener('input', () => {
    // Update the winning score from the select element's value
    winningScore = parseInt(winningScoreSelect.value, 10);
    // Reset the game
    reset();
});

// Add event listener to the reset button
resetButton.addEventListener('click', reset);

// Function to reset the game state and player scores
function reset() {
    // Set the game state to not over
    isGameOver = false;
    // Reset the player scores and display elements
    for (const player of [p1, p2]) {
        player.score = 0;
        player.display.textContent = 0;
        player.display.classList.remove('has-text-success', 'has-text-danger');
        player.button.disabled = false;
    }
}

