// Nivel 4: Funciones
// 6. Contar vocales: Crea una función que cuente cuántas vocales hay en una
// palabra.

function contarVocales(palabra) {
  const vocales = ["a", "e", "i", "o", "u"];
  var contador = 0;

  for (let letra of palabra.toLowerCase()) {
    if (vocales.includes(letra)) {
      contador++;
    }
  }
  return contador;
}

const palabra="Hola Mundo"


console.log(`la palabra: ${palabra} tiene ${contarVocales(palabra)} vocales`)
