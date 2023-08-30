// Renderizado de HTML con JS
const $titulo = document.getElementById("titulo")
$titulo.textContent = "Contenido agregado desde JS"

// Destructuring
const persona = {
  nombre: "gabriel",
  edad: 29,
  hobbies: ["pasear a arandela", "jugar al tenis", "cortar el pasto"],
  heladoFav: "mascarpone"
}

$titulo.textContent = "Mi nombres es " + persona.nombre

// const nombre = persona.nombre
// const edad = persona.edad
// const hobbies = persona.hobbies
// const heladoFav = persona.heladoFav

const {nombre, edad, hobbies, heladoFav} = persona

// Arrow function -> funciones flechas
// function gritar(frase) {
//   console.log(`¡¡${frase}!!`)
// }

// No tiene su propio objeto this
const gritar = (frase) => {
  console.log(`¡¡${frase}!!`)
}
gritar("Hoy empezamos con React")

// Operador ternario -> if -> condicional

const clima = "soleado"

// if(clima === "nublado") {
//   console.log("lleva paraguas")
// } else {
//   console.log("esta lindo no lleves nada")
// }

// condición -> ? en caso de que sea true : en caso de que sea false
clima === "nublado" 
? console.log("lleva paraguas") 
: console.log("esta lindo no lleves nada")

// Método para array llamado map -> me retorna un array con las modificaciones en cada objeto
const nombres = ["agustina", "alexis", "andres", "ariel"]

const nombresModificado = nombres.map((nombre) => {
  return {
    name: nombre,
    presente: true
    }
})

console.log(nombresModificado)
