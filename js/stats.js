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


let masPlatudos = []  //new york
let primerosLista = [] //new york
let mayorAtendance = [] //metallica
let menorAtendance = []

function extraerDatosPrimeraTabla(datos) {

    datos.sort((a, b) => ((b.assistance * 100) / b.capacity) - ((a.assistance * 100) / a.capacity))
    mayorAtendance.push(datos[0])


    datos.sort((a, b) => ((a.assistance * 100) / a.capacity) - ((b.assistance * 100) / b.capacity))
    menorAtendance.push(datos[0])

     eventos.sort((a, b) =>   b.assistance - a.assistance)
     masPlatudos.push(datos[0])

     datos.sort((a, b) => a.list - b.list)
     primerosLista.push(datos[0])

   

}

function pintarEstadisticas() {
    let html = ''
    for (let i = 0; i < primerosLista.length; i++) {
        html += `<tr>
                    <td>${mayorAtendance[i].name}</td>
                      <td>${menorAtendance[i].name} </td>
                      <td>${primerosLista[i].name}</td>
                      
                      
                 </tr>`
    }
    tabla.innerHTML = html
}
