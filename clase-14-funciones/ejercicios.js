//Crear una función que cuente la cantidad de veces que aparece un elemento en un array. Recibe un array y un elemento como parámetros y devuelve la cantidad de veces que aparece en el array.

const numeros = [1,2,3,4,1,6,2,4,1,8,6,1] // el 1 aparece 4 veces en el array

function contarElementoEnArray(array, elemento) {
  let cantDeRepeticiones = 0

  for(let i = 0; i < array.length; i++) {
    //    1           1
    if(array[i] === elemento) {
      cantDeRepeticiones ++
    }
  }

  if(cantDeRepeticiones > 0) {
    return `El elemento ${elemento} se encontró ${cantDeRepeticiones} veces en el array.`
  } else {
    return "No se encontraron repeticiones en el array" 
  }
}

let resultado = contarElementoEnArray(numeros, "hola")

console.log(resultado)

// Crear una función que convierta de grados Celsius a grados Fahrenheit

// Crear una función que calcule el área de un círculo. Recibe un parámetro (radio) y devuelve el área del círculo

// Crea una función que reciba como parámetros un array de palabras y devuelva la palabra más larga

function convertirAFahrenheit(celsius) {
  let tempEnFahrenheit = (celsius * 9/5) + 32
  return tempEnFahrenheit
}

function calcularAreaCirculo(radio) {
  let area = 3.1416 * (radio ** 2)
  return area
}

function mostraPalabraMasLarga(array) {
  let palabraMasLarga = ""

  for(let i= 0; i < array.length; i++) {
    if(array[i].length >= palabraMasLarga.length) {
      palabraMasLarga = array[i]
    }
  }

  return palabraMasLarga
}

let gradosEnFahrenheit = convertirAFahrenheit(100)
let areaDelcirculo = calcularAreaCirculo(50)
let palabraMasLarga = mostraPalabraMasLarga(["papa", "auto"])

console.log(gradosEnFahrenheit, areaDelcirculo, palabraMasLarga)


// function circulo(radio){
//   console.log("el area equivale a ", (radio * radio) * 3.1416)
// }

// circulo(20)