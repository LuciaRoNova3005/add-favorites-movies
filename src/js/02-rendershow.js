function renderShows(showsData) {
  let listHtml = "";
  for (const titleshow of showsData) {
    if (titleshow.show.image !== null) {
      listHtml += `<li class="js-shows"> <img src="${titleshow.show.image.medium}" alt=""> <h2>${titleshow.show.name}</h2></li>`;
    } else {
      listHtml += `<li class="js-shows"> <img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt=""> <h2>${titleshow.show.name}</h2></li>`;
    }
    showcontainer.innerHTML = listHtml;
  }
  addListenShow();
}
