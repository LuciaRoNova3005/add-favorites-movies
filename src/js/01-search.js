searchButton.addEventListener("click", handlerSearch);

function handlerSearch() {
  const wordSearch = search.value.toLowerCase();
  const url = `http://api.tvmaze.com/search/shows?q=${wordSearch}`;
  console.log(url);
  fetch(url)
    .then((result) => result.json())
    .then((data) => {
      for (let i = 0; i < data.length; i++) {
        let nameShow = data[i].show.name;
        showcontainer.innerHTML += `<h2>${nameShow}</h2>`;
      }
    });
}
