// Creamos una lista de películas
let peliculas = [
    {nombre: "Avengers: Endgame", año: 2019, id: 1},
    {nombre: "The Dark Knight", año: 2008, id: 2},
    {nombre: "The Shawshank Redemption", año: 1994, id: 3},
    {nombre: "Forrest Gump", año: 1994, id: 4},
    {nombre: "The Godfather", año: 1972, id: 5},
  ];
  
  // Función para mostrar los datos de las películas en la tabla
  function mostrarPeliculas() {
    let tabla = document.getElementById("peliculas").getElementsByTagName('tbody')[0];
    tabla.innerHTML = "";
    peliculas.forEach(pelicula => {
      let fila = tabla.insertRow();
      fila.innerHTML = `<td>${pelicula.nombre}</td><td>${pelicula.año}</td><td>${pelicula.id}</td><td><button onclick="eliminar(${pelicula.id})">Eliminar</button></td>`;
    });
  }
  
// Función para ordenar las películas por nombre en orden ascendente
function ordenarAscendente() {
    peliculas.sort((a, b) => a.nombre.localeCompare(b.nombre));
    mostrarPeliculas();
  }
  
  // Función para ordenar las películas por nombre en orden descendente
  function ordenarDescendente() {
    peliculas.sort((a, b) => b.nombre.localeCompare(a.nombre));
    mostrarPeliculas();
  }
  
  // Función para eliminar una película por su Id
  function eliminar(id) {
    peliculas = peliculas.filter(pelicula => pelicula.id !== id);
    mostrarPeliculas();
  }
  
  // Función para mostrar todas las películas en el formato especificado
  function mostrar() {
    let resultado = peliculas.map(pelicula => `Pelicula: ${pelicula.nombre}(${pelicula.año})<br>`).join("");
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  // Mostramos las películas al cargar la página
  mostrarPeliculas();
  