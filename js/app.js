// Variabler
let score=0;
let timeLeft=60;
let gameActive = true;

const scoreElement = document.getElementById('score');
const button = document.getElementById('Klickaknapp');
const timeElement = document.getElementById('time');
const finalscoreElement = document.getElementById('finalScore');
const nameElement = document.getElementById('name');
const messageElement = document.getElementById('message');




const timer = setInterval(() => { // Timer
  timeLeft--;
  timeElement.textContent = timeLeft;

  if (timeLeft === 0) { //Timer stoppas och spelet slutar
    clearInterval(timer);
    gameActive = false;
    button.disabled = true;

    finalscoreElement.textContent =`Slutpoäng:` + score; // Visar slutpoäng

  // Spara namn och poäng när spel tar slut
  const name = nameElement.value || "Gäst";
  localStorage.setItem("name", name);
  localStorage.setItem("score",score);

  //Meddelande till spelare
    messageElement.textContent = "Ditt poäng sparades!";
  }

}, 1000);

button.addEventListener('click', () => {
  if (!gameActive) return;
  score++;
  scoreElement.textContent = score;
});



