let score = document.getElementById('score');
let roundAnnounce = document.querySelector('#roundAnnounce');
let matchResult = document.querySelector('.rps');

//save the content of the <div class="rps"></div>
let rpsImages = matchResult.innerHTML;


var playerScore = 0;
var computerScore = 0;
var roundNumber = 1;

score.textContent = "PLAYER: " + playerScore + " ||| COMPUTER: " + computerScore;

rpsValues = {rock: 0, paper: 1, scissors:2};
valuesRps = { 0: 'rock', 1: 'paper', 2: 'scissors' };



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

  let computerPoint = 0;
  let playerPoint = 0;

  switch (roundValue) {
    case 0:
      roundAnnounce.textContent = "Tie: you both chose " + valuesRps[playerSelection];
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
  return [playerPoint, computerPoint];

}
    
    
    
    
function reset() {
  //Reset the rps div
  matchResult.innerHTML = rpsImages;
  var image = document.querySelectorAll('img.choice');
  image.forEach((img) => {
    img.addEventListener('click', () => {playerSelection = img.id});
    img.addEventListener('click', play)
  });
  //reset the scores and round
  roundNumber = 1;
  playerScore = 0;
  computerScore = 0;
  score.textContent = "PLAYER: " + playerScore + " ||| COMPUTER: " + computerScore;
}




function displayMatchResult(matchMsg) {
  //Anounce the winner after 5 rounds
  matchResult.innerHTML = "<p id = matchResult>" + matchMsg + "</p>" + "<br> <button class = 'button play' id = 'replay'>replay</button>";
  roundAnnounce.textContent = "";
  var replay = document.querySelector('#replay');
  replay.addEventListener('click', reset);
}




function play() {
  //Record the score, count rounds, display score
    
  if (roundNumber > 5) {

    if (playerScore > computerScore) {
      let matchMsg = "YOU WIN !";
      displayMatchResult(matchMsg);
    } else if (playerScore == computerScore) {
      let matchMsg = "TIE";
      displayMatchResult(matchMsg);
    } else {
      let matchMsg = " YOU LOOSE";
      displayMatchResult(matchMsg);
    }

  } else {
    let roundResult = playRound(playerPlay(playerSelection), computerPlay());
    playerScore += roundResult[0];
    computerScore += roundResult[1];
    score.textContent = "PLAYER: " + playerScore + " ||| COMPUTER: " + computerScore;
    roundNumber += 1;
  }
}

var image = document.querySelectorAll('img.choice');
image.forEach((img) => {
  img.addEventListener('click', () => {playerSelection = img.id});
  img.addEventListener('click', play)
});

