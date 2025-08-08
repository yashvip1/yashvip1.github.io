// Simple script for mobile menu or other interactions
document.addEventListener('DOMContentLoaded', function() {
    // Add any JavaScript functionality here
    console.log('Website loaded successfully');
});

// Example: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});