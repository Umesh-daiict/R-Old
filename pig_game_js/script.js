'use strict';
let pScore=[0,0],cScore=[0,0],maxScore=100,activePlayer=0,currDice=-1;
//make winer classs and active useable
const player = document.querySelectorAll('.player');
// const player1 = document.querySelector('.player--1');
const btn = document.querySelectorAll('.btn');
const scoreBoard = document.querySelectorAll('.score');
const currScore= document.querySelectorAll('.current-score');
const dice=document.querySelector('.dice')

function setScoreBoard(bArray){
    for(let i=0;i<2;i++){
        scoreBoard[i].textContent=bArray[i];
    }

}

function setCurrentScore(b){
        currScore[activePlayer].textContent =b;
}
function switchPlayer(){
    
    cScore=[0,0];
    setCurrentScore(0);
    activePlayer=1-activePlayer;

    player[0].classList.toggle('player--active');
    player[1].classList.toggle('player--active');
}
 

const btnFuns=[
function SetNewGame(){
    // pScore1=0,pScore2=0,maxScore=100,activePlayer=0;
    pScore=[0,0];
    cScore=[0,0];
    setCurrentScore(0);
    if(player[activePlayer].classList.contains('player--winner') && activePlayer===1){
    switchPlayer();
    }
    if(player[0].classList.contains('player--winner') || player[0].classList.contains('player--winner') ){
        player[0].classList.remove('player--winner') ;
        player[1].classList.remove('player--winner');
    }
    console.log(activePlayer,'activeplayer');
    setScoreBoard(pScore);
    setCurrentScore(cScore[activePlayer]);
    activePlayer=0;
    setCurrentScore(cScore[activePlayer]);
    dice.style.display='none';
},
function RollDice(){
    dice.style.display='initial';
    const random=Math.trunc(Math.random()*6+1);
    dice.src=`dice-${random}.png`;
    if(random === 1){
        switchPlayer();
        console.log(activePlayer);
    }else{
        cScore[activePlayer]+=random;
        setCurrentScore(cScore[activePlayer]);
    }
},function holdHere(){
    pScore[activePlayer]+=cScore[activePlayer];
    setScoreBoard(pScore);
    if(pScore[activePlayer] >= 10){
        console.log(activePlayer);

        activePlayer === 0? player[0].classList.toggle('player--winner') :player[1].classList.toggle('player--winner');
        dice.style.display='none';
        cScore=[0,0];
        setCurrentScore(0);
    }
    switchPlayer();
    setCurrentScore(0)
}

]
btnFuns[0]();
for(let i=0;i<3;i++){
    btn[i].addEventListener('click',btnFuns[i]);
}