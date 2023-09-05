const contenedor = document.getElementById('container_checks')
const contenedorCategorias = document.getElementById('categorias')
const buscador = document.getElementById('buscador')

//category

// let categorias= extraerCategorias()
// pintarSwitches(categorias, contenedorCategorias)




// function crearSwitch(dato,tipo){
//     return `<div class="form-check form-switch col">
//                 <input class="form-check-input ${tipo}" type="checkbox" role="switch" id="${dato}" value="${dato}">
//                 <label class="form-check-label" for="${dato}">${dato}</label>
//             </div>`
// }

// function pintarSwitches(arregloDeDatos, contenedor, tipo){
//     let html = ''
//     arregloDeDatos.forEach(elemento => {
//         html += crearSwitch(elemento, tipo)
//     })
//     contenedor.innerHTML = html
// }

// function extraerCategorias(arreglo){
//     return arreglo.map(elemento => elemento.category).filter((categoria,indice, categorias) => categorias.indexOf(categoria) === indice)
// }








// let categorias = extraerCategorias(frutas)


// pintarSwitches(colores, contenedorColor, "colores")

// pintarSwitches(temporadas, contenedorTemporada, "temporadas")

// contenedorTemporada.addEventListener("change",filtroTriple)

// contenedorColor.addEventListener("change",filtroTriple)

// buscador.addEventListener("input",filtroTriple)






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
    <img src="${objeto.image}" class="card-img-top p-2" alt="...">    <div class="card-body">
         <h5 class="card-title">${objeto.name}</h5>
         <p class="card-text">${objeto.category}</b> <br> <b>Date: </b>${objeto.date}</p>
         <a href="./pages/details.html" class="btn btn-primary">More Info...</a>
     </div>
 </div>` 
 }