class Game {
  constructor(){
    this.currentTurn;

  }
  var playerOne = new Player("one", ❌, []);
  var playerTwo = new Player("two", ⭕️, []);
}



//Two Player instances
// A way to keep track of the data for the game board
  //an array in which each element has a grid position and can be reassigned value?
// A way to keep track of which player’s turn it currently is
  //change turn method that generates opposite boolean
// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
  //modify so that it counts wins--look at third Player parameter in both files
// A way to reset the Game’s board to begin a new game
  //a method that runs on load and is called at end of each game after a timeout
