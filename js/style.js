document.addEventListener("DOMContentLoaded", function() {
    const text = "Full Stack Java Developer";
    const typedTextElement = document.getElementById("typed-text");
    let index = 0;

    function type() {
        if (index < text.length) {
            typedTextElement.textContent += text.charAt(index);
            index++;
            setTimeout(type, 180);
        }
    }

    type();
});

document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    
    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});