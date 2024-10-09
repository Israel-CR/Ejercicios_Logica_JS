// Nivel 5: Temas intermedios
// 4. Clases básicas: Crea una clase Persona con propiedades nombre y edad , y un
// método que salude con el nombre de la persona.


class Persona{
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;

    }
    saludar() {
       return `Hola ${this.nombre}!!`
    }
}






const persona=new Persona("Israel", 22)

console.log(persona.saludar())
