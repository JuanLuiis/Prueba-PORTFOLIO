import React from 'react';
import Link from 'next/link';
import { Menu, X, Box } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Proyectos', href: '/projects' },
    { name: 'Sobre mí', href: '/about' },
    { name: 'Contacto', href: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 px-6 py-4">
      <div className="max-w-7xl mx-auto glass-card px-6 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="p-2 bg-primary rounded-lg group-hover:rotate-12 transition-transform">
            <Box className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tighter">
            3D<span className="text-primary">LAB</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-zinc-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary text-sm">
            Contacto
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-zinc-400 hover:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-6 right-6 glass-card p-6 flex flex-col gap-4 md:hidden animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-zinc-400 hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="btn-primary text-center"
          >
            Contacto
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
