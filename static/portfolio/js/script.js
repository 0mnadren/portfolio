const themeMode = document.getElementsByClassName('theme-mode');

let theme = localStorage.getItem('theme');

if (theme == null) {
    setTheme('dark');
} else {
    setTheme(theme);
}

for (let i = 0; i < theme.length; i++) {
    themeMode[i].addEventListener('click', function() {
        let mode = this.dataset.mode;
        console.log('Click')
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
