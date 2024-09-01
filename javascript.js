const choices = ['rock', 'paper', 'scissors'];

function computerChoice() {
    let computerChoiceResult = Math.floor(Math.random() * 3);
    return choices[computerChoiceResult];
}
console.log(computerChoice())

function humanChoice() {
    while (true) {
        let humanChoiceResult = parseInt(prompt('Please select your figure: (0 - rock, 1 - paper, 2 - scissors)'));
        if (humanChoiceResult === 0 || humanChoiceResult === 1 || humanChoiceResult === 2) {
            return choices[humanChoiceResult]
        } else {
            alert('Invalid choice. Please try again.')
        }
    }
}

console.log(humanChoice())