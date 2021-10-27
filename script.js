/////////////////////////////
// Computer selection setup
let randomNumber = Math.floor(Math.random()*3 + 1);

function computerPlay() {

    if(randomNumber === 1) return "Rock";
    if(randomNumber === 2) return "Paper";
    if(randomNumber === 3) return "Scissors";
}

let computerSelection = computerPlay();

/////////////////////////////
// User selection setup
let userChoice = prompt("Choose your weapon now 🏹: Rock, Paper or Scissors?").toLowerCase();

// Capitalising user's selection
let playerSelection = userChoice[0].toUpperCase() + userChoice.substring(1);

/////////////////////////////
// Game main function
function game() {

    switch(true) {
        case computerSelection === "Rock" && playerSelection === "Scissors":
        case computerSelection === "Scissors" && playerSelection === "Paper":
        case computerSelection === "Paper" && playerSelection === "Rock":
        console.log(`${computerSelection} beats ${playerSelection}. You loose!😱`)
        break;

        case playerSelection === "Rock" && computerSelection === "Scissors":
        case playerSelection === "Scissors" && computerSelection === "Paper":
        case playerSelection === "Paper" && computerSelection === "Rock":
        console.log(`${playerSelection} beats ${computerSelection}. You win!👾`)
        break;

        case playerSelection === computerSelection:
        console.log("Draw! Try again 🤷‍♂️");
        break;

        default:
            console.log("Whoops! Something went horribly wrong ... Reload?")

    };
    return;
};

// Conditional statement to determine whether user input a valid choice, i.e. Rock, Paper or Scissors
if (playerSelection === "Scissors" || playerSelection === "Rock" || playerSelection === "Paper") {
    console.log(`Computer chose ${computerSelection}.`);
    console.log(`You chose ${playerSelection}.`);
    game();
} else {
    console.log("This weapon doesn't exist! Reload and start over.");   
};

