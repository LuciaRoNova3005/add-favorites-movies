function renderShows() {
  let listHtml = "";
  for (const titleshow of arrayShows) {
    const idExist = arrayFavorite.find(
      (favoritedata) => favoritedata.show.id === titleshow.show.id
    );

    if (idExist !== undefined) {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows favorite show"> <i class="fas fa-thumbs-up"></i>`;
    } else {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows show"> <i class="far fa-thumbs-up"></i>`;
    }
    if (titleshow.show.image !== null) {
      listHtml += `<img class="imagen" src="${titleshow.show.image.medium}" alt="${titleshow.show.name}">`;
    } else {
      listHtml += `<img class="imagen" src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${titleshow.show.name}">`;
    }
    listHtml += `<h2 class="tittle2">${titleshow.show.name}</h2>`;
    listHtml += `</li>`;
  }
  showcontainer.innerHTML = listHtml;

  addListenShow();
}
