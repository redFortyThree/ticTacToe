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









let humanScore = 0;
let computerScore = 0;



/**human choice is tested against computer choice in the round 
 * I need the restart the function in case of a tie..
 * but not sure how ATM
*/
function playRound(humanChoice,computerChoice) {
   
    console.log("CPU choice is " +computerChoice);
    console.log("Player choice is " +humanChoice);
    
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice == "rock" && computerChoice == "scissors"){
        return "HUMAN WON" && humanScore ++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "HUMAN WON" && humanScore ++;
    } else if (humanChoice == "scissors" && computerChoice == "paper"){
        return "HUMAN WON" && humanScore ++;
    } else {
        return "computer won :(" && computerScore ++;
    }

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
})
scissorsButton.addEventListener("click", () => {
    playRound('scissors', getComputerChoice());
    console.log("cpu score is " + computerScore);
    console.log("Player score is " +humanScore);
})

/**setting up 10 variables with different names 
 * so they get called again with new values */
/*
const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();
const humanSelection2 = getPlayerChoice();
const computerSelection2 = getComputerChoice();
const humanSelection3 = getPlayerChoice();
const computerSelection3 = getComputerChoice();
const humanSelection4 = getPlayerChoice();
const computerSelection4 = getComputerChoice();
const humanSelection5 = getPlayerChoice();
const computerSelection5 = getComputerChoice();
const humanSelection6 = getPlayerChoice();
const computerSelection6 = getComputerChoice();
const humanSelection7 = getPlayerChoice();
const computerSelection7 = getComputerChoice();
const humanSelection8 = getPlayerChoice();
const computerSelection8 = getComputerChoice();
const humanSelection9 = getPlayerChoice();
const computerSelection9 = getComputerChoice();
const humanSelection10 = getPlayerChoice();
const computerSelection10 = getComputerChoice();

calling the rounds. Trouble is with instances of a tie..
 * I could safely just make say, 10 variables and 
 * in all likely hood, there wouldn't be instances of 5 ties. 
 */
/*

console.log(playRound(humanSelection,computerSelection));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
console.log(playRound(humanSelection2,computerSelection2));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
console.log(playRound(humanSelection3,computerSelection3));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
console.log(playRound(humanSelection4,computerSelection4));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {

console.log(playRound(humanSelection5,computerSelection5));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
    }
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {

console.log(playRound(humanSelection6,computerSelection6));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
    }
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {

console.log(playRound(humanSelection7,computerSelection7));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
    }
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {
    }
console.log(playRound(humanSelection8,computerSelection8));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {
console.log(playRound(humanSelection9,computerSelection9));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
    }
if (humanScore === 3) {
      return console.log("Player won!"); 
    } else if (computerScore === 3) {
        return console.log("computer won");
    } else {
    }
console.log(playRound(humanSelection10,computerSelection10));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
}
/**getting the tally of best three out of 5.  */










