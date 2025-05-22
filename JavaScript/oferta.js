let Wszystko = [];

fetch('../produkty.json')
  .then(res => res.json())
  .then(data => {
    Wszystko = data;
    wyswietlProdukty(data);
  });

function get_polub() {
  return JSON.parse(localStorage.getItem('likedProducts') || '[]');
}

function set_Polub(arr) {
  localStorage.setItem('likedProducts', JSON.stringify(arr));
}

function wyswietlProdukty(data, fraza = '') {
  const listaa = document.getElementById('produkty-container');
  listaa.innerHTML = '';   //bez tego nam nie czyści strony 
  data.forEach(kategoria => {
    const Filtr = kategoria.produkty.filter(produkt =>
      (produkt.nazwa && produkt.nazwa.toLowerCase().includes(fraza.toLowerCase())) ||
      (produkt.opis && produkt.opis.toLowerCase().includes(fraza.toLowerCase()))
    );
    if (Filtr.length === 0) return;

    const section = document.createElement('section');
    section.className = 'Ukryte';
    //każda kategoria ma swoją sekcję - ukryte bo uwielbiam tą animację

    const h2 = document.createElement('h2');
    h2.textContent = kategoria.kategoria;
    section.appendChild(h2);
    //nagłowek z nazwą

    const ul = document.createElement('ul');
    ul.className = 'oferta';
    //lista produktów

    Filtr.forEach(produkt => {
      const li = document.createElement('li');
      li.innerHTML = `
      <button class="like"><span class="serduszko">♡</span></button>
      <span class="nazwa-produktu">♡ ${produkt.nazwa ?? ''}</span> <br>
      <div class="opis">${(produkt.opis ?? '').replace(/\n/g, '<br>')}</div>
  `;
      ul.appendChild(li);
    });

    section.appendChild(ul);
    listaa.appendChild(section);
  });

  const liked = get_polub();
  document.querySelectorAll('.like').forEach(button => {
    const productName = button.parentElement.querySelector('.nazwa-produktu').textContent.trim();
    if (liked.includes(productName)) {
      button.classList.add('active');
    }
    button.onclick = function() {
      let likedNow = get_polub();
      if (this.classList.toggle('active')) {
        if (!likedNow.includes(productName)) likedNow.push(productName);
      } else {
        likedNow = likedNow.filter(n => n !== productName);
      }
      set_Polub(likedNow);
    };
  });

  if (window.initprzejscia) window.initprzejscia();
};
document.addEventListener('DOMContentLoaded', () => {
  const input = document.getElementById('szukaj');
  if (input) {
    input.addEventListener('input', (e) => {
      wyswietlProdukty(Wszystko, e.target.value);
    });
  }
});