// console.log("Hello");

// let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
// console.log(userChoice);

function getHumanChoice() {
    let userChoice = prompt(`Choose any one of "rock", "paper" and "scissors" : `);
    // console.log(userChoice);
    return userChoice;
    
}

getHumanChoice();



let choices = ["rock", "paper", "scissors"]; /*Since I have a bit knowledge about arrays, I'm using it for my convenience */
function getComputerChoice() {
    return(choices[Math.floor(Math.random() * 3)]);
}

getComputerChoice();
