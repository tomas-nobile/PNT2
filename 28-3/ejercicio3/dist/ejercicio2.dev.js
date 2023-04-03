"use strict";

// Creamos una lista de películas
var peliculas = [{
  nombre: "Avengers: Endgame",
  año: 2019,
  id: 1
}, {
  nombre: "The Dark Knight",
  año: 2008,
  id: 2
}, {
  nombre: "The Shawshank Redemption",
  año: 1994,
  id: 3
}, {
  nombre: "Forrest Gump",
  año: 1994,
  id: 4
}, {
  nombre: "The Godfather",
  año: 1972,
  id: 5
}]; // Función para mostrar los datos de las películas en la tabla

function mostrarPeliculas() {
  var tabla = document.getElementById("peliculas").getElementsByTagName('tbody')[0];
  tabla.innerHTML = "";
  peliculas.forEach(function (pelicula) {
    var fila = tabla.insertRow();
    fila.innerHTML = "<td>".concat(pelicula.nombre, "</td><td>").concat(pelicula.año, "</td><td>").concat(pelicula.id, "</td><td><button onclick=\"eliminar(").concat(pelicula.id, ")\">Eliminar</button></td>");
  });
} // Función para ordenar las películas por nombre en orden ascendente


function ordenarAscendente() {
  peliculas.sort(function (a, b) {
    return a.nombre.localeCompare(b.nombre);
  });
  mostrarPeliculas();
} // Función para ordenar las películas por nombre en orden descendente


function ordenarDescendente() {
  peliculas.sort(function (a, b) {
    return b.nombre.localeCompare(a.nombre);
  });
  mostrarPeliculas();
} // Función para eliminar una película por su Id


function eliminar(id) {
  peliculas = peliculas.filter(function (pelicula) {
    return pelicula.id !== id;
  });
  mostrarPeliculas();
} // Función para mostrar todas las películas en el formato especificado


function mostrar() {
  var resultado = peliculas.map(function (pelicula) {
    return "Pelicula: ".concat(pelicula.nombre, "(").concat(pelicula.año, ")<br>");
  }).join("");
  document.getElementById("resultado").innerHTML = resultado;
} // Mostramos las películas al cargar la página


mostrarPeliculas();