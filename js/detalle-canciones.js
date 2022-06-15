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
        let favorit = document.querySelector('.Afav');

        titulo.innerHTML = data.title;
        foto.src = data.album.cover_xl;
        cantante.innerHTML = data.artist.name;
        disco.innerHTML = data.album.title;
        favorit.innerHTML

    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })

    let favoritos = [];
    let recStorage = localStorage.getItem('favoritos');

    if(recStorage != null){
        favoritos =JSON.parse(recStorage);
    }
    let fav = document.querySelector('.AFav');

    if(favoritos.includes(id)){
        fav.innerText = "Quitar de favoritos"
    }

    fav.addEventListener('click', function (e){
        e.preventDefault()
        if (favoritos.includes(id)){
            let indice = favoritos.indexOf(id);
            favoritos.splice(indice, 1);
            fav.innerText = "Agregar a favoritos";
        }
        else{
            favoritos.push(id);
            fav.innerText = "Quitar de favoritos";
        }

        let favJSON = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favsJSON);

    })