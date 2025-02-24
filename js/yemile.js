// Array para almacenar los usuarios registrados
let usuarios = [
  {
    name:'Administrador',
    email:'admin@blog.com',
    password:'1234'
  }
];

// Función para registrar un nuevo usuario
function registrar() {
    // Obtener los valores del formulario de registro
    const nombre = document.forms["registroForm"]["nombre"].value;
    const email = document.forms["registroForm"]["email"].value;
    const password = document.forms["registroForm"]["password"].value;

    // Verificar si el correo ya está registrado
    const usuarioExistente = usuarios.find(user => user.email === email);
    if (usuarioExistente) {
        alert("El correo electrónico ya está registrado.");
        return;
    }

    // Guardar el nuevo usuario en el array
    usuarios.push({ nombre, email, password });
    alert("¡Registro exitoso! Ahora puedes iniciar sesión.");
    console.log(usuarios); // Para depuración: muestra los usuarios registrados
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
        return;
    }

    if (usuario.password !== password) {
        alert("Contraseña incorrecta.");
        document.forms["loginForm"]["password"].focus();
        return;
    }

    // Si todo es correcto, redirigir al usuario
    alert(`Bienvenido ${usuario.name}`);
    location.href = "experiencia.html"; // Cambia "menu.html" por la página a la que deseas redirigir
}

 // SECCION PREGUNTAS PRECUENTES
 document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.acordion button');
    accordionButtons.forEach(button => {
      button.addEventListener('click', function() {
        const expanded = this.getAttribute('aria-expanded') === 'true';
        // Cierra todos los acordeones
        accordionButtons.forEach(btn => {
          btn.setAttribute('aria-expanded', 'false');
          btn.nextElementSibling.style.maxHeight = null;
        });
        // Si el acordeón clickeado estaba cerrado, lo abre
        if (!expanded) {
          this.setAttribute('aria-expanded', 'true');
          const content = this.nextElementSibling;
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  });

   // SECCION CONTENEDOR
    // Cuando el DOM se haya cargado...
    document.addEventListener("DOMContentLoaded", function () {
        // Selecciona todas las secciones que queremos animar
        const sections = document.querySelectorAll(".section");

        // Configuración del IntersectionObserver
        const observerOptions = {
          threshold: 0.15, // cuando el 15% del elemento sea visible
        };

        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              // Si se desea, se puede dejar de observar el elemento
              sectionObserver.unobserve(entry.target);
            }
          });
        }, observerOptions);

        sections.forEach((section) => {
          sectionObserver.observe(section);
        });
      });

      //pie de pagina
      //Ejemplo de interacción: Al hacer clic en el email se muestra un mensaje
      document.getElementById("newsletter-email").addEventListener("click", function () {
        alert("¡Gracias por tu interés! Revisa tu correo para confirmar la suscripción.");
      });
  //CARRUSEL
  // Seleccionar elementos
  const slides = document.querySelectorAll('.slide');
  const nextBtn = document.getElementById('next');
  const prevBtn = document.getElementById('prev');
  let currentSlide = 0;
  const totalSlides = slides.length;

  // Función para mostrar el slide correspondiente
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
  }

  // Eventos para los botones
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Cambio automático cada 5 segundos
  setInterval(nextSlide, 5000);

let images = [
  "https://www.caminosalkantay.com/blog/wp-content/uploads/2024/09/Machu-Picchu-epoca-lluvias-1024x683.jpg",
  "https://www.mundomapi.com/images/tours/valle-sagrado-tours-cusco-1597877674.jpg",
  "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2020/02/laguna-humantay.jpg"
];


