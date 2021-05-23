searchButton.addEventListener("click", handlerSearch);

function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `http://api.tvmaze.com/search/shows?q=${wordSearch}`;
  console.log(url);
  fetch(url)
    .then((resultShow) => resultShow.json())
    .then((showsData) => {
      console.log(showsData);
      renderShows(showsData);
    })

    .catch((error) => console.log("Inténtalo de nuevo más tarde", error));
}
