// Variabler
let score=0;
let timeLeft=60;
let gameActive = false;
let timer;

const scoreElement = document.getElementById('score');
const button = document.getElementById('Klickaknapp');
const timeElement = document.getElementById('time');
const finalscoreElement = document.getElementById('finalScore');
const nameElement = document.getElementById('name');
const messageElement = document.getElementById('message');
const postButton = document.getElementById('postScore');

//Starta + klick
button.addEventListener('click', function() {

  if (!gameActive) {
    gameActive = true;

    timer = setInterval(function () {
      timeLeft--;
      timeElement.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(timer);
        gameActive = false;
        button.disabled = true;
        finalscoreElement.textContent = "Slutpoäng:" + score;
        postButton.disabled = false;
      }
    }, 1000);
  }

  //Räknar poäng
  if (gameActive) {
    score++;
    scoreElement.textContent = score;
  }
});

// Skickar resultat med knapp

async function submitHighScore() {
  await fetch("https://webhook.site/311a07cb-9c1e-4bba-8266-f5bbcbcf07a7", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: nameElement.value || "Gäst",
      score: score
    })
  });

  messageElement.textContent = "Resultat skickades!";
  postButton.disabled = true;
}



