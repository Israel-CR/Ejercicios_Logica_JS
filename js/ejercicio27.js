// Nivel 4: Funciones
// 4. Promedio de un array: Crea una función que reciba un array de números y
// devuelva su promedio.

const arreglo = [10, 10, 8, 9, 10];

function promedio(array) {
  const suma = arreglo.reduce((sum, valor) => sum + valor);
  const promedio = suma / array.length;
  return promedio;
}


console.log(`el promedio de los valores ${arreglo} es: ${promedio(arreglo)}`)
