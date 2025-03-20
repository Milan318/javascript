let lastScrollY = window.scrollY;
const header = document.getElementById("header");
let hideTimeout;

window.addEventListener("scroll", () => {
    clearTimeout(hideTimeout); // Pichla timeout clear karna

    if (window.scrollY > lastScrollY) {
        // Scroll Down -> Header Hide
        header.style.top = "-70px";

        // 1 Second baad header wapas show ho
        hideTimeout = setTimeout(() => {
            header.style.top = "0";
        }, 1000);
    } else {
        // Scroll Up -> Header Immediately Show
        header.style.top = "0";
    }

    lastScrollY = window.scrollY;
});
