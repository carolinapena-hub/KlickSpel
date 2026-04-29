// Variabler
let score=0;

const scoreElement = document.getElementById('score');
const button = document.getElementById(`Klickaknapp`);

button.addEventListener('click', function(){
  score+=1; // Knapp tickar med ett för varje klick
  scoreElement.textContent=score;
})

