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


export default View;



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
