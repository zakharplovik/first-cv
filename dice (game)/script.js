'use strict';

const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const bntNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const btnNewGame = document.querySelector('.btn--new');

diceElement.classList.add('hidden');
let currentScore = 0;
let activePlayer = 0;
let totalScores = [0, 0];
const switchActivePlayer = function(){
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
}

//Click Roll The Dice

btnRoll.addEventListener('click', function(){
    //Roll the dice
    const diceNumber = Math.trunc(Math.random()*6) + 1;
    //Show number on the dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice${diceNumber}.png`
    //If the number is 1, switch to the next player
    //If not , add number to the score
    if (diceNumber !== 1){
        currentScore += diceNumber;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
    } else{
        currentScore = 0;
        document.getElementById(`current--${activePlayer}`).textContent = currentScore
        activePlayer = activePlayer === 0 ? 1 : 0;
        if (player0Element.classList.contains('player--active')){
            player0Element.classList.remove('player--active');
            player1Element.classList.add('player--active');
        } else{
            player1Element.classList.remove('player--active');
            player0Element.classList.add('player--active');
        }
    }
})

//Click New Game

btnNewGame.addEventListener('click', function(){
    //Resets all data
    activePlayer = 0;
    currentScore = 0;
    totalScores = [0,0];
    score0Element.textContent = '0';
    score1Element.textContent = '0';
    current0Element.textContent = '0';
    current1Element.textContent = '0';
    diceElement.classList.add('hidden');
    player0Element.classList.add('player--active');
    player1Element.classList.remove('player--active');
})

//Click Stay

// btnHold.addEventListener('click', function(){
//     activePlayer = activePlayer === 0 ? 1 : 0;
//     if (player0Element.classList.contains('player--active')){
//         totalScores[activePlayer] += currentScore;
//         score0Element.textContent = totalScores[activePlayer];
//         player1Element.classList.add('player--active');
//         player0Element.classList.remove('player--active');
//         document.getElementById(`current--${activePlayer}`).textContent = currentScore
//     } else if (player1Element.classList.contains('player--active')){
//         totalScores[activePlayer] += currentScore;
//         score1Element.textContent = totalScores[activePlayer];
//         player0Element.classList.add('player--active');
//         player1Element.classList.remove('player--active');
//         document.getElementById(`current--1`).textContent = currentScore
//     }

// })


btnHold.addEventListener('click', function(){
    totalScores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];
    switchActivePlayer();
})