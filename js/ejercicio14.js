// Nivel 2: Interacción con el usuario
// 4. Conversión de temperaturas: Crea un programa que convierta grados Celsius
// a Fahrenheit.

let gradoC = prompt("Escribe el grado celcuis");
// verificar que grado celcuis es un texto
if (isNaN(gradoC)) {
  alert("Debes escribir un número");
} else {
  let gradoF = (gradoC * 9) / 5 + 32;

  alert(`${gradoC}  celcuis es igual a ${gradoF.toFixed(3)} grados Fharenheit`);
}
