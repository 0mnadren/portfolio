const themeMode = document.getElementsByClassName('theme-mode');
const defaultMode = 'dark';

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme(defaultMode);
    localStorage.setItem('theme', defaultMode);
    theme = defaultMode;
} else {
    setTheme(theme);
}

for (let i = 0; i < themeMode.length; i++) {
    themeMode[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        setTheme(mode);
    })
}

function setTheme(mode) {
    if (mode == 'light') {
        document.getElementById('theme').href = static + "/style.css";
    }

    if (mode == 'dark') {
        document.getElementById('theme').href = static + "/dark.css";
    }

    localStorage.setItem('theme', mode);
}
