
// A function that gates random number
function getRndInteger(min=0, max=2) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }


  let game = ['rock','paper','scissor']

//   A function to get computers choice

  function getComputer(){
    let x = getRndInteger()

    let cChoice = game[x].toLowerCase()

    return cChoice
  }

//   A function to get users choice

function getUser(){
    let input = prompt('Enter your choice:-  ')
    return input
}

// Afunction to play one game

function playGame(uS,cS){
    if(uS === cS){
        alert('Tie')
    }else if (uS === 'rock' && cS === 'scissor'){
        hs++;
        alert("Rock beats scissor");
    }else if (uS === 'paper' && cS === 'rock'){
        hs++;
        alert('Paper beats Rock')
    }else if (uS === 'scissor' && cS === 'paper'){
        hs++;
        alert('scissor beats paper')
    }else{
        ms ++;
        alert(`${cS} beats ${uS}`)
    }
    
}

let uS =0;
let cS =0;
let hs =0;
let ms =0;

// function to play 5 games

function playGround(){
    for(let i =0;i<5;i++){
        uS = getUser();
        cS = getComputer();
        console.log(cS);

        playGame(uS,cS);

        alert(`Your score is ${hs}`)
        alert(`Computers score is ${ms}`)

    }
}

playGround();