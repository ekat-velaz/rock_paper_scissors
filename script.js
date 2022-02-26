// create array rock paper scissors
// make computer randomly show rock paper or scissors
// create an input for user to choose rock paper or scissors
// create variable userSelect and computerSelect
// if computer put rock and user put rock show message (or paper and paper,or scissors and scissors) "Its a dead heat"
// if computer put rock and user put scissors show "You lost this round. Rock beats scissors"
// if computer put scissors and user rock show "You won this round. Rock beats scissors"
// if computer put scissors and user put paper show "You lost this round. Scissors beat paper"
// if computer put paper and user puts scissors show "You won this round. Scissors beat paper"
// if computer put paper and user puts rock show "You lost this round. Paper beats rock."
// if computer put rock and user paper show "You won this round. Paper beats rock"

//let computerSelect = Math.floor(Math.random()*values.length);
//console.log(values[computerSelect]);
//values.random = function() {
//    return Math.floor(Math.random()*values.length)
//};
//console.log(values.random)

let computerSelection;

let playerSelection;
let playerSelection1;

let round;
let result;

function computerPlay(values) {
    return values[Math.floor(Math.random()*values.length)]  
};    

function playRound(computerSelection, playerSelection1) {
    playerSelection= prompt("Select rock, paper or scissors:", " ");
    playerSelection1= playerSelection.toLowerCase();
    computerSelection = computerPlay(values);
    console.log(playerSelection1);
    console.log(computerSelection);
    if (computerSelection === "Rock" & playerSelection1 === "scissors") {
        return result="You lost this round! Rock beats Scissors." } 
    else if (computerSelection === "Scissors" & playerSelection1 === "rock") {
        return result = "You won this round! Rock beats scissors." }
    else if (computerSelection === "Paper" & playerSelection1 === "rock") {
        return result = "You lost this round! Paper beats rock." }
    else if (computerSelection === "Rock" & playerSelection1 === "paper") {
        return result = "You won this round! Paper beats rock." }
    else if (computerSelection === "Paper" & playerSelection1 === "scissors") {
        return result = "You won this round! Scissors beat Paper." }
    else if (computerSelection === "Scissors" & playerSelection1 === "paper") {
        return result = "You lost this round! Scissors beat Paper" }
    else if ((computerSelection === "Rock" & playerSelection1 === "rock") || (computerSelection === "Paper" & playerSelection1 === "paper") || (computerSelection === "Scissors" & playerSelection1 === "scissors")) {
       return result = "Its a tie!" }  
    else { return result = "Please, put 'Rock', 'Paper' or 'Scissors'"} 
}

const values= ["Rock", "Paper", "Scissors"];

function game(playRound, round) {
    for (round = 0; round < 5; round++) {
        if (round === 5) {
            
            break;
        }
        else { playRound(computerSelection, playerSelection1); 
            console.log(result); 
        }   
} }
console.log(game(playRound,round));