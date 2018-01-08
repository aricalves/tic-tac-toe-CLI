class Player {
  constructor(name) {
    this.name = name;
  }
}

class Game {
  constructor() {
    this.winnerFound = false;
    this.winner;
    this.player1;
    this.player2;
  }
}

Game.prototype.declareWinner = () => this.winner;

Game.prototype.addPlayer = player => {
  if (this.player1) {
    this.player2 = new Player(player);
    return `Welcome ${player}, you are Player 2`;
  } else {
    this.player1 = new Player(player);
    return `Welcome ${player}, you are Player 1`;
  }
};

class Board {
  constructor() {
    this.board = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']];
  }
}

Board.prototype.render = function() { return this.board };

// const game = new Game();

const test = new Board()
console.log(test.render())

exports.Game = Game;
exports.Board = Board;
exports.Player = Player;