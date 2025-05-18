window.initprzejscia = function() {
    const ukryte = document.querySelectorAll('.Ukryte');
    if (!ukryte) {
        throw new Error("Brak sekcji do animacji");
    }
    const observer = new IntersectionObserver((wejcia, observer) => {
        wejcia.forEach(wej => {
            if (wej.isIntersecting) {
                wej.target.classList.add('animacja');
                observer.unobserve(wej.target);
            }
        });
    }, { threshold: 0.01 });

    ukryte.forEach(section => {
        observer.observe(section);
    });
}

document.addEventListener('DOMContentLoaded',() => {
    window.initprzejscia();
}
);