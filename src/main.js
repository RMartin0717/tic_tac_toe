var newGame = new Game();


// query selectors
var topLeft = document.querySelector("#top-left");
var topmiddle = document.querySelector("#top-middle");
var topRight = document.querySelector("#top-right");
var centerLeft = document.querySelector("#center-left");
var centerMiddle = document.querySelector("#center-middle");
var centerRight = document.querySelector("#center-right");
var bottomLeft = document.querySelector("#bottom-left");
var bottomMiddle = document.querySelector("#bottom-middle");
var bottomRight = document.querySelector("#bottom-right");


// add event listeners

topLeft.addEventListener("click", markSpace("topLeft"));

// functions
function markSpace(position) {
  newGame.takeTurn(position);

}
