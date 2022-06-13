let proxy ="https://api.allorigins.win/raw?url="
let endpoint = "https://api.deezer.com/chart"

fetch(proxy+endpoint) 
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        let info = data;
        
    })
    .catch(function(error){
        console.log('El error fue ' + error);
    })
