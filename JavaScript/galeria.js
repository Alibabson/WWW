document.addEventListener('DOMContentLoaded', () => {
    
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    const lightbox = document.getElementById('lightbox');
    const lightbox_img = document.getElementById('lightbox-img');
    const zamknij = document.getElementById('close');

    if(!lightbox)
        throw new Error("Brak Lighboxa");
    if(!lightbox_img)
        throw new Error("Brak zdjęć do Lighboxa");
    if(!zamknij)
        throw new Error("Brak przycisku zamknięcia");

    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            if(!img.dataset.full)
                throw new Error("Brak prawidłowego zdjęcia do Lighboxa");
            lightbox_img.src = img.dataset.full;
            lightbox.classList.remove('hidden');
        });
    });

    zamknij.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });
});
