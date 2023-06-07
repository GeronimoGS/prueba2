function doSomething() {
    alert('¡Haz hecho clic!');
}
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Evitar que el formulario se envíe

    // Validar el formulario
    if (validateForm()) {
        alert("Mensaje enviado correctamente. ¡Gracias por contactarnos!");
        // Aquí puedes agregar el código para enviar el formulario a un servidor o realizar otras acciones necesarias
        // Por simplicidad, en este ejemplo solo mostramos el mensaje de confirmación
    }
});

function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;

    // Validar que los campos no estén vacíos
    if (name === "" || email === "" || message === "") {
        alert("Por favor, completa todos los campos del formulario.");
        return false;
    }

    // Validar el formato del correo electrónico
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Por favor, ingresa un correo electrónico válido.");
        return false;
    }

    return true; // El formulario es válido
}
