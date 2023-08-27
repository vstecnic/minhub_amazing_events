let contenedorTarjetas = document.getElementById("contenido")

//asigno en una variable la fecha de referencia de la api data : "2023-01-01"
let Date= data.currentDate

mostrarTarjetas(data.events, contenedorTarjetas)

//dentro de la función de mostrarTarjetas, indico dentro del bucle que la fecha de cada objeto recorrido por el FOR sea comparado
//si es menor a la fecha de referencia guardada en la variable DATE, si es así, publica la tarjeta correspondiente en la página
//Past Events.

function mostrarTarjetas(datosGenerales, ubicacion){
    let tarjetas =""
    for (objeto of datosGenerales){
         if (objeto.date > Date){
            tarjetas += crearCard(objeto)
        }else{console.log("cards no visibles por fechas no correspondidas a la página actual...")}
    }
    contenido.innerHTML = tarjetas
}

function crearCard(objeto){
    return    `<div class="card" style="width: 18rem;" >
    <img src="${objeto.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text"><b>${objeto.category}</b> <br> <b>Date: </b>${objeto.date}</p>
        <a href="../pages/details.html" class="btn btn-primary">More Info...</a>
    </div>
</div>` 
}