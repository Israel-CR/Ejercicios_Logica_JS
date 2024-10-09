// Nivel 4: Funciones
// 3. Factorial: Escribe una función que calcule el factorial de un número.

function factorial(numero) {
  if (numero === 0) {
    return 1;
  } else {
    return numero * factorial(numero - 1);
  }
}


const numero=parseInt(prompt("Escribe un numero para calcular el factorial"))

alert(`el factorial de ${numero} es: ${factorial(numero)}`)
