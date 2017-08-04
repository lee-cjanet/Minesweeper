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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__js_view__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__js_game__ = __webpack_require__(2);



const createNewGame = (level) => {
  const rootEl = document.getElementById('minesweeper');
  const game = new __WEBPACK_IMPORTED_MODULE_1__js_game__["a" /* default */](level);
  new __WEBPACK_IMPORTED_MODULE_0__js_view__["a" /* default */](game, rootEl);
};


document.addEventListener('DOMContentLoaded', () => {
  createNewGame("beginner");

  let easy = document.getElementById('beginner');
  let medium = document.getElementById('intermediate');
  let hard = document.getElementById('difficult');

  easy.addEventListener('click', () => {
    createNewGame('beginner');
  });

  medium.addEventListener('click', () => {
    createNewGame('intermediate');
  });

  hard.addEventListener('click', () => {
    createNewGame('difficult');
  });
});




// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

/* harmony default export */ __webpack_exports__["default"] = (createNewGame);


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;

    this.renderBoard(this.game.size);
    this.bindEvents();
    this.movesCounter = this.movesCounter.bind(this);
  }

  // countdown() {
  //   var seconds = 180;
  //   function tick() {
  //     let counter = document.getElementById("counter");
  //     seconds--;
  //     counter.innerHTML =
  //       "0:" + (seconds < 10 ? "0" : "") +  String(seconds);
  //       if( seconds > 0 ) {
  //         setTimeout(tick, 1000);
  //       } else {
  //         alert("Game over");
  //         return;
  //       }
  //     }
  //     tick();
  // }

  movesCounter() {
    let counter = document.getElementById("moves-counter");
    let moves = parseInt(counter.innerHTML);
    counter.innerHTML = moves + 1;
  }


  bindEvents() {
    let makeMove = this.makeMove.bind(this);
    // install a handler on the `li` elements inside the board.
    [].forEach.call(document.getElementsByClassName('hidden'), function(el) {
      el.addEventListener('click', (event) => {
        event.preventDefault();
        event.stopPropagation();
        const tile = event.target;
        makeMove(tile);
      });
    });
  }

  makeMove(tile) {
    let string = tile.getAttribute("pos");
    let pos = JSON.parse("[" + string + "]");

    // this.countdown();

    try {
      this.game.playMove(pos);
      this.movesCounter();
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    if (this.game.isOver()) {

      [].forEach.call(document.getElementsByClassName('hidden'), function(el) {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
      });

      this.game.reveal();
      this.renderBoard(this.game.size);

      this.element.addClass("game-over");

      const figcaption = document.createElement("FIGCAPTION");
      figcaption.innerText = "Game Over";
      this.element.append(figcaption);

    } else if (this.game.isWon()) {

      [].forEach.call(document.getElementsByClassName('hidden'), function(el) {
        el.addEventListener('click', (event) => {
          event.preventDefault();
          event.stopPropagation();
        });
      });

      this.element.addClass("game-won");
      const figcaption = document.createElement("FIGCAPTION");
      figcaption.innerText = "You Won!";
      this.element.append(figcaption);

    } else {

      let bombCount = this.game.countNeighbors(pos);
      this.renderTile(pos, bombCount);
    }

  }

  renderTile(pos) {
    let [x,y] = pos;
    let newChild = document.querySelectorAll(`li[pos='${x},${y}']`);

    newChild[0].className = "revealed";
    newChild[0].innerText = this.game.grid[x][y].content;

  }

  clearBoard() {
    const myNode = document.getElementById('minesweeper');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  renderBoard(size) {
    this.clearBoard();
    let grid = document.getElementById("minesweeper");
    let solution = this.game.grid;

    for (let row = 0; grid.childElementCount < size; row++) {
      let ul = document.createElement('ul');
      ul.className = row;
      grid.appendChild(ul);
      for (let col=0; ul.childElementCount < size; col++) {
        let li = document.createElement('li');

        li.setAttribute('pos', `${row},${col}`);

        if (solution[row][col].revealed) {
          li.className = "revealed";
          li.innerText = solution[row][col].content;
        } else {
          li.className = "hidden";
        }

        ul.appendChild(li);
      }
    }
  }

}


/* harmony default export */ __webpack_exports__["a"] = (View);


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__board__ = __webpack_require__(3);


const DIFFICULTY = {'beginner': 8, 'intermediate': 12, 'difficult':16};

class Game {
  constructor(level = 'beginner') {

    this.size = DIFFICULTY[level];
    this.board = new __WEBPACK_IMPORTED_MODULE_0__board__["a" /* default */](DIFFICULTY[level]); //creates empty board object

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

/* harmony default export */ __webpack_exports__["a"] = (Game);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

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

/* harmony default export */ __webpack_exports__["a"] = (Board);


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map