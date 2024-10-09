// Nivel 4: Funciones
// 5. Máximo y mínimo en un array: Escribe una función que encuentre el valor
// más grande y el más pequeño en un array de números.


const numeros = [1, -4, 2, 3,12, 4, 5, 6, 7, 8, 9];

function MaxAndMin(arr) {
    let max = arr[0];
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      } else if (arr[i] < min) {
        min = arr[i];
      }
    }
  
    return { max, min };
  }

  ({max, min} = MaxAndMin(numeros));


  console.log(`del areglo [${numeros}], el numero minimo es: ${min} y el maximo: ${max} `)