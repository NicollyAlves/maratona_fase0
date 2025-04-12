document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const hamburger = document.getElementById('hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    
    // Abrir/Fechar menu ao clicar no hambúrguer
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Efeito de scroll na navbar
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar-container');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
});

