import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { projects } from '@/lib/projects';
import { Filter, Box, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const ProjectsPage = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Prototipado', 'Artístico', 'Funcional', 'Miniaturas'];

  const filteredProjects = filter === 'Todos'
    ? projects
    : projects.filter(p => p.category === filter);

  return (
    <main className="min-h-screen pt-24 px-6">
      <Navbar />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            Galería de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Creaciones</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Un recorrido por la precisión técnica y la experimentación material.
            Desde prototipos industriales hasta piezas artísticas detalladas.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                ? 'bg-primary text-white shadow-lg shadow-primary/30 scale-105'
                : 'glass-card text-zinc-400 hover:text-white hover:border-white/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24">
          {filteredProjects.map((project, i) => (
            <Link
              key={project.id}
              href={`/projects/${project.id}`}
              className="group relative glass-card overflow-hidden hover:border-primary/50 transition-all duration-500 animate-slide-up"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="aspect-video relative overflow-hidden">
                {/* Image Placeholder */}
                <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                  <Box className="w-12 h-12 text-zinc-600 group-hover:text-primary transition-colors" />
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-bold uppercase tracking-widest text-primary border border-primary/30">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-400 text-sm line-clamp-2 mb-6">
                  {project.description}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {project.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] text-zinc-500 font-mono">#{tag}</span>
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-primary text-sm font-bold group-hover:gap-2 transition-all">
                    Ver detalle <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ProjectsPage;
