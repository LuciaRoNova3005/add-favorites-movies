function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}

function handleClickFav(event) {
  const selectCard = event.target;
  const allResultShows = event.currentTarget;

  allResultShows.classList.toggle("favorite");
}
