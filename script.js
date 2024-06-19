// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Change header background on scroll
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Simple form validation
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent the form from submitting by default

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    
    let valid = true;

    // Clear previous error messages
    document.querySelectorAll('.error').forEach(el => el.remove());

    if (name === '') {
        showError('name', 'Name is required');
        valid = false;
    }
    if (email === '') {
        showError('email', 'Email is required');
        valid = false;
    } else if (!validateEmail(email)) {
        showError('email', 'Please enter a valid email');
        valid = false;
    }
    if (message === '') {
        showError('message', 'Message is required');
        valid = false;
    }

    if (valid) {
        // Submit the form or show a success message
        alert('Form submitted successfully!');
        // this.submit(); // Uncomment this line to actually submit the form
    }
});

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.createElement('div');
    error.className = 'error';
    error.style.color = 'red';
    error.innerText = message;
    field.parentElement.insertBefore(error, field.nextSibling);
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
