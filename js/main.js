import View from './view';
import Game from './game';


const rootEl = document.getElementById('minesweeper');
const game = new Game();
new View(game, rootEl);










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

const handleFavoriteSubmit = (e) => {
  e.preventDefault();

  const favoriteInput = document.querySelector(".favorite-input");
  const favorite = favoriteInput.value;
  favoriteInput.value = "";

  const newListLi = document.createElement("li");
  newListLi.textContent = favorite;

  const favoritesList = document.getElementById("sf-places");
  favoritesList.appendChild(newListLi);
};

const clearBoard = () => {
  document.getElementById("minesweeper");
  // this.parentNode.removeChild(this);
};

const renderBoard = () => {
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




const createNewGamee = level => {
  let game = new Game(level);
};
