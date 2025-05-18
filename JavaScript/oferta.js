let Wszystko = [];

fetch('../produkty.json')
  .then(res => res.json())
  .then(data => {
    Wszystko = data;
    wyswietlProdukty(data);
  });

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
    //section.className = 'Ukryte';

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
}

// Obsługa wyszukiwania
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('szukaj');
  if (input) {
    input.addEventListener('input', (e) => {
      wyswietlProdukty(Wszystko, e.target.value);
    });
  }
});