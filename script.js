var numeroSecreto = parseInt(Math.random() * 11);
var tentativas = 0;

function Chutar() {
    var elementoResultado = document.getElementById("resultado");
    var elementoTentativas = document.getElementById("tentativas");
    var chute = parseInt(document.getElementById("valor").value);
    
    if(chute === numeroSecreto) {
        tentativas++;
        elementoResultado.innerHTML = "Acertou!";
        elementoTentativas.innerHTML = "Número de tentativas: " + tentativas;
    }
    else if(chute < 0 || chute > 10){
        tentativas++;
        elementoResultado.innerHTML = "Você deve digitar um número entre 0 e 10!";
        elementoTentativas.innerHTML = "Número de tentativas: " + tentativas;
    } else if(chute > numeroSecreto){
        tentativas++;
        elementoResultado.innerHTML = "Errou! O número secreto é menor!";
        elementoTentativas.innerHTML = "Número de tentativas: " + tentativas;
    } else if(chute < numeroSecreto) {
        tentativas++;
        elementoResultado.innerHTML = "Errou! O número secreto é maior!";
        elementoTentativas.innerHTML = "Número de tentativas: " + tentativas;
    }
}