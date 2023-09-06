let contenedorTarjetas = document.getElementById("contenido")
const contenedor = document.getElementById('container_checks')
const buscador = document.getElementById('buscador')


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

let categorias= extraerCategorias(data.events)
// pintarSwitches(categorias, contenedorCategorias)
pintarSwitches(categorias, contenedor)




function mostrarTarjetas(datosGenerales, ubicacion){
    let tarjetas =""
    for (objeto of datosGenerales){
         if (objeto.date < Date){
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