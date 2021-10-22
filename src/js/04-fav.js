//Si el array que guarda la informacion del local tiene contenido me ejecutas Recupero los datos y lo pinto

//Funcion que escucha click en las peliculas y en las peliculas de favoritas con la js-shows//
function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}
function handleClickFav(event) {
  // Identificar la li pulsada
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
