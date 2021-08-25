const lista_imagenes_galeria = document.querySelectorAll('.contenedor_imagen .hover_imagen .marco_imagen .aro1');
const ventana_modal = document.querySelector('.modal_imagen');

const mostrar_imagen_galeria = (event) => {
    const lista_contenedores_elemento = event.path;
    const contenedor_elemento = lista_contenedores_elemento.find( dato => dato.className == 'contenedor_imagen');
    const nombre_imagen = contenedor_elemento.style.backgroundImage;

    let nombre_largo = nombre_imagen.split('/')[2];
    nombre_largo = nombre_largo.slice(0, nombre_largo.length - 2);


    ventana_modal.style.display = 'flex';
    ventana_modal.children[0].children[0].setAttribute('src', 'assets/img_blog/' + nombre_largo);
};



ventana_modal.addEventListener('click', () => {
    ventana_modal.style.display = 'none';
});



for(let i = 0; i < lista_imagenes_galeria.length; i++){
    lista_imagenes_galeria[i].addEventListener('click', mostrar_imagen_galeria);
}