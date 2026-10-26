const projects = [
    {
        id: '1',
        title: 'Soporte Ergonómico Mecánico',
        category: 'Funcional',
        description: 'Soporte ajustable diseñado para optimización de espacio de trabajo.',
        tags: ['Modular', 'Ergonomía'],
        image: 'box'
    },
    {
        id: '2',
        title: 'Escultura Orgánica Fluida',
        category: 'Artístico',
        description: 'Exploración de formas matemáticas y flujo orgánico en 3D.',
        tags: ['Algorítmico', 'Resina'],
        image: 'box'
    },
    {
        id: '3',
        title: 'Miniatura Cyberpunk',
        category: 'Miniaturas',
        description: 'Figura hiperdetallada con escala 1:12 y acabados premium.',
        tags: ['Hiperdetalles', 'Gaming'],
        image: 'box'
    },
    {
        id: '4',
        title: 'Carcasa de Drone Prototipo',
        category: 'Prototipado',
        description: 'Diseño aerodinámico para optimización de flujo de aire.',
        tags: ['Aerodinámica', 'Pruebas'],
        image: 'box'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'Todos') {
        grid.innerHTML = '';

        const filtered = filter === 'Todos'
            ? projects
            : projects.filter(p => p.category === filter);

        filtered.forEach(p => {
            const card = document.createElement('div');
            card.className = 'project-card animate-fade';
            card.innerHTML = `
                <div class="project-img">
                    <div class="project-category">${p.category}</div>
                    <i data-lucide="box" style="width: 48px; height: 48px; color: #3f3f46"></i>
                </div>
                <div class="project-info">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <div class="project-footer">
                        <div class="project-tags">
                            ${p.tags.map(t => `<span>#${t}</span>`).join('')}
                        </div>
                        <div class="text-primary" style="font-weight: 700; font-size: 0.8rem; cursor: pointer;">Detalles →</div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        // Re-inicializar iconos para los nuevos elementos
        lucide.createIcons();
    }

    // Filtros
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // Mobile Menu
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    menuToggle.addEventListener('click', () => {
        navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
        if(navLinks.style.display === 'flex') {
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.background = 'rgba(24, 24, 27, 0.95)';
            navLinks.style.padding = '2rem';
            navLinks.style.textAlign = 'center';
            navLinks.style.borderBottom = '1px solid var(--border)';
        }
    });

    // Formulario
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerHTML;
        btn.innerHTML = '¡Mensaje Enviado! ✓';
        btn.style.background = '#22c55e';
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '';
            form.reset();
        }, 3000);
    });

    renderProjects();
});
