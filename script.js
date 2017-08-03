/* When the user clicks on the dropdown button,
toggle between hiding and showing the dropdown content */
function DropDownToggle() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    // dropdown is an array of anker tags
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      } else {
        dropdowns[i].addEventListener(createNewGame(dropdowns[i].id));
        // remove board and create new game
      }
    }
  }
};

const createNewGame(level) {
  
}



const handleLevelSubmit = (e) => {
  e.preventDefault();

  const favoriteInput = document.querySelector(".favorite-input");
  const favorite = favoriteInput.value;
  favoriteInput.value = "";

  const newListLi = document.createElement("li");
  newListLi.textContent = favorite;

  const favoritesList = document.getElementById("sf-places");
  favoritesList.appendChild(newListLi);
};
