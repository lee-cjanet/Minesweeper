
// CHECK MOVE ===========
// +element
// + x
// + y
// + isFlagged
// - isRevealed
// + isMine
// + isEmpty    neighbor_bomb_count + neighbors
// ================

// PLAYER =======
// + setFlagged()
// + setRevealed()
// + setEmpty()
// + setMine()
// + setMineCount()   neighbor_bomb_count
// + setText()
//
// ===============


// Field class represents single field on the board and provides all operations on a field that we need.

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


class Tile {
  constructor() {

  }

  countNeighbors(pos) {
    let count = 0;

    NEIGHBORS.forEach(function(neighbor) {
      neighbor;
    })
  }



}

export default Tile;
