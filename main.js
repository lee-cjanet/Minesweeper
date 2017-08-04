import View from './js/view';
import Game from './js/game';

const createNewGame = (level) => {
  const rootEl = document.getElementById('minesweeper');
  const game = new Game(level);
  new View(game, rootEl);
};

document.addEventListener('DOMContentLoaded', () => {
//   [].forEach.call(document.querySelectorAll('ul'), function(el) {
//   el.addEventListener('click', function() {
//
//   });
// });
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
//       }
//     }
//   }
// };


// else {
//   dropdowns[i].addEventListener(createNewGame(dropdowns[i].id));
//   // remove board and create new game
// }
