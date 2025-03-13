// Seleccionamos los elementos del DOM
const guardarBtn = document.getElementById("guardar");
const listaNotas = document.getElementById("lista-notas");
const notaInput = document.getElementById("nota");

// Cargar notas desde LocalStorage cuando la página se carga
document.addEventListener("DOMContentLoaded", cargarNotas);

// Función para cargar las notas guardadas en LocalStorage
function cargarNotas() {
    const notas = JSON.parse(localStorage.getItem("notas")) || [];
    notas.forEach((nota) => {
        const li = document.createElement("li");
        li.textContent = nota; // Establecemos el texto de la nota
        listaNotas.appendChild(li); // Agregamos la nota a la lista
    });
}

// Función para guardar la nota cuando el usuario haga clic en "Guardar Nota"
guardarBtn.addEventListener("click", () => {
    const nota = notaInput.value.trim(); // Obtenemos el texto de la nota

    // Si la nota no está vacía, la guardamos
    if (nota !== "") {
        const notas = JSON.parse(localStorage.getItem("notas")) || [];
        notas.push(nota); // Agregamos la nueva nota al arreglo
        localStorage.setItem("notas", JSON.stringify(notas)); // Guardamos las notas en LocalStorage

        const li = document.createElement("li");
        li.textContent = nota; // Establecemos el texto de la nueva nota
        listaNotas.appendChild(li); // Agregamos la nueva nota a la lista

        // Limpiamos el campo de texto para que el usuario pueda agregar otra nota
        notaInput.value = "";
    }
});
