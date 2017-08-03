import Board from './board';

// Game class is responsible for the gameplay (LEVEL levels, timer, starting and stopping a game).

// +start()
// +stop()
// -startTimer()
// -stopTimer()
// -resetTimer()
// -reveal()
// - clear board
// - redraw board

// start easy game. call easy game, easy goes into constructor.

// let game = new Game()
// $easyButton.addEventLIstener('click', () => game.start('easy'));

const DIFFICULTY = {'beginner': 8, 'intermediate': 16, 'difficult':24};

class Game {
  constructor(level = 'beginner') {
    console.log(DIFFICULTY[level]);
    this.level = level;
    this.board = new Board(DIFFICULTY[level]);

  }

  // play() {
  //   while (!(isOver()) || !(isWon()))
  //   console.log(this.board.render)
  //
  //   // get move?
  //
  // }

//   def play
//   until @board.won? || @board.lost?
//     puts @board.render
//
//     action, pos = get_move
//     perform_move(action, pos)
//   end
//
//   if @board.won?
//     puts "You win!"
//   elsif @board.lost?
//     puts "**Bomb hit!**"
//     puts @board.reveal
//   end
// end

  isOver() {
    return this.board.isOver();
  }

  playMove(pos) {
    this.board.placeMark(pos);
  }

  isWon() {
    return this.board.isWon();
  }

}

export default Game;
