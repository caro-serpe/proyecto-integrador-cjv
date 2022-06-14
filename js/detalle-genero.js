let url = 'https://api.allorigins.win/raw?url=https://api.deezer.com/genre';

fetch(url)
    .then(function(response){
    return response.json()
    })
    .then(function(datos){
    })
    .catch(function(error){
        console.log('El error fue ' + error)
    })