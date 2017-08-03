/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__game__ = __webpack_require__(2);



const clearBoard = () => {
  console.log("one");
  const myNode = document.getElementById('minesweeper');
  while (myNode.firstChild) {
    console.log("here");
    myNode.removeChild(myNode.firstChild);
  }
};

const createNewGame = (level) => {
  clearBoard();
  console.log("two");
  const rootEl = document.getElementById('minesweeper');
  console.log(rootEl);

  const game = new __WEBPACK_IMPORTED_MODULE_1__game__["a" /* default */](level);
  console.log("four");
  new __WEBPACK_IMPORTED_MODULE_0__view__["a" /* default */](game, rootEl);
  console.log("five");
};



document.addEventListener('DOMContentLoaded', () => {
  console.log("zero");
  createNewGame("beginner");
});


/* When the user clicks on the dropdown button,
toggle between hiding and showing the dropdown content */
// function DropDownToggle() {
//     document.getElementById("myDropdown").classList.toggle("show");
// }
//
// // Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//   if (!event.target.matches('.dropbtn')) {
//
//     // dropdown is an array of anker tags
//     const dropdowns = document.getElementsByClassName("dropdown-content");
//     let i;
//     for (i = 0; i < dropdowns.length; i++) {
//       let openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       } else {
//         dropdowns[i].addEventListener(createNewGame(dropdowns[i].id));
//         // remove board and create new game
//       }
//     }
//   }
// };


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;

    this.renderBoard(this.game.level);
    this.bindEvents();
  }



  bindEvents() {
    // install a handler on the `li` elements inside the board.
    [].forEach.call(document.querySelectorAll('hidden'), function(el) {
      el.addEventLIstener('click', function() {
        const tile = event.currentTarget;
        this.makeMove(tile);
      });
    });
  }

  // makeMove($square) {}



  renderBoard(size) {
    let grid = document.getElementById("minesweeper");
    console.log("four");
    for (let row=0; grid.length < size; row++) {
      grid.appendChild(document.createElement('li'));
      for (let col=0; grid[row].length < size; col++) {
        let ul = document.createElement('ul');
        ul.dataset.className = "hidden";
        ul.dataset.pos = {x: row, y: col};
        grid[row].appendChild(ul);
      }
    }
    console.log("five");
  }

}


/* harmony default export */ __webpack_exports__["a"] = (View);



  // makeMove($square) {
  //   const pos = $square.data("pos");
  //   const currentPlayer = this.game.currentPlayer;
  //
  //   try {
  //     this.game.playMove(pos);
  //   } catch (e) {
  //     alert("Invalid move! Try again.");
  //     return;
  //   }
  //
  //   $square.addClass(currentPlayer);
  //
  //   if (this.game.isOver()) {
  //     // cleanup click handlers.
  //     this.$el.off("click");
  //     this.$el.addClass("game-over");
  //
  //     const winner = this.game.winner();
  //     const $figcaption = $("<figcaption>");
  //
  //     if (winner) {
  //       this.$el.addClass(`winner-${winner}`);
  //       $figcaption.html(`You win, ${winner}!`);
  //     } else {
  //       $figcaption.html("It's a draw!");
  //     }
  //
  //     this.$el.append($figcaption);
  //   }
  // }


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(3);


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
    this.board = new __WEBPACK_IMPORTED_MODULE_0__board__["a" /* default */](DIFFICULTY[level]);

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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unless__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_unless___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_unless__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tile__ = __webpack_require__(5);




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

/* harmony default export */ __webpack_exports__["a"] = (Board);


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function(test, fn) {
  'use strict';
  if (Object.prototype.toString.call(arguments[1]) !== '[object Function]')
    throw new Error('Callback argument must be a function');
  if (!test) fn();
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* unused harmony default export */ var _unused_webpack_default_export = (Tile);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map