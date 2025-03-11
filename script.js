const choices = ["✊", "✋", "✌️"];
let humanScore = 0;
let computerScore = 0;
let round = 1;
function getComputerChoice() {
  const rand = Math.floor(Math.random() * 3);
  return choices[rand];
}

function playRound(humanSelection, computerSelection) {
  h1.innerText = "Rock Paper Scissors game";
  h1.style.backgroundColor = "";
  h1.style.fontSize = "";
  display.innerText = `Round#${round}`
  if (humanSelection === computerSelection) {
    display.innerText += "\nDraw!"
  } else if (
    (humanSelection === "✊" && computerSelection === "✌️") ||
    (humanSelection === "✋" && computerSelection === "✊") ||
    (humanSelection === "✌️" && computerSelection === "✋")
  ) {
    humanScore++;
   display.innerText += `\n${humanSelection} beats ${computerSelection} - You win!`;
  } else {
    computerScore++;
    display.innerText += `\n${computerSelection} beats ${humanSelection} - Computer wins!`;
  }
  display.innerText += `\nYou score:${humanScore}, Computer Scores: ${computerScore}`;

  if (humanScore >= 5 || computerScore >= 5) {
    if (humanScore > computerScore) {
      h1.innerText = "\nCongratulations, you won!" 
    } else if (computerScore > humanScore) {
      h1.innerText = "\nComputer won!"
    } else {
    h1.innerText = "\nDraw!" 
  }
  h1.style.backgroundColor = "tomato";
  h1.style.fontSize = "2rem";
  humanScore = 0;
  computerScore = 0;
  round = 1;
}
  round++;
}

const buttons = document.querySelector("#buttons");
let display = document.querySelector("#display");
const h1 = document.querySelector("h1");

buttons.addEventListener('click', e => {
  const humanChoice = e.target.innerText;
  const computerChoice = getComputerChoice();
  playRound(humanChoice, computerChoice);
})



