let listadeNumerossorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;
 function exibirtextonaTela (tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
}
function mensagemInicial(){
    let  TextoInicial = document.querySelector('h1').innerHTML == 'Jogo do número secreto';

    if(TextoInicial) {
        exibirtextonaTela('h1', 'Jogo do número secreto');
        exibirtextonaTela('p', 'Tente adivinhar o número secreto entre 1 e 10');
    }


}


function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        exibirtextonaTela('h1', 'Parabéns! Você acertou!');
        let palavratentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemInicial  = `descobriu o número secreto com  ${tentativas} ${palavratentativas}`;
        exibirtextonaTela('p', mensagemInicial);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        if (chute > numeroSecreto) {
            exibirtextonaTela('p', 'O número é menor!');
        } else {
            exibirtextonaTela('p', 'O número é maior!');
        }
        tentativas++;
        
       
    }
	// Adicione a lógica da função aqui

}
 function numeroAleatorio() {
    let numeroEscolhido =  parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDelemntosnalista = listadeNumerossorteados.length;
    if(quantidadeDelemntosnalista == numeroLimite){
        listadeNumerossorteados = [];
    }
    if(listadeNumerossorteados.includes(numeroEscolhido)){
        return numeroAleatorio();
    } else {
        listadeNumerossorteados.push(numeroEscolhido);
        console.log(listadeNumerossorteados);
        return numeroEscolhido;}
 }
 function limparCampo() {
    let input = document.querySelector('input');
    input.value = '';
 }
function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirtextonaTela('h1', 'Jogo do número secreto');
mensagemInicial();
document.getElementById('reiniciar').setAttribute('disabled', true);

}