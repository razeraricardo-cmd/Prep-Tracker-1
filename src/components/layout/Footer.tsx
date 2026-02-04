'use client';

import Link from 'next/link';
import Logo from '../icons/Logo';
import { Mail, Phone, MapPin, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Logo size="md" />
            <p className="text-slate-400 text-sm leading-relaxed">
              Prevenção inteligente de ISTs com acompanhamento médico especializado.
              Sua saúde em primeiro lugar.
            </p>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-slate-800 rounded-lg hover:bg-primary-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/sobre" className="text-slate-400 hover:text-white transition-colors">
                  Sobre o Dr. Ricardo
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-slate-400 hover:text-white transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/educacao" className="text-slate-400 hover:text-white transition-colors">
                  Conteúdo Educativo
                </Link>
              </li>
              <li>
                <Link href="/precos" className="text-slate-400 hover:text-white transition-colors">
                  Preços
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Perguntas Frequentes
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/prep" className="text-slate-400 hover:text-white transition-colors">
                  PrEP - Profilaxia HIV
                </Link>
              </li>
              <li>
                <Link href="/servicos/ist" className="text-slate-400 hover:text-white transition-colors">
                  Prevenção de ISTs
                </Link>
              </li>
              <li>
                <Link href="/servicos/vacinas" className="text-slate-400 hover:text-white transition-colors">
                  Vacinação
                </Link>
              </li>
              <li>
                <Link href="/servicos/exames" className="text-slate-400 hover:text-white transition-colors">
                  Solicitação de Exames
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-slate-400">
                <Mail size={18} className="text-primary-400" />
                <span>contato@prepsaude.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-slate-400">
                <Phone size={18} className="text-primary-400" />
                <span>(11) 9xxxx-xxxx</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400">
                <MapPin size={18} className="text-primary-400 mt-1" />
                <span>São Paulo, SP - Brasil<br />Atendimento 100% Online</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-sm text-center md:text-left">
              <p>© {currentYear} PrEP Saúde. Todos os direitos reservados.</p>
              <p className="mt-1">
                Dr. Ricardo José Razera - CRM SP 243.898 | Infectologista
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacidade" className="text-slate-400 hover:text-white transition-colors">
                Política de Privacidade
              </Link>
              <Link href="/termos" className="text-slate-400 hover:text-white transition-colors">
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
