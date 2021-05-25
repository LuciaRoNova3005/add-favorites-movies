function renderFavorites() {
  let listFavorite = "";
  for (const favfilm of arrayFavorite) {
    listFavorite += `<li  data-id="${favfilm.show.id}" class="fav">`;
    if (favfilm.show.image !== null) {
      listFavorite += `<img src="${favfilm.show.image.medium}" alt="">`;
    } else {
      listFavorite += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="">`;
    }
    listFavorite += `<h2>${favfilm.show.name}</h2>`;
    listFavorite += `</li>`;
  }
  favoritecontainer.innerHTML = listFavorite;
}
