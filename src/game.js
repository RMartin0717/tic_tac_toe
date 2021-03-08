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
      return
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
    if (this.evaluateForThree("topLeft", "topMiddle", "topRight")) {
      this.endGame();
    } else if (this.evaluateForThree("centerLeft", "centerMiddle", "centerRight")) {
      this.endGame();
    } else if (this.evaluateForThree("bottomLeft", "bottomMiddle", "bottomRight")) {
      this.endGame();
    } else if (this.evaluateForThree("topLeft", "centerLeft", "bottomLeft")) {
      this.endGame();
    } else if (this.evaluateForThree("topMiddle", "centerMiddle", "bottomMiddle")) {
      this.endGame();
    } else if (this.evaluateForThree("topRight", "centerRight", "bottomRight")) {
      this.endGame();
    } else if (this.evaluateForThree("topLeft", "centerMiddle", "bottomRight")) {
      this.endGame();
    } else if (this.evaluateForThree("topRight", "centerMiddle", "bottomLeft")) {
      this.endGame();
    } else if (this.checkForDraw()) {
      this.endGame();
      this.draw = true;
    } else {
      this.switchPlayer();
    }
  }

  evaluateForThree(boxOne, boxTwo, boxThree) {
    if (
      this.gameBoard[boxOne] === this.currentTurn &&
      this.gameBoard[boxTwo] === this.currentTurn &&
      this.gameBoard[boxThree] === this.currentTurn) {
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
