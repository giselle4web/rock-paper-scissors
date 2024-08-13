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

function playRound(humanChoice = getComputerChoice(), computerChoice = getComputerChoice()) {

    

    if(humanChoice == computerChoice && computerChoice == 'Rock') {
     console.log("That's a tie!") && humanScore++ && computerScore++;
    } else if(humanChoice == computerChoice && computerChoice == 'Paper') {
        console.log("That's a tie!") && humanScore++ && computerScore++;
    } else if(humanChoice == computerChoice && computerChoice == 'Scissors') {
     console.log("That's a tie!") && humanScore++ && computerScore++;

        
    } else if(humanChoice == 'Rock' || 'rock' && computerChoice == 'Scissors') {
        console.log("You win! Rock beats Scissors") && humanScore++;
    } else if(humanChoice == 'Paper' || 'paper' && computerChoice == 'Rock') {
     console.log("You win! Paper beats Rock") && humanScore++;
    }  else if(humanChoice == 'Scissors' || 'scissors' && computerChoice == 'Paper') {
     console.log("You win! Scissors beats Paper") && humanScore++;
    } 
    
    else if(humanChoice == 'Scissors' || 'scissors' && computerChoice == 'Rock') {
     console.log("You lose! Rock beats Scissors") && computerScore++;
    } else if(humanChoice == 'Rock' || 'rock'&& computerChoice == 'Paper') {
     console.log("You lose! Paper beats Rock") && computerScore && humanScore++;
    }  else if(humanChoice == 'Paper' || 'paper' && computerChoice == 'Scissors') {
     console.log("You lose! Scissors beats Paper") && computerScore && humanScore++;
    }  
    
    return humanChoice && computerChoice;
   
    
} 


function playGame() {
    for (let round = 0; round <  5; round++) {
            console.log(playRound());
        }
        
}

  function logDirections() {
    console.log("Start the game! Open the console. Example: playRound('Rock')");
  }

  function log2() {
    console.log(playRound());
  }

  document.getElementById("btn-1").addEventListener("click", function() {
    logDirections();
    document.getElementById("directions").textContent = "Start the game! Use buttons or open the console to play. Example: playRound('Rock')"
  });

  document.getElementById("btn-2").addEventListener("click", function() {
    playRound('Rock');
    document.getElementById('score').append(`Score: ${humanScore++}, `)
    if(humanScore >= 6) {
      document.getElementById("score").textContent = "Winner!";
    }
  });
  

  document.getElementById("btn-3").addEventListener("click", function() {
    playRound('Paper');
    document.getElementById('score').append(`Score: ${humanScore++}, `)
    if(humanScore >= 6) {
      document.getElementById("score").textContent = "Winner!";
    }

  })

  document.getElementById("btn-4").addEventListener("click", function() {
    playRound('Scissors');
    document.getElementById('score').append(`Score: ${humanScore++}, `)
    if(humanScore >= 6) {
      document.getElementById("score").textContent = "Winner!";
    }
  })


  document.getElementById("btn-5").addEventListener("click", function() {
    document.getElementById("score").textContent = "";
    document.getElementById("directions").textContent = "";
    humanScore = 0;
  })

