// Nivel 3: Manipulación de arrays y objetos
// 5. Modificar propiedades de un objeto: Crea un programa que cambie el valor
// de una propiedad de un objeto y luego lo imprima.



const coche ={marca: "Ford", modelo:"Mustang", año:1969};

// coche.año = 2021
coche["año"]=2021

console.log(
  `la marca del coche es ${coche.marca}, modelo ${coche.modelo} del año ${coche.año}`
);