function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `//api.tvmaze.com/search/shows?q=${wordSearch}`;
  fetch(url)
    .then((resultShow) => resultShow.json())
    .then((showsData) => {
      arrayShows = showsData;
      if (arrayShows.lenght > 0) {
      } else {
      }
      renderShows(arrayShows);
    })

    .catch((error) => console.log("Inténtalo de nuevo más tarde", error));
}

searchButton.addEventListener("click", handlerSearch);
