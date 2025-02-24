// Acordeón de Preguntas Frecuentes
document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.acordion button');
    accordionButtons.forEach(button => {
    button.addEventListener('click', function() {
    const expanded = this.getAttribute('aria-expanded') === 'true';
    accordionButtons.forEach(btn => {
    btn.setAttribute('aria-expanded', 'false');
    btn.nextElementSibling.style.maxHeight = null;
    });
    if (!expanded) {
      this.setAttribute('aria-expanded', 'true');
      const content = this.nextElementSibling;
      content.style.maxHeight = content.scrollHeight + "px";  }
      });
     });
    });

 // Animación de secciones (scroll)
    document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".section");
    const observerOptions = { threshold: 0.15 };
    const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        sectionObserver.unobserve(entry.target);}
    });}, observerOptions);
    sections.forEach((section) => {
    sectionObserver.observe(section);
      });
    });

    // Mensaje en el correo
    document.getElementById("newsletter-email").addEventListener("click", function () {
      alert("¡Gracias por tu interés! Revisa tu correo para confirmar la suscripción.");
    });

    // Carrusel
    const slides = document.querySelectorAll('.slide');
    const nextBtn = document.getElementById('next');
    const prevBtn = document.getElementById('prev');
    let currentSlide = 0;
    const totalSlides = slides.length;
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
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    setInterval(nextSlide, 5000);

    // Array de imágenes (opcional)
    let images = [
        "https://www.caminosalkantay.com/blog/wp-content/uploads/2024/09/Machu-Picchu-epoca-lluvias-1024x683.jpg",
        "https://www.mundomapi.com/images/tours/valle-sagrado-tours-cusco-1597877674.jpg",
        "https://www.boletomachupicchu.com/gutblt/wp-content/uploads/2020/02/laguna-humantay.jpg"
    ];
    //desplazamiento de seccion
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth',
      });
     });
     });