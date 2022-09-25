//const express = require("express"); //esto se conoce como los modulos commond js de node

//le digo, quiero importar express desde express
//para evitar errores de compatibilidad con node, en package.json se coloca en cualquier parte: "type":"module",
import express from 'express'; //esto se conoce como ECMAScript modules  //cuando son modulos propios se pone .js, cuando son modulos de tercero NO SE PONE
import employeesRouter from './routes/employees.route.js';
import indexRouter from './routes/index.route.js';

const app = express(); //ejecute express

app.use(express.json());  //esto es IMPORTANTE para que las node entienda cuando recibe un json

app.use(indexRouter);
app.use('/api',employeesRouter); //le digo a express que use "employeesRouter"


//si el cliente intenta ingresar con una ruta que no existe entonces le aparecerá el siguiente mensaje
app.use((req, res, next) => {//peticion middleware
    res.status(404).json({
        message: "Endpoint not found"
    }) 
});



export default app;









