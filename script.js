function getComputerChoice() {
    let computerResponse;
    let choices = ["Rock", "Paper", "Scissors"];
    computerResponse = choices[Math.floor(choices.length * Math.random())];
    return computerResponse;
}

