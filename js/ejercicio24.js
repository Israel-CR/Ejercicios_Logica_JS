// Nivel 4: Funciones
// 1. Funciones básicas: Escribe una función que reciba dos números como
// parámetros y devuelva su suma.


function suma(a, b) {
         return a + b;}

    const num1=prompt("Escribe el primer numero: ")
    const num2=prompt("Escribe el segundo numero: ")

alert(`La suma de ${num1} y ${num2} es igual a: ${ suma(parseFloat(num1), parseFloat(num2)) }`)