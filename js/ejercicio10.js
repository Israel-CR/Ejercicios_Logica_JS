// Nivel 1: Fundamentos
// 10. Acceder a un array: Crea un programa que modifique el tercer valor de un
// array y luego imprima el array completo.

var array= [1,2,3,4,5,6,7,8]

console.log("el array original tenia los siguientes valores: "+ array)

var valor = prompt("escribe el valor que remplazar el tercer valor del array")
array[2]=valor


console.log("se modifico el tercer valor con "+valor+" ahora el array tiene los siguientes valores: "+ array)

