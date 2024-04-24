// console.log("Hello");

let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
// console.log(userChoice);

function getHumanChoice() {
    // let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
    // console.log(userChoice.toLowerCase());
    let user = userChoice.toLowerCase();
    // console.log(`User's input - ${user}`);
    return(user);
    
}

// getHumanChoice();



let choices = ["rock", "paper", "scissors"]; /*Since I have a bit knowledge about arrays, I'm using it for my convenience */
function getComputerChoice() {
    let random = choices[Math.floor(Math.random() * 3)];
    // console.log(`Computer's input - ${random}`);
    return(random);
}

// getComputerChoice();



let humanScore = 0;
let computerScore = 0; 



function playRound(humanChoice, computerChoice) {
    if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors");
        humanScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === "scissors" && computerChoice === "paper") {      /*This looks so messy lmao, would love to know how others did this part */
        console.log("You win! Scissors beat Paper");
        humanScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock");
        humanScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    }else if (humanChoice === computerChoice) {
        console.log("Draw! No points");

        
    }else {
        console.log("No points");
    }

}



let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);



