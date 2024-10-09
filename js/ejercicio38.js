// Nivel 6: Manejo del DOM 🚀
// 3. Eliminar elementos del DOM: Crea un programa que elimine el último
// elemento de una lista ul cuando se haga clic en un botón.

const boton = document.getElementById("btn");
const lista = document.getElementById("lista");

boton.addEventListener("click", (e) => {
  const confirmar = confirm("estas apunto de eliminar un elemento");

  if (confirmar) {
    const ultimoelemento = lista.lastElementChild;
    lista.removeChild(ultimoelemento);
  }
});
