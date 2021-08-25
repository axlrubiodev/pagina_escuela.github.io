const botonera_crear = document.querySelector('.menu_informacion .botonera_tarea');
const contenedor_alto = botonera_crear.parentElement;

const contenedor_tareas = document.querySelector('.tareas');

const contenedor_general = document.querySelector('.panel_tarea');
const alto_ventana = document.documentElement.clientHeight;
const alto_nav = document.body.children[0].clientHeight;
const boton_atras = document.querySelector('.atras_boton');

contenedor_general.style.height = `${alto_ventana - alto_nav}px`;

contenedor_tareas.style.height = `${(contenedor_alto.clientHeight - botonera_crear.clientHeight)}px`;

boton_atras.addEventListener('click', () => {
    window.location.replace('panel-de-administracion.html');
});