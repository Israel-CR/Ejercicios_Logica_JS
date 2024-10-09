// Nivel 2: Interacción con el usuario
// 6. Palíndromos: Pide al usuario ingresar una palabra y determina si es un
// palíndromo (se lee igual al derecho y al revés).

// Ejemplo: "radar" es un palíndromo.

let palabra=prompt("escribe una palabra")

// la palabra se convierte en un array, se invierte, y se convierte a un texto
// let palabraInvertida = palabra.split("").reverse().join("");

// usando for
let palabraInvertida = "";
for (let i = palabra.length - 1; i >= 0; i--) {
    palabraInvertida+=palabra[i];
}



if(palabra===palabraInvertida){
    alert(`la palabra ${palabra} es un palindromo`)
}else{
    alert("la palabra no es un palindromo")
}
