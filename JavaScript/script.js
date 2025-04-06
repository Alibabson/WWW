document.addEventListener('DOMContentLoaded', function () {
function DarkMode() {
    const DM_wlaczone = localStorage.getItem('dark-mode') === 'true';
    if (DM_wlaczone) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkmode_lightmode').checked = true;
    }
}

document.getElementById('darkmode_lightmode').addEventListener('change', function () {
    const czy_DM = this.checked;
    document.body.classList.toggle('dark-mode', czy_DM);
    localStorage.setItem('dark-mode', czy_DM); 
});

DarkMode();

});