// Dado un array de palabras, imprimir en consola, la cantidad de palabras que hay en el array.

// const palabras = ["arbol", "avion", "velador", "mayonesa", "mesita de luz", "llave", "cables", "cargador"]
// let contador = 0

// // splice -> desde que posicion empieza a borrar y cuantos elementos borra
// palabras.splice(0, palabras.length)

// //                        8
// for(let i = 0; i < palabras.length; i++) {
//   console.log(`En la posición ${i} se encuentra el elemento: ${palabras[i]}`)
//   // contador = contador + 1 
//   contador++
// }


// console.log(`El array tiene ${contador} palabras.`)

// Dada una palabra, validar si termina con alguna de las vocales

// arbol -> "No termina en vocal"
// araña -> "La palabra termina en vocal"

// una pista
// console.log(palabra[4]) // n

const vocales = ["a", "e", "i", "o", "u"]

// averiguar la última letra de la palabra
// let palabra = "lampara"
// let palabraEnMin = palabra.toLocaleLowerCase()
// let ultimaLetra = palabraEnMin[palabra.length-1]
// let resultado = ""

// SOLUCIÓN 1: VALIDAR ÚLTIMA LETRA MEDIANTE UN IF
// if(ultimaLetra === vocales[0]) {
//   console.log("La plabra termina en a")
// }

// SOLUCIÓN 2: recorrer el array con un for y compararlo con ultima letra
// for(let i = 0; i < vocales.length; i++) {
//   if(ultimaLetra === vocales[i]) {
//     resultado = "La última letra es: " + vocales[i]
//     break
//   } else {
//     resultado = "La palabra no termina en vocal"
//   }
// }

// console.log(resultado)

// Definí una función ocultarContrasenia que reciba como argumento una contrasenia de
// solo numeros y devuelva un string con dicha contraseña ocultada con astericos *, es
// decir, un string con la misma longitud donde todos sus caracteres son astericos

// 1j23jrj3
// ********

// input -> proceso -> output

let pass = prompt("Ingrese contraseña: ") // "2k3ejkd2"
let lengthPass = pass.length // 8
let convertedPass = ""

// PRIMER VERSIÓN USANDO UN ARRAY -> spread operator
// for (let i = 0; i < lengthPass; i++){
//   convertedPass[i] = "*"
// }
// // spread operator
// console.log(...convertedPass)

// SEGUNDA VERSIÓN USANDO UN STRING
for (let i = 0; i < lengthPass; i++) {
  convertedPass = convertedPass + "*"
}

console.log(convertedPass)

// Crear un programa que modifique todas las vocales de una palabra por las vocal "i". Generando como resultado una burla jaja

// Aprender programamación es muy dificil :(
// Iprindir prigrimicín is miy dificil :( 

let palabra = prompt('Ingrese algo:').toLocaleLowerCase();
let broma = '';

for(let i = 0; i < palabra.length; i++){
    let letra = palabra[i];
    if(letra === 'a' || letra === 'e' || letra === 'o' || letra === 'u'){
        letra = 'i';
        broma += letra;
    } else if(letra === 'á' || letra === 'é' || letra === 'ó' || letra === 'ú'){
        letra = 'í';
        broma += letra;
    } else{
        broma += letra;
    }
}
console.log(`"${broma}" :(`);