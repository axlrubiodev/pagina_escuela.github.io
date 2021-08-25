const cuerpo = document.querySelector('body');
const boton_menu = document.querySelector('.menu_uno .wrap svg');
const opciones = document.querySelector('.menu_dos');
const enlaces = document.querySelectorAll('.opciones_menu li');

let contador = 0;

// --------------- Evento click del boton del menu ---------------
boton_menu.addEventListener('click', (e) => {
    e.stopPropagation();

    if(contador === 0){
        opciones.style.marginLeft = 0;
        contador = 1;
    }else{
        opciones.style.marginLeft = '-100%';
        contador = 0;
    }
});


// --------------------- Accion de ocultar menu ---------------------
cuerpo.addEventListener('click', (e) =>{
    e.stopPropagation();

    if(contador === 1){
        opciones.style.marginLeft = '-100%';
        contador = 0;
    }
});


// ------------- Evento click en contenedor de enlaces -------------
for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click', (e) => {
        e.stopPropagation();

        switch(e.target.textContent){
            case 'inicio':
                window.location.replace('index.html');
                break;

            case 'nosotros':
                window.location.replace('nosotros.html');
                break;

            case 'profesores':
                window.location.replace('profesores.html');
                break;

            case 'blog':
                window.location.replace('blog.html');
                break;

            case 'galeria':
                window.location.replace('galeria.html');
                break;

            case 'inicia sesion':
                window.location.replace('#');
                break;
        }
    });
}