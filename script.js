const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function getHumanChoice() {
  let humanChoice;
  do {
    humanChoice = prompt("Enter your choice...");
    if (!choices.includes(humanChoice)) {
      console.log("Invalid input! Try again.");
    }
  } while (!choices.includes(humanChoice));
  return humanChoice.toLowerCase();
}

function playRound(humanSelection, computerSelection) {
  if (humanSelection === computerSelection) {
    console.log("It's a draw!");
  } else if (
    (humanSelection === "rock" && computerSelection === "scissors") ||
    (humanSelection === "paper" && computerSelection === "rock") ||
    (humanSelection === "scissors" && computerSelection === "paper")
  ) {
    humanScore++;
    console.log(`${humanSelection} beats ${computerSelection} - You win!`);
  } else {
    computerScore++;
    console.log(
      `${computerSelection} beats ${humanSelection} - Computer wins!`
    );
  }
}

function playGame() {
  let round = 1;
  while (round <= 5) {
    console.log(`Round #${round}`);
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
    round++;
  }

  console.log("\nFinal Score:");
  console.log(`You: ${humanScore} | Computer: ${computerScore}`);
  if (humanScore > computerScore) {
    console.log("Congratulations, You won!");
  } else if (humanScore < computerScore) {
    console.log("Computer won.");
  } else {
    console.log("It's a draw!");
  }
}

playGame();
