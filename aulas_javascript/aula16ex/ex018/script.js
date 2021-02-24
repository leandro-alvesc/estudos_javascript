let txtn = document.getElementById('txtnum');
let sel = document.getElementById('numeros');
let res = document.getElementById('res');
let valores = [];

function isNum(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } else {
        return false;
    }
}

function inList(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true;
    } else {
        return false;
    }
}

function adicionar() {
    if(isNum(txtn.value) && !inList(txtn.value, valores)) {
        valores.push(Number(txtn.value));
        //let num = Number(txtn.value);
        let item = document.createElement('option');
        item.text = `Número ${txtn.value} adicionado.`;
        //item.value = `op${txtn.value}`;
        sel.appendChild(item);
        res.innerHTML = '';
    } else {
        alert('Valor inválido ou já encontrado na lista.');
    }
    txtn.value = '';
    txtn.focus();
}

function finalizar() {
    if (valores.length == 0) {
        alert('Por favor, adicione um valor!');
    } else {
        res.innerHTML = '';
        let maior = valores[0];
        let menor = valores[0];
        let soma = 0;
        let media = 0;
        for (let pos in valores) {
            soma += valores[pos];
            if (valores[pos] > maior)
                maior = valores[pos];
            if (valores[pos] < menor)
                menor = valores[pos];
        }
        media = soma / valores.length;
        res.innerHTML += `<p>No total, temos ${valores.length} números.</p>`;
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`;
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`;
        res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`;
        res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
    }
 
    /*
    for (let pos in valores) {
        res.innerHTML += `<br>${valores[pos]}`;
    }
    */
}