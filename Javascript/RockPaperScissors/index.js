
// A function that gates random number
function getRndInteger(min=0, max=2) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


// Function to get a random computers choice

function getComputer(){
    x= getRndInteger(0,2);
    arr = ['rock','paper','scissor'];

    comupterAnswer = arr[x];
    return comupterAnswer;
}

// a  function to accept and store users input
function getUser(){
    let input = prompt('Please enter Your choice from Rock, paper or scissor: ')
    return input
}

let humanScore = 0;
let computerScore = 0;

let cout = 0;

while(cout <=5){
    getComputer();
    getUser();

    if (getUser() == getComputer()){
        console.log('TIE')
    }else if (getUser() === 'rock')

}
