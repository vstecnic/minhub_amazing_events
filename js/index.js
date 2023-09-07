const contenedor = document.getElementById('container_checks')
const buscador = document.getElementById('buscador')
let url = 'https://mindhub-xj03.onrender.com/api/amazing'
let eventos=[]

let categorias= extraerCategorias(data.events)
// pintarSwitches(categorias, contenedorCategorias)
//pintarSwitches(categorias, contenedor)


buscador.addEventListener("input", ()=>{
  let filtro1 = filtrarPorTexto(data.events, buscador.value)
  mostrarTarjetas(filtro1, contenedorTarjetas )
})

contenedor.addEventListener("change", ()=>{
  console.log("me tocaste un check!")
  let filtro1= filtrarPorCategoria(data.events)
  console.log(filtro1)
  mostrarTarjetas(filtro1,contenedorTarjetas)
 
  })



function crearSwitch(dato){
     return `<div class="form-check form-switch col">
                 <input class="form-check-input" type="checkbox" role="switch" id="${dato}" value="${dato}">
                 <label class="form-check-label" for="${dato}">${dato}</label>
            </div>`
 }

function pintarSwitches(arregloDeDatos, contenedor){ 
      let html = ''
      arregloDeDatos.forEach(elemento => {
      html += crearSwitch(elemento)
    })
    contenedor.innerHTML = html
}

 function extraerCategorias(arreglo){
     return arreglo.map(elemento => elemento.category).filter((categoria,indice, categorias) => categorias.indexOf(categoria) === indice)
 }

// filtros de categorías y de input search:
      // Filtrado de texto----

function filtrarPorTexto(arreglo, texto){
  let arregloFiltrado = arreglo.filter(elemento => elemento.name.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.description.toLowerCase().includes(texto.trim().toLowerCase()) || elemento.category.toLowerCase().includes(texto.trim().toLowerCase()))
  return arregloFiltrado
}

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
         <p class="card-text">Category: ${objeto.category}</b> <br> <b>Date: </b>${objeto.date}
         <br> <b>Category: </b>${objeto.category}</p>
         <a href="./pages/details.html?id=${objeto._id}" class="btn btn-primary">More Info...</a>
     </div>
 </div>` 
 }

  fetch(url)
       .then(response=> response.json())
       .then(data=>{
        console.log(data)
        eventos = data.events
        pintarSwitches(categorias, contenedor)
        mostrarTarjetas(eventos, contenedorTarjetas)
       })
        
        
       // 
    
  
  //respuestaDelServidor => respuestaDelServidor.json(){
  //         console.log(datosDeInternet.events)
  //         eventos = datosDeInternet.events
  //         console.log(eventos)
  //        // createCheckboxes(datosDeInternet.results)
  //        // pintarSwitches(categorias, contenedor)
  //         console.log(datosDeInternet);

  // mostrarTarjetas(eventos, contenedorTarjetas)

.catch(error => console.log(error))

