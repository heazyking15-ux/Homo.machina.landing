// script.js

// Smooth Scroll Animation using Intersection Observer API
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-up');
        } else {
            entry.target.classList.remove('fade-up');
        }
    });
};

const observer = new IntersectionObserver(callback, options);
sections.forEach(section => {
    observer.observe(section);
});

// Form Validation for Newsletter Signup
const form = document.querySelector('#newsletter-form');
const emailInput = document.querySelector('#email');
form.addEventListener('submit', function(e) {
    e.preventDefault();
    const emailValue = emailInput.value;
    if (validateEmail(emailValue)) {
        // Submit form or show success message
        console.log('Form submitted successfully!');
    } else {
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^\S+@\S+\.\S+$/;
    return re.test(email);
}

// Mobile Menu Toggle Functionality
const menuToggle = document.querySelector('#menu-toggle');
const navMenu = document.querySelector('#nav-menu');

menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('open');
});
