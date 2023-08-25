const  peticion = fetch("https://api.breakingbadquotes.xyz/v1/quotes/5");

peticion.then((response) =>{
    return response.json();
}).then((informacion) =>{
  const $contenedor = document.getElementById("cont-autores");

  for (let i=0; i<informacion.length; i++){
    const cita = informacion[i].quote
    const autor = informacion[i].author
    $contenedor.innerHTML += 
    `<div>
      <h2><p>${autor}</h2>
      <p>${cita}</p>
    </div>`;
  }
})