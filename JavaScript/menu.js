function Przelacz() {
    const guzik = document.querySelector('.rozwin-guzik');
    
    if(guzik.classList.contains('pokaz')) {
        guzik.classList.remove('pokaz');
        guzik.classList.add('ukryj');

        setTimeout(() => {
            guzik.classList.remove('ukryj');
            guzik.style.display = 'none';
        }, 500);
    }
    else {
        guzik.style.display = 'flex';
        guzik.classList.remove('ukryj');
        guzik.classList.add('pokaz');
    }
}

//switch do rozwijanego menu
//W momencie kliknięcia w przycisk, zmienia się jego klasa na 'ukryj' oraz po 0.5s znika z widoku.
//musi znikać inaczej animacja nie działa