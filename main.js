const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");



const perguntas = [
    {
        enunciado: "Voçê está em dúvida aonde passar o fim de semana. Devo ir para?",
        alternativas: [
            {
                texto: " Um lugar tranquilo",
                afirmacao: " Você prefere um lugar calmo, com poucas pessoas; ",
            },
            {
                texto: " Um lugar agitado ",
                afirmacao: " Você prefere um lugar movimentado, com várias pessoas; ",
            }
        ]
    },
    {
        enunciado: " Qual seu gosto de paisagem?",
        alternativas: [
            {
                texto: " Natural ",
                afirmacao: " Você parece ter gostos para a natureza e campos; ",
            },
            {
                texto: " Urbanizado ",
                afirmacao: " Você parece ter gosto para cidades e urbanismo; ",
            }
        ]
    },
    {
        enunciado: " Prefere contato com animais?",
        alternativas: [
            {
                texto: " Sim ",
                afirmacao: " Você é uma pessoa que se sente bem com animais e gosta do carinho que eles dão para você; ",
            },
            {
                texto: " Não ",
                afirmacao: " Você não gosta de animais, ou tem medo deles; ",
            }
        ]
    },
    {
        enunciado: " Qual tipo de piscina você prefere?",
        alternativas: [
            {
                texto: " Naturais ",
                afirmacao: " Você prefere cachoeiras, rios e lagos; ",
            },
            {
                texto: " Sintéticas ",
                afirmacao: " você prefere parques aquáticos; ",
            }
        ]
    },
    {
        enunciado: " Qual seu gosto para passar a noite?",
        alternativas: [
            {
                texto: " Cabanas e barracas ",
                afirmacao: "Você vai ter uma paisagem para a natureza e uma noite tranquila;",
            },
            {
                texto: " Hotéis ",
                afirmacao: " Você vai ter uma visão para urbanismo; ",
            }
        ]
    },
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
if(atual >= perguntas.length){
    mostraResultado();
    return;
}
    
perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();

}

function mostraAlternativas(){
    for (const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("Button");
        botaoAlternativas.textContent = alternativa.texto;
        caixaAlternativas.appendChild(botaoAlternativas);
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta()

}
function mostraResultado(){
caixaPerguntas.textContent = "Em 2049..."
textoResultado.textContent = historiaFinal;
caixaAlternativas.textContent = "";

}

mostraPergunta();