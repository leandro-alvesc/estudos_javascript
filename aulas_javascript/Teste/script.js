let op1 = document.getElementById('in1');
let op2 = document.getElementById('in2');
let op3 = document.getElementById('in3');
let op4 = document.getElementById('in4');
function prox() {
    if (op1.value > 6 || op1.value <= 0 || op2.value > 6 || op2.value <= 0 || op3.value > 6 || op3.value <= 0 || op4.value > 6 || op4.value <= 0) {
        alert('Por favor, insira um número de 1 a 6!');        
    } else {
        alert('Certo');
    }
}