import { config } from "dotenv";

config() //aqui ya estoy leyendo las variable de entorno

//process es un objeto global de node y .env alamacena todas las variables que tiene la computadora

            //utiliza uno y si no existe usa el otro
export const PORT = process.env.PORT || 300;

export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || 'localhost';
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;



