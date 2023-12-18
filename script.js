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

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return `It's a tie! Your and computer both chose ${playerSelection}.`;
    } else if ((playerSelection==="rock" && computerSelection === "scissors") || (playerSelection==="paper" && computerSelection==="rock") || (playerSelection==="scissors" && computerSelection==="paper")) {
        playerSelection = playerSelection.charAt(0).toUpperCase().concat("", playerSelection.slice(1));
        computerSelection = computerSelection.charAt(0).toUpperCase().concat("", computerSelection.slice(1));
        return `You won! ${playerSelection} beats ${computerSelection}!`;
    } else if ((playerSelection==="rock" && computerSelection === "paper") || (playerSelection==="paper" && computerSelection==="scissors") || (playerSelection==="scissors" && computerSelection==="rock")) {
        playerSelection = playerSelection.charAt(0).toUpperCase().concat("", playerSelection.slice(1));
        computerSelection = computerSelection.charAt(0).toUpperCase().concat("", computerSelection.slice(1));
        return `You lose! ${computerSelection} beats ${playerSelection} !`;
    } else {
        return "Error! (check your typings)";
    }

}
