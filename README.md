# Add Favorites Movies

## ¿En qué consiste este proyecto?

![image](https://user-images.githubusercontent.com/81588630/139118167-22311981-ed9a-4915-adc0-0dc98aa6ef9c.png)


## Aplicación de búsqueda
La aplicación de búsqueda de series consta de dos partes:

. Un campo de texto y un botón para buscar series por su título.<br>
. Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.


Por cada show contenido en el resultado de la búsqueda hay que pintar una tarjeta donde mostramos una imagen de la serie y el título.
En el caso de que el API no devuelva imagen para alguna serie, esta debe mostrar una imagen de relleno.

## Favoritos
Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son nuestras series
favoritas al ahcer click <br>
Para ello, al hacer clic sobre una serie debe pasar lo siguiente:<br>
La serie marcada aparece marcada como favorita.
Hay que mostrar un listado, debajo del formulario de búsqueda, con las series favoritas.<br>
Las series favoritas deben seguir apareciendo aunque la usuaria realice otra búsqueda.

![image](https://user-images.githubusercontent.com/81588630/139119946-3d635ede-b800-4260-816c-f3c08d73cb63.png)



## Estructura básica La aplicación de búsqueda de series consta de dos partes:

Un campo de texto y un botón para buscar series por su título.<br>
Un listado de resultados de búsqueda donde aparece el cartel de la serie y el título.<br>
Búsqueda Al hacer clic sobre el botón de Buscar, la aplicación debe conectarse al API abierto de TVMaze para la búsqueda de series y construir la URL de búsqueda recogiendo el texto que ha introducido la usuaria en el campo de búsqueda.<br>

Favoritos Una vez aparecen los resultados de búsqueda, la usuaria puede indicar cuáles son sus series favoritas.

## Borrar favoritos

Al hacer clic sobre el icono de eliminar al lado de cada favorito, hay que borrar el favorito clicado de la lista y del localStorage.<br>
Poder añadir/quitar como favorito al hacer clic sobre una serie. Si realizamos una nueva búsqueda y sale una serie que ya es favorita, aparezca ya resaltada en los resultados de búsqueda.<br>

Incluir al final de la lista de favoritos un botón para borrar todos los favoritos a la vez.<br>


## Almacenamiento local
Las series favoritas deben seguir apareciendo aunque la usuaria realice otra búsqueda.<br>
Almacenamiento local Hay que almacenar el listado de favoritos en el localStorage. De esta forma, al recargar la página el listado de favoritos se debe mostrarse.

### Afinar la maquetación responsive


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

### ¿Consideras que puedo aplicar alguna mejora?
Si has detectado un problema o consideras que alguna cosa puede mejorarse, estaría encantada de que habras un nuevo issue y conocer tu opinión, cada mejora es importante, muchas gracias.
