let paises = [...new Set(datos.map(elemento => elemento.country))]
    console.log(paises);
    paises.forEach(pais => {
        let fila = {
            pais: pais,
            totalCurrency: 0,
            totalRange: 0,
        }

        let sumaCurrency = 0
        let datosPorPais = datos.filter(elemento => elemento.country == pais)
        datosPorPais.forEach(elemento => sumaCurrency+= +elemento.currency)
        fila.totalCurrency = sumaCurrency






















function traerDatos2() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing%22)
    .then((response) => response.json())
    .then((dataAPI) => {
      dataAPI.events = dataAPI.events.filter(event => event.date > dataAPI.currentDate);
      console.log(dataAPI.events);
      data2 = dataAPI.events;
      filtrarEventosYCalcularTotal("Food");
      filtrarEventosYCalcularTotal("Books");
      filtrarEventosYCalcularTotal("Party");
      filtrarEventosYCalcularTotal("Race")
      filtrarEventosYCalcularTotal("Concert");
      filtrarEventosYCalcularTotal("Museum");
    });
}
PAST EVENTS
function traerDatos3() {
  fetch("https://mindhub-xj03.onrender.com/api/amazing%22)
    .then((response) => response.json())
    .then((dataAPI) => {
      dataAPI.events = dataAPI.events.filter(event => event.date < dataAPI.currentDate);
      console.log(dataAPI.events);
      data3 = dataAPI.events;
      filtrarEventosYCalcularTotal("Food");
      filtrarEventosYCalcularTotal("Museum");
      filtrarEventosYCalcularTotal("Concert");
      filtrarEventosYCalcularTotal("Race")
      filtrarEventosYCalcularTotal("Books");
      filtrarEventosYCalcularTotal("Cinema");
      filtrarEventosYCalcularTotal("Party");
    });
}
el data 2 y el data 3 lo declaré antes de las respectivas funciones como variables vacias para poder asignarles parametros/argumentos en las funciones
EXACTO
la funcion  filtrarEventosYcalcularTotal es una funcion que une 2 funciones previas: Una que me filtre los eventos por categoria, y otra que una vez filtrados los eventos me calcule el ingreso total por categoria (precio * cantidad de asistentes o estimados)