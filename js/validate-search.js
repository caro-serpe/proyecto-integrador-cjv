let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button')


let validateSearchTerm = (searchTerm, event) => {
    if (searchTerm === undefined){
        alert("El campo está vacio.");
        event.preventDefault();
        return;
    } else if(searchTerm.length < 3){
        alert("El término buscado debe tener al menos 3 caracteres.");
        event.preventDefault();
        return;
    }

    // ya sabes que el termino a buscar esta ok
};


form.addEventListener('submit', function(e) {
    const searchTerm = document.querySelector(".busqueda").value;
    validateSearchTerm(searchTerm, e);
});

busqueda.addEventListener('click', function(e) {
    const searchTerm = document.querySelector(".busqueda").value;
    validateSearchTerm(searchTerm, e);
});



