//Once page upons, custom cursor will be activated, player can roam the page/press on nav bar or click PLAY CLASH! 

//Once player clicks PLAY CLASH! it will lead them to game.html

//battle music starts at game page

//DROPDOWN NAV
document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown-menu");
    const navLinks = document.querySelector(".nav-links");

    dropdown.addEventListener("click", () => {
        navLinks.classList.toggle("show"); // toggle mobile menu
    });
});
