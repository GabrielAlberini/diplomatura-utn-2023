
// if -> palabra reservada
// () -> condición -> true
// {} -> scope -> espacio privado de una función

// if(1 > 2) {
//   let mensaje = "Si, es menor"
//   console.log(mensaje)
// } else if(1 === 1) {
//   console.log("Son iguales")
// } else {
//   console.log("No, es mayor")
// }

// Operadores aritmeticos -> + - * / %
// Operadores de comparacion -> > < == === 
// Operadores lógicos -> || &&

// datos primitivos -> representan un valor individual
// datos complejos/compuestos -> almacenan una colección de datos, para acceder al dato, es a través de la posición

// let carritoDeCompras = ""

// let prod1 = "mochila"

// carritoDeCompras = prod1

// console.log(carritoDeCompras)

// array -> lista
let carritoDeCompras = ["mochila", "cartuchera", "lapicera", "foco", "celular", "velador"] 

// console.log(carritoDeCompras)

// // Javascript comienza a contar las POSICIONES desde 0
// console.log(carritoDeCompras[1+1], carritoDeCompras[1]) // mochila

// Crea un programa que pasandole un string nos diga si existe en x posición

// let palabra = prompt("¿Que elemento pensas que esta dentro del carrito?")

// if(carritoDeCompras.includes(palabra)) {
//   console.log(`Si, el carrito, contiene: ${palabra}`)
// } else {
//   console.log("No, lo lamento :(")
// }

// Métodos -> acción que modifica o usa el dato
// let nombre = "Gabriel"
// console.log(nombre.toUpperCase())

// console.log(carritoDeCompras.includes("foco"), "<-- aca")

// los datos compuestos son mutables -> pueden modificarse 
// los datos primitivos son inmutables -> el valor se reemplaza

// const apellido = "alberini"

// console.log(apellido)

// // apellido = "Perez"

// console.log(apellido)

// const cartuchera = ["lapiz"]
// console.log(cartuchera)

// mutar
// cartuchera.push("goma")
// console.log(cartuchera)

// cartuchera[2] = "boligoma"
// console.log(cartuchera)

// cartuchera[0] = "regla"
// console.log(cartuchera)

// // longitud del array
// console.log(cartuchera.length)

// // para eliminar x elemento/s del array

// // 1- en que posicion te queres parar para recortar
// // 2- cuantos elementos queres borrar
// cartuchera.splice(1, 1)
// console.log(cartuchera)

// cartuchera.unshift("crayón", "tijera")
// console.log(cartuchera)

// cartuchera.splice(0, 4, "Hola soy el único dato nuevo")
// console.log(cartuchera)

const arboles = [  "Jacarandá",  "Tipa",  "Ceibo",  "Cedro",  "Lapacho",  "Ñandubay",  "Algarrobo",  "Palma caranday",  "Palo borracho",  "Timbó",  "Eucalipto",  "Fresno",  "Sauce criollo",  "Palo amarillo",  "Palo cruz",  "Palo santo",  "Cina cina",  "Timbó colorado",  "Aguaribay",  "Cancharana",  "Tarumá",  "Araucaria",  "Aromo",  "Calden",  "Cardón",  "Tala",  "Tilo",  "Ciprés",  "Espina de bañado",  "Laurel",  "Lengua de vaca",  "Molle",  "Nogal criollo",  "Pindo",  "Pino",  "Quebracho blanco",  "Quebracho colorado",  "Romerillo",  "Saman",  "Sauce llorón",  "Sauzgatillo",  "Viraró",  "Visco",  "Acacia",  "Aliso",  "Canelón",  "Frambueso",  "Guayacán",  "Higuerón",  "Lapachillo",  "Ligustro",  "Llantén",  "Marcela",  "Nandubay",  "Palma pindó",  "Paraíso",  "Peral",  "Peralillo",  "Piquillín",  "Radales",  "Sauce criollo",  "Sauce de hoja fina",  "Sauzalito",  "Tacuara",  "Tilo",  "Timbó colorado",  "Tipa",  "Tusca",  "Umbú",  "Viraró",  "Viraró de monte",  "Zarza",  "Álamo criollo",  "Balsa",  "Bambú",  "Boj",  "Caranday",  "Cauquén",  "Cebil",  "Chañar",  "Chicalá",  "Cola de zorro",  "Corona de cristo",  "Curupí",  "Duraznillo",  "Espinillo",  "Flor de ceibo",  "Fumo bravo",  "Garabato",  "Garabato blanco",  "Gomero",  "Goyavier",  "Hormiguillo",  "Inga",  "Jume",  "Lantana",  "Lapachillo",  "Liquen",  "Llantén",  "Malvavisco",  "Mimosa",  "Papaya",  "Parasita",  "Peral",  "Peredilla",  "Piquillín",  "Pirán",  "Pitanga",  "Porotillo",  "Rosa de río",  "Sarandí",  "Tasi",  "Tatán",  "Timbó",  "Timbó blanco",  "Tintitaco",  "Tranquera",  "Viraró blanco",  "Viraró de río"]

// posicion en los [] recibe un numero entero
//                      120       - 1 = 
// console.log(arboles[arboles.length - 1])

// string -> cadena de caracteres
let saludo = "Hola" // string
// console.log(saludo[0])
// console.log(saludo[1])
// console.log(saludo[2])
// console.log(saludo[3])

const numero = [1,2,3,4,5,6]

// 1 - desde donde 2 - cuantos borra 3 - que agrega
numero.splice(3, 2)
console.log(numero)

// Bucle -> estructura de control que repite código
// for
// while
// do while

// 1 - variable indice -> ¿por donde empiezo?
// condición -> Si la condición es true, ejecuto el código del scope
// incremento o decremento -> genera que en algún momento la condición de false

let contador = 0

for(let inicio = 1; inicio <= 10; inicio = inicio + 1) {
  console.log(`Hola desde dentro del bucle, soy la vuelta n°${inicio}`)
}

console.log("Fin de bucle")