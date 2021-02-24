function carregar() {
    var msg = document.querySelector('div#msg');
    var img = document.querySelector('img#imagem');
    var cump = document.querySelector('div#cump');
    var data = new Date();
    var hora = data.getHours();
    var min = data.getMinutes();
    msg.innerHTML = `Agora são ${hora} horas e ${min} minutos!`;
    if (hora >= 0 && hora < 12) {
        // BOM DIA!
        img.src = 'fotomanha.png';
        document.body.style.background = '#e2cd9f';
        cump.innerHTML = '<strong>Bom dia!</strong>';
    } else if (hora >= 12 && hora < 18) {
        // BOA TARDE!
        img.src = 'fototarde.png';
        document.body.style.background = '#b9846f';
        cump.innerHTML = '<strong>Boa tarde!</strong>';
    } else {
        // BOA NOITE!
        img.src = 'fotonoite.png';
        document.body.style.background = '#515154';
        cump.innerHTML = '<strong>Boa noite!</strong>';
    }
}