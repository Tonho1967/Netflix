const themeToggle = document.getElementById('theme-toggle');
const themeLabel = document.querySelector('.theme-label');
const root = document.body;

function setTheme(theme) {
    if (theme === 'light') {
        root.classList.add('light-mode');
        root.classList.remove('dark-mode');
        themeToggle.checked = true;
        themeLabel.textContent = 'Modo escuro';
        localStorage.setItem('theme', 'light');
    } else {
        root.classList.add('dark-mode');
        root.classList.remove('light-mode');
        themeToggle.checked = false;
        themeLabel.textContent = 'Modo claro';
        localStorage.setItem('theme', 'dark');
    }
}

const savedTheme = localStorage.getItem('theme');
const defaultTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
setTheme(savedTheme || defaultTheme);

themeToggle.addEventListener('change', () => {
    const selected = themeToggle.checked ? 'light' : 'dark';
    setTheme(selected);
});