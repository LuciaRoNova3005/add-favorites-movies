function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}
function handleClickFav(event) {
  const selectCardFav = event.currentTarget;

  const filmId = parseInt(selectCardFav.dataset.id);

  const idExist = arrayFavorite.find(
    (favoritedata) => favoritedata.show.id === filmId
  );

  if (idExist === undefined) {
    const Objseriedata = arrayShows.find(
      (seriedata) => seriedata.show.id === filmId
    );
    arrayFavorite.push(Objseriedata);
  } else {
    arrayFavorite = arrayFavorite.filter((fav) => fav.show.id !== filmId);
  }

  renderFavorites();
  renderShows();
  savedFav();
}
