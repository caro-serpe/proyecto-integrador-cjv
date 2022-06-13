let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/genre"

fetch(proxy+endpoint)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
    })
    .catch(function(error){
        console.log("El error fue "+ error);
    })
