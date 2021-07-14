function renderShows() {
  let listHtml = "";
  for (const titleshow of arrayShows) {
    const idExist = arrayFavorite.find(
      (favoritedata) => favoritedata.show.id === titleshow.show.id
    );

    if (idExist !== undefined) {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows favorite show">`;
    } else {
      listHtml += `<li data-id="${titleshow.show.id}" class="js-shows show">`;
    }
    if (titleshow.show.image !== null) {
      listHtml += `<img src="${titleshow.show.image.medium}" alt="${titleshow.show.name}">`;
    } else {
      listHtml += `<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${titleshow.show.name}">`;
    }
    listHtml += `<h2>${titleshow.show.name}</h2>`;
    listHtml += `</li>`;
  }
  showcontainer.innerHTML = listHtml;

  addListenShow();
}
