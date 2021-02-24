function contar() {
    let inicio = document.querySelector('input#txti');
    let fim = document.querySelector('input#txtf');
    let passo = document.querySelector('input#txtp')
    let res = document.querySelector('div#res');

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = 'Insira os dados corretamente!';
        //window.alert('[ERRO] Faltam dados!');
    } else {
        res.innerHTML = 'Contando: <br>';
        let i = Number(inicio.value);
        let f = Number(fim.value);
        let p = Number(passo.value);    
        if (p <= 0) {
            alert('Passo inválido, consideramos o passo como 1!');
            p = 1;
        }
        if (i < f){
            // contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`; // ou `${c} &#128073;&#127998`;
            }
        } else {
            // contagem decrescente
            for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}`;
    }
}
