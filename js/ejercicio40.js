// Nivel 6: Manejo del DOM 🚀
// 5. Formularios: Escribe un programa que valide que un formulario tiene todos
// sus campos llenos antes de enviarlo.

const form = document.getElementById("login-form");
// obtener valores de inputs
const inputCorreo = document.getElementById("correo");
const inputPassw = document.getElementById("passw");

// mensajes de error
const errorCorreo = document.getElementById("errorCorreo");
const errorPassw = document.getElementById("errorPassw");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let correo = inputCorreo.value.trim();
  let password = inputPassw.value.trim();
  if (correo === "") {
    errorCorreo.textContent = "el correo es requerido";
    errorCorreo.style.color = "red";
  } else {
    errorCorreo.textContent = "";
  }

  if (password === "") {
    errorPassw.textContent = "La contraseña es requerida";
    errorPassw.style.color = "red";
  } else {
    errorPassw.textContent = "";
  }
  if (correo !== "" && password !== "") {
    console.log("Formulario enviado!!");
  }
});
