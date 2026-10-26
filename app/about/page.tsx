import React from 'react';
import Navbar from '@/components/Navbar';
import { User, Code, Cpu, Award, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import Link from 'next/link';

const AboutPage = () => {
  const skills = [
    { name: 'Fusion 360', level: 'Avanzado', icon: <Code className="w-5 h-5 text-primary" /> },
    { name: 'Blender', level: 'Intermedio', icon: <Palette className="w-5 h-5 text-accent" /> },
    { name: 'Slicing (Cura/Prusa)', level: 'Experto', icon: <Layers className="w-5 h-5 text-pink-500" /> },
    { name: 'Post-procesado', level: 'Avanzado', icon: <Tool className="w-5 h-5 text-yellow-500" /> },
  ];

  return (
    <main className="min-h-screen pt-24 px-6">
      <Navbar />

      <div className="max-w-5xl mx-auto">
        <section className="grid lg:grid-cols-3 gap-12 items-start py-12">
          {/* Profile Card */}
          <div className="lg:col-span-1 animate-fade-in">
            <div className="glass-card p-8 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
              <div className="w-32 h-32 bg-zinc-800 rounded-full mx-auto mb-6 border-4 border-zinc-700 flex items-center justify-center overflow-hidden">
                <User className="w-16 h-16 text-zinc-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Tu Nombre</h2>
              <p className="text-primary font-mono text-sm mb-6">3D Designer & Maker</p>

              <div className="flex justify-center gap-4 mb-8">
                <Link href="#" className="p-2 bg-zinc-800 rounded-full hover:text-primary transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-zinc-800 rounded-full hover:text-primary transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="p-2 bg-zinc-800 rounded-full hover:text-primary transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
              </div>

              <div className="text-left space-y-4">
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>email@ejemplo.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-zinc-400">
                  <Award className="w-4 h-4 text-primary" />
                  <span>Certificado en Diseño 3D</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bio Section */}
          <div className="lg:col-span-2 space-y-12 animate-slide-up lg:delay-200">
            <div>
              <h1 className="text-4xl font-extrabold mb-6">Pasión por la <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Fabricación Digital</span></h1>
              <div className="space-y-4 text-zinc-400 leading-relaxed text-lg">
                <p>
                  Hola, soy un entusiasta y profesional de la impresión 3D con un enfoque centrado en la convergencia entre el diseño digital y la realidad física. Mi viaje comenzó con la curiosidad de cómo transformar un archivo STL en un objeto tangible, y ha evolucionado hacia la creación de soluciones complejas y piezas artísticas.
                </p>
                <p>
                  Mi filosofía de trabajo se basa en la <strong>precisión</strong> y la <strong>experimentación</strong>. No me conformo con que una pieza "imprima", busco optimizar la estructura, reducir el desperdicio de material y lograr acabados que eliminen la sensación de "plástico impreso", elevando cada proyecto a un estándar profesional.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Cpu className="w-6 h-6 text-primary" /> Stack Técnico
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill, i) => (
                  <div key={i} className="glass-card p-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {skill.icon}
                      <span className="font-medium">{skill.name}</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-500">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutPage;
