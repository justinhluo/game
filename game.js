function getComputerChoice() {
    let rand = Math.random();
    if(rand <= 0.33) return "rock";
    else if(rand <= 0.66) return "paper";
    else return "scissors";
}

function getHumanChoice() {
   const rock = document.querySelector("#rock");
   const paper = document.querySelector("#paper");
   const scissors = document.querySelector("#scissors");
   rock.addEventListener('click', () => {
    
    playRound("rock",getComputerChoice());
   });
   paper.addEventListener('click', () => {
    playRound("paper",getComputerChoice());
   });
   scissors.addEventListener('click', () => {
    playRound("scissors",getComputerChoice());
   });
}

let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    const p = document.querySelector("#p");
    const div = document.querySelector("div");
    const pscore = document.querySelector("#ps");
    const cscore = document.querySelector("#cs");
    if (humanChoice == computerChoice) {
        p.textContent = (`Tie! You both played ${humanChoice}`);
        div.appendChild(p);
    }
    else if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            p.textContent = (`You lose! Paper beats rock.`);
            div.appendChild(p);
            ComputerScore++;
            // cscore.textContent = (`computer score: ${ComputerScore}`);
            // div.insertBefore(cscore, p);
            
        } else{
            p.textContent = (`You win! rock beats scissors.`);
            div.appendChild(p);
            humanScore++;
            // pscore.textContent = (`player score: ${humanScore}`);
            // div.insertBefore(pscore, cscore);            
        }
    }else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            p.textContent = (`You lose! Scissors beats paper.`);
            div.appendChild(p);
            ComputerScore++;
        } else{
            p.textContent = (`You Win! Paper beats rock.`);
            div.appendChild(p);
            humanScore++;            
        }        
    }else if(humanChoice == "scissors"){
        if(computerChoice == "rock") {
            p.textContent = (`You lose! Rock beats scissors.`);
            div.appendChild(p);
            ComputerScore++;
        } else{
            p.textContent = (`You win! Scissors beats paper.`);
            div.appendChild(p);
            humanScore++;
        }        
    }
    cscore.textContent = (`computer score: ${ComputerScore}`);
    div.insertBefore(cscore, p);
    pscore.textContent = (`player score: ${humanScore}`);
    div.insertBefore(pscore, cscore); 
    if(humanScore == 5) {
        setTimeout(() => {
            if(!alert('YOU WIN!')){window.location.reload();}
        }, 100);
        
        
        
    }
    if(ComputerScore == 5){
         setTimeout(() => {
            if(!alert('YOU LOSE!')){window.location.reload();}
        }, 100);
    } 

}

getHumanChoice();





