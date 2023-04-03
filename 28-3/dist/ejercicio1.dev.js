"use strict";

var condiciones = [{
  condicion: "Debe haber pelota",
  valor: true
}, {
  condicion: "El equipo A tiene 11 jugadores",
  valor: true
}, {
  condicion: "El equipo B tiene 11 jugadores",
  valor: false
}, {
  condicion: "Todos los jugadores son mayores de 18",
  valor: true
}, {
  condicion: "Las condiciones climaticas son buenas",
  valor: false
}];
onInit();

function onInit() {
  var impedimentos = condiciones.filter(function (o) {
    return !o.valor;
  });
  var divCondicion = document.getElementById("condicion-partido");
  var h1Condicion = document.getElementById("condicion-partido-bool");

  if (impedimentos.length > 0) {
    h1Condicion.textContent = "No";
    impedimentos.forEach(function (e) {
      var item = document.createElement("h4");
      item.textContent = e.condicion;
      divCondicion.appendChild(item);
    });
  } else {
    h1Condicion.textContent = "Si";
  }
}