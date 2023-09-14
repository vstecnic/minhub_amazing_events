// Función para cambiar el tema
function cambiarTema() {
    const body = document.getElementById("main-body");
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");

    if (body.classList.contains("dark")) {
        body.classList.remove("dark");
        header.classList.remove("dark");
        footer.classList.remove("dark");
    } else {
        body.classList.add("dark");
        header.classList.add("dark");
        footer.classList.add("dark");
    }
}

// Escucha el cambio en el checkbox
const checkbox = document.getElementById("flexSwitchCheckDefault");
checkbox.addEventListener("change", cambiarTema);