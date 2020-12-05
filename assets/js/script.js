document.addEventListener("DOMContentLoaded", function (event) {
    //if (!isDay()) {
    //    document.body.classList.add("dark-theme");
    //}
});

function isDay() {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove("dark-theme");
        document.body.classList.add("light-theme");
    } else {
        document.body.classList.remove("light-theme");
        document.body.classList.add("dark-theme");
    }
}