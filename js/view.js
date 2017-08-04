class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;
    this.solution = game.board.grid;

    this.renderBoard(this.game.size);
    this.bindEvents();
  }



  bindEvents() {
    // install a handler on the `li` elements inside the board.
    [].forEach.call(document.querySelectorAll('hidden'), function(el) {
      el.addEventLIstener('click', () => {
        const tile = event.currentTarget;
        this.makeMove(tile);
      });
    });
  }

  // makeMove(tile) {}



  renderBoard(size) {
    let grid = document.getElementById("minesweeper");


    for (let row = 0; grid.childElementCount < size; row++) {
      let li = grid.appendChild(document.createElement('li'));
      for (let col=0; li.childElementCount < size; col++) {
        let ul = document.createElement('ul');
        // let name;
        this.solution[row][col].revealed ? ul.className = "revealed" : ul.className = "hidden";
        ul.dataset.pos = `{x: ${row}, y: ${col}}`;
        li.appendChild(ul);
      }
    }
    console.log(grid);
  }

}


export default View;



  makeMove(tile) {
    const pos = tile.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    // tile.addClass(currentPlayer);

    if (this.game.isOver()) {
      // cleanup click handlers.
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $("<figcaption>");

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`You win, ${winner}!`);
      } else {
        $figcaption.html("It's a draw!");
      }

      this.$el.append($figcaption);
    }
  }
