const inputRojo = document.getElementById('rojo')
const inputVerde = document.getElementById('verde')
const inputAzul = document.getElementById('azul')

const textoRojo = document.getElementById('texto-rojo')
const textoVerde = document.getElementById('texto-verde')
const textoAzul = document.getElementById('texto-azul')

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

textoRojo.textContent = rojo;
textoVerde.textContent = verde;
textoAzul.textContent = azul;

function actualizarColor(rojo, verde, azul) {
    const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
    document.body.style.backgroundColor = colorRGB
}

// para actualizar Red (Rojo)
inputRojo.addEventListener('change', () => {
    rojo = inputRojo.value;
    textoRojo.textContent = rojo;
    actualizarColor(rojo, verde, azul)

})

// para actualizar Green (Verde)
inputVerde.addEventListener('change', () => {
    verde = inputVerde.value;
    textoVerde.textContent = verde;
    actualizarColor(rojo, verde, azul)

})

// para actualizar Blue (Azul)
inputAzul.addEventListener('change', () => {
    azul = inputAzul.value;
    textoAzul.textContent = azul;
    actualizarColor(rojo, verde, azul)

})