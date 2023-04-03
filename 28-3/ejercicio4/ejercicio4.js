function convertirAMayusculas(array) {
    // Usamos map para crear un nuevo array con los strings convertidos a mayúsculas

    return array.map(function(elemento) {
      return elemento.toUpperCase();
    });
    
  }