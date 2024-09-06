let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10
let numeroSecreto = gerarNumeroAleatorio()
let tentativa = 1;

exibirMensagemInicial();

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial(){
exibirTextoNaTela('h1', 'Jogo do número secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa > 1 ? 'tentativas!' : 'tentativa!';
        let mensagemTentativa ='Você descobriu o número secreto com '+ tentativa + ' ' + palavraTentativa
        //let mensagemTentativa =`Você descobriu o número secreto com ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O Número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O Número secreto é maior');
        }
        tentativa++;
        limparCampo();
    }

    }

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementosNalista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//////////// Desafio 1 ////////////

// function exibirConsole() {
//     console.log('Olá mundo!');
// }

// function receberNome(nome) {
//     console.log('Olá '+ nome + '!');
// }

// function receberNumero(numero) {
//      return numero * 2;
// }
// let resultadoDobro = receberNumero(5);
//     console.log(resultadoDobro);

// function  mediaNumeros(a, b, c) {
//     return (a + b + c)/3;

// let media = mediaNumeros(1, 3, 5);
//     console.log(media);
// }

// function numeroMaior(d, e) {
//     return d > e ? d : e;
// }
// let Maior = numeroMaior(7,3);
//         console.log(Maior);

// function aoQuadrado(NumeroQuadrado) {
//     return NumeroQuadrado * NumeroQuadrado;
// }
// let Quadrado = aoQuadrado(2);
//     console.log(Quadrado);

//////////// Desafio 2 ////////////

//function calculoImc(altura, peso) {
//   let imc = peso / (altura*altura);
//} 

//function calcularFatorial(numero) {
// if (numero === 0 || numero === 1) {
//   return 1;
// }

// let fatorial = 1;
// for (let i = 2; i <= numero; i++) {
//   fatorial *= i;
// }

// return fatorial;
// }

//function conversaoReal(dolar){
//let cotacao = 4.8; 
//let reais = dolar * cotacao;
//return reais.toFixed(2);
//}

//function medicaoSala (altura, largura){
//let area = altura * largura;
//let perimetro = 2*(altura + largura);
//console.log('A área da sala é: ' + area + ' metros quadrados');
//console.log('O perímetro é: ' + perimetro + ' metros');
//}

//function medicaoSalaredonda (raio){
//let pi = 3.14;
//let area = pi*raio*raio;
//let perimetro = 2*pi*raio;
//console.log('A área da sala é: ' + area + ' metros quadrados');
//console.log('O perímetro é: ' + perimetro + ' metros');
//}

//function tabuada (numero){
//  for(let i=1; i<= 10; i++){
//      let resultado = numero * i;
//      console.log(numero + ' x '+ i + ' = ' + resultado);
//  }
//}

///////////// Desafio 3 ////////////

//let listaGenerica = [];

//let linguagensDeProgramacao = ['JavaScript','C','C++','Kotlin','Python'];
//linguagensDeProgramacao.push ('Java', 'Ruby' e 'GoLang');

//let nome = ['Ana','Beatriz','Carlos'];
//console.log (nome[0]);
//console.log(nome[1]);
//comsolo.log(nome[nome.length -1]);

