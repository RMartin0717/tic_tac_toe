var newGame = new Game();

// query selectors
var allGameSpaces = document.querySelector(".game-board");

// add event listeners

allGameSpaces.addEventListener("click", markSpace);

function markSpace(event) {
  var gameSpace = event.target.id;
  newGame.takeTurn(gameSpace);
}
