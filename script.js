// QUERY SELECTORS
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.user-score');
const enemyScore = document.querySelector('.enemy-score');
const userName = document.querySelector('.user-name');
const enemyName = document.querySelector('.enemy-name');
const gameLog = document.querySelector('.game-log');
const userScoreCard = document.querySelector('.user-card');
const enemyScoreCard = document.querySelector('.enemy-card');


/////////////////////////////
// COMPUTER CHOICE SETUP

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if(randomNumber === 1) return "Rock";
    if(randomNumber === 2) return "Paper";
    if(randomNumber === 3) return "Scissors";
}

/////////////////////////////
// USER CHOICE SETUP

let userChoice;

rock.addEventListener('click', () => {
    userChoice = 'Rock';
    playRound();
});

paper.addEventListener('click', () => {
    userChoice = 'Paper';
    playRound();
});

scissors.addEventListener('click', () => {
    userChoice = 'Scissors';
    playRound();
});


/////////////////////////////
// SINGLE ROUND FUNCTION AND SCORE COUNTER

let enemyScoreCounter = 0;
let userScoreCounter = 0;
let roundCounter = 0;
let result;


function playRound() {

    computerChoice = computerPlay();

        switch(true) {
            case computerChoice === "Rock" && userChoice === "Scissors":
            case computerChoice === "Scissors" && userChoice === "Paper":
            case computerChoice === "Paper" && userChoice === "Rock":
            
            enemyScoreCounter++;
            roundCounter++;
            enemyScore.textContent = enemyScoreCounter.toString();
            enemyScoreCard.classList.toggle('winner');
            userScoreCard.classList.remove('winner');
            result = '-🏆|💔-';
            break;
    
            case userChoice === "Rock" && computerChoice === "Scissors":
            case userChoice === "Scissors" && computerChoice === "Paper":
            case userChoice === "Paper" && computerChoice === "Rock":
           
            userScoreCounter++;
            roundCounter++;
            userScore.textContent = userScoreCounter.toString();
            enemyScoreCard.classList.remove('winner');
            userScoreCard.classList.toggle('winner');
            result = '-💔|🏆-';
            break;
    
            case userChoice === computerChoice:
            roundCounter++;
            userScoreCard.classList.remove('winner');
            enemyScoreCard.classList.remove('winner');
            result = '-DRAW-'
            break;
    
            default:
                console.log("Whoops! Something went horribly wrong ... Reload?")
        };
        
        addGameLogRow();
        fivePointsGame();
    return;
};

///////////////////////////
// 5 POINTS GAME FUNCTION

function fivePointsGame () {
    if (enemyScoreCounter === 5) {
        enemyName.textContent = "🏆ENEMY"
        enemyName.style.fontSize = "4.2rem";
        userName.style.fontSize = "4.2rem";
        enemyName.style.fontWeight = "700";
    } else if(userScoreCounter === 5) {
        userName.textContent = "🏆YOU"
        userName.style.fontSize = "4.5rem";
        enemyName.style.fontSize = "4.5rem";
        userName.style.fontWeight = "700";
    }
}

///////////////////////////
// GAME LOG FUNCTIONALITY

function addGameLogRow() {
    const div = document.createElement('div');
    div.className = 'round';

    div.innerHTML = (`<p class="round-number">ROUND ${roundCounter}</p><p > ENEMY:${computerChoice.toUpperCase()} ${result} YOU:${userChoice.toUpperCase()}</p></div>`);

    gameLog.prepend(div);
}

