function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}

function handleClickFav(event) {
  const selectCard = event.target;
  const selectCardFav = event.currentTarget;

  selectCardFav.classList.toggle("favorite");
}
