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


// Function to set user's choice on 'click' event 

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
// Single round function

let winner;
let computerSelection;
let playerSelection;

function playRound() {

    computerSelection = computerPlay();
    playerSelection = userChoice;

    console.log(`Computer\'s selection: ${computerSelection} | Player\'s selection: ${playerSelection}`);

    
        switch(true) {
            case computerSelection === "Rock" && playerSelection === "Scissors":
            case computerSelection === "Scissors" && playerSelection === "Paper":
            case computerSelection === "Paper" && playerSelection === "Rock":
            winner = "Computer";
            console.log(`${computerSelection} beats ${playerSelection}. You lose!😱`)
            enemyScore.textContent = '1';
            break;
    
            case playerSelection === "Rock" && computerSelection === "Scissors":
            case playerSelection === "Scissors" && computerSelection === "Paper":
            case playerSelection === "Paper" && computerSelection === "Rock":
            winner = "Player";
            console.log(`${playerSelection} beats ${computerSelection}. You win!👾`)
            userScore.textContent = '1';
            break;
    
            case playerSelection === computerSelection:
            winner = "";
            console.log("Draw! Try again 🤷‍♂️");
            break;
    
            default:
                console.log("Whoops! Something went horribly wrong ... Reload?")
    
        };
        
    return;
};

// playRound();

///////////////////////////
// 5 round game function

function game() {
    // Setting initial scores to 0
    computerScore = 0;
    playerScore = 0;

    // Looping 5 times for 5 rounds
    for (let i=1; i <= 5; i++) {
        console.log(`Round:${i}`)
        playRound();

        
        if(winner === "Computer"){
            computerScore += 1;
            console.log(`---- Computer: ${computerScore} | Player: ${playerScore} ----`);
        } else if(winner === "Player"){
            playerScore += 1
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
        } else {
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
        }


    } 

    // Announcing final score after last round 
    if(computerScore > playerScore) console.log(`Computer won this game!`);
    else if(playerScore > computerScore) console.log(`Well done! You won this game!`);
    else{
        console.log(`It\'s a draw!`)
    }

    return;
}

// game();
