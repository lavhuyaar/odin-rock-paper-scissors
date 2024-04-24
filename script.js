// console.log("Hello");

let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
// console.log(userChoice);

function getHumanChoice() {
    // let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
    // console.log(userChoice.toLowerCase());
    return userChoice.toLowerCase();
    
}

getHumanChoice();



let choices = ["rock", "paper", "scissors"]; /*Since I have a bit knowledge about arrays, I'm using it for my convenience */
function getComputerChoice() {
    return(choices[Math.floor(Math.random() * 3)]);
}

getComputerChoice();



let humanScore = 0;
let computerScore = 0; 



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore = humanScore + 1;
    }else if (humanChoice === "scissors" && computerChoice === "paper") {      /*This looks so messy lmao, would love to know how others did this part */
        console.log("You win! Scissors beats Paper");
        humanScore = humanScore + 1;
    }else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore = humanScore + 1;
    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore = computerScore + 1;
    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beats Paper");
        computerScore = computerScore + 1;
    }else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore = computerScore + 1;
    }else if (humanChoice === computerChoice) {
        console.log("Draw! No points");
    }else console.log("No points");
}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



console.log(humanSelection, computerSelection);
console.log(humanScore, computerScore);