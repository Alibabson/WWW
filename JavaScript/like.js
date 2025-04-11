document.addEventListener('DOMContentLoaded', () => {
    const serduszka = document.querySelectorAll('.like');

    serduszka.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('active'); // Przełącz klasę 'active'
        });
    });
});