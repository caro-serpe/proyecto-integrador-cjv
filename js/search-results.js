let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('busqueda');
let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button');
let proxy =  "https://cors-anywhere.herokuapp.com/" //"https://api.allorigins.win/raw?url="
let endpoint ="https://api.deezer.com/search?q="


function hideSpinner () {return document.querySelector(".spinner").style.display = "none";}

fetch(proxy+endpoint+id) 
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log("DATOS ====", datos.data)
        //aca va ael if con el else
        if (datos.data.length == 0) {
        
        } else {
            hideSpinner()
            for(let i=0; i<datos.data.length; i++){
                let general = datos.data[i]; //cambiar lo de tracks.data
                let contenedor = document.querySelector('.response-container');
         
                contenedor.innerHTML +=
                    `<article> 
                        <img src= "${general.album.cover_xl}">
                        <a href="./detalle-canciones.html?id=${general.id}"> <h4>${general.title}</h4></a>
                        <a href="./detail.artist.html?id=${general.artist.id}"><h5>${general.artist.name}</h5></a>
                        <a href="./detalles-de-discos.html?id=${general.album.id}"><h5>${general.album.title}</h5></a>
                    </article>`
        };
        }

    })