const imagenes = document.querySelectorAll('.contenedor_galeria .contenedor_fotos .foto');
const modal = document.querySelector('.modal_imagen');

const mostrar_imagen = (event) => {
    const imagen = event.target.parentNode.previousElementSibling.style.backgroundImage;
    let nombre_imagen = imagen.split("/", 3)[2];
    let direccion_imagen = 'assets/img_blog/' + nombre_imagen.substr(0, nombre_imagen.length-2);

    modal.classList.remove('ocultar');
    modal.classList.add('mostrar');

    modal.children[0].setAttribute('src', direccion_imagen);

    cuerpo.style.overflow = 'hidden';
};


const cerrar_modal = (event) => {
    event.stopPropagation();
    modal.classList.remove('mostrar');
    modal.classList.add('ocultar');

    cuerpo.style.overflow = '';
}


for(let i = 0; i < imagenes.length; i++){
    imagenes[i].addEventListener('click', mostrar_imagen);
}

modal.addEventListener('click', cerrar_modal);