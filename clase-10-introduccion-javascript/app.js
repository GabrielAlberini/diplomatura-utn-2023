/*
Este es 
un comentario multi linea
*/

//Este es un comentario de una sola linea

// Variables -> a un espacio que se reserva en la memoria RAM de nuestra PC

// sintaxis de una variable
let apellido = "Alberini";

// -> let: palabra reservada
// -> apellido: nombre de variable
// -> "alberini": dato

let email = "sfd@gmail.com";
let message = "dfgsdfgs";

// devtool -> console -> output
// console.log(apellido);

// declaración -> asignación -> reasignación

// declaración
let edad;

// asignación
edad = 32;

// declaración e asignación
let heladoFavorito = "kinoto al whisky";

heladoFavorito = "limón";
heladoFavorito = "cualquiera menos menta granizada";

// console.log(heladoFavorito);

// Realizar un algoritmo que realice una suma

// let num1 = 2;
// let num2 = 2;

// let resultado = num1 + num2;

// // console.log(resultado);

// // let edadPerro, nombre;

// let edadPerro = 2;
// let nombrePerro = "Arandela";
// let apellidoPerro = "Alberini";

// let edadPerrunaAHumana = edadPerro * 7;

// // Javascript es un lenguaje de programación case sensitive

// // Una convensión de Js es nombrar las variables en cammelcase -> empiezan en minúscula y cada palabra que continua comienza en mayúscula

// // Concatenar -> unir string (palabras = cadenas de texto)

// // Concatenación clásica
// console.log(
//   "Mi perro se llama " +
//     nombrePerro +
//     " " +
//     apellidoPerro +
//     " " +
//     "y tiene" +
//     " " +
//     edadPerrunaAHumana +
//     " años humanos."
// );

// // Concatenación template string -> es un string normal pero se puede inyectar datos dentro
// // back stick -> acentos al revez
// console.log(
//   `Mi perrita se llama ${nombrePerro} y tiene ${edadPerro} años humanos`
// );

// input -> procesamiento | almacenamiento -> output

//input
let edadPerro = 2; // number
let nombrePerro = "Arandela"; // string

// procesamiento y almacenamiento
let edadConvertida = edadPerro * 7;

// output
// console.log(`Tu perro ${nombrePerro} tiene ${edadConvertida} años humanos`);

// operadores aritméticos

// + -> suma
// - -> resta
// / -> división
// * -> multiplicación
// % -> resto (15 % 3 = 0) me devuelve el resto de una división
// ** -> potenciación (4 ** 2 = 16)

// console.log(1 + 1);
// console.log(1 - 1);
// console.log(1 / 1);
// console.log(1 * 1);

// coersión de tipo
// console.log("10" + 1);

//Tipos de datos -> primitivos y complejo o compuestos

//Tipos de datos primitivos: el tipo representa directamente al dato

//Tipos de datos complejos: para acceder al tipo que lo representa hay que accedes a la ubicación

//Tipos de datos primitivos:

//string -> cadena de caracteres, se enbloban en comillas
let password = "o3498f2jtureg34t+-*@";

//number -> son TODOS los números
let num1 = 1;
let num2 = 0.1;
let num3 = 12e2;

//boolen -> representa un valor lógico (true-false)
let verdadero = true;
let falso = false;

//undefined -> indefinido
let variableIndefinida;
// console.log(variableIndefinida);

let pepito;
// console.log(pepito);

//null -> nulo
let variableNula = null;
// console.log(variableNula);

let constrasenia;
// console.log("1° estado de contraseña: ", constrasenia);

constrasenia = "4jj34k4k3";
// console.log("2° estado de contraseña: ", constrasenia);

// NaN -> Not a number
// console.log("hola" * 3);

// Symbol -> Credenciales o id únicos
// console.log(Symbol);

let pruebaDeTipoDeDato = "hola";

// Ver el tipo de dato
// console.log(typeof pruebaDeTipoDeDato);

let heladoFav = prompt("¿Cual es tu helado favorito?");

console.log(`Tu gusto de helado favorito es: ${heladoFav}`);

// Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

// Crear un programa que pida ingresar una cantidad en minutos mediante un prompt y muestre un mensaje con el resultado de la conversión en segundos.
