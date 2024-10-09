// Nivel 3: Manipulación de arrays y objetos
// 1. Array invertido: Escribe un programa que invierta el orden de los elementos
// en un array y lo imprima.



const arreglo=["Adal","Jaime","Israel","Elvin","Nancy"]


console.log("los valores del array original son: " + arreglo)

// usando el metodo .reverse()
// arreglo.reverse()

var Ainvertido=[]

// usando el ciclo for

for(i= arreglo.length -1 ;i>=0;i--){
    Ainvertido.push(arreglo[i])
}


console.log("el array invertido es: "+ Ainvertido)