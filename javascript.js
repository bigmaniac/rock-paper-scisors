const choices = ["rock", "paper", "scissors"];

let humanScore = 0;
let computerScore = 0;

function computerChoice() {
    let computerChoiceResult = Math.floor(Math.random() * 3);
    return choices[computerChoiceResult];
}

function humanChoice() {
    while (true) {
        let humanChoiceResult = parseInt(prompt("Please select your figure: (0 - rock, 1 - paper, 2 - scissors)"));
        if (humanChoiceResult === 0 || humanChoiceResult === 1 || humanChoiceResult === 2) {
            return choices[humanChoiceResult];
        } else {
            alert("Invalid choice. Please try again.");
        }
    }
}

function playRound (humanChoiceResult, computerChoiceResult) {
    let yourChoiceMessage = null;
    let computerChoiceMessage = null;
    let winMessage = null;
    yourChoiceMessage = (`Your choice: ${humanChoiceResult}.`);
    computerChoiceMessage = (`Computer choice: ${computerChoiceResult}.`);
    if (humanChoiceResult === "rock" && computerChoiceResult === "scissors" ||
        humanChoiceResult === "paper" && computerChoiceResult === "rock" ||
        humanChoiceResult === "scissors" && computerChoiceResult === "paper") {
            humanScore++;
            winMessage = `${humanChoiceResult.substring(0, 1).toUpperCase() + humanChoiceResult.substring(1)} beats ${computerChoiceResult}. You won the round.`;
    } else if (humanChoiceResult === "rock" && computerChoiceResult === "paper" ||
        humanChoiceResult === "paper" && computerChoiceResult === "scissors" ||
        humanChoiceResult === "scissors" && computerChoiceResult === "rock") {
            computerScore++;
            winMessage = `${computerChoiceResult.substring(0, 1).toUpperCase() + computerChoiceResult.substring(1)} beats ${humanChoiceResult}. You loose the round.`;
    } else {
        winMessage = `${computerChoiceResult.substring(0, 1).toUpperCase() + computerChoiceResult.substring(1)} is equal to ${humanChoiceResult}. It's a draw round.`;
    }
    alert(`${yourChoiceMessage} ${computerChoiceMessage} ${winMessage}`);
    alert(`Current score: You ${humanScore} | Computer: ${computerScore}`);
}

function playGame(num) {
    for (let i = 1; i <= num; i++) {
        const humanChoiceResult = humanChoice();
        const computerChoiceResult = computerChoice();
        playRound(humanChoiceResult, computerChoiceResult);
    }
}

playGame(5);

if (humanScore > computerScore) {
    alert(`Your score is ${humanScore}. Computer score is ${computerScore}. You won the game.`);
} else if (humanScore < computerScore) {
    alert(`Your score is ${humanScore}. Computer score is ${computerScore}. You lost the game.`)
} else {
    alert(`Your score is ${humanScore}. Computer score is ${computerScore}. It's a draw.`)
}