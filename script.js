// script.js

// Scroll Animations
window.addEventListener('scroll', function() {
    const scrolled = window.scrollY;
    // Implement scroll animation logic here
});

// Petal Effects
const createPetal = () => {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    // Set petal styles and animations
    document.body.appendChild(petal);
};

setInterval(createPetal, 500);

// Interactive Functionality
document.querySelectorAll('.interactive').forEach(item => {
    item.addEventListener('click', event => {
        // Implement interactive functionality here
    });
});
