let url = "https://mindhub-xj03.onrender.com/api/amazing";
let eventos = [];
let eventosUpcoming = [];
let arrayCategory = [];
let fecha = '';
let pastEvents= [];
let upcomingEvents= [];
let fechaUpcoming=[];
let arraySegundaTabla=[]
let arrayTercerTabla=[];
let datosTabla2= [];
let datosTabla3= [];

eventStatics();
upcomingStatics();
pastStatics();

//////********    OK ************* */
function eventStatics() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      eventos = data.events;

      extraerDatosPrimeraTabla(eventos);
      pintarEstadisticas();
    })

    .catch((error) => console.log(error));
}
//////*************** OK  *********/
function upcomingStatics() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      upcomingEvents = data.events.filter(elem=>elem.date > data.currentDate)
      console.log(upcomingEvents)
      
      extraerDatosSegundaTabla(upcomingEvents);
      pintarEstadisticasSegundaTabla(upcomingEvents);
    })

    .catch((error) => console.log(error));
}

//////*************** OK  *********/
function pastStatics() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        pastEvents =  data.events.filter(elem=>elem.date < data.currentDate)
        console.log(pastEvents)

        extraerDatosTerceraTabla(pastEvents);
        pintarEstadisticasTerceraTabla(pastEvents);
      })
  
      .catch((error) => console.log(error));
  }

let largerCapacity = []; //new york --- mayor capacity ny2023
let primerosLista = [];
let mayorAtendance = []; //metallica
let menorAtendance = []; //jurasic park

// Funciones:
//*** REVENUES (Ganancia): Suma de la (asistencia o estimado) * precio de cada evento, de cada categoría. */
//*** PERCENTAGE OF ATTENDANCE (Porcentaje de asistencia): (asistencia o estimado)* 100 / capacidad de cada evento, de cada categoría. */

function extraerDatosPrimeraTabla(datos) {
  datos.sort(
    (a, b) =>
      (b.assistance * 100) / b.capacity - (a.assistance * 100) / a.capacity
  );
  mayorAtendance.push(datos[0]);

  datos.sort(
    (a, b) =>
      (a.assistance * 100) / a.capacity - (b.assistance * 100) / b.capacity
  );
  menorAtendance.push(datos[0]);

  eventos.sort((a, b) => b.capacity - a.capacity);
  largerCapacity.push(datos[0]);

  datos.sort((a, b) => a.list - b.list);
  primerosLista.push(datos[0]);
}

function pintarEstadisticas() {
  let html = "";
  for (let i = 0; i < primerosLista.length; i++) {
    html += `<tr>
                    <td>${mayorAtendance[i].name}</td>
                      <td>${menorAtendance[i].name} </td>
                      <td>${largerCapacity[i].name}</td>                
                 </tr>`;
  }
  tabla.innerHTML = html;
}

function extraerDatosSegundaTabla(datos) {

  let categorias = [...new Set(datos.map(elemento => elemento.category))]
  console.log(categorias);
  categorias.forEach(categoria => {
      let arraySegundaTabla = {
          categoria: categoria,
          revenues: 0,
          percentage: 0,
      }
      console.log (arraySegundaTabla)
      let sumaRevenues = 0
      let datosPorCategoria = datos.filter(elemento => elemento.category == categoria)
      datosPorCategoria.forEach(elemento => sumaRevenues+= +elemento.estimate * elemento.price)
      arraySegundaTabla.revenues = sumaRevenues
      console.log(sumaRevenues)

      let sumaPercentage = 0
      datosPorCategoria.forEach(elemento => sumaPercentage +=(elemento.estimate*100)/elemento.capacity )
      arraySegundaTabla.percentage = sumaPercentage / datosPorCategoria.length
      console.log(sumaPercentage)


      datosTabla2.push(arraySegundaTabla)
  })
  console.log()


}

function pintarEstadisticasSegundaTabla() {
  let html = "";
  datosTabla2.forEach(arraySegundaTabla => html += `<tr>
                                                       <td>${arraySegundaTabla.categoria}</td>
                                                       <td>$${arraySegundaTabla.revenues.toFixed(2)}</td>
                                                       <td>${arraySegundaTabla.percentage.toFixed(2)} %</td>
                                                    </tr>`
    )
  tablaUpcoming.innerHTML = html;
}


function extraerDatosTerceraTabla(datos) {
  
  let categorias = [...new Set(datos.map(elemento => elemento.category))]
  console.log(categorias);
  categorias.forEach(categoria => {
      let arrayTerceraTabla = {
          categoria: categoria,
          revenues: 0,
          percentage: 0,
      }
      console.log (arrayTerceraTabla)
      let sumaRevenues = 0
      let datosPorCategoria = datos.filter(elemento => elemento.category == categoria)
      datosPorCategoria.forEach(elemento => sumaRevenues+= +elemento.assistance * elemento.price)
      arrayTerceraTabla.revenues = sumaRevenues
      console.log(sumaRevenues)

      let sumaPercentage = 0
      datosPorCategoria.forEach(elemento => sumaPercentage +=(elemento.assistance*100)/elemento.capacity )
      arrayTerceraTabla.percentage = sumaPercentage / datosPorCategoria.length
      console.log(sumaPercentage)


      datosTabla3.push(arrayTerceraTabla)
  })
  console.log()


  }
  
  function pintarEstadisticasTerceraTabla() {
    let html = "";
    datosTabla3.forEach(arrayTerceraTabla => html += `<tr>
                                                          <td>${arrayTerceraTabla.categoria}</td>
                                                          <td>${arrayTerceraTabla.revenues.toFixed(2)} </td>
                                                          <td>${arrayTerceraTabla.percentage.toFixed(2)} %</td>                
                                                     </tr>`
    )
    tabla3Past.innerHTML = html;
  }
  