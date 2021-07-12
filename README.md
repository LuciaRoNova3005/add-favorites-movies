# Add Favorites Movies

# ¿En qué consiste este proyecto?

![image](https://user-images.githubusercontent.com/81588630/124917070-ad271a00-dff3-11eb-93da-7f0f29de3a25.png)


# Aplicación de búsqueda
La aplicación de búsqueda de series consta de dos partes:

. Un campo de texto y un botón para buscar series por su título.
. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.

## Favoritos
Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son nuestras series
favoritas. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:
El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda,
con las series favoritas. Os recomendamos crear un variable o constante de tipo array en JS para
almacenar las series favoritas.
Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.

## Almacenamiento local


# ¿Quieres trabajar en este repositorio? 

## Clona este repositorio en tu equipo.

Realiza la instalación del paquete y sus dependencias mediante:

### npm install

Una vez finalizada la instalación encontrarás que se ha añadido una carpeta denominada node_modules/.

Por último, ejecuta el siguiente comando para que cargue un servidor local y poder hacer la visualización:

### npm start

NOTA: Es necesario tener instalado NodeJS

## Flujo de archivos con Gulp

Estas tareas de Gulp producen el siguiente flujo de archivos:

![Gulp flow](./gulp-flow.png)

## `gulpfile.js` y `config.json`

Nuestro **gulpfile.js** usa el fichero `config.json` de configuración con las rutas de los archivos a generar / observar.

De esta manera separarmos las acciones que están en `gulpfile.js` de la configuración de las acciones que están en `config.json`.

## Estructura de carpetas

La estructura de carpetas:

```
src
 ├─ images
 ├─ js // los ficheros de esta carpeta se concatenan en el fichero main.js y este se guarda en public/main.js
 |  ├─ main.js
 |      └─ 00-constans.js
        └─ 02-rendershow.js
        └─ 03-search.js
        └─ 04-fav.js
        └─ 05-renderFav.js
 ├─ scss
 |  ├─ core
 |  ├─ layout
 └─ html
    └─ partials
```

## Enunciado y requisitos del ejercicio

El ejercicio consiste en desarrollar una aplicación web de búsqueda de series de TV, que nos permite des/marcar las series como favoritas y guardarlas en local storage. El ejercicio también tiene una parte de maquetación con HTML y Sass.

## Estructura básica La aplicación de búsqueda de series consta de dos partes:

Un campo de texto y un botón para buscar series por su título.
Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.
Búsqueda Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de TVMaze para la búsqueda de series y construir la URL de búsqueda recogiendo el texto que ha introducido la usuaria en el campo de búsqueda.

Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen de la serie y el título.
En el caso de que el API no devuelva imagen para alguna serie, esta debe mostrar una imagen de relleno.
Favoritos Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus series favoritas. Para ello, al hacer clic sobre una serie debe pasar lo siguiente:

El color de fondo y el de fuente se intercambian, indicando que es una serie favorita.
Hay que mostrar un listado en la parte izquierda de la pantalla, debajo del formulario de búsqueda, con las series favoritas.
Las series favoritas deben seguir apareciendo a la izquierda aunque la usuaria realice otra búsqueda.
Almacenamiento local Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.

## BONUS: Borrar favoritos

Al hacer clic sobre el icono de una 'x' al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.
Poder añadir/quitar como favorito al hacer clic sobre una serie del lado de la derecha. Y que, si realizamos una nueva búsqueda y sale una serie que ya es favorita, aparezca ya resaltada en los resultados de búsqueda (con colores de fondo y texto intercambiados).
Incluir al final de la lista de favoritos un botón para borrar todos los favoritos a la vez.
BONUS: Afinar la maquetación Una vez terminada la parte de interacción, podemos centrarnos en la parte de maquetación donde tenemos libertad para decidir los estilos.

¿Consideras que puedo aplicar alguna mejora?
Si has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que habras un nuevo issue y conocer tu opinión, cada mejora es importante, muchas gracias.
