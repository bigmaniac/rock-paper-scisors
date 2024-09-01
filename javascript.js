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
    console.log(`Your choice: ${humanChoiceResult}.`);
    console.log(`Computer choice: ${computerChoiceResult}.`);
    if (humanChoiceResult === "rock" && computerChoiceResult === "scissors" ||
        humanChoiceResult === "paper" && computerChoiceResult === "rock" ||
        humanChoiceResult === "scissors" && computerChoiceResult === "paper") {
            humanScore++;
            console.log(`${humanChoiceResult.substring(0, 1).toUpperCase() + humanChoiceResult.substring(1)} beats ${computerChoiceResult}. You won the round.`);
    } else if (computerChoiceResult === "rock" && humanChoiceResult === "scissors" ||
        computerChoiceResult === "paper" && humanChoiceResult === "rock" ||
        computerChoiceResult === "scissors" && humanChoiceResult === "paper") {
            computerScore++;
            console.log(`${computerChoiceResult.substring(0, 1).toUpperCase() + computerChoiceResult.substring(1)} beats ${computerChoiceResult}. You loose the round.`);
    } else {
        console.log(`${computerChoiceResult.substring(0, 1).toUpperCase() + computerChoiceResult.substring(1)} is equal to ${computerChoiceResult}. It's a draw round.`);
    }
    console.log(`Current score: You ${humanScore} | Computer: ${computerScore}`);
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
    console.log(`You won the game.`);
} else if (humanScore < computerScore) {
    console.log(`You lost the game.`)
} else {
    console.log(`It's a draw.`)
}