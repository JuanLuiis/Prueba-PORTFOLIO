import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Mail, Send, Phone, MapPin, MessageSquare } from 'lucide-react';

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulación de envío
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="min-h-screen pt-24 px-6">
      <Navbar />

      <div className="max-w-6xl mx-auto py-12">
        <div className="text-center mb-16 animate-slide-up">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-4">
            Hablemos de tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Próximo Proyecto</span>
          </h1>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            ¿Tienes una idea que necesita cobrar vida? Estoy disponible para colaboraciones, consultoría de diseño o servicios de impresión profesional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-fade-in">
            <div className="glass-card p-8 space-y-6">
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                <MessageSquare className="w-6 h-6 text-primary" /> Canales de Contacto
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase">Email</p>
                    <p className="font-medium">hola@tuportfolio3d.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="p-3 bg-accent/10 rounded-lg text-accent group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase">Teléfono</p>
                    <p className="font-medium">+34 600 000 000</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-zinc-800/50 border border-white/5 hover:border-primary/30 transition-colors group">
                  <div className="p-3 bg-pink-500/10 rounded-lg text-pink-500 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-zinc-500 font-bold uppercase">Ubicación</p>
                    <p className="font-medium">Ciudad, País</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <h4 className="text-xl font-bold mb-2">¿Tienes un archivo STL?</h4>
              <p className="text-zinc-400 text-sm mb-4">
                Si ya tienes el diseño, puedo darte una cotización exacta basada en material, tiempo y complejidad.
              </p>
              <div className="text-xs font-mono text-primary font-bold uppercase tracking-widest">
                Tiempo de respuesta: &lt; 24 horas
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up lg:delay-200">
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Nombre</label>
                  <input
                    required
                    type="text"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Email</label>
                  <input
                    required
                    type="email"
                    className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Asunto</label>
                <select className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all appearance-none">
                  <option>Presupuesto de Impresión</option>
                  <option>Diseño y Modelado 3D</option>
                  <option>Colaboración Creativa</option>
                  <option>Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-500 uppercase ml-1">Mensaje</label>
                <textarea
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl bg-zinc-800 border border-white/10 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                  placeholder="Cuéntame más sobre tu idea..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitted}
                className={`w-full btn-primary flex items-center justify-center gap-2 ${submitted ? 'bg-green-500 shadow-green-500/20' : ''}`}
              >
                {submitted ? (
                  <>¡Mensaje Enviado! <Send className="w-4 h-4" /></>
                ) : (
                  <>Enviar Mensaje <Send className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
