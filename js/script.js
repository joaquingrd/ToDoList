function agregarTarea() {
  let nuevaTareaTexto = document.getElementById("nuevaTarea").value;
  if (nuevaTareaTexto === "") {
    alert("Por favor, ingrese una tarea");
  } else {
    let nuevaTarea = document.createElement("li");
    nuevaTarea.textContent = nuevaTareaTexto + " ";

    let btnEliminar = document.createElement("button");
    btnEliminar.textContent = "X";

    btnEliminar.onclick = function () {
      nuevaTarea.remove();
    };

    nuevaTarea.appendChild(btnEliminar);

    document.getElementById("listaTareas").appendChild(nuevaTarea);

    document.getElementById("nuevaTarea").value = "";
  }
}
function pressEnter(event) {
  if (event.key === "Enter") {
    agregarTarea();
  }
}
