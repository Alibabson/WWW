// filepath: c:\Users\DELL\Desktop\studia\semestr 4\WWW\JavaScript\script.js

// Dynamically load the EmailJS library
const script = document.createElement('script');
script.src = 'https://cdn.emailjs.com/dist/email.min.js';
script.onload = () => {
    emailjs.init('urnNRyTFNIcIWqRPg'); // Replace with your EmailJS public key
};
document.head.appendChild(script);

// Add form submission handling
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        emailjs.send('service_965rxdb', 'template_vo3a8xr', {
            imie: formData.get('imie'),
            nazwisko: formData.get('nazwisko'),
            email: formData.get('email'),
            telefon: formData.get('telefon'),
            data: formData.get('data'),
            plec: formData.get('plec'),
            pora: formData.get('pora')
        }).then(() => {
            alert('E-mail został wysłany pomyślnie!');
            form.reset(); // Reset the form
        }).catch((error) => {
            alert('Wystąpił błąd podczas wysyłania e-maila: ' + JSON.stringify(error));
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formularz-zgloszeniowy');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Zapobiega domyślnemu wysyłaniu formularza

        // Pobierz dane z formularza
        const formData = new FormData(form);
    });
});