class Game {
  constructor(){
    this.playerOne = new Player("one", "⛺️");
    this.playerTwo = new Player("two", "🐻");
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
    if (this.currentTurn === this.playerOne.token) {
      this.currentTurn = this.playerTwo.token;
    } else {
      this.currentTurn = this.playerOne.token;
    }
  }

  checkForWin() {
    if (this.evaluateForThree()) {
      this.endGame();
    } else if (this.checkForDraw()) {
      this.endGame();
    } else {
      this.switchPlayer();
    }
  }

  evaluateForThree() {
    var winConditions = [
      ["topLeft", "topMiddle", "topRight"],
      ["centerLeft", "centerMiddle", "centerRight"],
      ["bottomLeft", "bottomMiddle", "bottomRight"],
      ["topLeft", "centerLeft", "bottomLeft"],
      ["topMiddle", "centerMiddle", "bottomMiddle"],
      ["topRight", "centerRight", "bottomRight"],
      ["topLeft", "centerMiddle", "bottomRight"],
      ["topRight", "centerMiddle", "bottomLeft"]];

    for (var i = 0; i < winConditions.length; i++) {
      if (
        this.gameBoard[winConditions[i][0]] === this.currentTurn &&
        this.gameBoard[winConditions[i][1]] === this.currentTurn &&
        this.gameBoard[winConditions[i][2]] === this.currentTurn) {
          return true;
      }
    }
  }

  checkForDraw() {
    if (
      this.gameBoard.topLeft &&
      this.gameBoard.topMiddle &&
      this.gameBoard.topRight &&
      this.gameBoard.centerLeft &&
      this.gameBoard.centerMiddle &&
      this.gameBoard.centerRight &&
      this.gameBoard.bottomLeft &&
      this.gameBoard.bottomMiddle &&
      this.gameBoard.bottomRight
      )
    {
      this.draw = true;
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
