let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/genre"

fetch(proxy+endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data;
        let lista = document.querySelector('.ListaGeneros');

        let elementos = ''; 

        for (let i=0; i <=info.length; i++) {
             elementos += `<article>
                            <img src= ${info[i].data.picture_medium}>
                            <a href="./detalle-genero.html?id=${info[i].id}">${info[i].data.name}</a>
                            </article>`
        };
        lista.innerHTML = elementos;
    })
    .catch(function(error){
        console.log("El error fue "+ error);
    })
