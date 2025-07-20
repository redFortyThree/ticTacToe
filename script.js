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
        return "sissors";
    }
}



/** ask the user to type in their choice between rock paper and sissors*/
function getPlayerChoice() {
   return prompt('','enter rock, paper, or sissors');
}






function playGame() {

let humanScore = 0;
let computerScore = 0;


function playRound(humanChoice,computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);
    if (humanChoice === computerChoice) {
        return "tie";
    } else if (humanChoice == "rock" && computerChoice == "sissors"){
        return "HUMAN WON" && humanScore ++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        return "HUMAN WON" && humanScore ++;
    } else if (humanChoice == "sissors" && computerChoice == "paper"){
        return "HUMAN WON" && humanScore ++;
    } else {
        return "computer won :(" && computerScore ++;
    }
    }

const humanSelection = getPlayerChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection,computerSelection));
console.log("player score: " + humanScore);
console.log("computer score is " + computerScore);
}



playGame();


