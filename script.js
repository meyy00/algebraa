window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Configura o tamanho base da fonte
let baseFontSize = 16; // Tamanho base da fonte em pixels
const fontSizeIncrement = 2; // Incremento do tamanho da fonte

// Funções para aumentar e diminuir o tamanho da fonte
function decreaseFontSize() {
    baseFontSize = Math.max(baseFontSize - fontSizeIncrement, 10); // Define um mínimo de 10px
    document.body.style.fontSize = `${baseFontSize}px`;
}

function increaseFontSize() {
    baseFontSize = Math.min(baseFontSize + fontSizeIncrement, 32); // Define um máximo de 32px
    document.body.style.fontSize = `${baseFontSize}px`;
}

// Adiciona eventos aos botões
document.getElementById('decreaseFont').addEventListener('click', decreaseFontSize);
document.getElementById('increaseFont').addEventListener('click', increaseFontSize);