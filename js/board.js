import unless from 'unless';

import Tile from './tile';

// I think you should have a Tile class; there's a lot of information to track about a Tile (bombed? flagged? revealed?) and some helpful methods you could write (#reveal, #neighbors, #neighbor_bomb_count). I would also have a Board class.

// robber goes into house. left traps for robbers. clues for how many traps there are in surrounding area.

// -boardData
//
// - drawBoard()
// - plantMines()
// - calculateDistance()
// - transverseBoard()
// - revealBoard()
// - isGameOver()
// + reveal()
// + flag()

// Board class is responsible for drawing a board, planting mines, calculating mine distance, traversing the board and revealing fields.

//

class Board {
  constructor(size) {
    this.size = size;

    if (size === 24) {
      this.bombs = 99;
    } else if (size === 16) {
      this.bombs = 40;
    } else {
      this.bombs = 10;
    }
    console.log("h1");
    this.grid = this.makeGrid(size);
    console.log(this.grid);
  }

  compareArr(nestedArr, arr2) {
    return nestedArr.forEach(function(arr1) {
      if (arr1[0] === arr2[0] && arr1[1] === arr2[1]) {
        return true;
      }
    });
  }

  generateBombLocations() {
    let locations = [];
    for (let i=0; locations.length < this.bombs; i++) {
      let row = Math.floor(Math.random() * this.size);
      let col = Math.floor(Math.random() * this.size);

      if (this.compareArr(locations, [row, col])) {
        locations.push([row, col]);
      }
    }

    return locations;
  }

  setBombs(grid) {
    console.log("h3");
    this.generateBombLocations().map(function(pos) {
      grid[pos[0]][pos[1]].bomb = true;
    });
    console.log(grid);
    return grid;
  }

  makeGrid(size) {
    let grid = [];

    for (let row=0; grid.length < size; row++) {
      grid.push([]);
      for (let col=0; grid[row].length < size; col++) {
        grid[row].push({revealed: false, bomb: false, flagged: false, marked: false});
      }
    }
    console.log("h2");
    return this.setBombs(grid);
  }




  won() {
    let count = 0;
    let merged = [].concat.apply([], this.grid);
    merged.forEach(function(pos) {
      if (pos === true) {
        count += 1;
      }
    });
    return ((this.size * this.size) - this.bombs === count);
  }

}

export default Board;
