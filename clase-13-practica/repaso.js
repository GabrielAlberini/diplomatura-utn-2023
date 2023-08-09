// estructuras de control
// if -> condicional -> cuando la pc tiene que tomar una desición
// for -> bucle -> cuando la pc tiene que repetir procesos hasta cierta condicición

// let interruptor = true

// do {
//   let userName = prompt("Ingrese su nombre: ")
//   console.log("hola ", userName)

//   // true
//   if(userName){
//     interruptor = false
//   } 
// } while (interruptor); // true o false



// console.log(nombres.length) -> 5
const nombres = ["Mariano", "Alexis", "Ariel", "Marcos", "Fabrizio"]

nombres[1] // Alexis

// sintaxis -> bucle for 
// 1 - variable que indica el valor de inicio 
// 2 - condición que ejecuta el bucle hasta que esta sea false
// 3 - modificador de la variable inicial

// for (let indice = 0; indice < nombres.length; indice = indice + 1){
//   console.log(nombres[indice])
// }

// for(let i = 0; i < nombres.length; i++){
//   console.log(nombres[i])
// }

// datos primitivos -> representa un valor singular
// datos complejos/compuestos -> es un conjunto de datos


let nombre = "gabriel" // -> dato primitivo porque gabriel es único
nombre = "javier"

let array = ["string", 1, null, undefined] // -> conjunto de valores que para acceder es mediante la posición

// datos primitivos -> inmutables 

let apellido = "alberini"
apellido = "Paniagua"

const cajaDeArboles = ["fresno", "jacarandá"] // -> son mutables
cajaDeArboles.push("ceibo")
console.log(cajaDeArboles)
cajaDeArboles = "pepito"

