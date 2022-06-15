let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}`;

fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos);
        let nombre = document.querySelector('.nombreartista');
        let foto = document.querySelector('.fotocantante');
        let album = document.querySelector('.albumcantante');

        nombre.innerHTML = datos.name; 
        foto.src= datos.picture_xl;
        
    })
    .catch(function(error){
        console.log('El error fue '+error);
    })