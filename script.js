function getComputerChoice() {
    let computerResponse;
    let choices = ["Rock", "Paper", "Scissors"];
    computerResponse = choices[Math.floor(choices.length * Math.random())];
    return computerResponse;
}

function getHumanChoice() {
    let promptChoice = prompt('What is your choice for rock, paper, scissors?');
    console.log(promptChoice);
    return promptChoice;
}
