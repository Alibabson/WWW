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

    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightbox_img = document.getElementById('lightbox-img');
    const zamknij = document.getElementById('close');

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            lightbox_img.src = img.dataset.full;
            lightbox.classList.remove('hidden');
        });
    });

    zamknij.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });
});