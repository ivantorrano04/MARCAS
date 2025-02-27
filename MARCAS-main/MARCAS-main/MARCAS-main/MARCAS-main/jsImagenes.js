document.addEventListener("DOMContentLoaded", () => {
// Array con las rutas de las imágenes
const images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg'];
let currentIndex = 0;

// Selector de elementos
const topImage = document.getElementById('topImage');
const autoImage = document.getElementById('autoImage');
const changeImageButton = document.getElementById('changeImageButton');

// Función para cambiar la imagen
function changeImage(element) {
    currentIndex = (currentIndex + 1) % images.length; // Incrementa el índice y lo resetea si llega al final
    element.src = images[currentIndex];
}

// Cambiar la imagen al hacer clic en el botón
changeImageButton.addEventListener('click', () => {
    changeImage(topImage);
});

// Cambiar la imagen automáticamente en la parte inferior
function autoChangeImage() {
    changeImage(autoImage);
}

// Iniciar el cambio automático cada 100 ms
setInterval(autoChangeImage, 100);

// Inicializar las imágenes con la primera del array
topImage.src = images[currentIndex];
autoImage.src = images[currentIndex];

// Cambiar entre modo claro y oscuro


document.getElementById("darkModeButton").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    const button = document.getElementById("darkModeButton");
    if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
    } else {
        button.textContent = "Dark Mode";
    }
})
});
