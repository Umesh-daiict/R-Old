'use strict';

let guess,random,score,highScore;
score=Number(document.querySelector('.score').textContent);
highScore=Number(document.querySelector('.highscore').textContent);

const displayScore = score => {
    document.querySelector('.score').textContent =score;
}
document.querySelector('.message').textContent= 'Start the Game!!';
random=Math.trunc(Math.random()*20+1);
document.querySelector('.check').addEventListener('click',
    playGame )
document.querySelector('.again').addEventListener('click',playAgain)

function playGame(){
    
    guess = +document.querySelector('.guess').value;
    document.querySelector('.message').style.color= 'white';
    if(score<=1){
        document.querySelector('.message').textContent = 'You lost the game';
        score--;
        // document.querySelector('.score').textContent = score;
        displayScore(score);
        return;
    }
    if(!guess){
        document.querySelector('.message').textContent= 'No Number!!';
        document.querySelector('.message').style.color= 'red';
        return;
    } else if(guess !== random){
        document.querySelector('.message').textContent= guess > random ? 'you guessed high ....!!' : 'you guessed low .....!!';
        score--;
        displayScore(score);
        //document.querySelector('.score').textContent = score;
    }else{
        document.querySelector('.message').textContent= 'You Win THe Game !!';
        score++;
        // document.querySelector('.score').textContent = score;
        displayScore(score);
        document.querySelector('body').style.backgroundColor= '#60b347';  //'green';
        document.querySelector('.number').textContent=random;
        if(score >highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
            document.querySelector('.highscore').style.color='red';
        }
        return;
    }
}

function playAgain(){
   random=Math.trunc(Math.random()*20+1); 
   document.querySelector('.number').textContent='?';
   score=20;
   document.querySelector('.guess').value='';
//    document.querySelector('.score').textContent=score;
    displayScore(score);
    document.querySelector('.message').textContent= 'Lets play again  !!';
   document.querySelector('.highscore').style.color='white';
   document.querySelector('body').style.backgroundColor= '#222';
      
}