const Board = require('./board');
const Game = require('./game');

$( () => {
  const rootEl = $('.ttt');
  const game = new Game();
  new View(game, rootEl);
});


// const View = require('./ttt-view');
// const Game = require('../../../ttt_node/solution/game');
//
// $( () => {
//   const rootEl = $('.ttt');
//   const game = new Game();
//   new View(game, rootEl);
// });
