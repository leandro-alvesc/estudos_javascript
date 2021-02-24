function tabuada() {
    let numero = document.getElementById('txtn');
    let res = document.getElementById('seltab');
    res.innerHTML = ' ';
    
    if (txtn.value.length == 0) {
        window.alert('[ERRO] Por favor, insira um valor válido.');
    } else {
        let r = Number(txtn.value);
        let t = Number(1);
        do {
            let item = document.createElement('option');
            let f = r * t;
            item.text = `${r} x ${t} = ${f}`;
            item.value = `tab${t}`;
            res.appendChild(item);
            t++;
        } while (t <= 10);
    }

}
