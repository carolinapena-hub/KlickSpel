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
button.addEventListener('click', function(){

  if (!gameActive) {
    gameActive = true;

    timer= setInterval(function(){
      timeLeft--;
      timeElement.textContent = timeLeft;

      if (timeLeft === 0) {
        clearInterval(timer);
        gameActive = false;
        button.disabled = true;
        finalscoreElement.textContent = "Slutpoäng:"+ score;
        postButton.disabled = false;
      }
    }, 1000);
  }

  //Räknar poäng
  if (gameActive) {
    score++;
    scoreElement.textContent = score;
  }

// Skickar resultat med knapp
postButton.addEventListener('click', function (){
  const name = nameElement.value || "Gäst";
  const scoreboard = JSON.parse(localStorage.getItem("scoreboard")) || [];

  scoreboard.push({name: name, score: score });
  localStorage.setItem("scoreboard", JSON.stringify(scoreboard));

messageElement.textContent = "Resultat skickades!";
postButton.disabled = true;
})


