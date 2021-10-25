function renderFavorites() {
  let listFavorite = "";
  for (const favfilm of arrayFavorite) {
    listFavorite += `<li class="fav">`;

    if (favfilm.show.image !== null) {
      listFavorite += `<img class="imagenFav" src="${favfilm.show.image.medium}" alt="${favfilm.show.name}" height="150px">`;
    } else {
      listFavorite += `<img class="imagenFav" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${favfilm.show.name}" height="150px">`;
    }
    listFavorite += `<h2 class="fav-tittle2">${favfilm.show.name}</h2>`;
    listFavorite += ` <i data-id="${favfilm.show.id}"  class="js-shows fas fa-trash-alt"></i>`;
    listFavorite += `</li>`;
  }
  favoritecontainer.innerHTML = listFavorite;
  addListenShow();
}
