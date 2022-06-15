let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let titulo = document.querySelector('.tituloTema')
        let foto = document.querySelector('.tapaTema')
        let cantante = document.querySelector('.cantanteTema')
        let disco = document.querySelector('.discoTema')

        titulo.innerHTML = data.title;
        foto.src = data.album.cover_xl;
        cantante.innerHTML = data.artist.name;
        disco.innerHTML = data.album.title;


    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })