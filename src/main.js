var newGame = new Game();

// query selectors
var allGameSpaces = document.querySelector("#gameBoard");
var mainHeading = document.querySelector("#mainHeading");

//event listeners

allGameSpaces.addEventListener("click", markSpace);

//on load or new game, display player win count in asides


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
  updateGameHeader(token);
  boardRender();
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
