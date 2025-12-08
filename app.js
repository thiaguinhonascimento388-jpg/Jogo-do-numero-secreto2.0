let listaDeNumerosSorteados = [];
let numerolimite = 10;
let numeroSecreto = geradorDeNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo de numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if (chute == numeroSecreto) {   
        exibirTextoNaTela('h1', 'Parabens Voce Acertou!!');
        let palavraTentaiva = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentaiva}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto ) {
            exibirTextoNaTela('p', 'o numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'o numero secreto e maior');
        }
        tentativas++;
        limparCampo();
    }
}

function geradorDeNumeroAleatorio() {
    let numeroEscolhidos = parseInt(Math.random() * numerolimite + 1);
    let quantidadeDeNumerosNaLista = listaDeNumerosSorteados.length

    if (quantidadeDeNumerosNaLista == numerolimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhidos)) {
        return geradorDeNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhidos);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhidos;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reniciarJogo() {
    numeroSecreto = geradorDeNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial;
    document.getElementById('reiniciar').setAttribute('disabled', true);
}