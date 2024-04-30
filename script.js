let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
  let userChoice = prompt(
    `Choose any one of "rock", "paper" and "scissors" : `
  );
  let user = userChoice.toLowerCase();
  return user;
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let random = choices[Math.floor(Math.random() * 3)];
  return random;
}

function playRound(humanChoice, computerChoice) {
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log(`You win as ${humanChoice} beats ${computerChoice}`);
    humanScore++;
    console.log(
      `User score - ${humanScore}, Computer score - ${computerScore}`
    );
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    console.log(`You lose as ${computerChoice} beats ${humanChoice}`);
    computerScore++;
    console.log(
      `User score - ${humanScore}, Computer score - ${computerScore}`
    );
  } else if (humanChoice === computerChoice) {
    console.log("Draw! No points");
    console.log(
      `User score - ${humanScore}, Computer score - ${computerScore}`
    );
  } else {
    console.log("No points");
    console.log(
      `User score - ${humanScore}, Computer score - ${computerScore}`
    );
  }
}

for (let i = 1; i >= 0; i++) {
  playRound(getHumanChoice(), getComputerChoice());

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore > computerScore && humanScore === 5) {
      console.log(`Yayy! You won the game with ${humanScore}-${computerScore}`);
    }
    if (computerScore > humanScore && computerScore === 5) {
      console.log(
        `Oops! You lost with the score of ${humanScore}-${computerScore}. Better luck next time!`
      );
    }
    break;
  }
} /* I did it!!!! I made the game by my own!!!!! WITHOUT ANY HELP OR CHEATING!!! */
