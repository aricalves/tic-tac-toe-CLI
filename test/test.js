const assert = require('chai').assert;
const app = require('../app');

describe('Game', () => {
  it('should be an object', () => {
    const game = new app.Game();
    assert.typeOf(game, 'object');
  });
});