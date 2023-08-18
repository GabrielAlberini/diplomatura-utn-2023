const $titulo = document.getElementById("titulo")
$titulo.textContent = "Renderizando contenido desde Javascript"

// datos primitivos -> valor unico 
// datos complejos -> conjuntos de valores

// dato primitivo -> booleano -> true
// dato complejo -> array -> es un lista que indexa los elementos

// OBJETOS
// 1 - sirven para representar objetos reales
// 2 - colección de datos
// 3 - propiedades -> claves / valores
// 4 - tienen métodos
// 5 - tienen su propio scope this
// 6 - las propiedades no tienen indice, todas estan al mismo nivel

// const celular = [3, "xiaomi", true, false]
// const celular = ["camaras", "marca", "carcaza", "esNuevo", "color"]

const celular = {
  camaras: 3,
  marca: "xiaomi",
  carcaza: true,
  seNuevo: false
}

// console.log(celular)

const carritoDeCompra = []

const producto1 = {
  producto: "zapatilla",
  precio: 40000,
  color: "negro",
  id: 1928371
}

carritoDeCompra.push(producto1)

// console.log(carritoDeCompra)

const producto2 = {
  producto: "televisor",
  precio: 200000,
  color: "negro",
  id: 1823090
}

carritoDeCompra.push(producto2)

// console.log(carritoDeCompra)

// Uso de propiedades de un objeto

const arandela = {
  edad: 2,
  raza: "pichicho",
  hobbies: [ "correr la pelotita", "jugar con la nina"],
  color: "marrón"
}

// Lectura de propiedades: 
// console.log(arandela.color)
// console.log(arandela.raza)
// console.log(arandela.hobbies)
// console.log(arandela.edad)

console.log(arandela)

// Agrego propiedades:
arandela.velocidad = 60
console.log(arandela)

// Mostrar propiedad inexistente
// console.log(arandela.pepito)

// Borrar propiedad:
// console.log(arandela)
delete arandela.velocidad
// console.log(arandela)

// Modificar una propiedad:
arandela.edad = 3

// console.log(arandela)

// ----------------------------------------- //

// Leer un objeto anidado

const vehicle = {
  "name": "Snowspeeder",
  "model": "t-47 airspeeder",
  "manufacturer": "Incom corporation",
  "cost_in_credits": "unknown",
  "length": "4.5",
  "max_atmosphering_speed": "650",
  "crew": "2",
  "passengers": "0",
  "cargo_capacity": "10",
  "consumables": "none",
  "vehicle_class": "airspeeder",
  "pilots": {
    piloto1: "https://swapi.dev/api/people/1/",
    piloto2: {
      name: "rodrigo",
      premios: ["miami", "san pablo", "santa fe", ["san junsto", "llambi"]]
    }
  },
  "films": [
    "https://swapi.dev/api/films/2/"
  ],
  "created": "2014-12-15T12:22:12Z",
  "edited": "2014-12-20T21:30:21.672000Z",
  "url": "https://swapi.dev/api/vehicles/14/"
}

// https://swapi.dev/api/people/18/
// console.log(vehicle.pilots.piloto2) 

// https://swapi.dev/api/films/2/
// console.log(vehicle.films[0])

// ["san junsto", "llambi"]
// console.log(vehicle.pilots.piloto2.premios[3])

const universidad = {
  nombre: "Universidad TecnoGlobal",
  ubicacion: {
    pais: "Futurilandia",
    ciudad: "Nuevatech",
    direccion: {
      calle: "Avenida del Conocimiento",
      numero: 789,
      codigoPostal: "54321"
    }
  },
  facultades: [
    {
      nombre: "Facultad de Ingeniería",
      departamentos: [
        {
          nombre: "Departamento de Informática",
          cursos: ["Programación", "Bases de Datos"]
        },
        {
          nombre: "Departamento de Electrónica",
          cursos: ["Circuitos", "Señales"]
        }
      ]
    },
    {
      nombre: "Facultad de Ciencias",
      departamentos: [
        {
          nombre: "Departamento de Biología",
          cursos: ["Genética", "Ecología"]
        },
        {
          nombre: "Departamento de Física",
          cursos: ["Mecánica Cuántica", "Electromagnetismo"]
        }
      ]
    }
  ]
};

// console.log(universidad.ubicacion.direccion.codigoPostal)

// --------------------------------------------------------------------------------------------- //

// 1 - sobre mi
// Crear una variable llamada sobreMi, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: nombre, apellido, edad
// Mostrar en consola el objeto sobreMi

const sobreMi = {
  nombre: "gabriel",
  apellido: "alberini",
  edad: 29
}
// console.log(sobreMi)

// 2 - presentar
// Crear una variable llamada user, a la que le vamos a asignar un objeto.
// El objeto tiene que tener 3 propiedades: fullname, email, age
// Mostrar en consola el objeto user
// Mostrar en la consola el nombre y la edad de la persona: "Hola, mi nombre es [ACA EL NOMBRE] y tengo [ACA LA EDAD] años"

const user = {
  fullname: "gabrielalberini",
  email: "gabriel@gmail.com",
  age: 29
}

// console.log(user)
// console.log(`Hola, mi nombre es ${user.fullname} y tengo ${user.age} años.`)

// 3 - cancion
// Tenemos un objeto en la variable song con diferentes propiedades que representan una canción de spotify.
// Queremos crear un nuevo objeto, guardandolo en la variable cancion, a partir de las propiedades del objeto que tenemos en song
// El nuevo objeto tiene que tener las propiedades titulo, banda, y duracion (en segundos, ya que en el objeto original song está en milisegundos)

const song = {
  title: "Rock and Roll",
  bandName: "Led Zeppelin",
  duration: 200000,
  album: "Led Zeppelin IV",
};

const cancion = {
  titulo: song.title,
  banda: song.bandName,
  duracion: song.duration / 1000,
  album: song.album
}

// console.log(cancion)

// 3 - base de datos
// Nos pasaron un listado de personas y necesitamos guardarlo en una base de datos
// Los datos que tenemos son un id, email, nombre y teléfono
// Crear un objeto para cada persona que nos pasaron
// Mostrar por consola todos los objetos creados

// DATOS DE LAS PERSONAS QUE NECESITAMOS GUARDAR EN UNA BASE DE DATOS

// 1,ada@gmail.com,Ada Lovelace,1234567890
// 2,grace@hotmail.com,Grace Hopper,0987654321
// 3,hedy@gmail.com,Hedy Lamarr,6789054321
// 4,radia@yahoo.com,Radia Perlman,1234509876
// 5,Sheryl@facebook.com,Sheryl Sandberg,5432167890

// Ejemplo del formato de cada objeto: 0,ejemplo@terra.com,Ejemplo,1029384756
// const example = {
//   id: 0,
//   nombre: "Ejemplo",
//   email: "ejemplo@terra.com",
//   telefono: "1029384756"
// }

// Nos pidieron mostrar en la consola los siguientes datos de cada persona:
//// TENEMOS QUE MOSTRAR LOS SIGUIENTES DATOS

// 1. El nombre de Ada:
console.log();

// 2. El ID de Grace
console.log();

// 3. El email de Hedy
console.log();

// 4. El ID y nombre de Radia
console.log();

// 5. El telefono de Sheryl
console.log();



const user1 = {
  id: 123456789,
  name: "Ada Lovelace",
  url: "https://www.linkedin.com/in/ada-lovelace",
  skills: ["HTML", "CSS", "SASS"],
};

// codea aca la solucion

user1.skills.push("Javascript");

// despues de la solucion
// console.log(user1);

// 9 - playlist
// Creá un objeto donde vamos a guardar información sobre una playlist de spotify
// El objeto va a tener las propiedades nombre (un string), privada (un booleano) y canciones (un array de strings).
// En líneas separadas (un console.log por cada una), mostrá la información de la lista para que sea vea de la siguiente forma:
// Privada tiene que mostrar Si en el caso que la propiedad privada sea true, o No si la prop

const song1 = {
  name: "Lista de Nirvana",
  privada: true,
  canciones: ["Smells Like Teen Spirit", "In Bloom", "Come As You Are"]
}

function verificacionPrivacity() {
  if(song1.privada === true){
    song1.privada = "si";
  } else {
    song1.privada = "no";
  }
}

verificacionPrivacity();

// console.log(song1.name);
// console.log(song1.privada);
// console.log(song1.canciones);

// 11 - canciones
// Tenemos un array de objetos, que representa un listado de bandas
// Cada objeto representa una banda, y tiene las propidades id, nombre, fundacion, activa
// Mostrar en consola cada banda del array, con la siguiente lógica:
// Si la banda está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] está activa desde el año [AÑO DE FUNDACIÓN]"
// Si la banda NO está activa mostrar el mensaje: "[NOMBRE DE LA BANDA] no está activa"

// collection
const bandas = [
  { id: 1, nombre: "Nirvana", fundacion: 1987, activa: false },
  { id: 2, nombre: "Foo Fighters", fundacion: 1994, activa: true },
  { id: 3, nombre: "Led Zeppelin", fundacion: 1967, activa: false },
  { id: 3, nombre: "Queens of the Stone Age", fundacion: 1997, activa: true },
  { id: 3, nombre: "Pearl Jam", fundacion: 1990, activa: true },
];

// function recorrerCollection(array) {
//   for(let i = 0; i < array.length; i++) {
//     let banda = array[i]
//     if(banda.activa === true) {
//       console.log(`${banda.nombre} está activa desde el año ${banda.fundacion}`)
//     } else {
//       console.log(`${banda.nombre} no está activa.`)
//     }
//   } 
// } 

// recorrerCollection(bandas)

const datos2 = {
  id: 1,
  nombre: "Ada",
  apellido: "Lovelace",
  email: "ada.lovelace@gmail.com",
  telefono: "1234567890",
  edad: 29,
  programa: true,
  test: [1,2,3]
}

console.log(datos2, "<-- aca")

if(datos2.programa == true) {
  datos2.lenguajeFavorito = "Javascript"
  console.log(datos2);
}

console.log(datos2)