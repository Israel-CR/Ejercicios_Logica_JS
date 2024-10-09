// Nivel 4: Funciones
// 2. Funciones y condicionales: Crea una función que reciba un número y
// devuelva true si es par y false si es impar.

function isPar(numero) {
  if (numero % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


const numero=parseInt(prompt("Ingrese un número: "));

alert(isPar(numero) ? "el numero es par": "el numero es impar")


