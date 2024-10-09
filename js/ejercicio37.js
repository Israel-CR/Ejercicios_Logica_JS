// Nivel 6: Manejo del DOM 🚀
// 2. Crear elementos en el DOM: Escribe un programa que añada un nuevo
// elemento li a una lista ul en HTML al hacer clic en un botón.

const boton= document.getElementById("btn1");

const lista=document.getElementById("lista");



boton.addEventListener('click',(e)=>{

    const newTexto=prompt("Escribe lo que quieres agregar a la lista;")

    lista.innerHTML+= `<li>${newTexto}</li>`

})