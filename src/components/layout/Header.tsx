'use client';

import { useState } from 'react';
import Link from 'next/link';
import Logo from '../icons/Logo';
import { Menu, X, User, LogIn } from 'lucide-react';

interface HeaderProps {
  isLoggedIn?: boolean;
  userName?: string;
}

export default function Header({ isLoggedIn = false, userName }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/sobre', label: 'Sobre' },
    { href: '/servicos', label: 'Serviços' },
    { href: '/educacao', label: 'Educação' },
    { href: '/precos', label: 'Preços' },
    { href: '/contato', label: 'Contato' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {isLoggedIn ? (
              <Link
                href="/dashboard"
                className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium transition-colors"
              >
                <User size={20} />
                <span>{userName || 'Minha Conta'}</span>
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="flex items-center gap-2 text-slate-600 hover:text-primary-600 font-medium transition-colors"
                >
                  <LogIn size={20} />
                  <span>Entrar</span>
                </Link>
                <Link href="/cadastro" className="btn-primary text-sm py-2 px-4">
                  Começar Agora
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 animate-fade-in">
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 px-4 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-slate-100 space-y-2">
              {isLoggedIn ? (
                <Link
                  href="/dashboard"
                  className="flex items-center gap-2 py-3 px-4 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User size={20} />
                  <span>{userName || 'Minha Conta'}</span>
                </Link>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="flex items-center gap-2 py-3 px-4 text-slate-600 hover:text-primary-600 hover:bg-primary-50 rounded-lg font-medium transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <LogIn size={20} />
                    <span>Entrar</span>
                  </Link>
                  <Link
                    href="/cadastro"
                    className="block text-center btn-primary py-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Começar Agora
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
