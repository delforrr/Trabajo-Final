document.getElementById("boton_registro").addEventListener("click", register);
document
  .getElementById("boton_iniciar-sesion")
  .addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

// Declarando variables...
let formulario_inicio_registro = document.querySelector(
  ".formulario_inicio-registro"
);
let formulario__inicio = document.querySelector(".formulario_inicio");
let formulario__registro = document.querySelector(".formulario_registro");
let apartado_inicio = document.querySelector(".apartado-inicio");
let apartado_registro = document.querySelector(".apartado-registro");


function anchoPagina() {
  if (window.innerWidth > 850) {
    apartado_inicio.style.display = "block";
    apartado_registro.style.display = "block";
  } else {
    apartado_registro.style.display = "block";
    apartado_registro.style.opacity = "1";
    apartado_inicio.style.display = "none";
    formulario__inicio.style.display = "block";
    formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "0px";
  }
}

anchoPagina();

function iniciarSesion() {
  if (window.innerWidth > 850) {
    formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "-10px";
    formulario__inicio.style.display = "block";
    apartado_registro.style.opacity = "1";
    apartado_inicio.style.opacity = "0";
  } else {
    formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "0";
    formulario__inicio.style.display = "block";
    apartado_registro.style.display = "block";
    apartado_inicio.style.display = "none";
  }
}

function register() {
  if (window.innerWidth > 850) {
    formulario__registro.style.display = "block";
    formulario_inicio_registro.style.left = "500px";
    formulario__inicio.style.display = "none";
    apartado_registro.style.opacity = "0";
    apartado_inicio.style.opacity = "1";
  } else {
    formulario__registro.style.display = "block";
    formulario_inicio_registro.style.left = "0px";
    formulario__inicio.style.display = "none";
    apartado_registro.style.display = "none";
    apartado_inicio.style.display = "block";
    apartado_inicio.style.opacity = "1";
  }
}




// Definir las traducciones
const traducciones = {

  ingles: {
              "titulo": "Home/Register",
              "pregunta-cuenta": "Already have an account?",
              "inicia-sesion": "Log in to access the page",
              "boton-iniciar": "Log In",
              "pregunta-registro": "Don't have an account yet?",
              "registra-iniciar": "Register to be able to log in",
              "boton-registro": "Register",
              "inicio-sesion": "Log In",
              "boton-iniciar-sesion": "Log In",
              "registro": "Register",
              "boton-registro": "Create Account",
              "conectate": "Connect!",
              "placeholder-correo": "Email Address",
              "placeholder-contrasena": "Password",
              "placeholder-nombre-completo": "Full Name",
              "placeholder-usuario": "Username",
              "comentario": "Sarasúa Santiago",
              "comentario2":"Faustina Grande",
              "comentario3":"Delfor Vicondo Grosso",
              "comentario 4": "Aaron Chiastellino Gabriel Fernandez",
              "comentario 5": "Micaela Lugo" 
          },
espanol: {
    "titulo": "Inicio/registro",
    "pregunta-cuenta": "¿Ya tienes una cuenta?",
    "inicia-sesion": "Inicia sesión para entrar a la página",
    "boton-iniciar": "Inicia sesión",
    "pregunta-registro": "¿Aún no tienes una cuenta?",
    "registra-iniciar": "Regístrate para que puedas iniciar sesión",
    "boton-registro": "Registrarse",
    "inicio-sesion": "Iniciar sesión",
    "boton-iniciar-sesion": "Inicia sesión",
    "registro": "Regístrarse",
    "boton-registro": "Crear Cuenta",
    "conectate": "¡CONÉCTATE!",
    "placeholder-correo": "Correo Electrónico",
  "placeholder-contrasena": "Contraseña",
  "placeholder-nombre-completo": "Nombre Completo",
  "placeholder-usuario": "Usuario",
  "comentario": "Sarasúa Santiago",
  "comentario2":"Faustina Grande",
  "comentario3":"Delfor Vicondo Grosso",
  "comentario 4": "Aaron Chiastellino Gabriel Fernandez",
  "comentario 5": "Micaela Lugo" 
}

};

// Modificando la función para cambiar el idioma
function cambiarIdioma(idioma) {
 
  const elementos = document.querySelectorAll("[data-traduccion]");

  elementos.forEach((elemento) => {
    const clave = elemento.getAttribute("data-traduccion");
    if (traducciones[idioma][clave]) {
      elemento.textContent = traducciones[idioma][clave];
    }
  });
}

//  idioma predeterminado
cambiarIdioma("espanol");

// Obtener los botones de idioma y asignarles funciones de cambio de idioma
const botonesIdioma = document.querySelectorAll("#idiomas button");

botonesIdioma.forEach((boton) => {
  boton.addEventListener("click", () => {
    const idioma = boton.id;
    cambiarIdioma(idioma);
  });
});


botonesIdioma.forEach((boton) => {
  boton.addEventListener("click", () => {
    const idioma = boton.id;
    cambiarIdioma(idioma);
    // También, cambia los placeholders de los campos de entrada
    const placeholders = traducciones[idioma];
    document.querySelector('input[name="usuario"]').setAttribute("placeholder", placeholders["placeholder-usuario"]);
    document.querySelector('input[name="nombre_completo"]').setAttribute("placeholder", placeholders["placeholder-nombre-completo"]);
        // Cambiar los placeholders de los campos de entrada en el formulario de inicio de sesión
        document.querySelector('form#incioForm input[name="correo"]').setAttribute("placeholder", placeholders["placeholder-correo"]);
        document.querySelector('form#incioForm input[name="contrasena"]').setAttribute("placeholder", placeholders["placeholder-contrasena"]);
        // Cambiar los placeholders de los campos de entrada en el formulario de registro
        document.querySelector('form#registroForm input[name="correo"]').setAttribute("placeholder", placeholders["placeholder-correo"]);
        document.querySelector('form#registroForm input[name="contrasena"]').setAttribute("placeholder", placeholders["placeholder-contrasena"]);
      });
    });