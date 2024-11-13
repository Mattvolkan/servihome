// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.getElementById('menu-icon');
    const navbar = document.querySelector('.navbar ul');
    const contactForm = document.getElementById('contactForm');

    // Toggle menu on mobile
    menuIcon.addEventListener('click', function() {
        navbar.style.display = navbar.style.display === 'flex' ? 'none' : 'flex';
    });

    // Handle form submission
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to a server
        // For this example, we'll just log it to the console
        const formData = new FormData(contactForm);
        console.log('Form submitted with data:');
        for (let [key, value] of formData.entries()) {
            console.log(key + ': ' + value);
        }

        // Show a success message
        alert('¡Gracias por contactarnos! Te responderemos pronto.');
        contactForm.reset();
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});