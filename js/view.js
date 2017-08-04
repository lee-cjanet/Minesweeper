class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;

    this.renderBoard(this.game.size);
    this.bindEvents();
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
    console.log(this.game);

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    // tile.addClass(currentPlayer);

    if (!this.game.isOver() || !this.game.isWon()) {
      let bombCount = this.game.countNeighbors(pos);
      this.renderTile(pos, bombCount);
    } else if (this.game.isOver()) {
      // cleanup click handlers.
      // this.elementdocument.getElementById('div1').onmousedown = new function ("return false");
      document.getElementsByTagName('ul').addEventListener('click', function(e) {
        e.preventDefault();
      });

      this.element.addClass("game-over");

      const figcaption = document.createElement("FIGCAPTION");

      // if (winner) {
      //   this.$el.addClass(`winner-${winner}`);
      //   $figcaption.html(`You win, ${winner}!`);
      // } else {
      //   $figcaption.html("It's a draw!");
      // }

      this.element.append(figcaption);
    }
  }

  renderTile(pos, content) {
    let [x,y] = pos;
    let newChild = document.querySelectorAll(`li[pos='${x},${y}']`);

    newChild[0].className = "revealed";
    newChild[0].innerText = content;

  }

  clearBoard() {
    const myNode = document.getElementById('minesweeper');
    while (myNode.firstChild) {
      myNode.removeChild(myNode.firstChild);
    }
  }

  renderBoard(size, content) {
    this.clearBoard();
    let grid = document.getElementById("minesweeper");
    let solution = this.game.grid;

    for (let row = 0; grid.childElementCount < size; row++) {
      let ul = document.createElement('ul');
      ul.className = row;
      grid.appendChild(ul);
      for (let col=0; ul.childElementCount < size; col++) {
        let li = document.createElement('li');
        // let name;
        solution[row][col].revealed ? li.className = "revealed" : li.className = "hidden";
        li.setAttribute('pos', `${row},${col}`);

        ul.appendChild(li);
      }
    }
    console.log(grid);
  }

}


export default View;
