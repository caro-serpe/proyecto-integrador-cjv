let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button');


let url = "https://api.deezer.com";

let queryStringObj = new URLSearchParams(window.location.search);

let searchTerm = queryStringObj.get("busqueda");
let endpoint = queryStringObj.get("endpoint");


// declaro todas las funciones para pegarle a la API
let fetchPlaylist = (searchTerm) => {
    fetch(url + "/playlist/" + searchTerm).then(response => {
        console.log(response);
        const responseContainerElement = document.querySelector(".response-container");
        // una vez que tengo la rta, lleno el contenedor con la data como yo quiera
    });
};

let fetchSong = (searchTerm) => {
    fetch(url + "/track/" + searchTerm).then(response => {
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

