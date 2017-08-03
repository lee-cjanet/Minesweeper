import View from './view';
import Game from './game';

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

  const game = new Game(level);
  console.log("four");
  new View(game, rootEl);
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
