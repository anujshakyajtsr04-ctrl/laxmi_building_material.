function toggleMenu() {
    const navLinks = document.querySelector(".nav-links");
    navLinks.classList.toggle("active");
}

// Search functionality
const searchBox = document.getElementById("searchBox");
if (searchBox) {
    searchBox.addEventListener("keyup", () => {
        const value = searchBox.value.toLowerCase();
        const cards = document.querySelectorAll(".product-card");

        cards.forEach(card => {
            const text = card.innerText.toLowerCase();
            if (text.includes(value)) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    });
}

// Close menu when clicking a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const navLinks = document.querySelector(".nav-links");
        navLinks.classList.remove("active");
    });
});
