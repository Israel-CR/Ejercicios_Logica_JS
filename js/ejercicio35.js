// Nivel 5: Temas intermedios
// 6. Objetos y métodos: Crea un objeto que represente una calculadora con
// métodos para sumar, restar, multiplicar y dividir.


class Calculadora  {
    constructor(num1, num2){
        this.num1=num1;
        this.num2=num2;
    }
  
    sumar() {
      return parseInt(this.num1) + parseInt(this.num2);
    }
    restar() {
      return parseInt(this.num1) - parseInt(this.num2);
    }
    multiplicar() {
      return parseInt(this.num1) * parseInt(this.num2);
    }
  
    dividir() {
      if (this.num2 !== 0) {
        return parseInt(this.num1) / parseInt(this.num2);
      } else {
        throw new Error("No se puede dividir entre cero");
      }
    }
  };

  const num1=10;
  const num2=2;

  const calc = new Calculadora(num1, num2);

  console.log(`la suma de ${num1} mas ${num2} es:${calc.sumar()}`)
  console.log(`la resta de ${num1} menos ${num2} es:${calc.restar()}`)
  console.log(`la multiplicacion de ${num1} por ${num2} es:${calc.multiplicar()}`)
  console.log(`la division de ${num1} entre ${num2} es:${calc.dividir()}`)
  
