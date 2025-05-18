let Wszystko = [];

fetch('../produkty.json')
  .then(res => res.json())
  .then(data => {
    Wszystko = data;
    wyswietlProdukty(data);
  });

function getLiked() {
  return JSON.parse(localStorage.getItem('likedProducts') || '[]');
}

function setLiked(arr) {
  localStorage.setItem('likedProducts', JSON.stringify(arr));
}

function wyswietlProdukty(data, fraza = '') {
  const listaa = document.getElementById('produkty-container');
  listaa.innerHTML = '';
  data.forEach(kategoria => {
    const Filtr = kategoria.produkty.filter(produkt =>
      (produkt.nazwa && produkt.nazwa.toLowerCase().includes(fraza.toLowerCase())) ||
      (produkt.opis && produkt.opis.toLowerCase().includes(fraza.toLowerCase()))
    );
    if (Filtr.length === 0) return;

    const section = document.createElement('section');
    section.className = 'Ukryte';

    const h2 = document.createElement('h2');
    h2.textContent = kategoria.kategoria;
    section.appendChild(h2);

    const ul = document.createElement('ul');
    ul.className = 'oferta';

    Filtr.forEach(produkt => {
      const li = document.createElement('li');
      li.innerHTML = `
        <button class="like"><span class="serduszko">♡</span></button>
        - ${produkt.nazwa ?? ''} <br>
        <div class="opis">${(produkt.opis ?? '').replace(/\n/g, '<br>')}</div>
      `;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    listaa.appendChild(section);
  });

  const nazwa_prod = produkt.nazwa;
  const liked = getLiked();
  document.querySelectorAll('.like').forEach(button => {
    const productName = button.parentElement.textContent.trim();
    if (liked.includes(productName)) {
      button.classList.add('active');
    }
    button.onclick = function() {
      let likedNow = getLiked();
      if (this.classList.toggle('active')) {
        if (!likedNow.includes(productName)) likedNow.push(productName);
      } else {
        likedNow = likedNow.filter(n => n !== productName);
      }
      setLiked(likedNow);
    };
  });

  // (opcjonalnie) ponów animacje wejścia:
  if (window.initprzejscia) window.initprzejscia();
}
  ;
  function getLiked() {
  return JSON.parse(localStorage.getItem('likedProducts') || '[]');
}

function setLiked(arr) {
  localStorage.setItem('likedProducts', JSON.stringify(arr));
}
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('szukaj');
  if (input) {
    input.addEventListener('input', (e) => {
      wyswietlProdukty(Wszystko, e.target.value);
    });
  }
});