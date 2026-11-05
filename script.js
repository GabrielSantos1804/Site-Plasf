const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const yearNode = document.getElementById('year');

if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
}

if (navToggle && mainNav) {
    const setMenuOpen = (isOpen) => {
        mainNav.classList.toggle('is-open', isOpen);
        navToggle.setAttribute('aria-expanded', String(isOpen));
        navToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    };

    navToggle.addEventListener('click', () => {
        setMenuOpen(navToggle.getAttribute('aria-expanded') !== 'true');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => {
            setMenuOpen(false);
        });
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            navToggle.focus();
        }
    });
}
