const cuadro_comentario = document.querySelector('.cuadro_comentario');

cuadro_comentario.addEventListener('click', () => {
    let estado_cuadro = 0;

    if(estado_cuadro == 0){
        cuadro_comentario.textContent = '';
        estado_cuadro = 1;
    }
});