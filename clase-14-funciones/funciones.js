// let nombre = "facundo"
// console.log(`Hola, ${nombre}.`)

// let nombre1 = "karina" 
// console.log(`Hola, ${nombre1}.`)

// let nombre2 = "iván" 
// console.log(`Hola, ${nombre2}.`)

//funciones -> acciones -> es un fragmento de código que se ejecuta cada vez que se lo llama

// funciones tienen acciones privadas
// el resultado de las funciones se pueden usar en otra

// caracteristicas
// 1 - reutilizables -> evitamos la repetición de código
// 2 - dinámicas -> el proceso cambia según los datos

// declarando una función
function saludar(nombre) {
  console.log(`Hola ${nombre}.`)
}

// invocando una función
saludar("facundo")
saludar("karina")
saludar("carolina")

// declarando una función
function sumar(num1, num2) {
  console.log(num1 + num2)
}

// invocando una función
sumar(1, 2)

// 1 - declarar la función -> avisarle a la pc que tiene una nueva funcionalidad
// 2- invocar la función -> ejecutar el código que está dentro

//PARAMETROS
// - Son variables de uso interno y privado de la función
// - El programador/a le define el nombre
// - En la declaración NO van los datos, solo le designamos el nombre

// declarando una función -> solo declaro la lógica
function validarLongitudArray(array) {
  // console.log("El array tiene una longitud de : " + array.length + " elementos.")
}

// invocación -> los argumentos -> son los datos que "llenan" los parametros
let arrayDeDatos = [1, undefined, null, "hola"] // 4
validarLongitudArray(arrayDeDatos)
validarLongitudArray([1])
validarLongitudArray(["f", "d"])
validarLongitudArray(["o", 3, 4,"d", "AAAA"])

// Crear una función que valide que el el usuario quiere comprar una cantidad validad respecto al stock de un producto

let productos = 5 // el usuario se quiere comprar 10 focos
let stock = 6 // cantidad de focos en el stock

// LOS NOMBRES DE LAS FUNCIONES SIEMPRE SON ACCIONES
function validadStock(productos, stock) {
  if(productos <= stock){
    // console.log("Puedes comprar")
  } else {
    // console.log("No puedes comprar, no hay suficiente stock :(")
  }
}

console.log(productos, "<-- aca")

// invocando -> ejecutar la función
validadStock(productos, stock)

console.log("---------------------------------------------------")

// Validar si dos array tienen la misma longitud

// declarar una función es enseñarle a la pc que tiene que hacer
// function validarMismaLongitud(array1, array2) {

// }

// crear un programa que te diga lo que estas comiendo

function mostrarComida(diaDeLaSemana, comida) {
  console.log(`Hoy es ${diaDeLaSemana} y estas comiendo ${comida}`)
}

//invocar la función -> ejecutar 
mostrarComida("Lunes", "fideitos")
mostrarComida("Martes", "asado")
mostrarComida("Miércoles", "pure con milanesas")

// valores por defecto
function multiplicar(num1 = 0, num2 = 0) {
  console.log(num1 * num2)
}

multiplicar(1)

function mostrarSaludo(nombre, apellido, apodo = "no tiene apodo") {
  console.log(`Hola ${nombre} ${apellido} (${apodo})`)
}

mostrarSaludo("gabriel", "alberini", "gabo")

// retornar un dato interno de la función -> sacar al exterior un dato privado de la función
function verDatoPrivado(dato) {
  return dato
}

//OP1
let datoPrivado = verDatoPrivado("SOY UN DATO PRIVADO DE LA FUNCIÓN")
console.log(datoPrivado)

//OP2
console.log(verDatoPrivado("HOLA, soy otro dato privado"))



