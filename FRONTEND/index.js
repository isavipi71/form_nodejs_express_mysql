
//prueba peticion asincrona con el fetch a la ruta que devuelve el saludi en el server:
// fetch("http://localhost:3000/saludo")
//   .then(res => res.json())
//   .then(datos => console.log(datos))

  const button = document.querySelector("button");

  button.addEventListener("click", () => {
    const servidor = document.querySelectorAll("input")[0].value;
    const username = document.querySelectorAll("input")[1].value;
    const password = document.querySelectorAll("input")[2].value;
    const baseDatos = document.querySelectorAll("input")[3].value;
 

  //Validacion de datos y contenido
  const url = "http://localhost:3000/conexion";
  fetch(url, {
    method: "post",  //el metodo que es para validar el formulario
    body: JSON.stringify({ //traemos los datos del input del html
      servidor,
      username,
      password,
      baseDatos
    }),
    headers: {'Content-Type': 'application/json'}
  })
  // respuesta
  .then(res => res.json())
  .then(mensaje => {
    document.querySelector("div").innerHTML = mensaje;
  })
});

  