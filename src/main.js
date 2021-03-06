var newGame = new Game();

// query selectors
var allGameSpaces = document.querySelector("#gameBoard");
var mainHeading = document.querySelector("#mainHeading");

//event listeners

allGameSpaces.addEventListener("click", markSpace);

//on load or new game, display player win count in asides


function markSpace(event) {
  var gameSpace = event.target.id;
  var gameSpaceRender = document.querySelector(`#${gameSpace}`);
  newGame.takeTurn(gameSpace);
  render(gameSpaceRender);
  newGame.switchPlayer();
    //switchPlayer better in game.js???
}

function render(gameSpaceRender) {
  updatePlayerTurn();
  //boardRender(); instead of addToken(); (need to update whole board to match player tokens assigned to each position on newGame.gameboard[position] because the error now is it is just updating the rendered token even though the data model is correct
  addToken(gameSpaceRender);
  announceWinner();
}

function updatePlayerTurn() {
  mainHeading.innerText = `It's ${assignToken()}'s turn!`;
}

function addToken(gameSpaceRender) {
  gameSpaceRender.innerText = `${assignToken()}`
}

function announceWinner() {
  if (newGame.checkForWin()) {
    mainHeading.innerText = `Player ${assignToken()} wins!`;
  }
  //announce winner or announce draw
}

function assignToken() {
  //need to do this except instead of newGame.currentTurn, use newGame.gameBoard[position]
  if (newGame.playerOne.id === newGame.currentTurn) {
    var playerToken = newGame.playerOne.token;
  }
  if (newGame.playerTwo.id === newGame.currentTurn) {
    var playerToken = newGame.playerTwo.token;
  }
  return playerToken;
}
