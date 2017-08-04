import Board from './board';

const DIFFICULTY = {'beginner': 8, 'intermediate': 12, 'difficult':16};

class Game {
  constructor(level = 'beginner') {

    this.size = DIFFICULTY[level];
    this.board = new Board(DIFFICULTY[level]); //creates empty board object

    this.grid = this.board.grid;
    this.playMove = this.playMove.bind(this);
    this.countNeighbors = this.countNeighbors.bind(this);
    this.isWon = this.isWon.bind(this);
    this.isOver = this.isOver.bind(this);
    this.reveal = this.reveal.bind(this);
    console.log(this.board.locations);
  }

  isWon() {
    let grid = this.grid;
    let count = 0;
    let merged = [].concat.apply([], this.grid);
    merged.forEach(function(tileObj) {
      if (tileObj.revealed && !tileObj.bomb) {
        count += 1;
      }
    });
    let result = ((this.size * this.size) - this.board.bombs === count);
  }

  isOver() {
    let locations = this.board.locations;
    let grid = this.grid;
    let over = false;

    locations.forEach(function(pos) {
      let [x,y] = pos;

      if (grid[x][y].revealed && grid[x][y].bomb) {
        over = true;
      }
    });

    return over;
  }

  playMove(pos) {
    let [x,y] = pos;
    this.grid[x][y].revealed = true;
  }

  countNeighbors(pos) {
    let neighbors = this.board.neighbors(pos);
    let grid = this.grid;
    let count = 0;

    neighbors.forEach(function(neighbor) {
      let [x,y] = neighbor;
      if (grid[x][y].bomb) {
        count += 1;
      }
    });

    let [a,b] = pos;
    grid[a][b].content = count;
  }

  reveal() {
    this.board.reveal(this.grid);
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
