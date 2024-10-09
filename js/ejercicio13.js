// Nivel 2: Interacción con el usuario
// 3. Número par o impar: Escribe un programa que pida un número al usuario y
// diga si es par o impar.

let numero = prompt("Escribe un numero");

// Verificar que se ha ingresado un numero
if (isNaN(numero)) {
    alert("Debes ingresar un número");
}else{
    if (numero % 2 === 0) {
    alert("el numero es par");
  } else {
    alert("el numero es impar");
  }
}


  

