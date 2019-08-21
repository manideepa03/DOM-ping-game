/*
GAME RULES:
*/
var scores, roundScore, activePlayer;
init();
//dice = Math.floor(Math.random()*6)+1;
//console.log(dice);
//document.querySelector('#current-0').textContent = dice;
//document.querySelector('#current-1').textContent = dice;
//document.querySelector('#current-'+activePlayer).textContent = dice;
//document.querySelector('#current-'+activePlayer).innerHTML = '<em>' + dice + '</em>';

document.querySelector('.btn-roll').addEventListener('click', function(){

    // 1. Random number
    var dice = Math.floor(Math.random()*6)+1;
    //2. Random number image should be displayed
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-'+ dice + '.png';
    // 3. Check if the random number is 1, current player score is score and player 2 playes

    if (dice > 1) {
      // Add scores
      roundScore += dice;
      document.querySelector('#current-'+activePlayer).textContent = roundScore;
    } else {
      // Make current score = 0
      nextPlayer();
    }
});

document.querySelector('.btn-hold').addEventListener('click', function(){
    // add current score to the global scores
    scores[activePlayer] += roundScore;
    document.querySelector('#score-'+activePlayer).textContent = scores[activePlayer];
    // update the UI

    // check if the player is won
    if(scores[activePlayer] >= 20){
        document.querySelector('#name-'+activePlayer).textContent = 'Winner !!!';
        document.querySelector('.dice').style.display = 'none'
        document.querySelector('.player-'+ activePlayer+ '-panel').classList.add('winner');
        document.querySelector('.player-'+ activePlayer+ '-panel').classList.remove('active');

    } else {
        nextPlayer();
    }

})


function nextPlayer(){
  activePlayer === 0 ? activePlayer = 1: activePlayer =0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  //document.querySelector('.player-0-panel').classList.remove('active');
  //document.querySelector('.player-1-panel').classList.add('active');
  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector('.dice').style.display = 'none'
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0,0];
  roundScore = 0;
  activePlayer = 0;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}
