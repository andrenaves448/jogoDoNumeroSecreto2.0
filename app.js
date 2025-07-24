//opção com mais codigo porem vamos ver utilizando a function
// let titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha o número entre 1 e 10';

// function verificarChute(){
//     console.log('O botaão foi acionado')
// };

let listaDeNumerosSorteados = [];
let numeroLimite = 35;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exbirTextoNaTela(tag,texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {reate: 1.2});
};

function mensagemInicial(){
    exbirTextoNaTela('h1','Jogo do número secreto'); // 'h1' é igual ao tag e o Jogo do número secreto é igual ao texto da function exbirTextoNaTela
    exbirTextoNaTela('p','Escolha o número entre 1 e 10');
};

mensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let fraseTentativas = tentativas >= 6 
            ? 'Foram bastante tentativas, mas não desanime! Tente mais uma vez para melhorar.'
            : 'Boa! Você é fera conseguiu com poucas tentativas.Parabems!';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}. ${fraseTentativas}`;
        exbirTextoNaTela('h1','Você acertou!');
        exbirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
        exbirTextoNaTela('P','O número secreto é menor');
        }else{
        exbirTextoNaTela('p','O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
};

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1 );
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    }else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
};

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
};


function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
};

