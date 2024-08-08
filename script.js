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

let humanScore = 0;
let computerScore = 0;

let humanSelection = getComputerChoice();
let computerSelection = getComputerChoice();

function playRound(humanChoice, computerChoice = 'rock' || 'paper' || scissors) {

    

    if(humanChoice == computerChoice && computerChoice == 'rock') {
     console.log("That's a tie!") && humanScore++ && computerScore++;
    } else if(humanChoice == computerChoice && computerChoice == 'paper') {
        console.log("That's a tie!") && humanScore++ && computerScore++;
    } else if(humanChoice == computerChoice && computerChoice == 'scissors') {
     console.log("That's a tie!") && humanScore++ && computerScore++;

        
    } else if(humanChoice == 'rock' && computerChoice == 'scissors') {
        console.log("You win! Rock beats Scissors") && humanScore++;
    } else if(humanChoice == 'paper' && computerChoice == 'rock') {
     console.log("You win! Paper beats Rock") && humanScore++;
    }  else if(humanChoice == 'scissors' && computerChoice == 'paper') {
     console.log("You win! Scissors beats Paper") && humanScore++;
    } 
    
    else if(humanChoice == 'scissors' && computerChoice == 'rock') {
     console.log("You lose! Rock beats Scissors") && computerScore++;
    } else if(humanChoice == 'rock' && computerChoice == 'paper') {
     console.log("You win! Paper beats Rock") && computerScore++;
    }  else if(humanChoice == 'paper' && computerChoice == 'scissors') {
     console.log("You win! Scissors beats Paper") && computerScore++;
    }  
    
    return humanChoice && computerChoice;
   
    
} 





