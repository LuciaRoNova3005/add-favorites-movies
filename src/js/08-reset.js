function handlerReset() {
  arrayFavorite = [];
  renderFavorites();
  renderShows(arrayShows);
  localStorage.removeItem("favorites");
}
btnResett.addEventListener("click", handlerReset);
