// filtrar 

//link api  https://mindhub-xj03.onrender.com/api/amazing
//*********formulas

//The Highest percentage of attendance
//food fair collectivies party - jurassic park - comicon -electronic fest - 10k for life - just for you kitchen - batman

//** necesito del array de data.events, me traiga/filtre todas las categorias las prop. de "estimate" y "capacity" por separado */
//** luego que de cada uno de esos filtros me indique el mayor, el menor para estimate (ok) y sólo mayor para capacity */
let info = data.events
 let estimate= extraerEstimate(data.events)
 //let valoresNumericos = filtrarNumericos(estimate);
 let valorMasAlto = encontrarValorMasAlto(estimate)
 let valorMasBajo = encontrarValorMasbajo(estimate)
 let capacity = extraerCapacity(data.events)
 let capacityMayor = encontrarValorMasAlto(capacity)

// // // /** función filtro de todos las propiedades de "estimate" y assistance */
 function extraerEstimate(arreglo){
 return arreglo.map(elemento => elemento.estimate || elemento.assistance)
 //.filter((categoria,indice, categorias) => categorias.indexOf(categoria) === indice)
 }

// // // /** ahora extraigo y coloco en un nuevo array, sólo los elementos numéricos" */
// function filtrarNumericos(arr) {
    
//     var valoresNumericos = arr.filter(function(item) {
//        return typeof item === 'number' && !isNaN(item);
//     });
  
//      return valoresNumericos;
//   }
// // // //** finalmente debo obtener el valor más alto del array y mostrarlo */

function encontrarValorMasAlto(arr) {   
    return Math.max(...arr)  // Utilizamos Math.max con el operador de propagación (spread operator) para encontrar el valor más alto en el array.     return Math.max(...arr);
  }

  function encontrarValorMasbajo(arr) {
    // Utilizamos Math.max con el operador de propagación (spread operator) para encontrar el valor más alto en el array.
    return Math.min(...arr);
  }
    
  /** Ahora filtramos todos los "capacity" */
  function extraerCapacity(arreglo){
    return arreglo.map(elemento => elemento.capacity).filter((categoria,indice, categorias) => categorias.indexOf(categoria) === indice)
  }
  



// function encontrarEventoConMayorEstimate(eventos) {
//     if (eventos.length === 0) {
//       return null; // Retorna null si el array está vacío
//     }
  
//     // Inicializa una variable para el objeto con el estimate más alto
//     let eventoConMayorEstimate = eventos[0];
  
//     // Itera a través de los eventos para encontrar el objeto con el estimate más alto
//     for (let i = 1; i < eventos.length; i++) {
//       let eventoActual = eventos[i];
//       if (eventoActual.estimate > eventoConMayorEstimate.estimate) {
//         eventoConMayorEstimate = eventoActual;
//       }
//     }
  
//     // Retorna el objeto con el estimate más alto
//     return eventoConMayorEstimate;
//   }
  
//   let eventos = data.events;
  
//   let eventoConMayorEstimate = encontrarEventoConMayorEstimate(eventos);
  
//   if (eventoConMayorEstimate) {
//     console.log("El evento con el estimate más alto es:", eventoConMayorEstimate.name);
//   } else {
//     console.log("No se encontraron eventos.")
//   }
