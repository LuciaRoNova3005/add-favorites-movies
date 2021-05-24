function addListenShow() {
  const cardShows = document.querySelectorAll(".js-shows");
  for (const card of cardShows) {
    card.addEventListener("click", handleClickFav);
  }
}

function handleClickFav(event) {
  // Identificar la li pulsada
  const selectCardFav = event.currentTarget;
  // Añado la clase de fav
  //selectCardFav.classList.toggle("favorite");

  // Obtener la información asociada a la serie

  const showId = parseInt(selectCardFav.dataset.id);

  // si la serie clickada está en favoritos
  /*arrayFavorite.find((fav) => {
    debugger;
    return false;
  });*/
  // - la quito
  // - si no la guardo
  const foundShow = arrayShows.find((show) => {
    //console.log(showId, show.show.id);
    if (showId === show.show.id) {
      return true;
    } else {
      return false;
    }
  });
  arrayFavorite.push(foundShow);

  renderShows();
  // pintamos los favoritos
  // guardamos los favoritos en local storage
  console.log(arrayFavorite);
  //localStorage.setItem("show", JSON.stringify(selectCardFav));
  //arrayFavorite = parse.JSON(localStorage.getItem("show", selectCardFav));
}
