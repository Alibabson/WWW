document.addEventListener('DOMContentLoaded', () => {           //DOM - czekanie, aż strona się załaduje
    
    const Zdjecia = document.querySelectorAll('.gallery-grid img');  
    const lightbox = document.getElementById('lightbox');
    const lightbox_zdj = document.getElementById('lightbox-img');
    const zamknij = document.getElementById('close');

    if(!lightbox)
        throw new Error("Brak Lighboxa");
    if(!lightbox_zdj)
        throw new Error("Brak zdjęć do Lighboxa");
    if(!zamknij)
        throw new Error("Brak przycisku zamknięcia");

    Zdjecia.forEach(img => {
        img.addEventListener('click', () => {
            if(!img.dataset.full)
                throw new Error("Brak prawidłowego zdjęcia do Lighboxa!");
            lightbox_zdj.src = img.dataset.full;
            lightbox.classList.remove('hidden');
        });
    });

    zamknij.addEventListener('click', () => {
        lightbox.classList.add('hidden');
    });
});

//Lightbox - upiekszenie galerii zdjęć:
// Poprzez klikniecie na zdjęcie w galerii, otwiera się powiększone zdjęcie w lightboxie. My ustawiliśmy, aby zdjęcie i cień wypełniało dostępną sekcję.


//Poprzednia wersja zawierała zgaszenie lightboxa klikając gdziekolwiek oraz wypełniała całą stronę.
// Źródła: YT, Młodszy brat Eryka