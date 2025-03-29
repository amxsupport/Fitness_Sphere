// Animation functions
document.addEventListener('DOMContentLoaded', function() {
    // Initialize animations
    const animateElements = document.querySelectorAll('[data-animation-name]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const animation = element.getAttribute('data-animation-name');
                const duration = element.getAttribute('data-animation-duration') || '1000';
                
                element.style.animation = `${animation} ${duration}ms forwards`;
            }
        });
    }, { threshold: 0.1 });

    animateElements.forEach(element => observer.observe(element));
});

// Counter animation
window.animateCounter = function(element) {
    const target = parseInt(element.textContent);
    let count = 0;
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps

    function updateCount() {
        count += increment;
        if (count < target) {
            element.textContent = Math.round(count);
            requestAnimationFrame(updateCount);
        } else {
            element.textContent = target;
        }
    }

    updateCount();
};
