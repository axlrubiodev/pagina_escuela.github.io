const contenedor_general = document.querySelector('.panel_tarea');
const alto_ventana = document.documentElement.clientHeight;
const alto_nav = document.body.children[0].clientHeight;
const boton_atras = document.querySelector('.atras_boton');

contenedor_general.style.height = `${alto_ventana - alto_nav}px`;

boton_atras.addEventListener('click', () => {
    window.location.replace('pagina-de-curso.html');
});