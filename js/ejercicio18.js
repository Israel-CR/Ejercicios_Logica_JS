// Nivel 3: Manipulación de arrays y objetos
// 2. Suma de elementos de un array: Crea un programa que sume todos los
// números de un array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// usando reduce
// const suma = array.reduce((sum, elemento) => sum + elemento);

// usando for
var suma = 0;
for (i in array) {
  suma += array[i];
}


console.log(`La suma de los valores del arreglo: ${array} es igual a: ${suma}`);
