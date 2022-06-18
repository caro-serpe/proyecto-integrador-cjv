let url = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre';

fetch(url)
    .then(function(response){
    return response.json()
    })
    .then(function(datos){
        for(let i=0; i<11; i++){
            console.log(datos);
            let genero = datos.data; 
        }

    })
    .catch(function(error){
        console.log('El error fue ' + error)
    })