console.log("hello world")

function print(msg) {
    console.log(msg)
}

//questão 1-Somador de Números 

//questão 2-Contagem Regressiva da NASA  
let contagem = 10;
let intervalo = setInterval(() => {
    if (contagem >= 0) {
        print(contagem);
        contagem--;
    } else {
        clearInterval(intervalo);
        print("Lançamento!");
    }
}, 1000);

//questão 9-Contador de Vogais  
let frase = prompt("Digite uma frase:");
let contador = 0;
let vogais = "aeiouAEIOU"; 

for (let i = 0; i < frase.length; i++) {
    if (vogais.includes(frase[i])) { 
        contador++;
    }
}

alert(`A frase digitada tem ${contador} vogais.`);