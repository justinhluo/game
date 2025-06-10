function getComputerChoice() {
    let rand = Math.random();
    if(rand <= 0.33) return "rock";
    else if(rand <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
    let input = prompt("enter rock/paper/scissors", "paper").toLowerCase();
   return input;
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
        console.log(`Tie! You both played ${humanChoice}`);
        //return;
    }
    else if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            console.log(`You lose! Paper beats rock.`);
            ComputerScore++;
            //return;
        } else{
            console.log(`You win! Rock beats scissors`);
            humanScore++;
            //return;
        }
    }else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            console.log(`You lose! Scissors beats paper.`);
            ComputerScore++;
            //return;
        } else{
            console.log(`You win! Paper beats rock`);
            humanScore++;
            //return;
        }        
    }else if(humanChoice == "scissors"){
        if(computerChoice == "rock") {
            console.log(`You lose! Rock beats scissors.`);
            ComputerScore++;
            //return;
        } else{
            console.log(`You win! scissors beats paper`);
            humanScore++;
            //return;
        }        
    }else {
        console.log(`unrecognized input`);
        //return;
    }
}



function playGame () {
    let i = 0;
    while (i < 5) {
        playRound(getHumanChoice(), getComputerChoice());
        i++;
    }
    

    console.log(`Final Score: Player - ${humanScore}, Computer - ${ComputerScore}`);
}

playGame();