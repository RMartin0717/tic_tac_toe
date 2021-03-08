/* *****Global Variable***** */
var newGame = new Game();

/* *****Query Selectors***** */
var allGameSpaces = document.querySelector("#gameBoard");
var mainHeading = document.querySelector("#mainHeading");
var playerOneWins = document.querySelector("#playerOneWins");
var playerTwoWins = document.querySelector("#playerTwoWins");

/* *****Event Listeners***** */
allGameSpaces.addEventListener("click", markSpace);
window.addEventListener("load", updatePlayerWins);

/* *****Functions***** */
function markSpace(event) {
  var gameSpace = event.target.id;
  var activeToken = newGame.takeTurn(gameSpace);
  render(activeToken);
  if (newGame.gameOver === true) {
    setTimeout((()=>{
      newGame.resetBoard();
      boardRender();
    }), 3000);
  }
}

function render(token) {
  boardRender();
  updateGameHeader(token);
  updatePlayerWins();
}

function boardRender() {
  topLeft.innerText = newGame.gameBoard.topLeft;
  topMiddle.innerText = newGame.gameBoard.topMiddle;
  topRight.innerText = newGame.gameBoard.topRight;
  centerLeft.innerText = newGame.gameBoard.centerLeft;
  centerMiddle.innerText = newGame.gameBoard.centerMiddle;
  centerRight.innerText = newGame.gameBoard.centerRight;
  bottomLeft.innerText = newGame.gameBoard.bottomLeft;
  bottomMiddle.innerText = newGame.gameBoard.bottomMiddle;
  bottomRight.innerText = newGame.gameBoard.bottomRight;
}

function updateGameHeader(token) {
  if (newGame.gameOver && !newGame.draw) {
    mainHeading.innerText = `Player ${token} wins!`;
  } else if (newGame.draw) {
    mainHeading.innerText = `It's a draw!`;
  } else {
    mainHeading.innerText = `It's ${token}'s turn!`;
  }
}

function updatePlayerWins() {
  playerOneWins.innerText = `${newGame.playerOne.retrieveWinsFromStorage()} Wins`;
  playerTwoWins.innerText = `${newGame.playerTwo.retrieveWinsFromStorage()} Wins`;
}
