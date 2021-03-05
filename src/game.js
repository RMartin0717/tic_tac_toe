class Game {
  constructor(){
    //player instances can be stored in local storage even when new game is started
    this.playerOne = new Player("one", "❌", []);
    this.playerTwo = new Player("two", "⭕️", []);
    this.currentTurn = "one";
    this.gameBoard =
    {
      topLeft: null,
      topMiddle: null,
      topRight: null,
      centerLeft: null,
      centerMiddle: null,
      centerRight: null,
      bottomLeft: null,
      bottomMiddle: null,
      bottomRight: null,
    }
  }

  takeTurn(spaceSelected) {
    if (this.gameBoard[spaceSelected] === null) {
      this.gameBoard[spaceSelected] = this.currentTurn;
      this.switchPlayer();
    } else {
      return
    }
  }

  switchPlayer() {
    //consider using boolean instead and doing "one" and "two" logic in takeTurn method
    if (this.currentTurn === "one") {
      this.currentTurn = "two";
    } else {
      this.currentTurn = "one";
    }
  }

  checkForWin() {
    if (this.evaluateTopRow()) {
      return true;
    } else if (this.evaluateCenterRow()) {
      return true;
    } else if (this.evaluateBottomRow()) {
      return true;
    } else if (this.evaluateLeftColumn()) {
      return true;
    } else if (this.evaluateMiddleColumn()) {
      return true;
    } else if (this.evaluateRightColumn()) {
      return true;
    } else if (this.evaluateTopLeftDiagonal()) {
      return true;
    } else if (this.evaluateTopRightDiagonal()) {
      return true;
    }
  }

  evaluateTopRow() {
    if (
      this.gameBoard.topLeft === this.currentTurn &&
      this.gameBoard.topMiddle === this.currentTurn &&
      this.gameBoard.topRight === this.currentTurn) {
        return true;
    }
  }

  evaluateCenterRow() {
    if (
      this.gameBoard.centerLeft === this.currentTurn &&
      this.gameBoard.centerMiddle === this.currentTurn &&
      this.gameBoard.centerRight === this.currentTurn) {
        return true;
    }
  }

  evaluateBottomRow() {
    if (
      this.gameBoard.bottomLeft === this.currentTurn &&
      this.gameBoard.bottomMiddle === this.currentTurn &&
      this.gameBoard.bottomRight === this.currentTurn) {
        return true;
    }
  }

  evaluateLeftColumn() {
    if (
      this.gameBoard.topLeft === this.currentTurn &&
      this.gameBoard.centerLeft === this.currentTurn &&
      this.gameBoard.bottomLeft === this.currentTurn) {
        return true;
    }
  }

  evaluateMiddleColumn() {
    if (
      this.gameBoard.topMiddle === this.currentTurn &&
      this.gameBoard.centerMiddle === this.currentTurn &&
      this.gameBoard.bottomMiddle === this.currentTurn) {
        return true;
    }
  }

  evaluateRightColumn() {
    if (
      this.gameBoard.topRight === this.currentTurn &&
      this.gameBoard.centerRight === this.currentTurn &&
      this.gameBoard.bottomRight === this.currentTurn) {
        return true;
    }
  }

  evaluateTopLeftDiagonal() {
    if (
      this.gameBoard.topLeft === this.currentTurn &&
      this.gameBoard.centerMiddle === this.currentTurn &&
      this.gameBoard.bottomRight === this.currentTurn) {
        return true;
    }
  }

  evaluateTopRightDiagonal() {
    if (
      this.gameBoard.topRight === this.currentTurn &&
      this.gameBoard.centerMiddle === this.currentTurn &&
      this.gameBoard.bottomLeft === this.currentTurn) {
        return true;
    }
  }



}



//would be cute to evaluate by row/column/diagonal and include in the win message

// A way to check the Game’s board data for win conditions
// A way to detect when a game is a draw (no one has won)
// A way to save a winning Game’s board data to the correct player’s wins array
  //modify so that it counts wins--look at third Player parameter in both files
// A way to reset the Game’s board to begin a new game
  //a method that runs on load and is called at end of each game after a timeout
