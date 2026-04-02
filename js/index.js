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

// Salvar perfil ativo no localStorage ao clicar
document.addEventListener('DOMContentLoaded', () => {
    const profiles = document.querySelectorAll('.profile a');
    profiles.forEach(link => {
        link.addEventListener('click', (e) => {
            const figcaption = link.querySelector('figcaption');
            const img = link.querySelector('img');
            if (figcaption && img) {
                const nome = figcaption.textContent;
                const imagem = img.src;
                localStorage.setItem('perfilAtivoNome', nome);
                localStorage.setItem('perfilAtivoImagem', imagem);
            }
        });
    });

    const profileImages = document.querySelectorAll('.profiles img');
    profileImages.forEach(img => {
        img.addEventListener('click', (e) => {
            // permite o link seguir o destino (não interrompe navegação), mas aplica zoom rápido
            img.classList.add('zoomed');
            setTimeout(() => {
                img.classList.remove('zoomed');
            }, 500);
        });

        img.addEventListener('mouseenter', () => {
            img.classList.add('zoomed');
        });

        img.addEventListener('mouseleave', () => {
            img.classList.remove('zoomed');
        });
    });
});