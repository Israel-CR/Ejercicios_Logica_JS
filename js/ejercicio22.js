// Nivel 3: Manipulación de arrays y objetos
// 6. Buscar en un array: Escribe un programa que busque un valor en un array y
// muestre su posición.






  const arreglo = [
    "Juan",
    "Maria",
    "Ana",
    "Carlos",
    "Fernando",
    "Jose",
    "Patricio",
  ];

const valorBuscado = prompt(`
    de esto valores ${arreglo.join(", ")}
    Ingrese el valor para buscar su posicion `);

 posicion(valorBuscado);


//  funcion que dice la posicion de un valor si existe en el arreglo
 function posicion(valor) {
    const indice = arreglo.indexOf(valor);
    if (indice !== -1) {
      alert(`El valor ${valor} se encuentra en la posición ${indice}`);
    } else {
      alert(`El valor ${valor} no se encuentra en el arreglo`);
    }
  }