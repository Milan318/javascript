window.onload = function() {
    setTimeout(() => {
        document.querySelector(".loader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, 2000); // Adjust the delay time as needed
};
