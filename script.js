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
const modalCloseBtn = document.querySelector('.close-button');
const modalRepeatBtn = document.querySelector('.repeat-button');
const modal = document.querySelector('.modal');
const winnerAnnounce = document.querySelector('.announce-winner');
// const roundDiv = document.querySelector('.round');


/////////////////////////////
// COMPUTER CHOICE SETUP

modal.classList.add('hidden');

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
            enemyScoreCard.classList.add('winner');
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
            userScoreCard.classList.add('winner');
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
        winnerAnnounce.textContent = "Oh no! Computer beat you!";
        modal.classList.remove('hidden');
    } else if(userScoreCounter === 5) {
        winnerAnnounce.textContent = "Whoo hoo, you won! Congrats!"
        modal.classList.remove('hidden');
    }
}

///////////////////////////
// GAME LOG FUNCTIONALITY

function addGameLogRow() {
    const div = document.createElement('div');
    div.className = 'round';
    div.innerHTML = (`<p class="round-number">ROUND ${roundCounter}</p><p > ENEMY:${computerChoice.toUpperCase()} ${result} YOU:${userChoice.toUpperCase()}</p></div>`);

    gameLog.prepend(div);

    // Highlighting latest round:
    const latestRound = gameLog.firstElementChild;

    console.log(latestRound);
}

///////////////////////////
// MODAL FUNCTIONALITY

modalCloseBtn.addEventListener('click',function(){
    modal.classList.add('hidden')
});

modalRepeatBtn.addEventListener('click', restartGame);

///////////////////////////
// RESETTING THE GAME

const roundDivs = document.querySelectorAll('.round');

function restartGame() {
    modal.classList.add('hidden');
    enemyScoreCounter = 0;
    userScoreCounter = 0;
    roundCounter = 0;

    // Resetting Scoreboard
    userScore.textContent = '0';
    enemyScore.textContent = '0';
    userScoreCard.classList.remove('winner');
    enemyScoreCard.classList.remove('winner');

    // Resetting Game Log
    document.querySelectorAll('.round').forEach((element) => element.remove());
};




