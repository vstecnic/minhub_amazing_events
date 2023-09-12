let url = "https://mindhub-xj03.onrender.com/api/amazing";
let eventos = [];
let arrayCategory = [];
let datosTabla2 = []

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
      fecha = data.currentDate;

      extraerDatosPrimeraTabla(eventos);
      pintarEstadisticas();
    })

    .catch((error) => console.log(error));
}
//////*************** OK  SEGUNDA TABLA*********/
function upcomingStatics() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      eventos = data.events;
      fecha = data.currentDate

      extraerDatosSegundaTabla(eventos);
      pintarEstadisticasSegundaTabla();
    })

    .catch((error) => console.log(error));
}

//////*************** OK  TERCERA TABLA *********/
function pastStatics() {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        eventos = data.events;
        // fecha = data.currentDate
  
        extraerDatosTerceraTabla(eventos);
        pintarEstadisticasTerceraTabla();
      })
  
      .catch((error) => console.log(error));
  }

let largerCapacity = []; //new york --- mayor capacity ny2023
let primerosLista = [];
let mayorAtendance = []; //metallica
let menorAtendance = []; //jurasic park
let segundosLista = [];
let tercerlosLista = [];

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
  //  if (objeto.date > fecha){

  // datos.sort(
  //   (a, b) =>
  //     (b.assistance * 100) / b.capacity - (a.assistance * 100) / a.capacity
  // );
  // mayorAtendance.push(datos[0]);
  // datos.sort(
  //   (a, b) =>
  //     (a.assistance * 100) / a.capacity - (b.assistance * 100) / b.capacity
  // );
  // menorAtendance.push(datos[0]);
  // eventos.sort((a, b) => b.capacity - a.capacity);
  // largerCapacity.push(datos[0]);

  // datos.sort((a, b) => a.list - b.list);
  // primerosLista.push(datos[0]);
  let categories = [...new Set(datos.map(elemento => elemento.category))]
  console.log(categories);
  categories.forEach(categorie => {
      let fila = {
          Categories: categorie,
          Revenues: 0,
          Attendance: 0,
      }

      let sumaRevenues = 0
      let datosPorCategories = datos.filter(elemento => elemento.category == categorie)
      datosPorCategories.forEach(elemento => sumaRevenues+= +((elemento._id) * elemento.price) )
      fila.Revenues = sumaRevenues
      console.log(sumaRevenues)

      let sumaAttendance = 0
      datosPorCategories.forEach(elemento => sumaAttendance += +((elemento._id* 100) / elemento.capacity))
      fila.Attendance = sumaAttendance
      console.log(sumaAttendance)


      segundosLista.push(fila)
  })
  console.log();
}

function pintarEstadisticasSegundaTabla() {
  let html = "";
 segundosLista.forEach(fila => html += `<tr>
    
                              <td>${fila.Categories}</td>
                              <td>${fila.Revenues} </td>
                              <td>${fila.Attendance}</td>                
                         </tr>`
                         )                      
  
  tablaUpcoming.innerHTML = html;
 
  }





function extraerDatosTerceraTabla(datos) {
  let categories = [...new Set(datos.map(elemento => elemento.category))]
  console.log(categories);
  categories.forEach(categorie => {
      let fila = {
          Categories: categorie,
          Revenues: 0,
          Attendance: 0,
      }

      let sumaRevenues = 0
      let datosPorCategories = datos.filter(elemento => elemento.category == categorie)
      datosPorCategories.forEach(elemento => sumaRevenues+= +((elemento._id) * elemento.price) )
      fila.Revenues = sumaRevenues
      console.log(sumaRevenues)

      let sumaAttendance = 0
      datosPorCategories.forEach(elemento => sumaAttendance += +((elemento.assistance + elemento.estimate* 100) / elemento.capacity))
      fila.Attendance = sumaAttendance
      console.log(sumaAttendance)


      tercerlosLista.push(fila)
  })
  console.log();
}

function pintarEstadisticasTerceraTabla() {
  let html = "";
  tercerlosLista.forEach(fila => html += `<tr>
    
                              <td>${fila.Categories}</td>
                              <td>${fila.Revenues} </td>
                              <td>${fila.Attendance}</td>                
                         </tr>`
                         )                      
  
  tablaPast.innerHTML = html;
}

