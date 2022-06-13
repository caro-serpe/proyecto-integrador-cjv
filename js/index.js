let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/chart"


fetch(proxy+endpoint) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for(let i=0; i<=4; i++){
        console.log(datos);
        let canciones = datos.tracks.data;
        let contenedor = document.querySelector('.IndexCanciones');

        contenedor.innerHTML +=
        `<article> 
        <img src= "${canciones[i].album.cover}">
        <a href="./detalle-canciones.html"> <h4>${canciones[i].title}</h4></a>
        <p> ${canciones[i].artist.name} </p>
        <p><a class="fav" href="">Agregar a Fav</a></p>
        </article>`}

    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })