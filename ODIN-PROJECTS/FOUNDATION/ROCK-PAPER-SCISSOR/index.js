
function getComputerChoice(){
    const choice = ['R','P','S']
    let randomNum = Math.floor(Math.random()*3)

    let comChoi = choice[randomNum]

    return comChoi
}


function getHumanChoice(){
    let userChoice = prompt('Enter your choice(R/P/S): ')
    userChoice.toUpperCase();

    return userChoice;
}
function playGround(){
    let userScore = 0;
    let computerScore = 0;

    
    
    for(let i = 0;i<=5;i++){
        let user = getHumanChoice();
        let computer = getComputerChoice();
        

        if(user == computer){
            console.log('Tie')
        }else if(user == 'R' && computer == 'S'){
            userScore +=1;
            console.log('User wins')
            console.log(`user = ${userScore}  computer = ${computerScore}`)
        }else if(user == 'P' && computer == 'R'){
            userScore +=1;
            console.log('User wins')
            console.log(`user = ${userScore}  computer = ${computerScore}`)
        }else if (user == 'S' && computer == 'R'){
            userScore +=1;
            console.log('User wins')
            console.log(`user = ${userScore}  computer = ${computerScore}`)
        }else{
            computerScore +=1
            console.log('computer wins')
            console.log(`user = ${userScore}  computer = ${computerScore}`)
        }

    }

    console.log('FINAL SCORE')
    console.log(`user = ${userScore}  computer = ${computerScore}`)

    if (userScore > computerScore){
        console.log('USER WINS')
    }else{
        console.log('COMPUTER WINS')
    }
}

playGround()
