const containerCarrossel = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.carousel-slide');
const btnAnterior = document.querySelector('.prev-btn');
const btnProximo = document.querySelector('.next-btn');

let indiceAtual = 0;
let idIntervalo;

function atualizarCarrossel() {
    const deslocamento = -indiceAtual * containerCarrossel.clientWidth;
    containerCarrossel.style.transform = `translateX(${deslocamento}px)`;
}

function mudarSlide(proximo = true) {
    clearInterval(idIntervalo);
    indiceAtual = proximo ? 
        (indiceAtual < slides.length - 1 ? indiceAtual + 1 : 0) : 
        (indiceAtual > 0 ? indiceAtual - 1 : slides.length - 1);
    atualizarCarrossel();
    iniciarAutoSlide();
}

function iniciarAutoSlide() {
    idIntervalo = setInterval(() => mudarSlide(true), 5000);
}

btnAnterior.addEventListener('click', () => mudarSlide(false));
btnProximo.addEventListener('click', () => mudarSlide(true));
window.addEventListener('resize', atualizarCarrossel);

// Iniciar o auto slide quando a página carregar
iniciarAutoSlide();
