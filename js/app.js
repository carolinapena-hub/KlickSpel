// Variabler
let score=0;
let timeLeft=60;
let gameActive = true;

const scoreElement = document.getElementById('score');
const button = document.getElementById('Klickaknapp');
const timeElement = document.getElementById('time');
const finalscoreElement = document.getElementById('finalScore');

const timer = setInterval(() => { // Timer
  timeLeft--;
  timeElement.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    gameActive = false;
    button.disabled = true;
    finalscoreElement.textContent =`Slutpoäng:` + score;
  }
}, 1000);

button.addEventListener('click', () => {
  if (!gameActive) return;
  score++;
  scoreElement.textContent = score;
});


