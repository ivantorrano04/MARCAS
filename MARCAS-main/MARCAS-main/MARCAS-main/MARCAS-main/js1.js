function validateEmail() {
    // Obtener el campo de entrada del email y el contenedor de errores
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailErrorV = document.getElementById("email-valido");
    const emailValue = emailInput.value;

    // Regex para validar el formato del email según los requisitos
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


        // Validar el formato del email
        // Validar el formato del email
if (emailRegex.test(emailValue)) {
    // Si el formato es válido, limpiar mensajes de error y resetear estilos
    emailErrorV.textContent = "Bien"; // Limpiar mensaje de error
    emailInput.style.borderColor = "green"; // Cambiar el borde a verde
} else {
    // Si el formato no es válido, mostrar mensaje de error y resaltar el campo
    emailError.textContent = "Invalid email format. Please use: name@domain.xx";
    emailInput.style.borderColor = "red"; // Cambiar el borde a rojo
}

}
