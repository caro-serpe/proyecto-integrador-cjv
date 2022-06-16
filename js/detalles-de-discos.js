let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`

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
        let temas = document.querySelector('.temasDisco');

        titulo.innerHTML = data.title;
        foto.src = data.cover_xl;
        cantante.innerHTML = "Cantante: " + data.artist.name;
        cantante.href = `./detail.artist.html?id=${data.artist.id}`
        fecha.innerHTML = "Fecha de publicación: " + data.release_date;
    
    })
    .catch(function(error){
        console.log("El error fue "+ error)
    })
