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
      el.addEventListener('click', () => {
        const tile = event.currentTarget;
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
      this.game.countNeighbors(pos);
      this.renderBoard(this.game.size);
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
      let li = grid.appendChild(document.createElement('li'));
      for (let col=0; li.childElementCount < size; col++) {
        let ul = document.createElement('ul');
        // let name;
        solution[row][col].revealed ? ul.className = "revealed" : ul.className = "hidden";
        ul.setAttribute('pos', `${row},${col}`);
        li.appendChild(ul);
      }
    }
    console.log(grid);
  }

}


export default View;
