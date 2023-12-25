function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 + 1);
    switch (computerChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}
let playerScore = 0;
let computerScore = 0;
let result = "Choose Rock|Paper|Scissors to start game!";
let score = "Score: You (0-0)Computer";
let final;
const resultMsg = document.querySelector(".result-message");
const scoreMsg = document.querySelector(".score-message");
const finalMsg = document.querySelector(".final-message");
resultMsg.textContent = result;
scoreMsg.textContent = score;

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        result = `It's a tie! You and computer both chose ${playerSelection}.`;
        score = `Score: You (${playerScore}-${computerScore}) Computer`;
        resultMsg.textContent = result;
        scoreMsg.textContent = score;
        finalMsg.textContent = "";

    } else if ((playerSelection === "rock" && computerSelection === "scissors") || (playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper")) {
        playerSelection = playerSelection.charAt(0).toUpperCase().concat("", playerSelection.slice(1));
        computerSelection = computerSelection.charAt(0).toUpperCase().concat("", computerSelection.slice(1));
        result = `You won! ${playerSelection} beats ${computerSelection}!`;
        playerScore++;
        score = `Score: You (${playerScore}-${computerScore}) Computer`;
        resultMsg.textContent = result;
        scoreMsg.textContent = score;
        finalMsg.textContent = "";
    } else if ((playerSelection === "rock" && computerSelection === "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")) {
        playerSelection = playerSelection.charAt(0).toUpperCase().concat("", playerSelection.slice(1));
        computerSelection = computerSelection.charAt(0).toUpperCase().concat("", computerSelection.slice(1));
        result = `You lose! ${computerSelection} beats ${playerSelection} !`;
        computerScore++;
        score = `Score: You (${playerScore}-${computerScore}) Computer`;
        resultMsg.textContent = result;
        scoreMsg.textContent = score;
        finalMsg.textContent = "";
    }

    if (playerScore === 5 && computerScore !== 5) {
        final = "You won!";
        playerScore = 0;
        computerScore = 0;
        finalMsg.textContent = final;
    } else if (playerScore !== 5 && computerScore == 5) {
        final = "You lost! Computer won!";
        playerScore = 0;
        computerScore = 0;
        finalMsg.textContent = final;

    }
}

const btnRock = document.querySelector("button#rock");
const btnPaper = document.querySelector("button#paper");
const btnScissors = document.querySelector("button#scissors");
const btnStart = document.createElement("button");

btnRock.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
btnPaper.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
btnScissors.addEventListener("click", () => {
    playRound("scissors", getComputerChoice());
});







// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i <= 5; i++) {
//         let playerSelection = prompt("Choose (Rock, Paper, Scissors):");
//         let computerSelection = getComputerChoice();
//         let result = (playRound(playerSelection, computerSelection));
//         console.log(result)
//         if (result.charAt(4) === "w") {
//             playerScore++;
//             console.log(`Score: You (${playerScore}-${computerScore}) Computer`);
//         } else if (result.charAt(4) === "l") {
//             computerScore++;
//             console.log(`Score: You (${playerScore}-${computerScore}) Computer`);
//         } else {
//             console.log(`Score: You (${playerScore}-${computerScore}) Computer`);
//         }
//     }

// }

