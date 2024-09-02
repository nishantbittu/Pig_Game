const rollbtn = document.querySelector('.rollbtn');
const diceEl = document.querySelector('.diceImg');
let playing = true;
let player1 = document.querySelector('.player1Box');
let player2 = document.querySelector('.player1Box');
// activePlayer.style.backgroundColor ="green"; 
const player2box = document.querySelector('.player2Box');
let changePlayer = document.querySelector('.changecolor');

const player1Score = document.querySelector('.pl1Score');
const player2Score = document.querySelector('.pl2Score');
let player1CurrentScore = 0;
let player2CurrentScore = 0;
let holdScore = [0,0];
let player = [player1Score, player2Score];

rollbtn.addEventListener('click', function () {
    if(holdScore[0] <=50 && holdScore[1] <= 50){
        
    let dice = Math.trunc(Math.random() * 6) + 1;
    diceEl.src = `dice-${dice}.png`;
    if (dice === 1) {
        let temp = player[0];
        player[0] = player[1];
        player[1] = temp;
        player1CurrentScore = 0;
        player2CurrentScore = 0;
        player1Score.textContent = player1CurrentScore;
        player2Score.textContent = player2CurrentScore;
        changePlayer.classList.toggle('changecolor');
        player2box.classList.toggle('changecolor');
        
    }
    if (player[0] == player1Score) {
        if (dice != 1) {
            player1CurrentScore += dice;
            player1Score.textContent = player1CurrentScore;
        }

    }
    if (player[0] == player2Score) {
        if (dice != 1) {
            player2CurrentScore += dice;
            player2Score.textContent = player2CurrentScore;
        }
    }
    }   
    
    
})
let pl1ScoreHold = document.querySelector('.pl1ScoreHold')
let pl2ScoreHold = document.querySelector('.pl2ScoreHold')
const holdBtn = document.querySelector('.holdbtn');


holdBtn.addEventListener('click', function () {
    

    if(holdScore[0] <=50 && holdScore[1] <= 50){

    
   
    if (player[0] == player1Score) {
        holdScore[0]=holdScore[0]+player1CurrentScore;
        pl1ScoreHold.textContent = holdScore[0];
        player1CurrentScore = 0;
        player1Score.textContent = player1CurrentScore;
    }

    if (player[0] == player2Score) {
        holdScore[1]=holdScore[1]+player2CurrentScore;
        pl2ScoreHold.textContent = holdScore[1];
        player2CurrentScore = 0;
        player2Score.textContent = player2CurrentScore;
    }
   
    let temp = player[0];
    player[0] = player[1];
    player[1] = temp;
    changePlayer.classList.toggle('changecolor');
        player2box.classList.toggle('changecolor');
    }else{
        console.log("Player Win the Match");
    }
});


console.log(player[0],player[1]);
const newGameBtn = document.querySelector('.newGame');
newGameBtn.addEventListener('click',function(){
    if(player[0]==player2Score){
        changePlayer.classList.toggle('changecolor');
        player2box.classList.toggle('changecolor');
    }
    holdScore=[0,0];
    pl1ScoreHold.textContent = holdScore[0];
    pl2ScoreHold.textContent = holdScore[1];
    player1CurrentScore = 0;
    player2CurrentScore = 0;
    player1Score.textContent = player1CurrentScore;
    player2Score.textContent = player2CurrentScore;
    player = [player1Score, player2Score];
    
});