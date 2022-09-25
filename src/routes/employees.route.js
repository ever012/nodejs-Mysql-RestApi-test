import { Router } from "express";
import { getEmployees,getEmployee,createEmployees, updateEmployees, deleteEmployees } from "../controllers/employees.controller.js";

const router = Router();


//cuando visite esta ruta verá un mensaje
router.get('/employees', getEmployees);


router.get('/employees/:id', getEmployee);  //con parametro

router.post('/employees', createEmployees);

//la peticion patch es similar al put solo que patch actualiza parcialmente es decir que no es necesario enviar todos los campos a actualizar solamente los que se necesitan actualizar
//put se usa mas que todo para actulizar todos las columnas de una tabla, put actualiza las que necesitamos
router.patch('/employees/:id', updateEmployees);

router.delete('/employees/:id', deleteEmployees);


export default router;
