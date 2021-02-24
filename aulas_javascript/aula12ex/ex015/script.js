function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.querySelector('input#txtano');
    var res = document.querySelector('div#res');
    if (fano.value.length == 0 || Number(fano.value) > ano) { //utilizar Number(x) caso precise converter o valor
        window.alert('[EERO] Verifique os dados e tente novamente!');
    } else {
        var fsex = document.getElementsByName('radsex');
        var idade = ano - Number(fano.value);
        var genero = '';
        var img = document.createElement('img'); // criar a imagem dinamicamente
        img.setAttribute('id', 'foto'); // equivalente ao <img id='foto'> no html
        if (fsex[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'foto_crianca_m.png');
            } else if (idade <21) {
                // jovem
                img.setAttribute('src', 'foto_jovem_m.png');
            } else if (idade <50) {
                // adulto
                img.setAttribute('src', 'foto_adulto_m.png');
            } else {
                // idoso
                img.setAttribute('src', 'foto_idoso_m.png');
            }
        } else if (fsex[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade <= 10){
                // criança
                img.setAttribute('src', 'foto_crianca_f.png');
            } else if (idade <21) {
                // jovem
                img.setAttribute('src', 'foto_jovem_f.png');
            } else if (idade <50) {
                // adulto
                img.setAttribute('src', 'foto_adulto_f.png');
            } else {
                // idoso
                img.setAttribute('src', 'foto_idoso_f.png');
            }
        }
        res.style.textAlign = 'center'; // centralizar o texto
        res.innerHTML = `Detectamos ${genero} com  ${idade} anos!`;
        res.appendChild(img); // adicionar um elemento
    }
}
