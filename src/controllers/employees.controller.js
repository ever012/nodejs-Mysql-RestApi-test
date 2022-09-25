import { pool } from "../db.js";  //cuando son modulos propios se pone .js, cuando son modulos de tercero NO SE PONE

//siempre que es una consulta a base de datos DEBE SER UNA CONSULTA ASINCRONA
export const getEmployees = async (req, res) => {
    //throw new Error('error'); es para decir, quiero crear mi propio error
    try {
        const [rows] = await pool.query("SELECT * FROM employee");
        res.send(rows); //no se coloca en llaves porque rows ya es un arreglo
    } catch (error) {
        return res.status(500).json({
            message: "something goes from/algo fue mal"
        });
    }
    };

export const getEmployee = async (req, res) => {
    //console.log(req.params); obtener parametros
    try {
        const [rows] = await pool.query('SELECT * FROM employee WHERE id = ?', [req.params.id]); //es importante que este en orden
        console.log([rows]);
        if(rows.length <= 0)
        {
            return res.status(404).json({
                message: 'Employee not found'
            });
        }
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({ //el error 500 es de error con el servidor
            message: "something goes from/algo fue mal"
        });
    }
    
};


export const createEmployees = async (req, res) => {
    const {name,salary} = req.body;
    try {
        //quiero solamente las filas(rows)
        const [rows] = await pool.query('INSERT INTO employee (name,salary) VALUES (?,?)', [name, salary]); //es importante que este en orden
        res.send({
            id: rows.insertId,
            name,
            salary}); //lo coloco en llaves para que envie un json al cliente
    } catch (error) {
        return res.status(500).json({ //el error 500 es de error con el servidor
            message: "something goes from/algo fue mal"
        });
    }
   
    
};
export const updateEmployees = async (req, res) => {
    const {id} = req.params; //esto es lo mismo que escribir "const id = req.params.id;"
    const {name,salary} = req.body;
    try {
        //IFNULL() es para decir, si yo no te paso nada, dejalo como estaba
        const [result] = await pool.query('UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = ?', [name, salary, id]);
        console.log(result);
        if(result.affectedRows === 0) return res.status(404).json({
            message: "employee not found"
        })
        const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);
        res.json(rows[0]); 
    } catch (error) {
        return res.status(500).json({ //el error 500 es de error con el servidor
            message: "something goes from/algo fue mal"
        });
    }
    
};


export const deleteEmployees = async (req, res) => {
    try {
        const [result] = await pool.query('DELETE FROM employee WHERE id = ?', [req.params.id]);
        if(result.affectedRows <=0)
        {
            return res.status(404).json({
                message: 'empleado not found'
            })
        }
        //sendStatus es como decir, te voy a enviar solo un estado, en este caso 204 significa que todo esta bien pero no devolverá nada(osea sin contenido)
        res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ //el error 500 es de error con el servidor
            message: "something goes from/algo fue mal"
        });
    }
    
};

