document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".hamburguer-menu");
    const navLinks = document.querySelector(".nav-links");

    // TODO revisar por que se desaparecen los enlaces en navbar al hacer clic en pantalla grande
    menuIcon.addEventListener("click", function () {
        if (navLinks.classList.contains("show-menu")) {
            navLinks.classList.remove("show-menu");
            navLinks.classList.add("hide-menu");

            // Esperar a que termine la animación antes de ocultar el menú
            setTimeout(() => {
                navLinks.style.visibility = "hidden";
            }, 500);
        } else {
            navLinks.classList.remove("hide-menu");
            navLinks.classList.add("show-menu");
            navLinks.style.visibility = "visible";
        }
    });

    // Ocultar menú al hacer clic en un enlace
    if (menuIcon.getPropertyValue("display") === "block") {
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("show-menu");
                navLinks.classList.add("hide-menu");

                setTimeout(() => {
                    navLinks.style.visibility = "hidden";
                }, 500);
            });
        });
    }
});
