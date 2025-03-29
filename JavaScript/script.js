// Dane ciast (mogą być pobierane z json-server)
const cakes = [
    { id: 1, name: "Ciasto czekoladowe", price: 25 },
    { id: 2, name: "Ciasto owocowe", price: 30 }
];

// Wyświetlanie ciast w sekcji menu
function displayCakes() {
    const container = document.getElementById("cakes-container");
    container.innerHTML = cakes.map(cake => `
        <div class="cake-card">
            <h3>${cake.name}</h3>
            <p>Cena: ${cake.price} zł</p>
            <button onclick="addToCart(${cake.id})">Dodaj do koszyka</button>
        </div>
    `).join("");
}

// Koszyk (localStorage)
function addToCart(cakeId) {
    const cake = cakes.find(c => c.id === cakeId);
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(cake);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`Dodano ${cake.name} do koszyka!`);
}

// Formularz zamówienia
document.getElementById("order-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Zamówienie złożone! Dziękujemy!");
});

// Inicjalizacja
displayCakes();