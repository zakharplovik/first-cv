let secretNumber = Math.trunc(Math.random()* 20 + 1);
const checkButton = document.querySelector('.check');
let textMessage = document.querySelector('.guess-message');
let bodyColor = document.querySelector('body');
let question = document.querySelector('.question');
let score = 20;
let highscore = 0;
let scoreLabel = document.querySelector('.score');
const againButton = document.querySelector('.again');



checkButton.addEventListener('click', function() {
    const guessingNumber = Number(document.querySelector('.number-input').value);
    let highscoreText = document.querySelector('.highscore')
    //Empty input
    if (!guessingNumber){
        textMessage.textContent = 'Enter the number!'
        console.log(guessingNumber)
    } 
    //Player won
    else if (guessingNumber === secretNumber){
        if (score>1){
        textMessage.textContent = 'Well done!'
        bodyColor.style.backgroundColor = 'rgb(93, 191, 0)';
        question.style.width = '50rem';
        question.textContent = secretNumber;

        if (score>highscore){
            highscore = score
            highscoreText.textContent = highscore;
        }}
    }
    //Number is too high
    else if (guessingNumber > secretNumber){
        textMessage.textContent = 'Too much!'
        score--
        scoreLabel.textContent = score
        if (score < 1){
            scoreLabel.textContent = '0';
            textMessage.textContent = 'Game over!'
        }
    }
    //Number is too low 
    else if (guessingNumber < secretNumber){
        textMessage.textContent = 'Too little!'
        score--
        scoreLabel.textContent = score
        if (score < 1){
            scoreLabel.textContent = '0';
            textMessage.textContent = 'Game over!'
        }
    }
    //Player lose
    else {
        textMessage.textContent = 'Game over!'
    }
})

//Again Button
againButton.addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()* 20 + 1);
    score = 20;
    scoreLabel.textContent = score
    bodyColor.style.backgroundColor = 'rgb(0, 0, 0)';
    question.style.width = '25rem';
    question.textContent = '???';
    textMessage.textContent = 'Start guessing';
    guessingNumber = 0;
})