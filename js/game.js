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

    this.size = DIFFICULTY[level];
    this.board = new Board(DIFFICULTY[level]); //creates empty board object

    this.grid = this.board.grid;
    this.playMove = this.playMove.bind(this);
    this.countNeighbors = this.countNeighbors.bind(this);
  }

  isWon() {
    let grid = this.grid;
    let count = 0;
    let merged = [].concat.apply([], this.grid);
    merged.forEach(function(pos) {
      let [x,y] = pos;
      if (grid[x][y].revealed && !grid[x][y].bomb) {
        count += 1;
      }
    });
    return ((this.size * this.size) - this.board.bombs === count);
  }

  isOver() {
    let locations = this.board.locations;
    let grid = this.grid;

    locations.forEach(function(pos) {
      let [x,y] = pos;
      if (grid[x][y].revealed && grid[x][y].bomb) {
        return true;
      }
    });

  }

  playMove(pos) {
    let [x,y] = pos;
    this.grid[x][y].revealed = true;
  }

  countNeighbors(pos) {
    let neighbors = this.board.neighbors(pos);
    let grid = this.grid;
    let count = 0;
    console.log(neighbors);

    neighbors.forEach(function(neighbor) {
      let [x,y] = neighbor;
      // console.log(!grid[x][y]);
      if (!grid[x][y] && grid[x][y].bomb) {
        count += 1;
      }
    });
    console.log(count);
    return count;
  }



  // play() {
  //   while (!this.isOver() || !this.isWon()) {
  //     playMove
  //   }
    // console.log(this.board.render)

    // get move?

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

  // isOver() {
  //   return this.board.isOver();
  // }
  //
  // playMove(pos) {
  //   this.board.placeMark(pos);
  // }
  //

}

export default Game;
