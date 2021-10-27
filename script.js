/////////////////////////////
// Computer selection setup

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3 + 1);

    if(randomNumber === 1) return "Rock";
    if(randomNumber === 2) return "Paper";
    if(randomNumber === 3) return "Scissors";
}

// let computerSelection = computerPlay();

/////////////////////////////
// User selection setup

function userPlay() {
    let userChoice = prompt("Choose your weapon now 🏹: Rock, Paper or Scissors?").toLowerCase();
    return userChoice[0].toUpperCase() + userChoice.substring(1);
}

// let playerSelection = userPlay();


// let userChoice = prompt("Choose your weapon now 🏹: Rock, Paper or Scissors?").toLowerCase();

// // Capitalising user's selection
// let playerSelection = userChoice[0].toUpperCase() + userChoice.substring(1);

/////////////////////////////
// Round function

let winner;
let computerSelection;
let playerSelection;

function playRound(computerSelection,playerSelection) {

    computerSelection = computerPlay();
    playerSelection = userPlay();

    console.log(`This is computer selection: ${computerSelection} and this is player\'s selection: ${playerSelection}`);

    if (playerSelection === "Scissors" || playerSelection === "Rock" || playerSelection === "Paper") {
        console.log(`Computer chose ${computerSelection}.`);
        console.log(`You chose ${playerSelection}.`);

        switch(true) {
            case computerSelection === "Rock" && playerSelection === "Scissors":
            case computerSelection === "Scissors" && playerSelection === "Paper":
            case computerSelection === "Paper" && playerSelection === "Rock":
            winner = "Computer";
            console.log(`${computerSelection} beats ${playerSelection}. You loose!😱`, `Winner: ${winner}`)
            break;
    
            case playerSelection === "Rock" && computerSelection === "Scissors":
            case playerSelection === "Scissors" && computerSelection === "Paper":
            case playerSelection === "Paper" && computerSelection === "Rock":
            winner = "Player";
            console.log(`${playerSelection} beats ${computerSelection}. You win!👾`, `Winner: ${winner}`)
            break;
    
            case playerSelection === computerSelection:
            winner = "";
            console.log("Draw! Try again 🤷‍♂️");
            break;
    
            default:
                console.log("Whoops! Something went horribly wrong ... Reload?")
    
        };
    } else {
        console.log("This weapon doesn't exist! Reload and start over.");   
    };
        
    return;
};


// playRound();

// // Conditional statement to determine whether user entered a valid choice, i.e. Rock, Paper or Scissors
// if (playerSelection === "Scissors" || playerSelection === "Rock" || playerSelection === "Paper") {
//     console.log(`Computer chose ${computerSelection}.`);
//     console.log(`You chose ${playerSelection}.`);
//     playRound(computerSelection, playerSelection);
// } else {
//     console.log("This weapon doesn't exist! Reload and start over.");   
// };

///////////////////////////
// 5 round game function

function game() {
    computerScore = 0;
    playerScore = 0;

    for (let i=1; i <= 5; i++) {
        console.log(`Round:${i}`)
        playRound();
        
        if(winner === "Computer"){
            computerScore += 1;
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
        } else if(winner === "Player"){
            playerScore += 1
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
        } else {
            console.log(`Computer: ${computerScore} | Player: ${playerScore}`);
        }


    } 

    if(computerScore > playerScore) console.log(`Computer won this game!`);
    else if(playerScore > computerScore) console.log(`Well done! You won this game!`);
    else{
        console.log(`It\'s a draw!`)
    }

    return;
}

game();


// playRound();
// playRound();
// playRound();
// playRound();
// playRound();
