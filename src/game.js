class Game {
  constructor(){
    this.playerOne = new Player("one", "❌");
    this.playerTwo = new Player("two", "⭕️");
    this.playerOne.retrieveWinsFromStorage();
    this.playerTwo.retrieveWinsFromStorage();
    this.currentTurn = this.playerOne.token;
    this.gameOver = false;
    this.draw = false;
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
      return this.currentTurn;
    } else {
      return
    }
  }

  assignToken(spaceSelected) {
      this.gameBoard[spaceSelected] = this.currentTurn;
  }

  switchPlayer() {
    //consider using boolean instead and doing "one" and "two" logic in takeTurn method
    if (this.currentTurn === this.playerOne.token) {
      this.currentTurn = this.playerTwo.token;
    } else {
      this.currentTurn = this.playerOne.token;
    }
  }

  checkForWin() {
    if (this.evaluateTopRow()) {
      this.endGame();
    } else if (this.evaluateCenterRow()) {
      this.endGame();
    } else if (this.evaluateBottomRow()) {
      this.endGame();
    } else if (this.evaluateLeftColumn()) {
      this.endGame();
    } else if (this.evaluateMiddleColumn()) {
      this.endGame();
    } else if (this.evaluateRightColumn()) {
      this.endGame();
    } else if (this.evaluateTopLeftDiagonal()) {
      this.endGame();
    } else if (this.evaluateTopRightDiagonal()) {
      this.endGame();
    } else if (this.checkForDraw()) {
      this.endGame();
      this.draw = true;
    } else {
      this.switchPlayer();
    }
  }

  evaluateTopRow() {
    if (
      //try with taking in 3 parameters (each time an evaluate function is called in the checkForWin method) for one reusable function
      //this.gameBoard.topLeft === this.gameBoard.topMiddle === this.gameBoard.topRight
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
      )
    {
      return true;
    } else {
      return false;
    }
  }

  endGame() {
    if (!this.draw) {
      this.countWin();
    }
    this.disableButtons();
    this.gameOver = true;
  }

  countWin() {
    if (this.currentTurn === this.playerOne.token) {
      this.playerOne.wins++;
      this.playerOne.saveWinsToStorage();
    } else if (this.currentTurn === this.playerTwo.token){
      this.playerTwo.wins++;
      this.playerTwo.saveWinsToStorage();
    }
  }

  disableButtons() {
    allGameSpaces.removeEventListener("click", markSpace);
  }

  resetBoard() {
    newGame = new Game();
    allGameSpaces.addEventListener("click", markSpace);
  }

}
