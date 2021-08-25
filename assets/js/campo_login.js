const ojo = document.querySelector('.cuadro_visibilidad');
const campo = document.getElementById('campo_pass');

const mostrar_pass = () => {
    let atributo = campo.getAttribute('type');
    let ojo_svg = ojo.children[0];

    if(atributo == 'password'){
        campo.setAttribute('type', 'text');
        ojo_svg.classList.add('activo_ojo');

    }else{
        campo.setAttribute('type', 'password');
        ojo_svg.classList.remove('activo_ojo');
    }
};

ojo.addEventListener('click', mostrar_pass);