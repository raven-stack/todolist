export function themeToggle () {
    const btn = document.getElementById(`ThemeToggle`);
    const icon = document.getElementById("ThemeIcon");
    let isLight = false;

    btn.addEventListener("click", function () {

        isLight = !isLight;

        const root = document.querySelector(":root");
        root.classList.toggle("light-theme");

        if(isLight === true) {
            icon.setAttribute("src", "./images/icon-moon.svg");
        } else {
            icon.setAttribute("src", "./images/icon-sun.svg");
        }
    });
}
