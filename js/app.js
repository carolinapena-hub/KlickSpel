// Variabler
let score=0;
let timeLeft=60;

const scoreElement = document.getElementById('score');
const button = document.getElementById(`Klickaknapp`);
const timeElement = document.getElementById('time');

const timer = setInterval(() => { // Timer
  timeLeft--;
  timeElement.textContent = timeLeft;

  if (timeLeft === 0) {
    clearInterval(timer);
    gameActive = false;
    button.disabled = true;
  }
}, 1000);

button.addEventListener('click', (e) => {
  if (gameActive) return;
  score++;
  scoreElement.textContent = score;
});



button.addEventListener('click', function(){
  score+=1; // Knapp tickar med ett för varje klick
  scoreElement.textContent=score;
})

