
let humanScore = 0;
let computerScore = 0; 


function getHumanChoice() {
    let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
    let user = userChoice.toLowerCase();
    return(user);
    
}


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let random = choices[Math.floor(Math.random() * 3)];
    return(random);
}


function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win as ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);
        


    }else if (
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors" ||    
            humanChoice === "rock" && computerChoice === "paper"
        ) {
        console.log(`You lose as ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);



    }else if (humanChoice === computerChoice) {
        console.log("Draw! No points");
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);

        
    }else {
        console.log("No points");
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);
    }

}


for ( let i = 1; i <= 5; i++) {
    playRound(getHumanChoice(), getComputerChoice());     /* I did it!!!! I made the game by my own!!!!! WITHOUT ANY HELP OR CHEATING!!! */
}
