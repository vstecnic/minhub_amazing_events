
let url = 'https://mindhub-xj03.onrender.com/api/amazing'
let eventos=[]
let objeto = null
let id = new URLSearchParams(window.location.search).get('id')
console.log(id);
const cardContainer = document.getElementById('cardContainer')
const contenedor = document.getElementById('contenidoDetail')

traerDatos()

function traerDatos() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            eventos= data.events
            console.log(eventos)
            cardDetail = eventos.find(elemento => elemento._id == id)
            mostrarTarjetasUpcoming(cardDetail, contenedor)
        })
}

function mostrarTarjetasUpcoming(objeto, ubicacion){
  let tarjetas =""
  tarjetas += crearCard(objeto) 
  ubicacion.innerHTML = tarjetas
}


function crearCard(objeto){
 return    `<div class="card" style="width: 18rem;" >
  <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
       <h5 class="card-title">${objeto.name}</h5>
       <p class="card-text"><b>Date: </b>${objeto.date}
       <br> <b>Category: </b>${objeto.category}</p>
       <br> <b>Description: </b>${objeto.description}</p>
       <br> <b>Place: </b>${objeto.place}</p>
       <br> <b>Capacity: </b>${objeto.capacity}</p>
       <br> <b>Estimate: </b>${objeto.estimate}</p>
       <br> <b>Price: </b>${objeto.price}</p>
   </div>
</div>` 
}