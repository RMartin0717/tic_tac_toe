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
      this.assignToken(spaceSelected);
      this.checkForWin();
      this.endGame();
      this.checkForDraw();
      this.switchPlayer();
    } else {
      return
    }
  }

  assignToken(spaceSelected) {
      this.gameBoard[spaceSelected] = this.currentTurn;
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
    } else {
      return false;
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

  checkForDraw() {
    if (
      this.gameBoard.topLeft != null &&
      this.gameBoard.topMiddle != null &&
      this.gameBoard.topRight != null &&
      this.gameBoard.centerLeft != null &&
      this.gameBoard.centerMiddle != null &&
      this.gameBoard.centerRight != null &&
      this.gameBoard.bottomLeft != null &&
      this.gameBoard.bottomMiddle != null &&
      this.gameBoard.bottomRight != null
      &&
      this.checkForWin() === false
      )
    {
      return true;
    } else {
      return false;
    }
  }

  endGame() {
    if (this.checkForWin()) {
      this.countWin();
      this.timeOut();
      this.resetBoard();
    }
  }

  countWin(); {
    //add win to player.wins count and store in local storage
  }

  timeOut() {
    //
  }

  resetBoard() {
    //
  }

}



//would be cute to evaluate by row/column/diagonal and include in the win message
