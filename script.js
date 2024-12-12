// Guardar datos del registro en almacenamiento temporal
const formRegistro = document.getElementById('formRegistro');
if (formRegistro) {
    formRegistro.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const contrasena = document.getElementById('contrasenaRegistro').value;

        // Guardar en localStorage
        localStorage.setItem('nombreUsuario', nombre);
        localStorage.setItem('contrasenaUsuario', contrasena);

        alert('Registro exitoso. Ahora puedes iniciar sesión.');
        window.location.href = 'login.html'; // Redirigir a la página de inicio de sesión
    });
}

// Manejar inicio de sesión
const formLogin = document.getElementById('formLogin');
if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const contrasena = document.getElementById('contrasena').value;

        const nombreRegistrado = localStorage.getItem('nombreUsuario');
        const contrasenaRegistrada = localStorage.getItem('contrasenaUsuario');

        if (usuario === nombreRegistrado && contrasena === contrasenaRegistrada) {
            alert('Inicio de sesión exitoso.');
            window.location.href = 'principal.html'; // Redirigir a la página principal
        } else {
            alert('Usuario o contraseña incorrectos.');
        }
    });
}

// Ingresar sin registro
const ingresarSinRegistro = document.getElementById('ingresarSinRegistro');
if (ingresarSinRegistro) {
    ingresarSinRegistro.addEventListener('click', () => {
        localStorage.setItem('nombreUsuario', 'Usuario Invitado');
        window.location.href = 'principal.html'; // Redirigir a la página principal
    });
}

// Mostrar saludo en la página principal
if (window.location.pathname.includes('principal.html')) {
    const nombreUsuario = localStorage.getItem('nombreUsuario');
    if (nombreUsuario) {
        document.getElementById('nombreUsuario').textContent = nombreUsuario;
    }
}

// Botón de volver al inicio
const volverInicio = document.getElementById('volverInicio');
if (volverInicio) {
    volverInicio.addEventListener('click', () => {
        window.location.href = 'login.html';
    });
}
// Redirección al hacer clic en "Ingresar"
document.getElementById('ingresar').addEventListener('click', () => {
    window.location.href = 'login.html'; // Cambia a la página de inicio de sesión
});

// Redirección al hacer clic en "Registrar"
document.getElementById('registro').addEventListener('click', () => {
    window.location.href = 'registro.html'; // Cambia a la página de registro
});
