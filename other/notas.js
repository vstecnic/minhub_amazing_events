

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cambio de Color de Fondo</title>
</head>
<body id="main-body" class="dark">
    <div class="form-check form-switch">
        <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
        <label class="form-check-label theme_mode_switch" for="flexSwitchCheckDefault" id="theme_mode_switch">☾ / ☼</label>
    </div>

    <script src="tu-archivo-de-javascript.js"></script>
</body>
</html>
**********************

// Obtén una referencia al checkbox y al body
const checkbox = document.getElementById("flexSwitchCheckDefault");
const body = document.getElementById("main-body");

// Agrega un event listener para detectar el cambio en el estado del checkbox
checkbox.addEventListener("change", function () {
    if (checkbox.checked) {
        // Si el checkbox está marcado, cambia la clase del body a "light"
        body.className = "light";
    } else {
        // Si el checkbox no está marcado, vuelve a la clase "dark"
        body.className = "dark";
    }
});

*************************
.dark {
    background-color: #333; /* Color oscuro de fondo */
    color: #fff; /* Color de texto claro */
}

.light {
    background-color: #fff; /* Color claro de fondo */
    color: #333; /* Color de texto oscuro */
}
*************************

