import app from './app.js';

import {PORT} from './config.js';  //traigo el archivo con las variables de entorno

app.listen(PORT); //quiero que escuches en el puerto 3000
//al ejecutar este archivo se quedará ejecutando porque esta escuchando, es decir esta un servidor activo
console.log("server esta ejecutandose en el puerto", PORT);











