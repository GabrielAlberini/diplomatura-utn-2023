// recuperar elementos HTML para su futura manipulación
let body = document.querySelector("body");
let button = document.querySelector("#btn");

button.addEventListener("click", () => {
  if(body.classList.contains("dark")) {
    body.classList.remove("dark")
  } else {
    body.classList.add("dark")
  }
})



// Declaración -> inicializando -> reasignación

let nombre = "Gabriel";
nombre = "Micaela";

// let | const

//Template strings
let mensaje = `A ${nombre} 
le gusta 
el 
helado.`

// console.log(mensaje)

// Devtool -> Herramientas del desarrollador/a
// Operadores aritmeticos: + - * / ** 

let edad = Number(prompt("Ingrese su edad: ")) // "29" -> 29

console.log(typeof edad)