var score = document.getElementById('score');
var roundAnnounce = document.querySelector('#roundAnnounce');
var matchResult = document.querySelector('#rps');

    
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;

let rpsValues = {rock: 0, paper: 1, scissors:2};


function computerPlay() {
    //Give the computer's random selection as an rpsValue
  let computerValue = Math.floor(Math.random() * Math.floor(3));
  return computerValue;
}




function playerPlay(playerSelection) {
  //convert player selection into corresponding rpsValue
  return rpsValues[playerSelection]
}




function playRound(playerSelection, computerSelection) {
  //determine the score and return an apropirate annouce & player score & computer score
  //takes rpsValue input corresponding to the selected object (rock=0, paper=1, scissors=2)

  //determine who win the round
  let roundValue = (3 + playerSelection - computerSelection) % 3;
  let valuesRps = { 0: 'rock', 1: 'paper', 2: 'scissors' };
  let result;

  let computerPoint = 0;
  let playerPoint = 0;

  switch (roundValue) {
    case 0:
      roundAnnounce.textContent = "Equality: you both chose " + valuesRps[playerSelection];
      break;
    case 1:
      roundAnnounce.textContent = "You win !: " + valuesRps[playerSelection] + " beats " + valuesRps[computerSelection];
      playerPoint++;
      break;
    case 2:
      roundAnnounce.textContent = "You Loose :-(: " + valuesRps[computerSelection] + " beats " + valuesRps[playerSelection];
      computerPoint++;
      break;
  }
  return [result, playerPoint, computerPoint];

}
    
    
    
    
function match(roundNumber, playerScore, computerScore) {
  //Anounce the winner after 5 rounds
  if (roundNumber >= 5) {
    if (playerScore > computerScore) {
      matchResult.textContent = "YOU WIN!!!!";
    } else if (playerScore == computerScore) {
      matchResult.textContent = "NO WINNERS";
    } else {
      matchResult.textContent = " You loose :-(, try again.";
    }
  } else {
  }
}




function reset() {
  //Reset initial parameters
  playerScore = 0;
  computerScore = 0;
  roundNumber = 1;
}




function play() {
  //Record the score, count rounds, display score
  let roundResult = playRound(playerPlay(playerSelection), computerPlay());
  
  playerScore += roundResult[1];
  computerScore += roundResult[2];
  score.textContent = "PLAYER: " + playerScore + " /// COMPUTER: " + computerScore;
  roundNumber += 1;
}

const image = document.querySelectorAll('img.choice');
image.forEach((img) => {
  img.addEventListener('click', () => {playerSelection = img.id});
  img.addEventListener('click', play)
});

