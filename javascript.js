const choices = ['rock', 'paper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

function computerChoice() {
    let computerChoiceResult = Math.floor(Math.random() * 3);
    return choices[computerChoiceResult];
}

function humanChoice() {
    while (true) {
        let humanChoiceResult = parseInt(prompt('Please select your figure: (0 - rock, 1 - paper, 2 - scissors)'));
        if (humanChoiceResult === 0 || humanChoiceResult === 1 || humanChoiceResult === 2) {
            return choices[humanChoiceResult];
        } else {
            alert('Invalid choice. Please try again.');
        }
    }
}

function playRound (humanChoiceResult, computerChoiceResult) {
    if (humanChoiceResult === computerChoiceResult) {
        console.log("It's a tie.");
    } else if (humanChoiceResult === 'rock' && computerChoiceResult === 'paper') {
        computerScore ++;
        console.log(`Paper beats rock. You loose.`);
    } else if (humanChoiceResult === 'rock' && computerChoiceResult === 'scissors') {
        humanScore ++;
        console.log('Rock beats scissors. You win.');
    } else if (humanChoiceResult === 'paper' && computerChoiceResult === 'rock') {
        humanScore++;
        console.log(`Paper beats rock. You win.`);
    } else if (humanChoiceResult === 'paper' && computerChoiceResult === 'scissors') {
        computerScore++;
        console.log(`Scissors beats paper. You loose.`);
    } else if (humanChoiceResult === 'scissors' && computerChoiceResult === 'rock') {
        computerScore++;
        console.log(`Rock beats scissors. You loose.`);
    } else if (humanChoiceResult === 'scissors' && computerChoiceResult === 'paper') {
        humanScore++;
        console.log(`Scissors beats paper. You win.`);
    }
    console.log(`Your choice: ${humanChoiceResult}`);
    console.log(`Computer choice: ${computerChoiceResult}`);
    console.log(`Current score - You ${humanScore} | Computer: ${computerScore}`);
}

const humanChoiceResult = humanChoice();
const computerChoiceResult = computerChoice();


playRound(humanChoiceResult, computerChoiceResult)

