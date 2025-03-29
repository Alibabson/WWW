document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    const content = document.getElementById("content");

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const page = link.getAttribute("data-page");

            // Załaduj odpowiednią treść
            fetch(`/HTML/${page}.html`)
                .then(response => response.text())
                .then(data => {
                    content.innerHTML = data;
                })
                .catch(error => {
                    content.innerHTML = "<p>Błąd ładowania treści.</p>";
                });
        });
    });
});