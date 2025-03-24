let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = numeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', { rate: 1.2 });
}

function mensagemInicial() {
    let tituloCorreto = document.querySelector('h1').innerHTML === 'Jogo do número secreto';

    if (tituloCorreto) {
        exibirTextoNaTela('h1', 'Jogo do número secreto');
        exibirTextoNaTela('p', 'Tente adivinhar o número secreto entre 1 e 10');
    }
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Parabéns! Você acertou!');
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagem = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}`;
        exibirTextoNaTela('p', mensagem);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número é menor!');
        } else {
            exibirTextoNaTela('p', 'O número é maior!');
        }
        tentativas++;
    }
}

function numeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite) + 1;
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista === numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return numeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo() {
    let input = document.querySelector('input');
    input.value = '';
}

function reiniciarJogo() {
    numeroSecreto = numeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    mensagemInicial(); // Adicione esta linha
    document.getElementById('reiniciar').setAttribute('disabled', true);
}