const changeThemeBtn = document.querySelector("#change-theme");

function darkMode() {
    document.body.classList.toggle("dark");
}

function loadTheme() {
    const darkModeTheme = localStorage.getItem("dark")

    if (darkModeTheme) {
        darkMode();
    }
}

loadTheme();

changeThemeBtn.addEventListener("change", function () {
    darkMode();

    localStorage.removeItem("dark");

    if (document.body.classList.contains("dark")) {

        localStorage.setItem("dark", 1);
    }

});