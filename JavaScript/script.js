document.addEventListener('DOMContentLoaded', function () {
    // Funkcja do ustawienia trybu ciemnego na podstawie Local Storage
function applyDarkModePreference() {
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkmode_lightmode').checked = true;
    }
}

// Nasłuchiwanie na zmianę stanu przełącznika
document.getElementById('darkmode_lightmode').addEventListener('change', function () {
    const isDarkMode = this.checked;
    document.body.classList.toggle('dark-mode', isDarkMode);
    localStorage.setItem('dark-mode', isDarkMode); // Zapisz stan w Local Storage
});

// Wywołaj funkcję przy ładowaniu strony
applyDarkModePreference();
});