window.addEventListener("load", () => {
  const form = document.querySelector("#formTareas");
  const input = document.querySelector("#inputTareas");
  const list_el = document.querySelector("#tareas");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarea = input.value;

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

    const tarea_editar_el = document.createElement("button");
    tarea_editar_el.classList.add("editar");
    tarea_editar_el.innerText = "Editar";

    const tarea_borrar_completado_el = document.createElement("button");
    tarea_borrar_completado_el.classList.add("borrar");
    tarea_borrar_completado_el.innerText = "Completado";

    tarea_actions_el.appendChild(tarea_editar_el);
    tarea_actions_el.appendChild(tarea_borrar_completado_el);

    tarea_el.appendChild(tarea_actions_el);

    list_el.appendChild(tarea_el);

    input.value = "";

    tarea_editar_el.addEventListener("click", (e) => {
      if (tarea_input_el.hasAttribute("readonly")) {
        tarea_input_el.removeAttribute("readonly");
        tarea_input_el.focus();
        tarea_editar_el.innerText = "Guardar";
      } else {
        tarea_input_el.setAttribute("readonly", "readonly");
        tarea_editar_el.innerText = "Editar";
      }
    });

    tarea_borrar_completado_el.addEventListener("click", (e) => {
      if (tarea_borrar_completado_el.innerText.toLowerCase() === "completado") {
        // Tachamos el contenido en pantalla
        tarea_input_el.style.textDecoration = "line-through";
        // Cambiamos el botón a "Borrar"
        tarea_borrar_completado_el.innerText = "Borrar";
        // Ocultamos el botón de "Editar"
        tarea_editar_el.style.display = "none";
      } else {
        // Si el botón es "Borrar", eliminamos la tarea
        list_el.removeChild(tarea_el);
      }
    });
  });
});

// DISPLAY CALENDARIO

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

  // Display the month and year in the h5 element
  añoMesActualElement.textContent = `${nombreMesActual} (${añoActual})`;

  // Clear the previous calendar content
  calendarBody.innerHTML = "";

  // Generate the calendar
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

// Initial call to the function to generate the calendar
generarCalendario();

// Consejos

const consejos = {
  1: "¡Ahora podés dejar tus sugerencias en la sección de contacto!",
  2: "¡No te olvides de chequear las demás páginas en la barra de navegación!",
  3: "Recordá que no podés editar las tareas una vez completadas.",
  4: "Proximamente podrás guardar tus tareas cuando recargues la página.",
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
