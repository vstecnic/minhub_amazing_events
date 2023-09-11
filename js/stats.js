let url = 'https://mindhub-xj03.onrender.com/api/amazing'
let eventos=[]
let arrayCategory= []

fetch(url)
  .then(response=> response.json())
  .then(data=>{
  console.log(data)
  eventos = data.events
  

  extraerDatosPrimeraTabla(eventos)
  pintarEstadisticas()
})

.catch(error => console.log(error))



let masPlatudos = []
let primerosLista = []
let porcentageDePlata = []


function extraerDatosPrimeraTabla(datos) {
    eventos.sort((a, b) =>   b.assistance - a.assistance)
    masPlatudos.push(datos[0], datos[1], datos[2])

    datos.sort((a, b) => a.list - b.list)
    primerosLista.push(datos[0], datos[1], datos[2])

    datos.sort((a, b) => ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity))
    porcentageDePlata.push(datos[0], datos[1], datos[2])

}

function pintarEstadisticas() {
    let html = ''
    for (let i = 0; i < primerosLista.length; i++) {
        html += `<tr>
                     <td>${masPlatudos[i].name} con $${masPlatudos[i].currency}</td>
                     <td>${primerosLista[i].name} ${primerosLista[i].list}°</td>
                     <td>${porcentageDePlata[i].name}</td>
                 </tr>`
    }
    tabla.innerHTML = html
}
