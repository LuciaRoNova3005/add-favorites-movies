searchButton.addEventListener("click", handlerSearch);

function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `http://api.tvmaze.com/search/shows?q=${wordSearch}`;
  console.log(url);
  fetch(url)
    .then((result) => result.json())
    .then((series) => {
      console.log(series);
    });
}
