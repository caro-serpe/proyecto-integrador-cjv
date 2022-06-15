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
        <img src= "${canciones[i].album.cover_xl}">
        <a href="./detalle-canciones.html?id=${canciones[i].id}"> <h4>${canciones[i].title}</h4></a>
        <a href= "./detail.artist.html?id=${canciones[i].artist.id}"> ${canciones[i].artist.name} </a>
        </article>`};

        for(let i=0; i<=4; i++){
            console.log(datos);
            let discos = datos.albums.data; 
            let contenedor= document.querySelector('.IndexDiscos');

            contenedor.innerHTML += 
            `<article> 
            <img src= "${discos[i].cover_xl}">
            <a href= "./detalles-de-discos.html?id=${discos[i].id}"> <h4>${discos[i].title}</h4> </a>
            </article>`
        }

        for(let i=0; i<=4; i++){
            console.log(datos);
            let cantantes = datos.artists.data;
            let contenedor = document.querySelector('.IndexArtistas');

            contenedor.innerHTML += 
            `<article> 
            <img src="${cantantes[i].picture_xl}">
            <a href="./detail.artist.html?id=${cantantes[i].id}"> <h4> ${cantantes[i].name}</a>
            </article>`
        }

    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })