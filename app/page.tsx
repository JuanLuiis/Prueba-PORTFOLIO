import React from 'react';
import Navbar from '@/components/Navbar';
import { ArrowRight, Layers, Cpu, Palette } from 'lucide-react';
import Link from 'next/link';

const Home = () => {
  return (
    <main className="relative min-h-screen pt-24">
      <Navbar />

      {/* Hero Section */}
      <section className="px-6 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-24">
        <div className="animate-slide-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Fabricación Digital Avanzada
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-6">
            Transformando Ideas en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Realidad Tangible</span>
          </h1>
          <p className="text-lg text-zinc-400 mb-10 max-w-xl leading-relaxed">
            Especialista en diseño e impresión 3D profesional. Fusiono la precisión técnica con la creatividad para crear piezas funcionales, artísticas y prototipos de alta fidelidad.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/projects" className="btn-primary flex items-center justify-center gap-2">
              Explorar Proyectos <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/about" className="btn-secondary flex items-center justify-center gap-2">
              Sobre mí
            </Link>
          </div>
        </div>

        <div className="relative animate-fade-in lg:delay-200">
          <div className="aspect-square relative">
            {/* Decorative elements to simulate a "3D space" */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>

            <div className="relative z-10 glass-card h-full w-full flex items-center justify-center overflow-hidden group">
              {/* Placeholder for Hero Image */}
              <div className="text-center p-12">
                <div className="w-24 h-24 bg-primary/20 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                   <Box className="w-12 h-12 text-primary" />
                </div>
                <p className="text-zinc-500 font-mono text-sm uppercase tracking-widest">Visualizing Dimension</p>
              </div>

              {/* Floating Technical Specs */}
              <div className="absolute bottom-6 left-6 glass-card px-4 py-2 text-xs font-mono text-zinc-400 flex items-center gap-2 animate-bounce">
                <Layers className="w-3 h-3 text-primary" /> Layer Height: 0.12mm
              </div>
              <div className="absolute top-6 right-6 glass-card px-4 py-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
                <Cpu className="w-3 h-3 text-accent" /> Material: Carbon Fiber PLA
              </div>
              <div className="absolute bottom-6 right-6 glass-card px-4 py-2 text-xs font-mono text-zinc-400 flex items-center gap-2">
                <Palette className="w-3 h-3 text-pink-500" /> Finish: Matte Grey
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features / Value Prop */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">Capacidades Técnicas</h2>
          <p className="text-zinc-400">Combinando software de vanguardia y hardware de precisión</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Diseño Paramétrico",
              desc: "Modelado avanzado orientado a la funcionalidad y optimización de material.",
              icon: <Cpu className="w-6 h-6 text-primary" />,
            },
            {
              title: "SLA & FDM",
              desc: "Dominio de diversas tecnologías de impresión según la resolución requerida.",
              icon: <Layers className="w-6 h-6 text-accent" />,
            },
            {
              title: "Post-procesado",
              desc: "Acabados profesionales: lijado, pintura y ensamblaje de precisión.",
              icon: <Palette className="w-6 h-6 text-pink-500" />,
            }
          ].map((feat, i) => (
            <div key={i} className="glass-card p-8 hover:border-primary/50 transition-colors group">
              <div className="mb-4 p-3 bg-zinc-800 rounded-xl w-fit group-hover:scale-110 transition-transform">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feat.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Home;
