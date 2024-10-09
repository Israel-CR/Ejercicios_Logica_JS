// Nivel 5: Temas intermedios
// 2. Callbacks: Crea una función que reciba un callback. Usa el callback para
// imprimir un mensaje en la consola.



function ejecutaCallback(cb){
    cb()
}

function mostrarMnesaje(){
    console.log("Hola desde el callback")
}


ejecutaCallback(mostrarMnesaje)