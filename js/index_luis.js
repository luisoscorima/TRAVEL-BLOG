window.addEventListener('DOMContentLoaded', event => {

    // Función navbar Sjrink: Ajusta el navbar según el scroll
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // llama a la función cuando la página se actualiza
    navbarShrink();

    // Ejecuta la función cuando se hace scroll
    document.addEventListener('scroll', navbarShrink);

    //---------------------------------------------------//

    // Busca mainNav y activa Bootstrap scrollspy, que hace que se resalte automáticamente según la sección donde se navegue
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Colapsa el navbar (menu) cuando se clickea uno de los nav-links
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

document.getElementById("submitButton").addEventListener("click", function () {
    var entradaemail = document.getElementById("emailAddress").value.trim();
    var errorEmail = document.getElementById("errorEmail");

    // Validar que el campo no esté vacío y sea un correo válido
    if (entradaemail === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(entradaemail)) {
        errorEmail.style.display = "block";
        return;
    } else {
        errorEmail.style.display = "none";
    }

    // Crear url con el mensaje personalizado
    var receptor = "conocecusco@blog.utp.pe";
    var asunto = encodeURIComponent("Solicitud de Asesoría");
    var cuerpo = encodeURIComponent("Hola! Vengo desde el Blog Viajero UTP. Deseo asesoría, envíeme toda la información a mi correo: " + entradaemail);
    
    var linkgmail = `https://mail.google.com/mail/?view=cm&fs=1&to=${receptor}&su=${asunto}&body=${cuerpo}`;
    
    // Abrir Gmail en una nueva ventana/pestaña
    window.open(linkgmail, "_blank");
});