searchButton.addEventListener("click", handlerSearch);

let globalShows = [];
let favorite = [];

function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `//api.tvmaze.com/search/shows?q=q=${wordSearch}`;
  console.log(url);
  fetch(url)
    .then((resultShow) => resultShow.json())
    .then((showsData) => {
      globalShows = showsData;
      localStorage.setItem("show", JSON.stringify(globalShows));
      console.log(globalShows);
      renderShows(globalShows);
    })

    .catch((error) => console.log("Inténtalo de nuevo más tarde", error));
}
