let form = document.querySelector('.form');
let busqueda = document.querySelector('.submit-button')

form.addEventListener('click',function() {
    if(form === undefined){
        alert("El campo está vacío");
        e.preventDefault();
        return;
    }else if(form.length < 3){
        alert("El término buscado debe tener al menos 3 caracteres.")
        e.preventDefault();
        return;
    }
});
busqueda.addEventListener('submit', function(){
    if(form === undefined){
        alert("El campo está vacío");
        e.preventDefault();
        return;
    }else if(form.length < 3){
        alert("El término buscado debe tener al menos 3 caracteres.")
        e.preventDefault();
        return;
    }
});









