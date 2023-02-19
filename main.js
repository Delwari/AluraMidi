function tocaSom(selectorAudio) {
    const elemento = document.querySelector(selectorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    }
    else {
        console.log('elemento não existe ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// enquanto
for ( let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    // template string
    const idSound = `#som_${instrumento}`;
    
    tecla.onclick = function () {
        tocaSom(idSound);
    }

    tecla.onkeydown = function (evento) {

        console.log(evento.code === 'Space');

        if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    // console.log(tecla.classList[1]);
    // console.log(contador);

}