let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}`;
const url2 = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/${id}/tracks`;

let contenido = "";
let temas = document.querySelector('.temasDisco');

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log (data);
        let titulo = document.querySelector('.tituloDisco');
        let foto = document.querySelector('.tapaDisco');
        let cantante = document.querySelector('.cantanteDisco');
        let genero = document.querySelector('.generoDisco');
        let fecha = document.querySelector('.fechaDisco');

        titulo.innerHTML = data.title;
        foto.src = data.cover_xl;
        cantante.innerHTML = "Cantante: " + data.artist.name;
        cantante.href = `./detail.artist.html?id=${data.artist.id}`
        fecha.innerHTML = "Fecha de publicación: " + data.release_date;

        generos = data.genres;
        for(let i=0; i<=generos.length; i++){
            contenido += `<a href="./detalle-genero.html?id=${generos.data[i].id}">${generos.data[i].name}</a>`
        };

    genero.innerHTML = contenido;
    })
    .catch(function(error){
        console.log("El error fue "+ error)
    })

fetch (url2)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        
    })
    .catch(function(error){
        console.log('Error: ' + error);
    })