//Pinta las tarjetas de favoritos se ejecuta con el click en la tarjeta

function renderFavorites() {
  let listFavorite = "";
  for (const favfilm of arrayFavorite) {
    listFavorite += `<li class="fav">`;

    if (favfilm.show.image !== null) {
      listFavorite += `<img src="${favfilm.show.image.medium}" alt="">`;
    } else {
      listFavorite += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="">`;
    }
    listFavorite += `<h2>${favfilm.show.name}</h2>`;
    listFavorite += `<button data-id="${favfilm.show.id}"  class="js-shows">Borrar este favorito</button>`;
    listFavorite += `</li>`;
  }
  favoritecontainer.innerHTML = listFavorite;
  addListenShow();
}
