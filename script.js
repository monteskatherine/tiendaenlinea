// Supongamos que el nombre de usuario se guarda en una variable
let nombreUsuario = "UsuarioEjemplo"; // Reemplaza con la lógica de tu aplicación
document.getElementById('nombreUsuario').innerText = "Hola, " + nombreUsuario;

document.getElementById('btnAjustes').addEventListener('click', function() {
    const miniVentana = document.getElementById('miniVentana');
    miniVentana.style.display = miniVentana.style.display === 'none' || miniVentana.style.display === '' ? 'block' : 'none';
});

document.getElementById('btnCerrarSesion').addEventListener('click', function() {
    // Redirige a la página de inicio de sesión
    window.location.href = 'login.html'; // Cambia esto a la ruta de tu página de login
});
