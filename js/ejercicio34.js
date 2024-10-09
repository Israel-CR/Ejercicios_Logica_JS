// Nivel 5: Temas intermedios
// 5. Herencia: Crea una clase Estudiante que herede de Persona y agregue la
// propiedad grado . Agrega un método para imprimir el grado.
class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
  }
  saludar() {
    console.log(`Hola ${this.nombre}!!`);
  }
}

class Estudiante extends Persona {
  constructor(nombre, edad, grado) {
    super(nombre, edad);
    this.grado = grado;
  }

  mostrarGrado() {
    console.log(`El estudiante ${this.nombre} esta en ${this.grado}`);
  }
}

const estudiante = new Estudiante('Israel', 22, 'Decimo cuatrimestre');

estudiante.mostrarGrado()

estudiante.saludar()




