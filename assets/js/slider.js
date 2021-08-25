const boton_izquierda = document.querySelector('.left');
const boton_derecha = document.querySelector('.right');
const carrusel = document.querySelector('.slider ul');

let diapositiva = 0;

const izq = () => {
    if(diapositiva === 1){
        carrusel.style.marginLeft = 0;
        diapositiva = 0;
    }
};

const der = () => {
    if(diapositiva === 0){    
        carrusel.style.marginLeft = '-100%';
        diapositiva = 1;
    }
};


const verificar = () => {
    if(diapositiva === 0){
        der();
    }else{
        izq();
    }
};


boton_izquierda.addEventListener('click', izq);
boton_derecha.addEventListener('click', der);

setInterval(verificar, 8000)