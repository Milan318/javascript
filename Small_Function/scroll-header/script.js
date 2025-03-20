let lastScrollY = window.scrollY;
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > lastScrollY) {
        // Scrolling down
        header.style.top = "-70px";
    } else {
        // Scrolling up
        header.style.top = "0";
    }
    lastScrollY = window.scrollY;
});
