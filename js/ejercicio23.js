// Nivel 3: Manipulación de arrays y objetos
// 7. Agregar y eliminar elementos en arrays: Crea un programa que agregue un
// elemento a un array y luego elimine el último elemento.

// array original
const arreglo=["Primaria", "Secundaria", "Bachillerato"]


console.log(`array original ${arreglo}`)

// agregar un nuevo valor al principio del arreglo, se usa push para agregarlo al final
arreglo.unshift("Preescolar")

console.log(`nuevo valor agregado al principio ${arreglo}`)




// eliminar el ultimo valor del arreglo
//  usando filter
// const newArray= arreglo.filter((valor, i)=> i< arreglo.length-1)

// usando el metodo .pop()
arreglo.pop()



console.log(`arreglo con el ultimo valor eliminado ${arreglo}`)
