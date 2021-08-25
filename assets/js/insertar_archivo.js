const boton = document.querySelector('.boton_adjuntar');

boton.addEventListener('click', () => {
    boton.parentElement.children[1].click();
});