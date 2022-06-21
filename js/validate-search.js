let form = document.querySelector('.form');
let botonBusqueda = document.querySelector('.submit-button')
let busqueda = document.querySelector(".busqueda")

botonBusqueda.addEventListener('click',function(e) {
    if(busqueda.value === undefined){
        alert("El campo está vacío");
        e.preventDefault();
        return;
    }else if(busqueda.value.length < 3){
        alert("El término buscado debe tener al menos 3 caracteres.")
        e.preventDefault();
        return;
    }
});
form.addEventListener('submit', function(e){
    if(busqueda.value === undefined){
        alert("El campo está vacío");
        e.preventDefault();
        return;
    }else if(busqueda.value.length < 3){
        alert("El término buscado debe tener al menos 3 caracteres.")
        e.preventDefault();
        return;
    }
});









