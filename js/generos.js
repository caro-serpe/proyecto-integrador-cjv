let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/genre';

for (let i = 1; i < 11; i++){
fetch(url)
    .then(function(response){
    return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let generos = datos.data[i];
        let contenedor = document.querySelector('.ListaGeneros');
        
        contenedor.innerHTML += 
        `<article class="articlecanc">\
        <img src="${generos.picture_medium}" alt="" class="fotodiscos">
        <h4>${generos.name}</h4>
        <a href="./detalle-genero.html" class="verMas">Ver más</a>
        </article>`
        
    })
    .catch(function(error){
        console.log("Error: " + error);
    })}
