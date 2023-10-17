window.addEventListener("load", () => {
  const form = document.querySelector("#formTareas");
  const input = document.querySelector("#inputTareas");
  const list_el = document.querySelector("#tareas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarea = input.value;
    const iconoEditar =
      '<img src="./imágenes/edit-2-svgrepo-com.png" height="25">';
    const iconoBorrar =
      '<img src="./imágenes/trash-xmark-svgrepo-com.png" height="25">';
    const iconoCarpeta =
      '<img src="./imágenes/folder-svgrepo-com.png" height="25">';

    const tarea_el = document.createElement("div");
    tarea_el.classList.add("tarea");

    const tarea_content_el = document.createElement("div");
    tarea_content_el.classList.add("contenido");

    tarea_el.appendChild(tarea_content_el);

    const tarea_input_el = document.createElement("input");
    tarea_input_el.classList.add("texto");
    tarea_input_el.type = "text";
    tarea_input_el.value = tarea;
    tarea_input_el.setAttribute("readonly", "readonly");

    tarea_content_el.appendChild(tarea_input_el);

    const tarea_actions_el = document.createElement("div");
    tarea_actions_el.classList.add("acciones");

    const tarea_carpeta_el = document.createElement("button");
    tarea_carpeta_el.classList.add("carpeta-button");
    tarea_carpeta_el.innerHTML = iconoCarpeta; // Icono de la carpeta

    tarea_el.appendChild(tarea_carpeta_el);

    const tarea_editar_el = document.createElement("button");
    tarea_editar_el.classList.add("editar");
    tarea_editar_el.innerHTML = iconoEditar;

    const tarea_borrar_completado_el = document.createElement("button");
    tarea_borrar_completado_el.classList.add("borrar");
    tarea_borrar_completado_el.innerHTML = iconoBorrar;

    tarea_actions_el.appendChild(tarea_editar_el);
    tarea_actions_el.appendChild(tarea_borrar_completado_el);

    tarea_el.appendChild(tarea_actions_el);

    list_el.appendChild(tarea_el);

    input.value = "";

    const carpetas = [
      document.querySelector("#carpeta1"),
      document.querySelector("#carpeta2"),
      document.querySelector("#carpeta3"),
    ];

    tarea_carpeta_el.addEventListener("click", () => {
      const opcion = prompt("Selecciona una carpeta (1, 2 o 3):");

      if (opcion === "1" || opcion === "2" || opcion === "3") {
        const carpeta = carpetas[opcion - 1];

        carpeta.appendChild(tarea_el);
      } else {
        alert("Opción inválida. Ingresa 1, 2 o 3.");
      }
    });

    tarea_editar_el.addEventListener("click", (e) => {
      if (tarea_input_el.hasAttribute("readonly")) {
        tarea_input_el.removeAttribute("readonly");
        tarea_input_el.focus();
        tarea_editar_el.innerHTML = iconoEditar;
      } else {
        tarea_input_el.setAttribute("readonly", "readonly");
        tarea_editar_el.innerHTML = iconoEditar;
      }
    });

    tarea_borrar_completado_el.addEventListener("click", (e) => {
      if (
        tarea_borrar_completado_el.innerHTML ===
        '<img src="./imágenes/trash-xmark-svgrepo-com.png" height="25">'
      ) {
        tarea_input_el.style.textDecoration = "line-through";
        tarea_borrar_completado_el.innerHTML = "Borrar";
        tarea_editar_el.style.display = "none";
      } else {
        list_el.removeChild(tarea_el);
      }
    });
  });
});

// Borrar tareas

const botonLimpiarTareas = document.getElementById("limpiarTareas");
botonLimpiarTareas.addEventListener("click", () => {
  const tareas = document.querySelectorAll(".tarea");

  tareas.forEach((tarea) => {
    tarea.remove();
  });
});

// Calendario

const calendarBody = document.getElementById("calendar-body");
const añoMesActualElement = document.getElementById("current-month-year");

function generarCalendario() {
  const hoy = new Date();
  const mesActual = hoy.getMonth();
  const añoActual = hoy.getFullYear();
  const diasDelMes = new Date(añoActual, mesActual + 1, 0).getDate();
  const primerDiaDelMes = new Date(añoActual, mesActual, 1).getDay();

  const meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Deciembre",
  ];
  const nombreMesActual = meses[mesActual];

  añoMesActualElement.textContent = `${nombreMesActual} (${añoActual})`;

  calendarBody.innerHTML = "";

  let fecha = 1;
  for (let row = 0; row < 6; row++) {
    const newRow = document.createElement("tr");
    for (let col = 0; col < 7; col++) {
      const newCell = document.createElement("td");
      if (row === 0 && col < primerDiaDelMes) {
        newCell.textContent = "";
      } else if (fecha > diasDelMes) {
        break;
      } else {
        newCell.textContent = fecha;
        if (
          fecha === hoy.getDate() &&
          mesActual === hoy.getMonth() &&
          añoActual === hoy.getFullYear()
        ) {
          newCell.classList.add("hoy");
        }
        fecha++;
      }
      newRow.appendChild(newCell);
    }
    calendarBody.appendChild(newRow);
  }
}

generarCalendario();

// Consejos

const consejos = {
  1: "¡Ahora podés dejar tus sugerencias en la sección de contacto!",
  2: "¡No te olvides de chequear las demás páginas en la barra de navegación!",
  3: "Recordá que no podés editar las tareas una vez completadas.",
  4: "¡Podés usar las carpetas para guardar tus tareas rutinarias!",
  5: "Probá diferentes estrategias para la gestión del tiempo y descubrí el mejor método para vos.",
  6: "Cuidado! Evita realizar varias tareas a la vez para ver un mejor resultado.",
  7: "Prioriza el trabajo importante.",
  8: "Establece objetivos claros y alcanzables en un tiempo razonable.",
  9: "Dedicarte tiempo a ti mismo ayuda a recargar energías y mantenerte activo.",
  10: "¡Cuidado! El botón de limpiar elimina todas las tareas en pantalla.",
};

function consejoAleatorio() {
  const consejosKeys = Object.keys(consejos);
  const numeroConsejo =
    consejosKeys[parseInt(Math.random() * consejosKeys.length)];
  const consejo = consejos[numeroConsejo];

  document.querySelector("#consejo-numero").textContent = numeroConsejo;
  document.querySelector("#consejo-texto").textContent = consejo;
}

consejoAleatorio();

// Leer Fechas

const inputFecha = document.querySelector("#inputFecha");
const espacioNotificaciones = document.querySelector("#cuerpoNotificaciones");
const formulario = document.querySelector("#formTareas");

// Funciones
function verificarFechaLimite() {
  const fechaSeleccionada = new Date(inputFecha.value);
  const fechaActual = new Date();

  const diferenciaDias = Math.floor(
    (fechaSeleccionada - fechaActual) / (1000 * 60 * 60 * 24) + 2
  );

  let listItem = document.createElement("li");
  listItem.classList.add("list-group-item");
  listItem.innerHTML = `⛔ Tienes ${diferenciaDias} días para terminar una de tus tareas.`;
  espacioNotificaciones.appendChild(listItem);
}

// Eventos
formulario.addEventListener("submit", verificarFechaLimite);
