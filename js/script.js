document.getElementById('formulario').addEventListener('submit', function(event) {
    var nombre = document.getElementById('nombre').value;
    var email = document.getElementById('email').value;
    var mensaje = document.getElementById('mensaje').value;
    var telefono = document.getElementById('telefono').value;
    var asunto = document.getElementById('asunto').value;
    var opcion = document.getElementById('opcion').value;

    if (nombre.trim() === '') {
        alert('Por favor, ingrese su nombre.');
        event.preventDefault();
        return;
    }

    if (email.trim() === '' || !validarEmail(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        event.preventDefault();
        return;
    }

    if (mensaje.trim() === '') {
        alert('Por favor, ingrese un mensaje.');
        event.preventDefault();
        return;
    }

    if (telefono.trim() !== '' && !validarTelefono(telefono)) {
        alert('Por favor, ingrese un número de teléfono válido.');
        event.preventDefault();
        return;
    }

    if (asunto.trim() === '') {
        alert('Por favor, ingrese un asunto.');
        event.preventDefault();
        return;
    }

    if (opcion === '') {
        alert('Por favor, seleccione una opción.');
        event.preventDefault();
        return;
    }
});

function validarEmail(email) {
    // Patrón para validar email
    var patronEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return patronEmail.test(email);
}

function validarTelefono(telefono) {
    // Patrón para validar número de teléfono (formato: 1234567890 o 123-456-7890)
    var patronTelefono = /^\d{10}$|^\d{3}-\d{3}-\d{4}$/;
    return patronTelefono.test(telefono);
}
