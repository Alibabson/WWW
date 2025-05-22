document.addEventListener('DOMContentLoaded', () => {
    const liked = JSON.parse(localStorage.getItem('likedProducts') || '[]');
    const ukrytaSekcja = document.querySelector('.Ukryte');
    ukrytaSekcja.style.margin = "40px";
    ukrytaSekcja.style.marginTop = "-250px";


    if (!ukrytaSekcja) {
        console.error("Nie znaleziono sekcji z klasą 'Ukryte'.");
        return;
    }

    const h2 = document.createElement('h2');
    h2.textContent = "Twoja lista życzeń:";
    ukrytaSekcja.appendChild(h2);

    if (liked.length === 0) {
        const p = document.createElement('p');
        p.textContent = "Nie masz jeszcze żadnych ulubionych produktów.";
        ukrytaSekcja.appendChild(p);
    } else {
        const ul = document.createElement('ul');
        ul.style.fontSize = "1.2em";
        liked.forEach(nazwa => {
            const li = document.createElement('li');
            li.textContent = nazwa;
            ul.appendChild(li);
        });
        ukrytaSekcja.appendChild(ul);
    }
});