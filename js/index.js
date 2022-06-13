let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/chart"

for(let i=0; i<=4; i++){
fetch(proxy+endpoint) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let canciones = datos.tracks.data[i];
        let contenedor = document.querySelector('.IndexCanciones');

        contenedor.innerHTML +=
        `<article> 
        <img src= "${canciones.picture_medium}">
        <h4> ${canciones.title}</h4>
        <p> ${canciones.artist.name} </p>
        <a href="./detalle-canciones.html" class="verMas"> Ver más </a>
        </article>`

    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })}