// Nivel 2: Interacción con el usuario
// 2. Verificación de edad: Pide al usuario su edad y muestra un mensaje
// dependiendo de si es mayor o menor de edad.


let edad= prompt("¿Cual es tu edad?")

// verificar que la edad ingresada es un numero
if (isNaN(edad)) {
    alert("Debes ingresar un número")
}else{
    if(edad>=18){
    alert("Eres mayor de edad")
}else{
    alert("Eres menor de edad")
}
}
