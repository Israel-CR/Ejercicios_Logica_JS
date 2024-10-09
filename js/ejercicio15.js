// Nivel 2: Interacción con el usuario
// 5. Validación de entrada: Pide al usuario que ingrese un número y verifica si es
// realmente un número. Si no lo es, muestra un mensaje de error.


let num = prompt("Ingrese un número: ");
if (isNaN(num)) {
    alert("el numero ingresado no es numero");
}else{
    alert("El número ingresado es numero y es: "+ num);
}