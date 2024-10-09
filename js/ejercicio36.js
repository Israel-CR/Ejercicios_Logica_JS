// Nivel 6: Manejo del DOM 🚀
// 1. Manipulación del DOM: Crea un programa que cambie el texto de un párrafo
// en una página HTML al hacer clic en un botón.

const boton= document.getElementById("btn1");

const texto=document.getElementById("texto");


boton.addEventListener('click',(e)=>{
    texto.innerText="Aprendiendo a manipular el DOM"

})
