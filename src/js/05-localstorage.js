function savedFav() {
  let local = localStorage.setItem("favorites", JSON.stringify(arrayFavorite));
}

function getFavLocal() {
  let localFavoritesString = localStorage.getItem("favorites");
  if (localFavoritesString !== null) {
    arrayFavorite = JSON.parse(localFavoritesString);
    renderFavorites();
  }
}

getFavLocal();
