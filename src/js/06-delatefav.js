//funcion que esucha a los favoritos en listado de favoritos//
function addListenFav() {
  const cardFav = document.querySelectorAll(".js.fav");
  for (const fav of cardFav) {
    fav.addEventListener("click", handleClickDeleteFav);
  }
}
//funcion para borrar  los favoritos en listado de favoritos//
function handleClickDeleteFav(event) {
  //Identifico la li de fav donde hago click
  const deleteCardFav = event.currentTarget;
  console.log(deleteCardFav);
  // Obtener la información asociada a la serie de favoritos//
  const favId = parseInt(deleteCardFav.dataset.id);
  //Buscamos si elemento clicado esta en nuestro array de favoritos
  const idFavExist = arrayFavorite.find(
    (favoritedata) => favoritedata.show.id === favId
  );
  if (idExist === undefined) {
    // El ID del array en el que se ha hecho click esta en el array de favoritos hace un filtro para eliminarlo
  } else {
    arrayFavorite = arrayFavorite.filter((fav) => fav.show.id !== favId);
  }
  renderFavorites(arrayFavorite);
}
