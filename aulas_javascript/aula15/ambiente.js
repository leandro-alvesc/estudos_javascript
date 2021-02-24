let num = [4, 5, 6, 1, 4];
num.push(3);            // adiciona no final
num.sort();             // coloca em ordem crescente
num.indexOf(5);         // vai mostrar em que chave está o valor 5
pos = num.indexOf(5);   // se o valor não exisitir ele vai definir a posição como -1

// console.log(`Nosso vetor é o ${num}`);
console.log(`O vetor tem ${num.length} posições.`);
console.log(`O primeiro valor do vetor é ${num[0]}`);

if (pos == -1){ // caso não exista o valor nas chaves
    console.log('Valor não encontrado.');
} else {
    console.log(`A chave em que se encontra o valor 5 é: ${pos}.`);
}
console.log('');

/*
for (let pos = 0; pos<num.length; pos++){
    console.log(`A posição ${pos} organizado em ordem crescente tem o valor ${num[pos]}`);
}
*/

// simplificando

for (let pos in num) {  // para cada posição em 'num' será executado o comando a seguir
    console.log(`A posição ${pos} organizado em ordem crescente tem o valor ${num[pos]}`);
}