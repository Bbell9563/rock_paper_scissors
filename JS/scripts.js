
var gamePlayed = 0
var gameWon = 0
var gameTied = 0

// array of rock, paper, and scissor for computer choice
var choices = ["rock", "paper", "scissors"]
var choice = ""
// chooses randomly out of array
function dealerDraws(){
  choice = choices[Math.floor(Math.random() * choices.length)]; 
}

//changing Computer Img
function changeRock(){
  document.getElementById('computerPicture').src = "../Images/rock.jpg";
      document.getElementById('computerPicture').style.width = "516px"
}
function changePaper(){
  document.getElementById('computerPicture').src = "../Images/paper.jpg";
      document.getElementById('computerPicture').style.width = "516px"
}
function changeScissor(){
  document.getElementById('computerPicture').src = "../Images/scissors.jpg";
      document.getElementById('computerPicture').style.width = "516px"
}

function changeComputerImg (){
  if(choice == "rock"){changeRock()}
  else if(choice == "paper"){changePaper()}
  else {changeScissor()}
}

function listReplayMenu(){
  document.getElementById("restart").style.display = 'block';
}



// Give player a choice between rock/paper/or scissor
var paperbtn = document.getElementById('chosePaper')
var rockbtn = document.getElementById('choseRock')
var scissorbtn = document.getElementById('choseScissors')

//Player Selected Rock
rockbtn.addEventListener("click", clickRock);
function clickRock() {
  document.getElementById("choice").style.display = "none";
  document.getElementById('playerPicture').src = "../Images/rock.jpg";
  document.getElementById('playerPicture').style.width = "516px";
  dealerDraws();
  compareOption("rock")
};

//Player Selected Paper
paperbtn.addEventListener("click", clickPaper);
function clickPaper() {
  document.getElementById("choice").style.display = "none";
  document.getElementById('playerPicture').src = "../Images/paper.jpg";
  document.getElementById('playerPicture').style.width = "516px";
  dealerDraws();
  compareOption("paper")
};

//Player Selected Scissor
scissorbtn.addEventListener("click", clickScissor);
function clickScissor() {
  document.getElementById("choice").style.display = "none";
  document.getElementById('playerPicture').src = "../Images/scissors.jpg";
  document.getElementById('playerPicture').style.width = "516px";
  dealerDraws();
  compareOption("scissors")
};



//function to determine who wins
function compareOption(playerOption){
  changeComputerImg()
  if(playerOption == "rock"){
    if(choice == "rock"){ 
      tied()
      gameTied += 1
      gamePlayed += 1
      listScores()
    }
    else if (choice == "paper"){
      gamePlayed += 1
      computerWin()
      listScores()
    }
    else {
      gamePlayed += 1
      gameWon += 1
      playerWin()
      listScores()
    }}

  else if(playerOption == "paper"){
    if(choice == "rock"){
      gamePlayed += 1
      gameWon += 1
      playerWin()
      listScores()
    }
    else if (choice == "paper"){
      tied()
      gamePlayed += 1
      gameTied += 1
      listScores()
    }
    else {
      gamePlayed += 1
      computerWin()
      listScores()
    }}

  else {
    if(choice == "rock"){
      gamePlayed += 1
      computerWin()
      listScores()
    }
    else if (choice == "paper"){
      gameWon += 1
      gamePlayed += 1
      playerWin()
      listScores()
    }
    else { 
      tied()
      gamePlayed += 1
      gameTied += 1
      listScores()
    }}
}

//Different Result messages
function playerWin(){
  document.getElementById("playerWon").style.display = "block";
  document.getElementById("computerLost").style.display = "block"
  listReplayMenu()
}

function computerWin(){
  document.getElementById("playerLost").style.display = "block";
  document.getElementById("computerWon").style.display = "block";
  listReplayMenu()
}

function tied(){
  document.getElementById("gameTied").style.display = "block";
  document.getElementById("gameTied1").style.display = "block";
  listReplayMenu()

}

function listScores(){
  document.getElementById("gamesWon").innerHTML = `Games Won = ${gameWon}`;
  document.getElementById("gamesPlayed").innerHTML = `Games Played = ${gamePlayed}`;
  document.getElementById("gamesTied").innerHTML = `Games Tied = ${gameTied}`;
}


//Play again button that appears with the Result Message
var playbtn = document.getElementById('playAgain')

playbtn.addEventListener("click", clickPlay);
function clickPlay() {
  document.getElementById("restart").style.display = "none";
  document.getElementById("choice").style.display = "block";
  document.getElementById('playerPicture').src = "../Images/unnamed.png";
  document.getElementById('computerPicture').src = "../Images/unnamed.png";
  clearMessages()
  dealerDraws()
}


function clearMessages(){
  document.getElementById("computerLost").style.display = "none";
  document.getElementById("playerWon").style.display = "none";
  document.getElementById("computerWon").style.display = "none";
  document.getElementById("playerLost").style.display = "none";
  document.getElementById("gameTied").style.display = "none";
  document.getElementById("gameTied1").style.display = "none";
}

var resetbtn = document.getElementById('resetButton')

resetbtn.addEventListener("click", clickReset);
function clickReset() {
gamePlayed = 0
gameWon = 0
gameTied = 0
listScores()
clickPlay()
}



