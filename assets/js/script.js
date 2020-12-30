document.addEventListener("DOMContentLoaded", function (event) {
    setThemeOnLoad();
});

function setThemeOnLoad() {
    var userPreferredTheme = localStorage.getItem('akg-theme');
    if (!userPreferredTheme) {
        if (isDay()) {
            applyTheme('light-theme');
        } else {
            applyTheme('dark-theme');
        }
    } else {
        applyTheme(userPreferredTheme);
    }
}

function isDay() {
    const hours = (new Date()).getHours();
    return (hours >= 6 && hours < 18);
}

function toggleTheme() {
    if (document.body.classList.contains('dark-theme')) {
        document.body.classList.remove('dark-theme-transition');
        document.body.classList.add('light-theme-transition');
        applyTheme('light-theme');
        localStorage.setItem('akg-theme', 'light-theme');
    } else {
        document.body.classList.remove('light-theme-transition');
        document.body.classList.add('dark-theme-transition');
        applyTheme('dark-theme');
        localStorage.setItem('akg-theme', 'dark-theme');
    }
}
function applyTheme(themeName) {
    if (themeName === 'light-theme') {
        document.body.classList.remove('dark-theme');
        document.body.classList.add(themeName);
    } else {
        document.body.classList.remove('light-theme');
        document.body.classList.add(themeName);
    }
}

function showSocialLinks() {
    var element = document.getElementById("socialLinksPanel");
    element.classList.toggle("social-links--hide");
}

function navigate(type) {
    // Clear existing loading class if any
    document.getElementById('navPr').classList.remove('loading');
    document.getElementById('navPh').classList.remove('loading');
    document.getElementById('navBl').classList.remove('loading');
    // Add loading class to clicked element
    var element = document.getElementById(type);
    element.classList.add('loading');
    if (type === 'navPr') {
        window.location = 'https://profile.akhilkrishnang.com';
    } else if (type === 'navPh') {
        window.location = 'https://archives.akhilkrishnang.com';
    } else if (type === 'navBl') {
        window.location = '';
    }
}
