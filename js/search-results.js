let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button');

let hideSpinner = () => document.querySelector(".spinner").style.display = "none";

let url = "https://api.allorigins.win/raw?url=https://api.deezer.com";

let queryStringObj = new URLSearchParams(window.location.search);

let searchTerm = queryStringObj.get("busqueda");
let endpoint = queryStringObj.get("endpoint");


// declaro todas las funciones para pegarle a la API
let fetchPlaylist = (searchTerm) => {
    fetch(url + "/playlist/" + searchTerm).then(response => response.json()).then(async response => {
        // una vez que tengo la rta, oculto el spinner
        // await new Promise(r => setTimeout(r, 2000));
        hideSpinner();
        console.log(response); 
        const responseContainerElement = document.querySelector(".response-container");
        // una vez que tengo la rta, lleno el contenedor con la data como yo quiera

        
    });
};

let fetchSong = (searchTerm) => {
    fetch(url + "/track/" + searchTerm).then(response => response.json()).then(response => {
        // una vez que tengo la rta, oculto el spinner
        hideSpinner();
        console.log(response);
        const responseContainerElement = document.querySelector(".response-container");
        // una vez que tengo la rta, lleno el contenedor con la data como yo quiera
    });
};

// ...

// ejecuta el fetch adecuado
if(endpoint === "/playlist") {
    fetchPlaylist(searchTerm);
} else if(endpoint === "/song") {
    fetchSong(searchTerm);
}