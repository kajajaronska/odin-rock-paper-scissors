// QUERY SELECTORS
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.user-score');
const enemyScore = document.querySelector('.enemy-score');
const userName = document.querySelector('.user-name');
const enemyName = document.querySelector('.enemy-name');
const gameLog = document.querySelector('.game-log');


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
            result = '🏆|💔';
            break;
    
            case userChoice === "Rock" && computerChoice === "Scissors":
            case userChoice === "Scissors" && computerChoice === "Paper":
            case userChoice === "Paper" && computerChoice === "Rock":
           
            userScoreCounter++;
            roundCounter++;
            userScore.textContent = userScoreCounter.toString();
            result = '💔|🏆';
            break;
    
            case userChoice === computerChoice:
            roundCounter++;
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

    div.innerHTML = (`<p class="round-number">ROUND ${roundCounter}</p><p class="enemy-choice"> ENEMY:${computerChoice.toUpperCase()}</p><p>${result}</p><p class="user-choice">YOU:${userChoice.toUpperCase()}</p></div>`);

    gameLog.prepend(div);
}

///////////////////////////
// 5 round game function

// function game() {
//     // Setting initial scores to 0
//     computerScore = 0;
//     playerScore = 0;

//     // Looping 5 times for 5 rounds
//     for (let i=1; i <= 5; i++) {
//         console.log(`Round:${i}`)
//         playRound();

        
//         if(winner === "Computer"){
//             computerScore += 1;
//             console.log(`---- Computer: ${computerScore} | Player: ${playerScore} ----`);
//         } else if(winner === "Player"){
//             playerScore += 1
//             console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
//         } else {
//             console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
//         }
//     } 

//     // Announcing final score after last round 
//     if(computerScore > playerScore) console.log(`Computer won this game!`);
//     else if(playerScore > computerScore) console.log(`Well done! You won this game!`);
//     else{
//         console.log(`It\'s a draw!`)
//     }

//     return;
// }

// game();
