



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'

// make a randon number between 1-3 (1 return ROCK 2 return PAPER -else return SCISSORS)
function computerChoice() {

let computerPlay = Math.ceil(Math.random() * 3);

if (computerPlay == 1){
    return "rock";
} else if (){
    if (computerPlay == 2)
        return "paper";
} else {
    return "scissors"
}

};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

decide who wins - if me == opponent
if me is paper

 */
// if me == opponent

if(me == opponent){
    winner = "Tie!";
}else if(me == "paper"){
    // If me is paper and opp is rock, I win
    if(opponent == "rock"){
        winner = "I win!"
    }else{
        winner = "Computer Wins!"
    }
}else if(me == "rock"){
    // If me is paper and opp is rock, I win
    if(opponent == "paper"){
        winner = "Computer Wins!"
    }else{
        winner = "I win!"
    }
}else{
    // Assume I picked scissors
    if(opponent == "rock"){
        winner = "Computer Wins!"
    }else{
        winner = "I win!"
    }
}

document.addEventListener("DOMContentLoaded", function(){

    // display winner

function

    //display what computer chose

document.getElementById('computerSelection').innerText = opponent;

    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

    document.querySelector('#scissors').addEventListener('click',function(e){
    e.preventDefault();
    compare ("scissors",computerChoice())
    });

});
