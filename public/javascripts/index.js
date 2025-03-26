document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".icon_menu");
    const closeMenu = document.querySelector(".close-menu");
    const sidebar = document.querySelector(".sidebar");

    menuIcon.addEventListener("click", function () {
        sidebar.classList.add("show");
    });

    closeMenu.addEventListener("click", function () {
        sidebar.classList.remove("show");
    });

    // Cerrar el menú al hacer clic en un enlace
    document.querySelectorAll(".sidebar a").forEach(link => {
        link.addEventListener("click", function () {
            sidebar.classList.remove("show");
        });
    });
});