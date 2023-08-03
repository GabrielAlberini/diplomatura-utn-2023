// CURSO DE LÓGICA:
// https://www.youtube.com/watch?v=gMMoOYm-aCg&list=PLQRFzsIQFmxrqL5ViA0k3rsR5H0oNKYxE

//  Cada condición es una expresión que se evalúa a true o false.

// Las condiciones se resuelven en booleano -> true o false

//Estructura de control -> if (si condicional del ingles)

//Hacer un programa que evalue: 
// - Si está numblado que muestre por la consola: Llevar paraguas
// - Si está soleado: No llevar paraguas

// input  
// let clima = prompt("Indique el estado del clima").toLocaleLowerCase();
// let tieneParaguas = true;

// procesamiento y almacenamiento
// palabra reservada | if - condición () - scope {}

//   "soleado" es exactamente igual a "nublado"? = false
// if(clima === "nublado"){
//   console.log("Esta nublado llevate paraguas")
// } else if(clima === "fresquito") {
//   console.log("Llevate campera")
// } else if(clima === "garua") {
//   console.log("Llevate el piloto por si empeora")
// } else if (clima === "caen piedras") {
//   console.log("Ni salgas")
// } else {
//   console.log("Sali tranquilo papa no pasa nada, disfruta tu dia")
// }

//Operadores de comparación

// > mayor que
// < manor que
// >= mayor o igual que
// <= menor o igual que               DAN COMO RESULTADO UN VALOR BOOLEANO    
// == igual
// === estrictamente igual
// !== distinto 

// let num1 = "2";
// let num2 = 2;

//    false
// Usando el == : el "2" es igual al 2? Si porque los dos tienen 2 como VALOR
// Usando el === : el "2" es igual al 2? No porque los dos tienen 2 como VALOR pero no el mismo TIPO DE DATO

// if(num1 == num2) { // es mayor, es igual entonces?
//  console.log("SI")
// } else {
//   console.log("NO")
// }

// == es igual en tanto a valor?
// === es estrictamente igual en tanto a valor y tipo de dato?

// console.log("HOLA" == "hola" ,"<-- aca") // false - javascript es case sensitive
// console.log("2" == 2 ,"<-- aca") // true - javascript es case sensitive

// let dato1 = "hola";
// let dato2 = "hola";

// //       true
// if(dato1 !== dato2) {
//   console.log("Es distinto")
// } else {
//   console.log("Son iguales")
// }

// Operadores aritméticos -> operadores de comparación -> operadores lógicos 

// OR -> ||
// AND -> &&

// -
// Cree en programa que indique que sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

// input (datos que ingresa el usuario)
// procesamiento (la manipulación de los datos) 
// output (respuesta al usuario)

// let edad = Number(prompt("Ingrese su edad: ")); // 13


// SOLUCION 1:

// if(edad < 15) {
//   let tieneAutorizacion = prompt("Tenes autorización, responder por si o por no").toLocaleLowerCase(); // no

//   // if(tieneAutorizacion  === "si") {
//   //   tieneAutorizacion = true;
//   // } else {
//   //   tieneAutorizacion = false;
//   // }

//   //  false  || true
//   if(tieneAutorizacion) { // "kfjqioer903ru" === true
//     console.log("Puedes pasar")
//   } else {
//     console.log("Pedi una autorización")
//   }
// } else {
//   console.log("Puedes pasar")
// }

// SOLUCION 2

// if(tieneAutorizacion  === "si") {
//   tieneAutorizacion = true;
// } else {
//   tieneAutorizacion = false;
// }

// if(edad >= 15 || tieneAutorizacion) {
//   console.log("Puedes pasar")
// } else {
//   console.log("No puedes pasar")
// }

