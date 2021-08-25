const sub_menu = document.querySelector('.submenu');

const ancho_menu = document.querySelector('.barra_navegacion').clientHeight;
const ancho_submenu = window.innerHeight - ancho_menu;


const boton_flecha = document.querySelector('.flecha');


sub_menu.style.height = ancho_submenu + 'px';



boton_flecha.addEventListener('click', () => {
    if(boton_flecha.children[0].classList[0] == 'cerrar_submenu'){
        sub_menu.style.left = '-244px';
        boton_flecha.children[0].classList.remove('cerrar_submenu');

    }else{
        sub_menu.style.left = 0;
        boton_flecha.children[0].classList.add('cerrar_submenu');
    }
});