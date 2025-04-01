// Menu Hamburguer
const hamburger = document.getElementById('hamburguer');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
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
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Criar partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles-js');
    const particleCount = 80;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Tamanho aleatório
        const size = Math.random() * 4 + 1;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        
        // Posição aleatória
        particle.style.left = `${Math.random() * 100}vw`;
        particle.style.top = `${Math.random() * 100}vh`;
        
        // Cor e opacidade
        const hue = Math.random() * 60 + 180; // Azul-ciano
        particle.style.backgroundColor = `hsla(${hue}, 100%, 70%, ${Math.random() * 0.5 + 0.3})`;
        
        // Animação
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * -20;
        particle.style.animation = `float ${duration}s linear ${delay}s infinite`;
        
        particlesContainer.appendChild(particle);
    }
}

// Criar linhas de código
function createCodeLines() {
    const codeContainer = document.getElementById('code-lines');
    const lineCount = 30;
    const codeSnippets = [
        'function solve() {',
        '  let n = parseInt(readline());',
        '  for(let i = 0; i < n; i++) {',
        '    let [a, b] = readline().split(" ").map(Number);',
        '    print(a + b);',
        '  }',
        '}',
        'const dp = new Array(n+1).fill(0);',
        'dp[0] = 1;',
        'for(let i = 1; i <= n; i++) {',
        '  for(let j = i; j <= n; j++) {',
        '    dp[j] += dp[j - i];',
        '  }',
        '}',
        'class SegmentTree {',
        '  constructor(arr) {',
        '    this.n = arr.length;',
        '    this.size = 1;',
        '    while(this.size < this.n) this.size <<= 1;',
        '    this.tree = new Array(2*this.size).fill(0);',
        '    for(let i = 0; i < this.n; i++) {',
        '      this.tree[this.size + i] = arr[i];',
        '    }',
        '    for(let i = this.size - 1; i > 0; i--) {',
        '      this.tree[i] = this.tree[2*i] + this.tree[2*i+1];',
        '    }',
        '  }',
        '  update(pos, value) {',
        '    pos += this.size;',
        '    this.tree[pos] = value;',
        '    while(pos > 1) {',
        '      pos >>= 1;',
        '      this.tree[pos] = this.tree[2*pos] + this.tree[2*pos+1];',
        '    }',
        '  }',
        '  query(l, r) {',
        '    let res = 0;',
        '    l += this.size;',
        '    r += this.size;',
        '    while(l <= r) {',
        '      if(l % 2 === 1) res += this.tree[l++];',
        '      if(r % 2 === 0) res += this.tree[r--];',
        '      l >>= 1;',
        '      r >>= 1;',
        '    }',
        '    return res;',
        '  }',
        '}'
    ];
    
    for (let i = 0; i < lineCount; i++) {
        const line = document.createElement('div');
        line.classList.add('code-line');
        
        // Selecionar um snippet aleatório
        const snippet = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
        line.textContent = snippet;
        
        // Posição aleatória
        line.style.left = `${Math.random() * 100}%`;
        line.style.top = `${Math.random() * 100}%`;
        
        // Animação
        const duration = Math.random() * 30 + 30;
        const delay = Math.random() * -30;
        line.style.animation = `codeFlow ${duration}s linear ${delay}s infinite`;
        
        codeContainer.appendChild(line);
    }
}

// Efeito de digitação no título
function typeWriterEffect() {
    const heroTitle = document.querySelector('.hero h1');
    const originalText = heroTitle.textContent;
    heroTitle.textContent = '';
    
    let i = 0;
    const typeWriter = setInterval(() => {
        if (i < originalText.length) {
            heroTitle.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typeWriter);
        }
    }, 50);
}

// Inicializar efeitos quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    createParticles();
    createCodeLines();
    typeWriterEffect();
});


document.addEventListener('DOMContentLoaded', function() {
    // Obter referências aos botões e elementos
    const btnMaratona = document.getElementById('btn-maratona');
    const btnFase0 = document.getElementById('btn-fase0');
    const accessScreen = document.getElementById('access-screen');
    const mainContent = document.getElementById('main-content');
    
    // Adicionar eventos de clique aos botões
    btnMaratona.addEventListener('click', function() {
        // Esconder tela de acesso e mostrar conteúdo principal
        accessScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Rolar suavemente para o topo
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    btnFase0.addEventListener('click', function() {
        // Esconder tela de acesso e mostrar conteúdo principal
        accessScreen.style.display = 'none';
        mainContent.style.display = 'block';
        
        // Rolar suavemente para a seção de competições (onde presumo que a Fase 0 está)
        document.getElementById('competicoes').scrollIntoView({
            behavior: 'smooth'
        });
    });
    
    // Você pode adicionar mais funcionalidades aqui conforme necessário
});

document.addEventListener('DOMContentLoaded', function() {
    // Menu Hamburguer
    const hamburguer = document.getElementById('hamburguer');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburguer && navMenu) {
        hamburguer.addEventListener('click', function() {
            this.classList.toggle('toggle');
            navMenu.classList.toggle('active');
        });
    }

    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (hamburguer && navMenu) {
                hamburguer.classList.remove('toggle');
                navMenu.classList.remove('active');
            }
        });
    });

    // Efeito de rolagem suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Efeito de partículas (simplificado)
    const particles = document.getElementById('particles-js');
    if (particles) {
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.width = `${Math.random() * 3 + 1}px`;
            particle.style.height = particle.style.width;
            particle.style.animationDuration = `${Math.random() * 20 + 10}s`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            particles.appendChild(particle);
        }
    }

    // Linhas de código flutuantes
    const codeLines = document.getElementById('code-lines');
    if (codeLines) {
        const codeSnippets = [
            'function solve() { ... }',
            'const matrix = new Array(n);',
            'for (let i = 0; i < n; i++) {',
            'return dp[n][m];',
            'class Node { constructor() { ... } }',
            'algorithm.sort(arr);',
            'while (queue.length > 0) {',
            'String result = "";',
            'int left = 0, right = n-1;',
            'vector<int> dp(n, 0);'
        ];

        for (let i = 0; i < 15; i++) {
            const line = document.createElement('div');
            line.className = 'code-line';
            line.textContent = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];
            line.style.left = `${Math.random() * 100}%`;
            line.style.top = `${Math.random() * 100}%`;
            line.style.animationDuration = `${Math.random() * 30 + 20}s`;
            line.style.animationDelay = `${Math.random() * 10}s`;
            codeLines.appendChild(line);
        }
    }
});

