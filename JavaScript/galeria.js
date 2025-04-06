document.addEventListener('DOMContentLoaded', () => {
    
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
