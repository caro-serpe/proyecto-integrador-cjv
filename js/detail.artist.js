let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

const url2 = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/top?limit=5`


fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let nombre = document.querySelector('.nombreartista');
        let foto = document.querySelector('.fotocantante');

        nombre.innerHTML = datos.name; 
        foto.src= datos.picture_xl;
        
    })
    .catch(function(error){
        console.log('El error fue '+ error);
    })

fetch(url2)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for(let i=0; i<=4; i++) {
            console.log(datos);
            let canciones = datos.data;

            let album = document.querySelector('.albumcantante');

            album.innerHTML= `<p>${canciones[i].title}</p>`
        }
        
    })
    .catch(function(error){
        console.log('Error: ' + error);
    })