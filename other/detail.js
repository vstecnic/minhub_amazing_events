//let parametros = new URLSearchParams(window.location.search)


function buscarCardDetail(id){
    let eventoEncontrado = data.events.find(elemento =>elemento._id==id)
    console.log(eventoEncontrado)
    return eventoEncontrado
 }

function crearCard(objeto){
  return    `<div class="card" style="width: 18rem;" >
   <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
        <h5 class="card-title">${objeto.name}</h5>
        <p class="card-text"> <b>Category: </b>${objeto.category}</b> 
        <p class="card-text"><b>Description: </b> ${objeto.description}</b> 
        <p class="card-text"><b>Place: </b>${objeto.place}</b> 
        <p class="card-text"><b>Capacity: </b>${objeto.capacity}</b> 
        <p class="card-text"><b>Estimate: </b>${objeto.estimate}</b> 
        <p class="card-text"><b>price: </b>${objeto.price}</b> 
        
    </div>
</div>` 
}
function mostrarTarjeta(tarjeta, ubicacion){
   
    ubicacion.innerHTML = crearCard(tarjeta)
}

