let input = document.querySelector('input');
let valor = document.getElementById('simulacao');
let calc = document.getElementById('calcular');
const cdb = '12%';


// Valor dos rendimentos

// Funcoes

function clicou() {
     if (input.value.length == 0 || input.value == 0) {
        valor.innerHTML = 'Digite um numero'
     } else {
        let result = input.value * 12 / 100
       
        valor.innerHTML = `Valor: ${result}`
     }
}


calc.addEventListener('click', clicou)