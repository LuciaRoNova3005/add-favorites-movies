function renderShows() {
  let listHtml = "";
  for (const titleshow of arrayShows) {
    // Obtener la información asociada a la serie
    // Buscar si la tarjeta clickada está en el array de favoritos

    const idExist = arrayFavorite.find(
      (favoritedata) => favoritedata.show.id === titleshow.show.id
    );
    // Si la tarjeta en la que hacemos click no está en el array de favoritos me añades la clase//
    if (idExist !== undefined) {
      listHtml += `<li  data-id="${titleshow.show.id}" class="js-shows favorite">`;
    } else {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows">`;
    }
    if (titleshow.show.image !== null) {
      listHtml += `<img src="${titleshow.show.image.medium}" alt="">`;
    } else {
      listHtml += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="">`;
    }
    listHtml += `<h2>${titleshow.show.name}</h2>`;
    listHtml += `</li>`;
  }
  showcontainer.innerHTML = listHtml;

  addListenShow();
}
