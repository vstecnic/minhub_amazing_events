let contenedorTarjetas = document.getElementById("contenido")

mostrarTarjetas(data.events, contenedorTarjetas)

function mostrarTarjetas(datosGenerales, ubicacion){
    let tarjetas =""
    for (objeto of datosGenerales){
        tarjetas += crearCard(objeto)
    }
    contenido.innerHTML = tarjetas
}

function crearCard(objeto){
    return    `<div class="card" style="width: 18rem;" >
    <img src="${objeto.image}" class="card-img-top p-2" alt="...">
    <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text">${objeto.category}</p>
        <a href="./pages/details.html" class="btn btn-primary">More Info</a>
    </div>
</div>` 
}