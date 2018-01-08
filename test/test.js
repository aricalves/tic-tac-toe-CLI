const { assert, expect } = require('chai');
const app = require('../app');

describe('Game', () => {
  const game = new app.Game();
  it('should be an object', () => {
    assert.typeOf(game, 'object');
  });
  it('should init without a winner', () => {
    expect(game.winnerFound).to.eql(false);
  });
  it('should not have a winner if the game is still running', () => {
    expect(game.declareWinner()).to.eql(undefined);
  });
});

describe('Player', () => {
  const player = new app.Player('Aric');
  it('should be an object', () => {
    assert.typeOf(player, 'object');
  });
  it('should init with a name', () => {
    expect(player.name).to.eql('Aric');
  });
});

describe('Board', () => {
  const board = new app.Board();
  it('should be an object', () => {
    assert.typeOf(board, 'object');
  });
});