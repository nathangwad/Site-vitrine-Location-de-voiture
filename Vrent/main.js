document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("nav-toggle"); // Bouton du menu (ajouter dans HTML)
    const nav = document.querySelector("nav ul"); // Liste des liens du menu
    const navLinks = document.querySelectorAll("nav ul li a"); // Tous les liens du menu

    // Vérifier si les éléments existent avant d'ajouter des événements
    if (toggle && nav) {
        toggle.addEventListener("click", () => {
            nav.classList.toggle("show"); // Afficher/masquer le menu
        });
    }

    // Fermer le menu quand un lien est cliqué et mettre à jour l'état actif
    navLinks.forEach(link => {
        link.addEventListener("click", (e) => {
            // Empêcher le comportement par défaut pour les liens internes
            if (link.getAttribute('href') === '#') {
                e.preventDefault();
            }

            nav.classList.remove("show"); // Ferme le menu sur mobile

            // Supprime 'active' des autres liens et l'ajoute au lien cliqué
            navLinks.forEach(l => l.classList.remove("active"));
            link.classList.add("active");

            // Scroll vers la section container si c'est le lien Tarif
            if (link.textContent.trim() === "Tarif") {
                const container = document.querySelector('.container');
                if (container) {
                    container.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Scroll vers la section vidéo si c'est le lien Véhicule
            if (link.textContent.trim() === "Véhicule") {
                const videoSection = document.getElementById('video-section');
                if (videoSection) {
                    videoSection.scrollIntoView({ behavior: 'smooth' });
                }
            }

            // Scroll vers la section contact si c'est le lien Contact
            if (link.textContent.trim() === "Contact") {
                const contactSection = document.getElementById('contact-item');
                if (contactSection) {
                    contactSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
});

function toggleSection(id) {
    var content = document.getElementById(id);
    content.classList.toggle("open");
}


document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".scroll-animation, .feature, .numbers div, .vehicle-card, .contact-item, .footer, .text-section, .image-section");
    function handleScroll() {
        elements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.style.opacity = 1;
                el.style.transform = "translateY(0)";
            }
        });
    }
    window.addEventListener("scroll", handleScroll);
    handleScroll();
});