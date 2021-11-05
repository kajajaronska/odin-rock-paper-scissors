// QUERY SELECTORS
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const userScore = document.querySelector('.user-score');
const enemyScore = document.querySelector('.enemy-score');


/////////////////////////////
// Computer selection setup

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);
    if(randomNumber === 1) return "Rock";
    if(randomNumber === 2) return "Paper";
    if(randomNumber === 3) return "Scissors";
}

/////////////////////////////
// User selection setup

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
// Single round function and score counter


let enemyScoreCounter = 0;
let playerScoreCounter = 0;


function playRound() {

    computerChoice = computerPlay();

    console.log(`Computer\'s selection: ${computerChoice} | Player\'s selection: ${userChoice}`);

        switch(true) {
            case computerChoice === "Rock" && userChoice === "Scissors":
            case computerChoice === "Scissors" && userChoice === "Paper":
            case computerChoice === "Paper" && userChoice === "Rock":
            console.log(`${computerChoice} beats ${userChoice}. You lose!😱`)
            enemyScoreCounter++;
            enemyScore.textContent = enemyScoreCounter.toString();
            console.log(enemyScoreCounter, playerScoreCounter);

            break;
    
            case userChoice === "Rock" && computerChoice === "Scissors":
            case userChoice === "Scissors" && computerChoice === "Paper":
            case userChoice === "Paper" && computerChoice === "Rock":
            console.log(`${userChoice} beats ${computerChoice}. You win!👾`)
            playerScoreCounter++;
            userScore.textContent = playerScoreCounter.toString();
            console.log(enemyScoreCounter, playerScoreCounter);
            break;
    
            case userChoice === computerChoice:
            console.log("Draw! Try again 🤷‍♂️");
            console.log(enemyScoreCounter, playerScoreCounter);
            break;
    
            default:
                console.log("Whoops! Something went horribly wrong ... Reload?")
        };
        
    return;
};

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
