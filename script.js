// Variable

var choice = ["robot", "ninja", "pirate", "monkey", "zombie"];

var playerChoice = "";
var playerScore = 0;
var computerScore = 0;

var buttons = document.querySelectorAll(".choose");
var playerScoreEl = document.getElementById("scoreOne");
var computerScoreEl = document.getElementById("scoreTwo");
var pentagone = document.getElementById("pentagone");
var selectionBox = document.getElementById("selection-box");
var playAgain = document.getElementById("play-again");
var playerSelection = document.getElementById("player-selection");
var computerSelection = document.getElementById("computer-selection");
var result = document.getElementById("result");

// rules open close
var rules = document.getElementById("rules");
var openBtn = document.getElementById("open");
var closeBtn = document.getElementById("close");

// var username = prompt("What is your name?");

// console.log(username);

//  function where the computer is picking a rundom choice  (computer choice)

function pickRondomChoice() {
  return choice[Math.floor(Math.random() * choice.length)];
}
//console.log(pickRondomChoice());

// function where the user pick his own choice when he click on it (player choice)

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    playerChoice = button.getAttribute("data-choice");

    // hide the pentagone and show the selection-box

    pentagone.style.display = "none";
    selectionBox.style.display = "flex";
    checkWinner();
  });
});

// Going back to the pentagone page when the player decide to play again

playAgain.addEventListener("click", () => {
  pentagone.style.display = "flex";
  selectionBox.style.display = "none";
});

// open and close the rules
openBtn.addEventListener("click", () => {
  rules.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  rules.style.display = "none";
});

//  update score number for the player

function updatePlayerScore(value) {
  value = playerScore++;
  playerScoreEl.innerText = playerScore;
}

// update score number for the computer

function updateComputerScore(value) {
  value = computerScore++;
  computerScoreEl.innerHTML = computerScore;
}

//  the winner function

function checkWinner() {
  let computerChoice = pickRondomChoice();

  // updating the selection

  updateSelectionbox(playerSelection, playerChoice);
  updateSelectionbox(computerSelection, computerChoice);

  if (playerChoice === computerChoice) {
    // draw
    result.innerHTML = "DRAW";
  } else if (
    (playerChoice === "robot" &&
      (computerChoice === "ninja" || computerChoice === "zombie")) ||
    (playerChoice === "pirate" &&
      (computerChoice === "robot" || computerChoice === "monkey")) ||
    (playerChoice === "ninja" &&
      (computerChoice === "pirate" || computerChoice === "zombie")) ||
    (playerChoice === "monkey" &&
      (computerChoice === "robot" || computerChoice === "ninja")) ||
    (playerChoice === "zombie" &&
      (computerChoice === "monkey" || computerChoice === "pirate"))
  ) {
    updatePlayerScore(1);
    result.innerHTML = "YOU WIN";
  } else {
    // user loose
    updateComputerScore(1);
    result.innerHTML = "YOU LOSE";
  }

  console.log(checkWinner);
}

// updating the selection box with the choices

function updateSelectionbox(selectionBoxEl, choice) {
    console.log(selectionBoxEl)
  selectionBoxEl.classList.remove("btn-robot");
  selectionBoxEl.classList.remove("btn-pirate");
  selectionBoxEl.classList.remove("btn-ninja");
  selectionBoxEl.classList.remove("btn-monkey");
  selectionBoxEl.classList.remove("btn-zombie");

  selectionBoxEl.classList.add(`btn-${choice}`);

  let img = selectionBoxEl.querySelector("img");
  img.src = `./style/images/icon-${choice}.svg`;
  img.alt = choice;
}
