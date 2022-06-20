let proxy ="https://cors-anywhere.herokuapp.com/"
let endpoint = "https://api.deezer.com/chart"

fetch(proxy+endpoint)
    .then(function(response){
    return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let genero = datos.data; 
        let contenedor = documento.querySelector('.artistGenero');
        for(let i=0; i<11; i++){
            contenedor.innerHTML +=
            `<article> 
            <img src= "${canciones[i].album.cover_xl}">
            <a href="./detalle-canciones.html?id=${canciones[i].id}"> <h4>${canciones[i].title}</h4></a>
            <a href= "./detail.artist.html?id=${canciones[i].artist.id}"> ${canciones[i].artist.name} </a>
            </article>`
        }

    })
    .catch(function(error){
        console.log('El error fue ' + error)
    })
