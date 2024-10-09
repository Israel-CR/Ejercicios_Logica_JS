// Nivel 1: Fundamentos
// 5. Comparaciones: Escribe un programa que compare dos números y diga cuál
// es mayor o si son iguales.


let num1 = prompt("escribe el valor del primer numero")
let num2 = prompt("escribe el valor del segundo numero")

if(num1===num2){
    console.log("Los dos numeros son iguales")
}else{
    if(num1>num2){
        console.log(`El número ${num1} es mayor que ${num2}`)
    }else{
        console.log(`El número ${num2} es mayor que ${num1}`)
    }

}