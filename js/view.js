class View {
  constructor(game, element) {
    this.game = game;
    this.element = element;

    this.renderBoard();
    this.bindEvents();
  }



  bindEvents() {
    // install a handler on the `li` elements inside the board.
    this.element.on
  }

  // jQuery
$('a').click(function() {
  // code…
})

// Vanilla
[].forEach.call(document.querySelectorAll('a'), function(el) {
  el.addEventListener('click', function() {
    // code…
  })
})

  bindEvents() {
    // install a handler on the `li` elements inside the board.
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {}



  /* When the user clicks on the dropdown button,
  toggle between hiding and showing the dropdown content */
  function DropDownToggle() {
      document.getElementById("myDropdown").classList.toggle("show");
  }

  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {

      // dropdown is an array of anker tags
      const dropdowns = document.getElementsByClassName("dropdown-content");
      let i;
      for (i = 0; i < dropdowns.length; i++) {
        let openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        } else {
          dropdowns[i].addEventListener(createNewGame(dropdowns[i].id));
          // remove board and create new game
        }
      }
    }
  };



  const renderBoard() {
    let size = 8;
    let grid = document.getElementById("minesweeper");

    for (let row=0; grid.length < size; row++) {
      grid.appendChild(document.createElement('li'))
      for (let col=0; grid[row].length < size; col++) {
        let ul = document.createElement('ul')
        ul.dataset.className = "hidden"
        grid[row].appendChild(ul);
      }
    }
  };

}


export default View;



class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    // install a handler on the `li` elements inside the board.
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const pos = $square.data("pos");
    const currentPlayer = this.game.currentPlayer;

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      return;
    }

    $square.addClass(currentPlayer);

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

  setupBoard() {
    const $ul = $("<ul>");
    $ul.addClass("group");

    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
      for (let colIdx = 0; colIdx < 3; colIdx++) {
        let $li = $("<li>");
        $li.data("pos", [rowIdx, colIdx]);

        $ul.append($li);
      }
    }

    this.$el.append($ul);
  }
}

module.exports = View;
