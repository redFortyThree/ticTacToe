console.log('HI');
/*GENERATE a random number 
determine if the number is less than 33,
if it is then pick rock. 
if the number is less than 66 
then return paper,
or else return sissors
*/


function getComputerChoice () {
   
    let oppNumber = Math.random() * 100;
    
    

    if (oppNumber < 33) {
        /** rock */
        return "rock";
    } else if /** paper */ (oppNumber < 66) {
        return "paper";
    } /** sissors */else {
        return "scissors";
    }
}



const rockButton = document.getElementById("rock");
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector("#scissors");
const resultsContainer= document.getElementById("results");







let humanScore = 0;
let computerScore = 0;



/**human choice is tested against computer choice in the round 
 * I need the restart the function in case of a tie..
 * but not sure how ATM
*/

function playRound(humanChoice,computerChoice) {
   resultsContainer.textContent="";
    const prntRsltCpu = document.createElement('p');
    const prntRsltP1 = document. createElement('p');
    
   
    const cpuChoice = document.createElement("h1");
    const p1Choice = document.createElement("h1");
    cpuChoice.textContent = "CPU chose " + computerChoice;
    p1Choice.textContent = "YOU chose " + humanChoice;
   
   resultsContainer.appendChild(p1Choice);
   resultsContainer.appendChild(cpuChoice);
   
   const roundResultHolder = document.createElement('h2');
   const gameOverCPU = "GAME OVER! YOU LOST";
   const gameOverP1 = "YOU BEAT THE GAME";
   const roundResultsCPU = "COMPUTER WINS THIS ROUND";
   const roundResultP1 = "PLAYER 1 WINS THIS ONE";
   const roundResultTie = "tie";

   if (humanScore == 5) {
        resultsContainer.textContent = "GAME OVER"
    } else if (computerScore == 5) {
        resultsContainer.textContent = "GAME OVER"
    } else if (humanChoice === computerChoice) {
        roundResultHolder.textContent = roundResultTie;
        
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
         (roundResultHolder.textContent = roundResultP1) && humanScore ++
        
    } else if (humanChoice == "paper" && computerChoice == "rock") {
         (roundResultHolder.textContent = roundResultP1) && humanScore ++ 
        
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
         (roundResultHolder.textContent = roundResultP1) && humanScore ++ 
        
    } else {
        (roundResultHolder.textContent = roundResultsCPU) && computerScore ++;
    }
    
    if (humanScore == 5) {
        resultsContainer.textContent = "GAME OVER"
    }
    if (computerScore == 5) {
        resultsContainer.textContent = "GAME OVER"
    }
    resultsContainer.appendChild(roundResultHolder);
    prntRsltCpu.textContent = "cpu score is " + computerScore;
    prntRsltP1.textContent = "player score is " + humanScore;
    resultsContainer.appendChild(prntRsltCpu);
    resultsContainer.appendChild(prntRsltP1);
;
}

console.log("Player score is " + humanScore);
console.log("Computer Score is " + computerScore);


rockButton.addEventListener("click", () =>{
   
    playRound('rock',getComputerChoice());
    
    console.log("cpu score is " + computerScore);
    console.log("Player score is " +humanScore);
   }

);
paperButton.addEventListener("click", () => {
   
    playRound('paper', getComputerChoice());
    
    console.log("cpu score is " + computerScore);
    console.log("Player score is " +humanScore);
}
)

scissorsButton.addEventListener("click", () => {
    
    playRound('scissors', getComputerChoice());
    
    console.log("cpu score is " + computerScore);
    console.log("Player score is " +humanScore);
    }
)

// below this line was the old way.. "setting up 10 rounds"










