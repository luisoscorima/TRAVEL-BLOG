let usuarios = [
  {
    name:'Administrador',
    email:'admin@blog.com',
    password:'1234'
  }
];
function registrar() {
    // Obtener los valores del formulario de registro
    const nombre = document.forms["registroForm"]["nombre"].value;
    const email = document.forms["registroForm"]["email"].value;
    const password = document.forms["registroForm"]["password"].value;

    // Verificar si el correo ya está registrado
    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert("El correo electrónico ya está registrado.");
        document.forms["registroForm"]["email"].focus();
        document.forms["registroForm"]["email"].select();
        return;
    }

    // Guardar el nuevo usuario en el array
    usuarios.push({ nombre, email, password });
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    console.log(usuarios); 
}

// Función para validar el inicio de sesión
function validar() {
    // Obtener los valores del formulario de inicio de sesión
    const email = document.forms["loginForm"]["email"].value;
    const password = document.forms["loginForm"]["password"].value;

    // Buscar al usuario en el array
    const usuario = usuarios.find(user => user.email === email);

    if (!usuario) {
        alert("Usuario no registrado.");
        document.forms["loginForm"]["email"].focus();
        document.forms["loginForm"]["email"].select();
        return;
    }

    if (usuario.password !== password) {
        alert("Contraseña incorrecta.");
        document.forms["loginForm"]["password"].focus();
        document.forms["loginForm"]["password"].select();
        return;
    }
    // redirige al usuario
    alert(`Bienvenido ${usuario.nombre}`);
    location.href = "experiencias/experiencias_luis.html"; 
}


