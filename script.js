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
    
    console.log(oppNumber);

    if (oppNumber < 33) {
        return "rock";
    } else if (oppNumber < 66) {
        return "paper";
    } else {
        return "sissors";
    }
}

console.log(getComputerChoice());
