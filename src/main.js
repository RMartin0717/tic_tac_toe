var newGame = new Game();

// query selectors
var allGameSpaces = document.querySelector(".game-board");

// add event listeners

allGameSpaces.addEventListener("click", markSpace);

//on load or new game, display player win count in asides


function markSpace(event) {
  var gameSpace = event.target.id;
  newGame.takeTurn(gameSpace);
  // newGame.render();
}

// function render() {
//   //display X when newGame.gameBoard[property]  === html article id
//   //if there is a winner, update display to show this
//   //if there is a draw, display this
// }
