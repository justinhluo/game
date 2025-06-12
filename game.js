function getComputerChoice() {
    let rand = Math.random();
    if(rand <= 0.33) return "rock";
    else if(rand <= 0.66) return "paper";
    else return "scissors";
}


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


let humanScore = 0;
let ComputerScore = 0;

function playRound(humanChoice, computerChoice) {
    const p = document.querySelector("#p");
    const div = document.querySelector(".body");
    const pscore = document.querySelector("#ps");
    const cscore = document.querySelector("#cs");
    if (humanChoice == computerChoice) {
        p.textContent = (`Tie! You both played ${humanChoice}`);
        div.insertBefore(p ,cs);
    }
    else if(humanChoice == "rock") {
        if(computerChoice == "paper") {
            p.textContent = (`You lose! Paper beats rock.`);
            div.insertBefore(p, cs);
            ComputerScore++;           
        } else{
            p.textContent = (`You win! rock beats scissors.`);
            div.insertBefore(p, cs);
            humanScore++;        
        }
    }else if(humanChoice == "paper") {
        if(computerChoice == "scissors") {
            p.textContent = (`You lose! Scissors beats paper.`);
            div.insertBefore(p, cs);
            ComputerScore++;
        } else{
            p.textContent = (`You Win! Paper beats rock.`);
            div.insertBefore(p, cs);
            humanScore++;            
        }        
    }else if(humanChoice == "scissors"){
        if(computerChoice == "rock") {
            p.textContent = (`You lose! Rock beats scissors.`);
            div.insertBefore(p, cs);
            ComputerScore++;
        } else{
            p.textContent = (`You win! Scissors beats paper.`);
            div.insertBefore(p, cs);
            humanScore++;
        }        
    }
    cscore.textContent = (`computer score: ${ComputerScore}`);
    div.appendChild(cscore);
    pscore.textContent = (`player score: ${humanScore}`);
    div.insertBefore(pscore, p); 
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







