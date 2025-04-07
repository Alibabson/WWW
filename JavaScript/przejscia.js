document.addEventListener('DOMContentLoaded', () => {
    const ukryte = document.querySelectorAll('.Section_hidden');
    if (!ukryte) {
        throw new Error("Brak sekcji do animacji");
    }
    const observer = new IntersectionObserver((wejcia, observer) => {
        wejcia.forEach(wej => {
            if (wej.isIntersecting) {
                wej.target.classList.add('animate');
                observer.unobserve(wej.target);
            }
        });
    }, { threshold: 0.1 });

    ukryte.forEach(section => {
        observer.observe(section);
    });
});