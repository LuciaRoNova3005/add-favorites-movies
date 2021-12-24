# Add Favorites Movies

# Statement and requirements of the exercise
This exercise consists of a series search engine where you can select your favorite series and save them in localstorage<br>
![image](https://user-images.githubusercontent.com/81588630/139118167-22311981-ed9a-4915-adc0-0dc98aa6ef9c.png)

### INDEX
1. [Data structure](##Data-structure)
2. [Search application](##Search-application)
3. [Favorite](##Favorite)
4. [Delete favorites](##Delete-favorites)
5. [Local Storage](##Local-storage


## 1. Data Structure

```
src
 ├─ api // los ficheros de esta carpeta se copian en public/api/
 |  └─ data.json
 ├─ images
 |  └─ logo.jpg
 ├─ js // the files in this folder are concatenated in the main.js file and this is saved in public / main.js
 |  ├─ 00-constans.js
 |  └─ 02-rendershow.js
 |  └─ 03-search.js
 |  └─ 04-fav.js
 |  └─ 05-renderFav.js
 |  └─ 07-localstorage.js
 |  └─ 08-reset.js
 |
 ├─ scss
 |  ├─ core
 |  ├─ layout
 |└─ mains.scss
 └─ html
    └─ partials

```
## 2. Search application
The series search application consists of two parts:
. A text field and a button to search for series by title. <br>
. A list of search results where the poster of the series and the title appear.

For each show contained in the search result, a card must be painted where we show an image of the series and the title.<br>
In the case that the API does not return an image for some series, it must show a fill image.

## 3. Favorites
Once the search results appear, the user can indicate which are our series
favorites when you click <br>
To do this, when clicking on a series the following must happen: <br>
The marked series is marked as a favorite.
You have to show a list, below the search form, with your favorite series. <br>
Favorite series should continue to appear even if the user performs another search.

![image](https://user-images.githubusercontent.com/81588630/139119946-3d635ede-b800-4260-816c-f3c08d73cb63.png)


## Delete favorite
Include a button at the end of the favorites list to delete all favorites at once. (included localstorage) <br>

By clicking on the delete icon next to each favorite, you have to delete the clicked favorite from the list and from the localStorage. <br>
Being able to add / remove as a favorite by clicking on a series. If we do a new search and a series that is already a favorite comes up, it will appear already highlighted in the search results. <br>
![image](https://user-images.githubusercontent.com/81588630/147356192-d9be299b-e5d4-4c97-8f1b-24a2003f847f.png)

## Local Storage
Favorite series should continue to appear even if the user performs another search. <br>
Local storage The list of favorites must be stored in the localStorage. In this way, when reloading the page the list of favorites should be shown.

## Technologies:
 JS / SCSS

## STAR IN LOCAL

### Clone this repository on your computer.

Install the package and its dependencies using:

### npm install

Once the installation is complete you will find that a folder named node_modules / has been added.<br>

Finally, run the following command to load a local server and be able to do the visualization.

### npm start

NOTE: It is necessary to have NodeJS installed

### npm run docs
Build the production app in the `docs` folder. \ <br>
Correctly bundles React in production mode and optimizes build for best performance.

## File flow with Gulp

These Gulp tasks produce the following file stream:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Our **gulpfile.js** uses the `config.json` configuration file with the paths of the files to generate / observe.<br>

In this way we separate the actions that are in `gulpfile.js` from the configuration of the actions that are in` config.json`.


## Do you think I can apply any improvement?
If you have come this far, and you have detected a problem or consider that something can be improved, <br> 
I would be delighted if you open a new issue and get your opinion, each improvement is important and necessary for me, thank you very much for your time.
