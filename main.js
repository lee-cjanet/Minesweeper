import View from './js/view';
import Game from './js/game';

const createNewGame = (level) => {
  const rootEl = document.getElementById('minesweeper');
  const game = new Game(level);
  new View(game, rootEl);
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

export default createNewGame;
