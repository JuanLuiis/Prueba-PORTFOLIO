const projects = [
    {
        id: '1',
        title: 'Engranaje de Reducción Industrial',
        category: 'Industrial',
        description: 'Sustitución de pieza metálica por polímero técnico para reducir ruido y peso.',
        tags: ['Nylon', 'Alta Carga', 'Mecánica'],
        image: 'box'
    },
    {
        id: '2',
        title: 'Soporte de Pared para Router',
        category: 'Hogar',
        description: 'Diseño personalizado para ocultar cables y optimizar señal Wi-Fi.',
        tags: ['PLA+', 'Organización', 'Custom'],
        image: 'box'
    },
    {
        id: '3',
        title: 'Miniatura de Personaje Fantasy',
        category: 'Arte',
        description: 'Impresión en resina 4K con detalle de micras para coleccionismo.',
        tags: ['Resina', 'Ultra Detalle', 'Pintura'],
        image: 'box'
    },
    {
        id: '4',
        title: 'Adaptador de Manguera Especial',
        category: 'Repuestos',
        description: 'Pieza obsoleta fabricada mediante ingeniería inversa y escaneo 3D.',
        tags: ['PETG', 'Ingeniería', 'Sustitución'],
        image: 'box'
    },
    {
        id: '5',
        title: 'Case para Raspberry Pi 5',
        category: 'Industrial',
        description: 'Carcasa optimizada para ventilación activa y acceso a GPIO.',
        tags: ['ABS', 'Térmico', 'Hardware'],
        image: 'box'
    },
    {
        id: '6',
        title: 'Lámpara Geométrica Minimalista',
        category: 'Arte',
        description: 'Diseño basado en Voronoi para juegos de luces y sombras.',
        tags: ['Litofanía', 'Decoración', 'Luz'],
        image: 'box'
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // 1. CUSTOM CURSOR (SÚPER OPTIMIZADO)
    const cursor = document.getElementById('custom-cursor');

    // Usamos requestAnimationFrame para que el cursor sea fluido y no tenga lag
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    function updateCursor() {
        // Interpolación lineal (LERP) para un movimiento suave pero rápido
        currentX += (mouseX - currentX) * 0.2;
        currentY += (mouseY - currentY) * 0.2;

        cursor.style.transform = `translate(${currentX - 10}px, ${currentY - 10}px)`;
        requestAnimationFrame(updateCursor);
    }
    updateCursor();

    // 2. THREE.JS MODELO 3D
    const init3D = () => {
        const container = document.getElementById('canvas-container');
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

        renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(renderer.domElement);

        const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
        const material = new THREE.MeshPhongMaterial({
            color: 0x00f2ff,
            wireframe: true,
            emissive: 0x0044ff,
            emissiveIntensity: 0.5
        });
        const object = new THREE.Mesh(geometry, material);
        scene.add(object);

        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(10, 10, 10);
        scene.add(light);
        scene.add(new THREE.AmbientLight(0x404040));

        camera.position.z = 5;

        let isDragging = false;
        let previousMousePosition = { x: 0, y: 0 };

        container.addEventListener('mousedown', () => isDragging = true);
        window.addEventListener('mouseup', () => isDragging = false);
        container.addEventListener('mousemove', (e) => {
            if(isDragging) {
                const deltaMove = {
                    x: e.offsetX - previousMousePosition.x,
                    y: e.offsetY - previousMousePosition.y
                };
                object.rotation.y += deltaMove.x * 0.01;
                object.rotation.x += deltaMove.y * 0.01;
            }
            previousMousePosition = { x: e.offsetX, y: e.offsetY };
        });

        function animate() {
            requestAnimationFrame(animate);
            if(!isDragging) {
                object.rotation.x += 0.005;
                object.rotation.y += 0.005;
            }
            renderer.render(scene, camera);
        }
        animate();

        window.addEventListener('resize', () => {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        });
    };
    init3D();

    // 3. RENDER PROYECTOS
    const grid = document.getElementById('projects-grid');
    const filterBtns = document.querySelectorAll('.filter-btn');

    function renderProjects(filter = 'Todos') {
        grid.innerHTML = '';
        const filtered = filter === 'Todos' ? projects : projects.filter(p => p.category === filter);

        filtered.forEach((p, i) => {
            const card = document.createElement('div');
            card.className = 'project-card animate-fade';
            card.style.animationDelay = `${i * 100}ms`;
            card.innerHTML = `
                <div class="project-img">
                    <div class="project-category">${p.category}</div>
                    <i data-lucide="box" style="width: 60px; height: 60px; color: #3f3f46"></i>
                </div>
                <div class="project-info">
                    <h3>${p.title}</h3>
                    <p>${p.description}</p>
                    <div class="project-footer">
                        <div class="project-tags">
                            ${p.tags.map(t => `<span>#${t}</span>`).join('')}
                        </div>
                        <div class="text-primary" style="font-weight: 700; font-size: 0.8rem; cursor: none;">Ver Caso →</div>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });
        lucide.createIcons();
    }

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderProjects(btn.getAttribute('data-filter'));
        });
    });

    // 4. MODAL WHATSAPP
    const phoneItem = document.querySelector('.info-item:nth-child(2)'); // El de teléfono
    const modal = document.getElementById('whatsapp-modal');
    const closeBtn = document.getElementById('close-modal');

    if(phoneItem) {
        phoneItem.addEventListener('click', () => {
            modal.style.display = 'flex';
        });
    }

    closeBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (e) => {
        if(e.target === modal) modal.style.display = 'none';
    });

    // Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-up');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Formulario
    document.getElementById('contact-form').addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = e.target.querySelector('button');
        btn.innerHTML = 'Solicitud Enviada ✓';
        btn.style.background = '#22c55e';
        setTimeout(() => {
            btn.innerHTML = 'Enviar Solicitud <i data-lucide="send"></i>';
            btn.style.background = '';
            e.target.reset();
            lucide.createIcons();
        }, 3000);
    });

    renderProjects();
});
