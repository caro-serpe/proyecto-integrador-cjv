let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('busqueda');
let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button');
let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/search?q="


function hideSpinner () {return document.querySelector(".spinner").style.display = "none";}
//hacer if  si datos.length es igual a cero hacer un innerhtml a la variable contenedor 22 con una imagen la ruta 
// va aser un gift a un spinner y listo y en el elssee iria desde la linea 20 hasta la 30

fetch(proxy+endpoint+id) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        //aca va ael if con el else
        if (datos.length == 0) {

        }
        for(let i=0; i<=4; i++){
        console.log(datos); //ver que me imprime por consola
        let canciones = datos.tracks.data; //cambiar lo de tracks.data
        let contenedor = document.querySelector('.response-container');

        contenedor.innerHTML +=
        `<article> 
        <img src= "${canciones[i].album.cover_xl}">
        <a href="./detalle-canciones.html?id=${canciones[i].id}"> <h4>${canciones[i].title}</h4></a>
        <a href= "./detail.artist.html?id=${canciones[i].artist.id}"> ${canciones[i].artist.name} </a>
        </article>`};

    })