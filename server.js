const express = require("express"); // importar el framework de Express
const mysql = require('mysql'); // importar el paquete MySQL 
const cors = require("cors");
const server = express();
const port = 3000;

//Configuracion

server.use(express.json());
server.use(cors());

//RUTAS
server.get("/saludo", (req, res) => {
    res.json("Hola Mundo");
});

// CREO LA CONEXION
server.post("/conexion", (req, res) => {
const datos = req.body;

//Conexion MYSQL
const conexion = mysql.createConnection({
        host: datos.servidor,
        user: datos.username,
        password: datos.password,
        database: datos.baseDatos
      });

      conexion.connect(err => {
        if (err) {
          res.json('Error en la conexion MySQL: ' + err);
        } else {
          res.json('Conexión correcta a MySQL!');
        }
      });
    });
      

      //LEVANTAR EL PUERTO

server.listen(port, () => {
    console.log("Servidor corrriendo por el puerto: " + port);
});

