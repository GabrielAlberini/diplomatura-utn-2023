const arboles = [  "Jacarandá",  "Tipa",  "Ceibo",  "Cedro",  "Lapacho",  "Ñandubay",  "Algarrobo",  "Palma caranday",  "Palo borracho",  "Timbó",  "Eucalipto",  "Fresno",  "Sauce criollo",  "Palo amarillo",  "Palo cruz",  "Palo santo",  "Cina cina",  "Timbó colorado",  "Aguaribay",  "Cancharana",  "Tarumá",  "Araucaria",  "Aromo",  "Calden",  "Cardón",  "Tala",  "Tilo",  "Ciprés",  "Espina de bañado",  "Laurel",  "Lengua de vaca",  "Molle",  "Nogal criollo",  "Pindo",  "Pino",  "Quebracho blanco",  "Quebracho colorado",  "Romerillo",  "Saman",  "Sauce llorón",  "Sauzgatillo",  "Viraró",  "Visco",  "Acacia",  "Aliso",  "Canelón",  "Frambueso",  "Guayacán",  "Higuerón",  "Lapachillo",  "Ligustro",  "Llantén",  "Marcela",  "Nandubay",  "Palma pindó",  "Paraíso",  "Peral",  "Peralillo",  "Piquillín",  "Radales",  "Sauce criollo",  "Sauce de hoja fina",  "Sauzalito",  "Tacuara",  "Tilo",  "Timbó colorado",  "Tipa",  "Tusca",  "Umbú",  "Viraró",  "Viraró de monte",  "Zarza",  "Álamo criollo",  "Balsa",  "Bambú",  "Boj",  "Caranday",  "Cauquén",  "Cebil",  "Chañar",  "Chicalá",  "Cola de zorro",  "Corona de cristo",  "Curupí",  "Duraznillo",  "Espinillo",  "Flor de ceibo",  "Fumo bravo",  "Garabato",  "Garabato blanco",  "Gomero",  "Goyavier",  "Hormiguillo",  "Inga",  "Jume",  "Lantana",  "Lapachillo",  "Liquen",  "Llantén",  "Malvavisco",  "Mimosa",  "Papaya",  "Parasita",  "Peral",  "Peredilla",  "Piquillín",  "Pirán",  "Pitanga",  "Porotillo",  "Rosa de río",  "Sarandí",  "Tasi",  "Tatán",  "Timbó",  "Timbó blanco",  "Tintitaco",  "Tranquera",  "Viraró blanco",  "Viraró de río"]

// Crear un programa que recorra el array de arboles y muestre en la consola el siguiente mensaje:
// En la vuelta numero X esta el árbol X

// let largoDeArray = arboles.length
// console.log(largoDeArray)

// for(let indice = 0; indice < largoDeArray; indice = indice + 1) {
//   console.log(`En la vuelta numero ${indice + 1} esta el árbol ${arboles[indice]}`)
// }

//  Dado el array de nombres de árboles, crea un bucle for que recorra el array y muestre por consola aquellos nombres de árboles que contienen más de 7 caracteres.

for(let indice = 0; indice < arboles.length; indice = indice + 1) {
  let arbol = arboles[indice]
  
  if(arbol.length >= 7) {
    // console.log(`El ${arbol} tiene 7 o más caracteres.`)
  }
}

// Dado el array de nombres de árboles, crea un bucle for que recorra el array y verifique si hay algún árbol cuyo nombre contiene la letra "ñ" (ene con tilde). Si se encuentra al menos un árbol con "ñ" en su nombre, muestra por consola "Encontré un árbol con 'ñ'". Si no se encuentra ningún árbol con "ñ" en su nombre, muestra "No encontré árboles con 'ñ'".

for(let indice = 0; indice < arboles.length; indice = indice + 1) {
  let arbol = arboles[indice].toLocaleLowerCase() // "Cauquén"

  if(arbol.includes("ñ")) {
    console.log(`Encontre este arbol con ñ: ${arbol} y se encuentra en la posición ${indice}`)
  } else {
    console.log(`El ${arbol} no tiene ñ :(`)
  }
}

// let arbol = "Cauquén"
// // includes para string
// // contains para arrays
// console.log(arbol.includes("a")) // boolean -> true o false

// Dado el array de nombres de árboles, crea un bucle for que recorra el array y cuente la cantidad de nombres que comienzan con la letra "P". Luego, muestra el resultado por consola.

let tamanioArbol = arboles.length;
let contador = 0

for(let inicio = 0; inicio < tamanioArbol; inicio = inicio + 1){
   let arbol = arboles[inicio]
   if(arbol[0] === "P"){
    contador = contador + 1
   }
};

console.log(`Hay ${contador} arboles que comienzan con P`)