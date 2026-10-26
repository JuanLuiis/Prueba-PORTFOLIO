import React from 'react';
import Navbar from '@/components/Navbar';
import { projects } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { ArrowLeft, Box, Clock, Layers, Palette, Tool } from 'lucide-react';
import Link from 'next/link';

const ProjectDetail = ({ params }: { params: { id: string } }) => {
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen pt-24 px-6">
      <Navbar />

      <div className="max-w-6xl mx-auto">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-400 hover:text-primary transition-colors mb-8 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Volver a la galería
        </Link>

        <div className="grid lg:grid-cols-2 gap-12 mb-24">
          {/* Image Section */}
          <div className="relative animate-fade-in">
            <div className="aspect-square glass-card overflow-hidden relative group">
              {/* Image Placeholder */}
              <div className="absolute inset-0 bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
                <Box className="w-20 h-20 text-zinc-600 group-hover:text-primary transition-colors" />
              </div>
              <div className="absolute bottom-6 left-6 right-6 glass-card p-4 flex justify-between items-center">
                <span className="text-xs font-mono text-zinc-400">Rendering Final</span>
                <span className="text-xs font-bold text-primary">4K Resolution</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="animate-slide-up lg:delay-200">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4 border border-primary/20">
              {project.category}
            </div>
            <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">{project.title}</h1>
            <p className="text-lg text-zinc-400 mb-8 leading-relaxed">
              {project.longDescription}
            </p>

            {/* Technical Specs Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              <div className="glass-card p-4 flex items-start gap-3">
                <Layers className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Material</p>
                  <p className="text-sm font-medium">{project.material}</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-start gap-3">
                <Tool className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Tecnología</p>
                  <p className="text-sm font-medium">{project.technology}</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-start gap-3">
                <Clock className="w-5 h-5 text-pink-500 mt-1" />
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Tiempo Impresión</p>
                  <p className="text-sm font-medium">{project.printTime}</p>
                </div>
              </div>
              <div className="glass-card p-4 flex items-start gap-3">
                <Palette className="w-5 h-5 text-yellow-500 mt-1" />
                <div>
                  <p className="text-[10px] uppercase text-zinc-500 font-bold">Acabado</p>
                  <p className="text-sm font-medium">Profesional / Post-procesado</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="px-3 py-1 rounded-md bg-zinc-800 text-zinc-400 text-xs border border-white/5">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProjectDetail;
