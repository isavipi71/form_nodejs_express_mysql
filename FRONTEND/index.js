fetch("http://localhost:3000/saludo")
  .then(res => res.json())
  .then(datos => console.log(datos))