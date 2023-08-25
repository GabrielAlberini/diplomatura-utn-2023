
// JSON -> Javascript object notation -> string

// Sintaxis:
// 1 - No acepta comentarios
// 2 - Las keys de lo objetos siempre con doble comillas
// 3 - Solo acepta, objetos, array o datos literales (string)

const carritoDeCompras = [
  {
    id: 1,
    name: "zapatillas",
    precio: 30000
  },
  {
    id: 2,
    name: "tv",
    precio: 100000
  }
]



// objeto -> json
const json = JSON.stringify(carritoDeCompras)
const objeto = JSON.parse(json)
// console.log(json, objeto)

// API -> application programming interface -> vendría a ser como un interprete entre el lenguaje de programación y el servidor

// para acceder al dato es por la posición
const array = [1,2,3,5, [], []]
// para acceder al dato es mediante la key
const objeto2 = {
  // propiedades -> key/value
  3: {nombre: "gabriel"}
}
// console.log(objeto2[3].nombre)

// fetch -> api nativa de javascrpit que permite realizar peticiones HTTP de una forma asincrónica (promesas)

// GET -> pedir data 
// POST -> crear data
// PUT -> modificar data
// DELETE -> borrar data
// PATCH -> modificar data

// petición HTTP -> GET
const peticion = fetch("https://rickandmortyapi.com/api/character")

// promesa -> es un acuerdo que despues de x tiempo obtendré una respuesta

// callback -> una función que se ejecuta despues de alga

peticion.then((response) => {
  return response.json()
}).then((data) => {
  console.log(data)
  const $contenedor = document.getElementById("cont-personajes")
  const personajes = data.results

  for(let i = 0; i < personajes.length; i++) {
    const id = personajes[i].id
    const nombre = personajes[i].name
    const estado = personajes[i].status
    const imagen = personajes[i].image
    const genero = personajes[i].gender
    const especie = personajes[i].species

    $contenedor.innerHTML += 
    `<div class="personaje">
      <img
        src="${imagen}"
        alt="foto de ${nombre}"
      />
      <h3>${id} - ${nombre}</h3>
      <p>Gender: ${genero}</p>
      <p>Species: ${especie}</p>
      <p>Status: ${estado}</p>
    </div>`
  }
}).catch((error) => {
  console.log(error)
})
