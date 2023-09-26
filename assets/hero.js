// Cambiar el texto del héroe
const changingText = document.getElementById('changingText');
const texts = ['idea', 'negocio', 'proyecto']; // Puedes agregar más textos aquí
let index = 0;

function changeText() {
    changingText.textContent = texts[index];
    index = (index + 1) % texts.length;
}

setInterval(changeText, 4000); // Cambia el texto cada 5 segundos
