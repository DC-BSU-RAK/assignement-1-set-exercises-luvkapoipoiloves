// DOM elements
const rgbDisplay = document.getElementById('rgb-display');
const optionsContainer = document.getElementById('options-container');
const message = document.getElementById('message');
const livesDisplay = document.getElementById('lives');
const endScreen = document.getElementById('end-screen');
const finalScore = document.getElementById('final-score');
const replayButton = document.getElementById('replay-button');

// Game variables
let correctColor;
let score = 0;
let lives = 3;

// Generate a random RGB color
function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Generate a new question
function generateColors() {
  optionsContainer.innerHTML = ''; // Clear previous options
  message.textContent = '';

  // Create an array of colors
  const colors = [];
  correctColor = randomRGB();
  colors.push(correctColor);

  // Generate 2 more random colors
  while (colors.length < 3) {
    const newColor = randomRGB();
    if (!colors.includes(newColor)) {
      colors.push(newColor);
    }
  }

  // Shuffle colors
  colors.sort(() => 0.5 - Math.random());

  // Display RGB to guess
  rgbDisplay.textContent = correctColor;

  // Create color boxes
  colors.forEach(color => {
    const box = document.createElement('div');
    box.classList.add('color-box');
    box.style.backgroundColor = color;

    // Add click event to check answer
    box.addEventListener('click', () => checkAnswer(color));

    optionsContainer.appendChild(box);
  });
}

// Check the user's answer
function checkAnswer(selectedColor) {
  if (selectedColor === correctColor) {
    score++;
    message.textContent = 'Correct!';
    generateColors();
  } else {
    lives--;
    message.textContent = 'Wrong!';
    livesDisplay.textContent = `Lives: ${lives}`;

    if (lives === 0) {
      gameOver();
    }
  }
}

// End the game
function gameOver() {
  optionsContainer.innerHTML = '';
  rgbDisplay.textContent = '';
  endScreen.classList.remove('hidden');
  finalScore.textContent = `Game Over! Your score: ${score}`;
}

// Restart the game
function restartGame() {
  score = 0;
  lives = 3;
  livesDisplay.textContent = 'Lives: 3';
  endScreen.classList.add('hidden');
  generateColors();
}

// Event listener for replay
replayButton.addEventListener('click', restartGame);

// Start game on load
generateColors();