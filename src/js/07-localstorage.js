//Guardo los datos en localstorage
function savedFav() {
  arrayLocal = localStorage.setItem("favorites", JSON.stringify(arrayFavorite));
}
//Recupero los datos y lo pintos
function getFavLocal() {
  arrayLocal = JSON.parse(localStorage.getItem("favorites"));
  renderFavorites(arrayFavorite);
}
