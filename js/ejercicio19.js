// Nivel 3: Manipulación de arrays y objetos
// 3. Array de números pares: Escribe un programa que filtre los números pares de
// un array.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9,10,11,200];
var arrayPares = [];



// usando filter
arrayPares= array.filter(elemento => elemento % 2 === 0);

// usando for
// for (i in array) {
//   if (array[i] % 2 === 0) {
//     arrayPares.push(array[i]);
//   }
// }

console.log(arrayPares);
