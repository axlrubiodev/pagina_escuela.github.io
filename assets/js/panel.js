const tag_panel = document.querySelector('.panel_profesor');
const alto_viewport = document.documentElement.clientHeight;
const alto_nav = document.querySelector('.barra_navegacion').clientHeight;
const botonera = document.querySelector('.botonera_prof');
const boton_agregar = document.querySelector('.boton_crear');
const boton_cerrar = document.querySelector('.cerrar');
const modal_agregar = document.querySelector('.modal_formulario');


modal_agregar.classList.add('cerrar_modal');


tag_panel.style.height = `${alto_viewport - alto_nav}px`;
botonera.style.height = `${tag_panel.clientHeight / 2 - 100}px`;

const ocultar_menu = () => {
    const lista_elementos_panel = tag_panel.children[0].children[0].children;
    for(let i = 0; i < lista_elementos_panel.length; i++){
        if(i == 0){
            continue;
        }

        lista_elementos_panel[i].style.display = 'none';
    }

    tag_panel.classList.add('ocultar_panel');
    tag_panel.children[0].children[0].classList.add('minimizar_usuario');
    tag_panel.children[0].children[0].children[0].classList.add('centrar_boton');
    tag_panel.children[0].children[0].children[0].children[0].classList.add('rotar');
}

const mostrar_menu = () => {
    const lista_elementos_panel = tag_panel.children[0].children[0].children;
    for(let i = 0; i < lista_elementos_panel.length; i++){
        if(i === 0){
            continue;
        }
        
        if(i === 1){
            lista_elementos_panel[i].style.display = 'flex';    
        }else{
            lista_elementos_panel[i].style.display = 'block';
        }
    }

    tag_panel.classList.remove('ocultar_panel');
    tag_panel.children[0].children[0].classList.remove('minimizar_usuario');
    tag_panel.children[0].children[0].children[0].classList.remove('centrar_boton');
    tag_panel.children[0].children[0].children[0].children[0].classList.remove('rotar');
}

const evaluar_esta_panel = () => {
    if(tag_panel.className == 'panel_profesor'){
        ocultar_menu();
    }else{
        mostrar_menu();
    }
}


const agregar_asignatura = (event) => {
    event.preventDefault();

    modal_agregar.classList.remove('cerrar_modal');
}


const cerrar_formulario = () => {
    modal_agregar.classList.add('cerrar_modal');
}


tag_panel.children[0].children[0].children[0].addEventListener('click', evaluar_esta_panel);
boton_agregar.addEventListener('click', agregar_asignatura);
boton_cerrar.addEventListener('click', cerrar_formulario);