const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

themeToggle.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    if (body.classList.contains("dark-mode")) {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.remove("text-secondary");
        themeIcon.classList.add("text-primary");
    } else {
        themeIcon.classList.remove("fa-moon");
        themeIcon.classList.add("fa-moon");
        themeIcon.classList.remove("text-secondary");
        themeIcon.classList.add("text-primary");
    }
});