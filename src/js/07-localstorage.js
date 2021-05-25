//Guardo los datos en localstorage
function savedFav() {
  let local = localStorage.setItem("favorites", JSON.stringify(arrayFavorite));
}
//Recupero los datos y lo pintos
function getFavLocal() {
  let localFavoritesString = localStorage.getItem("favorites");
  if (localFavoritesString !== null) {
    arrayFavorite = JSON.parse(localFavoritesString);
    renderFavorites();
  }
}

getFavLocal();
