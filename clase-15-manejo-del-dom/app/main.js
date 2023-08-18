// 1 - declaración de variables
// 2 - declaración de funciones
// 3 - creación evento
// 4 - invocación de funciones

//DECLARANDO VARIABLES
const $form = document.getElementById("form")
const $input = document.getElementById("jugada")
const $modal = document.getElementById("cont-modal")
const $jugadas = document.getElementById("jugadas")
const $resultado = document.getElementById("resultado")
const $botonForm = document.getElementById("boton-form")
const $botonCloseModal = document.getElementById("boton-close-modal")

const posibilidades = ["piedra", "papel", "tijera"]
let eleccionPc
let eleccionHumana
let resultado

// DECLARANDO FUNCIONES
function generarNumeroAleatorio() {
  let numAleatorio = Math.floor(Math.random() * 3)
 return numAleatorio
}

generarNumeroAleatorio()

function realizarJugadaPc(){
  eleccionPc = posibilidades[generarNumeroAleatorio()]
}

function realizarJugadaHumano(e) {
  e.preventDefault()

  eleccionHumana = $input.value
  deshabilitarBoton(eleccionHumana);
}

function validarGanador(pc, humano) {
  if(pc === humano) {
    resultado = "Empate"
  } else if (
    (pc === "piedra" && humano === "tijera") ||
    (pc === "papel" && humano === "piedra") ||
    (pc === "tijera" && humano === "papel")
  ) {
    resultado = "Gana la PC :("
  } else {
    resultado = "Gano el humano :)"
  }

  abrirModal()
  imprimirResultado(resultado)
}

function deshabilitarBoton(inputValue) {
  if (!inputValue) {
    $botonForm.setAttribute("disabled", "");
  } else {
    $botonForm.removeAttribute("disabled");
  }
}

function imprimirResultado(text) {
  $resultado.textContent = text
  $jugadas.textContent = `${eleccionHumana} VS ${eleccionPc}`
}

function abrirModal() {
  $modal.style.display = "flex"
}

function cerrarModal() {
  $modal.style.display = "none"
  resetearForm()
  deshabilitarBoton($input.value);
}

function resetearForm() {
  $input.value = ""
}

//Desactivar boton 
deshabilitarBoton("")

// CREACIÓN DE EVENTOS
$form.addEventListener("submit", (e) => {
  realizarJugadaPc()
  realizarJugadaHumano(e)
  validarGanador(eleccionPc, eleccionHumana)
})

$botonForm.addEventListener("click", abrirModal)
$botonCloseModal.addEventListener("click", cerrarModal)
$input.addEventListener("input", () => deshabilitarBoton($input.value));

 