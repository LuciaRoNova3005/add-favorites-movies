//Pinta las tarjetas de favoritos se ejecuta con el click en la tarjeta

function renderFavorites() {
  let listFavorite = "";
  for (const favfilm of arrayFavorite) {
    listFavorite += `<li class="fav">`;

    if (favfilm.show.image !== null) {
      listFavorite += `<img src="${favfilm.show.image.medium}" alt="${favfilm.show.name}" height="150px">`;
    } else {
      listFavorite += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${favfilm.show.name}" height="150px">`;
    }
    listFavorite += `<h2>${favfilm.show.name}</h2>`;
    listFavorite += `<div data-id="${favfilm.show.id}"  class="js-shows container-delete"><p class="text">Elimina</p></div>`;
    listFavorite += `</li>`;
  }
  favoritecontainer.innerHTML = listFavorite;
  addListenShow();
}
