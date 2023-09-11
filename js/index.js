const contenedor = document.getElementById('container_checks')
const buscador = document.getElementById('buscador')
let url = 'https://mindhub-xj03.onrender.com/api/amazing'
let eventos=[]
let arrayCategory= []

fetch(url)
  .then(response=> response.json())
  .then(data=>{
  console.log(data)
  eventos = data.events
  
  createCheckboxes(data.events)
  
  mostrarTarjetas(eventos, contenedorTarjetas)

})

.catch(error => console.log(error))


buscador.addEventListener("input", ()=>{
  let filtro1 = filtrarPorCategoria(eventos)
  let filtro2 = filtrarPorTexto(filtro1, buscador.value)
  
  mostrarTarjetas(filtro2, contenedorTarjetas )
})

 contenedor.addEventListener("change", ()=>{
   console.log("me tocaste un check!")
   let filtro1= filtrarPorCategoria(eventos)
  //  let filtro2= filtrarPorTexto(buscador.value,filtro1)
   console.log(filtro1)
   mostrarTarjetas(filtro1,contenedorTarjetas)
   })


function createCheckboxes(arreglo){
  let html = ''
  let Checks = [...new Set(arreglo.map(elemento => elemento.category))]
  Checks.forEach(check => html+= createCheckbox(check))
  contenedor.innerHTML = html
}
function createCheckbox(categoria){
  return `<div class="form-check form-switch col">
              <input class="form-check-input" type="checkbox" role="switch" id="${categoria}" value="${categoria}">
              <label class="form-check-label text-white" for="${categoria}">${categoria}</label>
          </div>`
}

console.log(arrayCategory)


// filtros de categorías y de input search:
// Filtrado de texto----

function filtrarPorTexto(arreglo, texto){
  let arregloFiltrado = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.category.toLowerCase().includes(texto.trim().toLowerCase()))
  return arregloFiltrado
}



//**igual a filtroxespecies */
function filtrarPorCategoria(arreglo){
  let checkboxes= Array.from(document.getElementsByClassName("form-check-input"))
  let checkAzules = checkboxes.filter( check => check.checked)
  let valoresChecks = checkAzules.map(check => check.value)
  if(valoresChecks.length==0){
    return arreglo
  }
    let arregloFiltrado = arreglo.filter(objeto => valoresChecks.includes(objeto.category))
    return arregloFiltrado
}

//** pintar tarjetas  */
 let contenedorTarjetas = document.getElementById("contenido")


// mostrarTarjetas(data.events, contenedorTarjetas)

 function mostrarTarjetas(datosGenerales, ubicacion){
  if(datosGenerales.length == 0){
    ubicacion.innerHTML = `<h2 class = "display-2 fw-bolder text-white text-center bg-danger - rounded-3">No se encontraron resultados para ésta busqueda</h2>`
    return
  }   
  let tarjetas =""
     for (objeto of datosGenerales){
       tarjetas += crearCard(objeto)
     }
     ubicacion.innerHTML = tarjetas
 }

function crearCard(objeto){
   return    `<div class="card" style="width: 18rem;" >
    <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
         <h5 class="card-title">${objeto.name}</h5>
         <p class="card-text"><b>Date: </b>${objeto.date}
         <br> <b>Category: </b>${objeto.category}</p>
         <a href="./pages/details.html?id=${objeto._id}" class="btn btn-primary">More Info...</a>
     </div>
 </div>` 
 }
 function crearSwitch(dato){
  return `<div class="form-check form-switch col">
              <input class="form-check-input" type="checkbox" role="switch" id="${dato}" value="${dato}">
              <label class="form-check-label" for="${dato}">${dato}</label>
         </div>`
}
