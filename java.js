"use strict";

const score0Element = document.querySelector("#score--0");
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector(".dice");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const Current0Element = document.getElementById("current--0");
const Current1Element = document.getElementById("current--1");
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const chinaMan = document.querySelector('.win');



let totalScores, currentScore, activePlayer, isPlaying;

const initGame = function() {
    
     totalScores = [0, 0];
     currentScore = 0;
     activePlayer = 0;
     isPlaying = true; 
     
     score0Element.textContent = 0;
     score1Element.textContent = 0;  
     Current0Element.textContent = 0;
     Current1Element.textContent = 0;
    player0Element.classList.remove('player--winner');
    player1Element.classList.remove('player--winner');
    player0Element.classList.remove('player--active');
    player1Element.classList.remove('player--active');
    player0Element.classList.add('player--active');
    diceElement.classList.add("hidden"); 
    chinaMan.classList.add('hidden');
};

initGame();


const switchActivePlayer = function () {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');  
    player1Element.classList.toggle('player--active');  
};


btnRoll.addEventListener('click', function () {
    if (isPlaying) {
    const diceNumber = Math.trunc(Math.random() *6) + 1;
    
  
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`;

if (diceNumber !== 1) {
    currentScore += diceNumber;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
} else {
    switchActivePlayer();
}
}
});

btnHold.addEventListener('click', function () {
    if (isPlaying) {
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

if (totalScores[activePlayer] >=100) {
    isPlaying = false;
    document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
    document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    diceElement.classList.add('hidden');  
    chinaMan.classList.remove('hidden');
} else {
    switchActivePlayer();
}
}
});

btnNew.addEventListener('click', initGame);
