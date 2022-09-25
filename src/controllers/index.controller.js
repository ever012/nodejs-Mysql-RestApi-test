import { pool } from "../db.js";  //cuando son modulos propios se pone .js, cuando son modulos de tercero NO SE PONE
export const ping = async (req, res) => {
    //se usa {} cuando se quieren escribir varias lineas
    //pool.query es asincrono
    const [result] = await pool.query('SELECT "Pong" AS result');
    res.json(result[0]);
}