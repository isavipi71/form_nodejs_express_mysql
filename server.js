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
const conexion = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'form_conection'
      });

      conexion.connect(err => {
        if (err) {
          console.log('Error en la conexion MySQL: ' + err);
        } else {
          console.log('Conexión correcta a MySQL!');
        }
      });
      

      //LEVANTAR EL PUERTO

server.listen(port, () => {
    console.log("Servidor corrriendo por el puerto: " + port);
});

