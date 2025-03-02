import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";
const playerScoreEl = document.querySelector("#playerScore");
const playerChoiceEl = document.querySelector("#playerChoice");
const computerScoreEl = document.querySelector("#computerScore");
const computerChoiceEl = document.querySelector("#computerChoice");
const resultText = document.querySelector("#resultText");

const playerRock = document.querySelector("#playerRock");
const playerPaper = document.querySelector("#playerPaper");
const playerScissors = document.querySelector("#playerScissors");
const playerLizard = document.querySelector("#playerLizard");
const playerSpock = document.querySelector("#playerSpock");

const computerRock = document.querySelector("#computerRock");
const computerPaper = document.querySelector("#computerPaper");
const computerScissors = document.querySelector("#computerScissors");
const computerLizard = document.querySelector("#computerLizard");
const computerSpock = document.querySelector("#computerSpock");

const allGameIcons = document.querySelectorAll(".far");

const choices = {
    rock: { name: "Rock", defeats: ["scissors", "lizard"] },
    paper: { name: "Paper", defeats: ["rock", "spock"] },
    scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
    lizard: { name: "Lizard", defeats: ["paper", "spock"] },
    spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
let playerScoreNumber = 0;
let computerScoreNumber = 0;
let computerChoice = "";

//Reset all 'selected' icons
function resetSelected() {
    allGameIcons.forEach((icon) => {
        icon.classList.remove("selected");
    });
    stopConfetti();
    removeConfetti();
}

//Reset ourScore/computerScore
function resetAll() {
    playerScoreNumber = 0;
    computerScoreNumber = 0;
    playerScoreEl.textContent = playerScoreNumber;
    computerScoreEl.textContent = computerScoreNumber;
    playerChoiceEl.textContent = "";
    computerChoiceEl.textContent = "";
    resultText.textContent = "";
    resetSelected();
}
window.resetAll = resetAll;

//Random computer choice
function computerRandomChoice() {
    const computerChoiceNumber = Math.random();
    if (computerChoiceNumber < 0.2) {
        computerChoice = "rock";
    } else if (computerChoiceNumber <= 0.4) {
        computerChoice = "paper";
    } else if (computerChoiceNumber <= 0.6) {
        computerChoice = "scissors";
    } else if (computerChoiceNumber <= 0.8) {
        computerChoice = "lizard";
    } else {
        computerChoice = "spock";
    }
}

// Add selected styling and computer choice

function displayComputerChoice() {
    switch (computerChoice) {
        case "rock":
            computerRock.classList.add("selected");
            computerChoiceEl.textContent = " --- Rock";
            break;
        case "paper":
            computerPaper.classList.add("selected");
            computerChoiceEl.textContent = " --- Paper";
            break;
        case "scissors":
            computerScissors.classList.add("selected");
            computerChoiceEl.textContent = " --- Scissors";
            break;
        case "lizard":
            computerLizard.classList.add("selected");
            computerChoiceEl.textContent = " --- Lizard";
            break;
        case "spock":
            computerSpock.classList.add("selected");
            computerChoiceEl.textContent = " --- Spock";
            break;
        default:
            break;
    }
}
window.select = select;

//check result increase score , update the result text as well
function updateScore(playerChoice) {
    if (playerChoice === computerChoice) {
        resultText.textContent = "It's a tie.";
    } else {
        const choice = choices[playerChoice];
        console.log(choice.defeats.indexOf(computerChoice));
        if (choice.defeats.indexOf(computerChoice) > -1) {
            startConfetti();
            resultText.textContent = "You Won 🎉🎊🎉";
            playerScoreNumber++;
            playerScoreEl.textContent = playerScoreNumber;
        } else {
            resultText.textContent = "You Lost 😟😔😟";
            computerScoreNumber++;
            computerScoreEl.textContent = computerScoreNumber;
        }
    }
}

//Call functions to process turn
function checkResult(playerChoice) {
    resetSelected();
    computerRandomChoice();
    displayComputerChoice();
    updateScore(playerChoice);
}

//Passing player selection value and styling icons
function select(playerChoice) {
    checkResult(playerChoice);
    //add 'selected' styling and playerChoice
    switch (playerChoice) {
        case "rock":
            playerRock.classList.add("selected");
            playerChoiceEl.textContent = " --- Rock";
            break;
        case "paper":
            playerPaper.classList.add("selected");
            playerChoiceEl.textContent = " --- Paper";
            break;
        case "scissors":
            playerScissors.classList.add("selected");
            playerChoiceEl.textContent = " --- Scissors";
            break;
        case "lizard":
            playerLizard.classList.add("selected");
            playerChoiceEl.textContent = " --- Lizard";
            break;
        case "spock":
            playerSpock.classList.add("selected");
            playerChoiceEl.textContent = " --- Spock";
            break;
        default:
            break;
    }
}

//On startup,set individual value
resetAll();