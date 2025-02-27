document.addEventListener("DOMContentLoaded", () => {
    const demoButton = document.getElementById('demoButton');
    const demoDropdown = document.getElementById('demoDropdown');
    const fontSButton = document.getElementById('fontS');
    const fontMButton = document.getElementById('fontM');
    const fontLButton = document.getElementById('fontL');
    const fontXLButton = document.getElementById('fontXL');
    const bgRedButton = document.getElementById('bgRed');
    const bgBlueButton = document.getElementById('bgBlue');
    const bgGreenButton = document.getElementById('bgGreen');
    const bgYellowButton = document.getElementById('bgYellow');
    const botontimesn = document.getElementById('Times');
    const botonArial = document.getElementById('Arial');
    const botontRoboto = document.getElementById('Roboto');
    const botontCalibri = document.getElementById('Calibri')
    const title = document.getElementById('title'); // Título h1
    const body = document.body; // Para cambiar el fondo
    demoDropdown.style.display = 'none';

    // Mostrar y ocultar el menú 
    demoButton.addEventListener('click', (event) => {
        event.stopPropagation();
        const buttonRect = demoButton.getBoundingClientRect();
        demoDropdown.style.left = `${buttonRect.left}px`;
        demoDropdown.style.top = `${buttonRect.bottom + window.scrollY}px`;
        demoDropdown.style.display = demoDropdown.style.display === 'block' ? 'none' : 'block';
    });

    // Cerrar el menú si se hace clic fuera del botón o del menú
    document.addEventListener('click', (event) => {
        if (!demoButton.contains(event.target) && !demoDropdown.contains(event.target)) {
            demoDropdown.style.display = 'none';
        }
    });

    botontimesn.addEventListener('click', () => {
        title.style.fontFamily = 'Verdana, Times, serif';
    });

    botonArial.addEventListener ('click', ()  => {
        title.style.fontFamily = 'Arial'
    });

    botontRoboto.addEventListener ('click', ()  => {
        title.style.fontFamily = 'Comic Sans MS '
    });

    botontCalibri.addEventListener ('click', ()  => {
        title.style.fontFamily = 'Calibri '
    });

    
    

    

    // Cambiar tamaño de texto a S 
    fontSButton.addEventListener('click', () => {
        title.style.fontSize = '16px';
    });

    // Cambiar tamaño de texto a M 
    fontMButton.addEventListener('click', () => {
        title.style.fontSize = '24px'; 
    });

    // Cambiar tamaño de texto a L 
    fontLButton.addEventListener('click', () => {
        title.style.fontSize = '32px'; 
    });

    // Cambiar tamaño de texto a XL
    fontXLButton.addEventListener('click', () => {
        title.style.fontSize = '40px'; 
    });

    // Cambiar el fondo a rojo
    bgRedButton.addEventListener('click', () => {
        body.style.backgroundColor = 'red';
    });

    // Cambiar el fondo a azul
    bgBlueButton.addEventListener('click', () => {
        body.style.backgroundColor = 'blue';
    });

    // Cambiar el fondo a verde
    bgGreenButton.addEventListener('click', () => {
        body.style.backgroundColor = 'green';
    });

    // Cambiar el fondo a amarillo
    bgYellowButton.addEventListener('click', () => {
        body.style.backgroundColor = 'yellow';
    });
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
