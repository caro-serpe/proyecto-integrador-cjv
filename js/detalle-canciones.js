let qs = location.search;
let qsol = new URLSearchParams(qs);
let id = qsol.get('id');

const url =`https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`
let idAGuardar=id
fetch(url)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        console.log(data.id);
        let titulo = document.querySelector('.tituloTema')
        let foto = document.querySelector('.tapaTema')
        let cantante = document.querySelector('.cantanteTema')
        let disco = document.querySelector('.discoTema')
        let favorit = document.querySelector('.Afav');

        titulo.innerText = data.title;
        foto.src = data.album.cover_xl;
        cantante.innerText = data.artist.name;
        cantante.href = `./detail.artist.html?id=${data.artist.id}`;
        disco.innerText = data.album.title;
        disco.href = `./detalles-de-discos.html?id=${data.album.id}`;
        favorit.innerText
        idAGuardar=data.id

    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })
    console.log(idAGuardar)
    let favoritos = [];
    let recStorage = localStorage.getItem('favoritos');

    if(recStorage != null){
        favoritos =JSON.parse(recStorage);
    }
    let fav = document.querySelector('.Afav');

    if(favoritos.includes(idAGuardar)){
             fav.innerText = "Quitar de favoritos"
    }

    fav.addEventListener('click', function (e){
        e.preventDefault()
        if (favoritos.includes(idAGuardar)){
            let indice = favoritos.indexOf(idAGuardar);
            favoritos.splice(indice, 1);
            fav.innerText = "Agregar a favoritos";
        }
        else{
            favoritos.push(idAGuardar);
            fav.innerText = "Quitar de favoritos";
        }

        let favJSON = JSON.stringify(favoritos);
        localStorage.setItem('favoritos', favJSON);

    })