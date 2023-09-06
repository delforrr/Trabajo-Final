document.getElementById("boton_registro").addEventListener("click", register);
document.getElementById("boton_iniciar-sesion").addEventListener("click", iniciarSesion);
window.addEventListener("resize", anchoPagina);

// Declarando variables... 
let formulario_inicio_registro = document.querySelector(".formulario_inicio-registro");
let formulario__inicio = document.querySelector(".formulario_inicio");
let formulario__registro = document.querySelector(".formulario_registro");
let apartado_inicio = document.querySelector(".apartado-inicio");
let apartado_registro = document.querySelector(".apartado-registro");

function anchoPagina ()                                       
 {if (window.innerWidth > 850) {
    apartado_inicio.style.display = "block";
    apartado_registro.style.display = "block";
} else{
    apartado_registro.style.display = "block";
    apartado_registro.style.opacity = "1";
    apartado_inicio.style.display = "none";
    formulario__inicio.style.display = "block";
    formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "0px";} }


anchoPagina();

function iniciarSesion () 
{   if(window.innerWidth > 850) { formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "-10px";
    formulario__inicio.style.display = "block";
    apartado_registro.style.opacity = "1";
    apartado_inicio.style.opacity = "0";} 
    
    else{ formulario__registro.style.display = "none";
    formulario_inicio_registro.style.left = "0";
    formulario__inicio.style.display = "block";
    apartado_registro.style.display = "block";
    apartado_inicio.style.display = "none";}
   }


   function register () 
   { if(window.innerWidth > 850){ formulario__registro.style.display = "block";
   formulario_inicio_registro.style.left = "600px";
   formulario__inicio.style.display = "none";
   apartado_registro.style.opacity = "0";
   apartado_inicio.style.opacity = "1";} 
   
   else{ formulario__registro.style.display = "block";
   formulario_inicio_registro.style.left = "0px";
   formulario__inicio.style.display = "none";
   apartado_registro.style.display = "none";
   apartado_inicio.style.display = "block";
   apartado_inicio.style.opacity = "1";
   }
      }