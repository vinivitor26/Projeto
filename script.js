const imagens = [
    "imagens/foto_1.jpg", "imagens/foto_2.jpg", "imagens/foto_3.jpg",
    "imagens/foto_4.jpg", "imagens/foto_5.jpg", "imagens/foto_6.jpg",
    "imagens/foto_7.jpg", "imagens/foto_8.jpg", "imagens/foto_9.jpg",
    "imagens/foto_10.jpg", "imagens/foto_11.jpg", "imagens/foto_12.jpg",
    "imagens/foto_13.jpg", "imagens/foto_14.jpg", "imagens/foto_15.jpg",
    "imagens/foto_16.jpg", "imagens/foto_17.jpg", "imagens/foto_18.jpg"
];

const legendas = [
    "A viagem que mais fazemos, PG 🏖️<br> O Aedes Aegypti já tinha me pegado🦟",
    "Nosso 'primeiro' jantar 🍖<br>(A fila da Brazz deve estar cheia até agora)",
    "Bruninho chegoooouuu!🎁🎤<br>O show mais incrível que já fui, obrigado pelo presente!",
    "Acampa MJA<br>🏕️",
    "Desculpaaaa ❤️<br>Tinha que ter essa rs",
    "Acampa Jovens IBASP<br>🏕️",
    "O dia do pedido!💍<br>Quando que vamos fazer uma prova juntos, hein?",
    "Daaay Camp MJA<br>🏕️",
    "Ahhhh, como é linda! 😍<br>Nem parece que tava num buraco que eu cavei kkkkk",
    "Fazendo o que vc gosta, barzinha e petiscos!<br>👅🍢",
    "Ó a gente cavando o buraco<br>🕳️",
    "Obrigado por topar minhas ideias! 👨‍🦳<br>Quaaase todas...",
    "A melhor dupla de vôlei do Maré Alta 🏐<br>Ninguém segura nois!",
    "Quando tudo estava pra recomeçar...<br>📖✍️",
    "Servindo juntos na igreja!<br>⛪",
    "Já falei que vc é linda? 😍<br>Deus foi muito bom comigo!",
    "Os 3 minutos mais rápidos que eu já vi <br>🎡🚗💥",
    "Obrigado por sempre me acompanhar!<br>Eu amo você!❤️"
];

let indiceAtual = 0;
const imgElemento = document.getElementById("imagemAtual");
const legendaElemento = document.getElementById("legenda");

function atualizarImagem() {
    imgElemento.src = imagens[indiceAtual];
    legendaElemento.innerHTML = legendas[indiceAtual];
}

function proximaImagem() {
    indiceAtual = (indiceAtual + 1) % imagens.length;
    atualizarImagem();
}

function imagemAnterior() {
    indiceAtual = (indiceAtual - 1 + imagens.length) % imagens.length;
    atualizarImagem();
}

let temporizador;

function iniciarCarrossel() {
    setTimeout(() => {
        temporizador = setInterval(proximaImagem, 5000);
    }, 10000);
}

document.getElementById("proximo").addEventListener("click", () => {
    clearInterval(temporizador);
    proximaImagem();
    temporizador = setInterval(proximaImagem, 5000);
});

document.getElementById("anterior").addEventListener("click", () => {
    clearInterval(temporizador);
    imagemAnterior();
    temporizador = setInterval(proximaImagem, 6000);
});

function calcularTempoJuntos() {
    const inicio1 = new Date("2021-07-22");
    const fim1 = new Date("2023-06-02");
    const inicio2 = new Date("2024-10-19");
    const agora = new Date();

    const totalDias1 = Math.floor((fim1 - inicio1) / (1000 * 60 * 60 * 24));
    const totalDias2 = Math.floor((agora - inicio2) / (1000 * 60 * 60 * 24));
    let totalDias = totalDias1 + totalDias2;

    let anos = Math.floor(totalDias / 365);
    let meses = Math.floor((totalDias % 365) / 30);
    let dias = (totalDias % 365) % 30;

    document.getElementById("tempoJuntos").innerText = `${anos} anos, ${meses} meses e ${dias} dias juntos! ❤️`;
}

calcularTempoJuntos();
setInterval(calcularTempoJuntos, 1000);
atualizarImagem();
iniciarCarrossel();
