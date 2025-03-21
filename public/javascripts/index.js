document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hamburguer-menu");
    const navLinks = document.querySelector(".nav-links");

    // Alternar visibilidad del menú
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("show-menu");
    });

    // Ocultar menú al hacer clic en un enlace
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("show-menu");
        });
    });
});
