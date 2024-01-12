document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('nav-active');
    });
    // AOS Initialization
    AOS.init();

    // Smooth Scrolling
    const smoothScrollLinks = document.querySelectorAll('nav ul li a[href*="#"]');
    for (let link of smoothScrollLinks) {
        link.addEventListener('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                let hash = this.hash;
                document.querySelector(hash).scrollIntoView({
                    behavior: "smooth"
                });
            }
        });
    }

    // Lightbox Functionality
    const lightbox = document.getElementById('lightbox');
    const images = document.querySelectorAll('.open-lightbox');
    const lightboxImage = document.querySelector('.lightbox-content');
    images.forEach(image => {
        image.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImage.src = this.src;
        });
    });
    document.querySelector('.close-lightbox').addEventListener('click', function() {
        lightbox.style.display = 'none';
    });
});