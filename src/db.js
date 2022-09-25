import {createPool} from "mysql2/promise";
import {DB_HOST,DB_PORT,DB_USER,DB_PASSWORD,DB_DATABASE} from './config.js';  //traigo el archivo con las variables de entorno

//tiene 2 createConnection(es para mantener 1 solo hilo de conexion)
// createPool(es como un conjunto de conexiones que podemos reutilizar o utilizar en produccion facilmente)

export const pool = createPool({//esto es como create conection
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    database: DB_DATABASE
});






