function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `//api.tvmaze.com/search/shows?q=${wordSearch}`;
  fetch(url)
    .then((resultShow) => resultShow.json())
    .then((showsData) => {
      arrayShows = showsData;
      //Pinto el array//
      renderShows(arrayShows);
    })

    .catch((error) => console.log("Inténtalo de nuevo más tarde", error));
}

//Escucha el boton el click y ejecuta la función del fecth y esta pinta las peliculas//
searchButton.addEventListener("click", handlerSearch);
