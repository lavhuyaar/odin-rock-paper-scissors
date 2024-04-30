let score = document.querySelector(".score");
let para = document.querySelector(".p");

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
    humanScore++;
    console.log(
      `You won the round! Your score - ${humanScore}, Computer score - ${computerScore}.`
    );
  } else if (
    (humanChoice === "scissors" && computerChoice === "rock") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "rock" && computerChoice === "paper")
  ) {
    computerScore++;
    console.log(
      `You lost the round. Your score - ${humanScore}, Computer score - ${computerScore}.`
    );
  } else if (humanChoice === computerChoice) {
    console.log(
      `Draw! No points. Your score - ${humanScore}, Computer score - ${computerScore}.`
    );
  } else {
    console.log(
      `No points.  Your score - ${humanScore}, Computer score - ${computerScore}.`
    );
  }
}

btnStart = document.querySelector(".start");
btnStart.addEventListener("click", playGame);

function playGame() {
  for (let i = 1; i >= 0; i++) {
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore === 5 || computerScore === 5) {
      if (humanScore > computerScore && humanScore === 5) {
        score.textContent = `Yayy! You won the game by ${humanScore}-${computerScore}`;
      }
      if (computerScore > humanScore && computerScore === 5) {
        score.textContent = `Oops! You lost the game by ${humanScore}-${computerScore}. Better luck next time!`;
      }
      break;
    }
  }
}
