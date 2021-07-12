"use strict";const searchButton=document.querySelector(".js-button"),search=document.querySelector(".js-search"),showcontainer=document.querySelector(".js-showlist"),favoritecontainer=document.querySelector(".js-favoritelist");let arrayShows=[],arrayFavorite=[],arrayLocal=[];function renderShows(){let e="";for(const a of arrayShows){e+=void 0!==arrayFavorite.find(e=>e.show.id===a.show.id)?`<li data-id="${a.show.id}" class="js-shows favorite show">`:`<li data-id="${a.show.id}" class="js-shows show">`,null!==a.show.image?e+=`<img src="${a.show.image.medium}" alt="${a.show.name}">`:e+=`<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${a.show.name}">`,e+=`<h2>${a.show.name}</h2>`,e+="</li>"}showcontainer.innerHTML=e,addListenShow()}function handlerSearch(){const e=search.value.toLowerCase();fetch("//api.tvmaze.com/search/shows?q="+e).then(e=>e.json()).then(e=>{arrayShows=e,renderShows(arrayShows)}).catch(e=>console.log("Inténtalo de nuevo más tarde",e))}function addListenShow(){const e=document.querySelectorAll(".js-shows");for(const a of e)a.addEventListener("click",handleClickFav)}function handleClickFav(e){const a=e.currentTarget,o=parseInt(a.dataset.id);if(void 0===arrayFavorite.find(e=>e.show.id===o)){const e=arrayShows.find(e=>e.show.id===o);arrayFavorite.push(e)}else arrayFavorite=arrayFavorite.filter(e=>e.show.id!==o);renderFavorites(),renderShows(),savedFav()}function renderFavorites(){let e="";for(const a of arrayFavorite)e+='<li class="fav">',null!==a.show.image?e+=`<img src="${a.show.image.medium}" alt="${a.show.name}" height="150px">`:e+=`<img src="https://via.placeholder.com/210x295/ffffff/666666/?text=TV" alt="${a.show.name}" height="150px">`,e+=`<h2>${a.show.name}</h2>`,e+=`<div data-id="${a.show.id}"  class="js-shows container-delete"><p class="text">Elimina</p></div>`,e+="</li>";favoritecontainer.innerHTML=e,addListenShow()}function savedFav(){localStorage.setItem("favorites",JSON.stringify(arrayFavorite))}function getFavLocal(){let e=localStorage.getItem("favorites");null!==e&&(arrayFavorite=JSON.parse(e),renderFavorites())}function savedFav(){localStorage.setItem("favorites",JSON.stringify(arrayFavorite))}function getFavLocal(){let e=localStorage.getItem("favorites");null!==e&&(arrayFavorite=JSON.parse(e),renderFavorites())}searchButton.addEventListener("click",handlerSearch),getFavLocal(),getFavLocal();