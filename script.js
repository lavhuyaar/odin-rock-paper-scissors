// console.log("Hello");

// let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
// console.log(userChoice);

function getHumanChoice() {
    let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
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


// let humanSelection = getHumanChoice();           /*Commented it at last coz this was stopping me from getting new values for the playRound function */
// let computerSelection = getComputerChoice();


function playRound(humanChoice, computerChoice) {

    if (humanChoice === "rock" && computerChoice === "scissors" || 
        humanChoice === "scissors" && computerChoice === "paper" ||
        humanChoice === "paper" && computerChoice === "rock") {
        console.log(`You win as ${humanChoice} beats ${computerChoice}`);
        humanScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);
        

    // }else if (humanChoice === "scissors" && computerChoice === "paper") {      /*This looks so messy lmao, would love to know how others did this part */
    //     console.log("You win! Scissors beat Paper");
    //     humanScore++;
    //     console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    // }else if (humanChoice === "paper" && computerChoice === "rock") {
    //     console.log("You win! Paper beats Rock");
    //     humanScore++;
    //     console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    /*I remembered that || can be used for "or" so tried doing this and it makes the code less lengthy. Not deleting the older codes as I would like to remember what code I wrote before xD */

    }else if (
            humanChoice === "scissors" && computerChoice === "rock" ||
            humanChoice === "paper" && computerChoice === "scissors" ||    
            humanChoice === "rock" && computerChoice === "paper"
        ) {
        console.log(`You lose as ${computerChoice} beats ${humanChoice}`);
        computerScore++;
        console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);



    // }else if () {
    //     console.log("You lose! Scissors beat Paper");
    //     computerScore++;
    //     console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


    // }else if (humanChoice === "rock" && computerChoice === "paper") {
    //     console.log("You lose! Paper beats Rock");
    //     computerScore++;
    //     console.log(`User score - ${humanScore}, Computer score - ${computerScore}`);


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
}  /*I know loops as well so used it, but I can do the way the project was asked as well */

// function playGame() {
//     playRound(getHumanChoice(), getComputerChoice());  
//     playRound(getHumanChoice(), getComputerChoice());   /*I could've done it this way as well. */
//     playRound(getHumanChoice(), getComputerChoice());  
//     playRound(getHumanChoice(), getComputerChoice());  
//     playRound(getHumanChoice(), getComputerChoice());
// }

// playGame();