function validateEmail() {
    // Obtener el campo de entrada del email y el contenedor de errores
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");
    const emailValue = emailInput.value;

    // Regex para validar el formato del email según los requisitos
    const emailRegex = /^[a-zA-Z]{2,}@[a-zA-Z]{1,}\.[a-zA-Z]{2,3}$/;

    // Validar el formato del email
    if (emailRegex.test(emailValue)) {
        // Si el formato es válido, limpiar mensajes de error y resetear estilos
        emailError.textContent = ""; // Limpiar mensaje de error
        emailInput.style.borderColor = ""; // Resetear el color del borde
    } else {
        // Si el formato no es válido, mostrar mensaje de error y resaltar el campo
        emailError.textContent = "Invalid email format. Please use: name@domain.xx";
        emailInput.style.borderColor = "red"; // Cambiar el borde a rojo
    }
}
