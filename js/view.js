class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;

    this.renderBoard(this.game.size);
    this.bindEvents();
  }

  countdown() {
    var seconds = 180;
    function tick() {
      let counter = document.getElementById("counter");
      seconds--;
      counter.innerHTML =
        "0:" + (seconds < 10 ? "0" : "") +  String(seconds);
        if( seconds > 0 ) {
          setTimeout(tick, 1000);
        } else {
          alert("Game over");
          return;
        }
      }
      tick();
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

    this.countdown();

    try {
      this.game.playMove(pos);
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
    console.log(grid);
  }

}


export default View;
