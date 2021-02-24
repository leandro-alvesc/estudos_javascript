function soma(n1=0, n2=0) {     // para evitar o erro caso coloque somente um parâmetro, podemos usar parametro opcional, tal como n1=0
    return n1 + n2;
}

console.log(soma(2, 5));    // se nao tiver dois valores ele vai dar NaN