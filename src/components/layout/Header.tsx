'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../icons/Logo';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/#como-funciona', label: 'Como funciona' },
    { href: '/#sobre-prep', label: 'Sobre PrEP' },
    { href: '/#prevencao', label: 'Prevenção' },
    { href: '/sobre', label: 'O médico' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-app">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-sm"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/login"
              className="text-[#1a1a2e] hover:text-[#e94560] font-medium text-sm transition-colors"
            >
              Entrar
            </Link>
            <Link
              href="/agendar"
              className="btn-primary text-sm py-3 px-6"
            >
              Agendar consulta
              <ArrowRight size={16} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-xl hover:bg-gray-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 animate-fade-in">
          <div className="container-app py-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-[#1a1a2e] hover:bg-gray-50 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 mt-4 border-t border-gray-100 space-y-3">
              <Link
                href="/login"
                className="block py-3 px-4 text-center text-[#1a1a2e] hover:bg-gray-50 rounded-xl font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Entrar
              </Link>
              <Link
                href="/agendar"
                className="block btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Agendar consulta
                <ArrowRight size={16} className="inline ml-2" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
