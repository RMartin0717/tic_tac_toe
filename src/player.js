class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage() {
    localStorage.setItem(`${this.id}`, JSON.stringify(this.wins));
  }

  retrieveWinsFromStorage() {
    if (JSON.parse(localStorage.getItem(`${this.id}`))) {
      this.wins = JSON.parse(localStorage.getItem(`${this.id}`));
    } else {
      this.wins = 0;
    }
    return this.wins;
  }
}
