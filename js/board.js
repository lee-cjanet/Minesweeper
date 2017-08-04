
const NEIGHBORS = [
    [-1, -1],
    [-1,  0],
    [-1,  1],
    [ 0, -1],
    [ 0,  1],
    [ 1, -1],
    [ 1,  0],
    [ 1,  1]
  ];

class Board {
  constructor(size) {
    this.size = size;

    if (size === 16) {
      this.bombs = 40;
    } else if (size === 12) {
      this.bombs = 22;
    } else {
      this.bombs = 10;
    }

    this.locations = this.BombLocations();
    this.makeGrid(size);
    this.setBombs = this.setBombs.bind(this);
    this.neighbors = this.neighbors.bind(this);
    this.reveal = this.reveal.bind(this);
  }

  compareArr(nestedArr, arr2) {
    return nestedArr.forEach(function(arr1) {
      if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
        return true;
      }
    });
  }

  BombLocations() {
    let locations = [];
    for (let i=0; locations.length < this.bombs; i++) {
      let row = Math.floor(Math.random() * this.size);
      let col = Math.floor(Math.random() * this.size);

      if (!this.compareArr(locations, [row, col])) {
        locations.push([row, col]);
      }
    }

    return locations;
  }

  setBombs() {
    let grid = this.grid;
    this.locations.forEach(function(pos) {
      let [x,y] = pos;
      let test = grid[x][y].bomb;
      grid[x][y].bomb = true;
    });
    // return this.grid;
  }

  makeGrid(size) {
    this.grid = [];

    for (let row=0; this.grid.length < size; row++) {
      this.grid.push([]);
      for (let col=0; this.grid[row].length < size; col++) {
        this.grid[row].push({revealed: false, bomb: false, flagged: false, marked: false, content: ""});
      }
    }

    this.setBombs();
  }

  neighbors(pos) {
    let neighbors = [];
    let [a,b] = pos;
    let size = this.size;

    NEIGHBORS.forEach(function(neighbor) {
      let [c,d] = neighbor;
      let x = a + c;
      let y = b + d;

      if ((0 <= x && x < size) && (0 <= y && y < size)) {
        neighbors.push([a+c, b+d]);
      }
    });
    return neighbors;
  }

  reveal(grid) {
    this.locations.forEach(function(pos) {
      let [x,y] = pos;
      grid[x][y].revealed = true;
      grid[x][y].content = "X";
    });
  }

}

export default Board;
