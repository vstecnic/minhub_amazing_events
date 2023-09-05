let parametros = new URLSearchParams(window.location.search)
let id =parametros.get("id")
let contenedorTarjetas = document.getElementById("contenido")


let tarjetaDetail = buscarCardDetail(id)
console.log(tarjetaDetail)

mostrarTarjeta(tarjetaDetail, contenedorTarjetas)

function mostrarTarjeta(tarjeta, ubicacion){
   
    ubicacion.innerHTML = crearCard(tarjeta)
}

function crearCard(objeto){
  return    `<div class="card" style="width: 18rem;" >
   <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text">Category: ${objeto.category}</b> <br> <b>Date: </b>${objeto.date}
        <br> <b>Category: </b>${objeto.category}</p>
        <a href="./pages/details.html?id=${objeto._id}" class="btn btn-primary">More Info...</a>
    </div>
</div>` 
}

// function crearCard(objeto){
//     return    `<div class="card" style="width: 18rem;" >
//      <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
//           <h5 class="card-title">${objeto.name}</h5>
//           <p class="card-text">${objeto.category}</b> <br> <b>Date: </b>${objeto.date}</p>
//           <a href="./pages/details.html?id=${objeto._id}" class="btn btn-primary">More Info...</a>
//       </div>
//   </div>` 
//   }

// function mostrarTarjeta(elemento, contenedor){
//      contenedor.innerHTML = crearCard(elemento)
//  }

 function buscarCardDetail(id){
    return data.events.find(elemento =>elemento.id==id)
    
 }
