const containerCarrossel = document.querySelector('.carousel-container'); // Seleciona o contêiner do carrossel
const slides = document.querySelectorAll('.carousel-slide'); // Seleciona todos os slides do carrossel
const btnAnterior = document.querySelector('.prev-btn'); // Seleciona o botão de slide anterior
const btnProximo = document.querySelector('.next-btn'); // Seleciona o botão de próximo slide

let indiceAtual = 0; // Define o índice do slide atual
let idIntervalo; // Variável para armazenar o ID do intervalo do auto slide

function atualizarCarrossel() {
    // Atualiza a posição do carrossel com base no slide atual
    const deslocamento = -indiceAtual * containerCarrossel.clientWidth;
    containerCarrossel.style.transform = `translateX(${deslocamento}px)`;
}

function mudarSlide(proximo = true) {
    // Muda o slide, seja para o próximo ou para o anterior
    clearInterval(idIntervalo); // Para o intervalo atual do auto slide
    indiceAtual = proximo ? 
        (indiceAtual < slides.length - 1 ? indiceAtual + 1 : 0) : 
        (indiceAtual > 0 ? indiceAtual - 1 : slides.length - 1); // Atualiza o índice do slide atual
    atualizarCarrossel(); // Atualiza a posição do carrossel
    iniciarAutoSlide(); // Reinicia o auto slide
}

function iniciarAutoSlide() {
    // Inicia o auto slide, mudando de slide a cada 5 segundos
    idIntervalo = setInterval(() => mudarSlide(true), 5000);
}

btnAnterior.addEventListener('click', () => mudarSlide(false)); // Adiciona evento de clique para o botão anterior
btnProximo.addEventListener('click', () => mudarSlide(true)); // Adiciona evento de clique para o botão próximo
window.addEventListener('resize', atualizarCarrossel); // Atualiza a posição do carrossel ao redimensionar a janela

// Inicia o auto slide quando a página carregar
iniciarAutoSlide();
