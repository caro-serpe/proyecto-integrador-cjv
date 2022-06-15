let recStorage = localStorage.getItem('favoritos');
let favoritosObj= JSON.parse(recStorage);

console.log(favoritos);

let section = document.querySelector('.playlist');

let cancionesFav = '';

if(favoritos == null || favoritos.length == 0){
    section.innerHTML = '<p> No hay favoritos actualmente </p>'
} 
else{
    for(let i=0; index < favoritos.length; i++){
        let URL = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${favoritos[i]}`;

        fetch(URL)
        .then(function(response){
            return response.JSON;
        })
        .then(function(data){
            cancionesFav += 
            `<article> 
            <img src= ${data.cover_xl}>
            <p> Nombre: ${data.title} </p>
            <a href="./detalle-canciones.html?id=${data.id}"> Ir a detalle </a>
            </article>`

            section.innerHTML = cancionesFav; 
        })
    }
}