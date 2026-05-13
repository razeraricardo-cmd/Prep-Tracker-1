import Link from 'next/link';
import Logo from '../icons/Logo';
import { Mail, Phone, Instagram, MessageCircle } from 'lucide-react';
import { siteConfig, getWhatsAppLink, getInstagramLink } from '@/config/site';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1a2e] text-white">
      <div className="container-app py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-5">
            <Logo size="md" variant="white" />
            <p className="text-gray-400 text-sm leading-relaxed">
              {siteConfig.brand.description}. Atendimento 100% online.
            </p>
            <div className="flex gap-3">
              <a
                href={getInstagramLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#e94560] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-white/10 rounded-xl hover:bg-[#25D366] transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#como-funciona" className="text-gray-400 hover:text-white transition-colors">
                  Como funciona
                </Link>
              </li>
              <li>
                <Link href="/#sobre-prep" className="text-gray-400 hover:text-white transition-colors">
                  Sobre PrEP
                </Link>
              </li>
              <li>
                <Link href="/#prevencao" className="text-gray-400 hover:text-white transition-colors">
                  Prevenção
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  O médico
                </Link>
              </li>
              <li>
                <Link href="/agendar" className="text-gray-400 hover:text-white transition-colors">
                  Agendar consulta
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Informações</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/#sobre-prep" className="text-gray-400 hover:text-white transition-colors">
                  O que é PrEP
                </Link>
              </li>
              <li>
                <Link href="/#prevencao" className="text-gray-400 hover:text-white transition-colors">
                  ISTs e prevenção
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white transition-colors">
                  Sobre o médico
                </Link>
              </li>
              <li>
                <Link href="/login" className="text-gray-400 hover:text-white transition-colors">
                  Área do paciente
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-400">
                <Mail size={18} className="text-[#0f969c]" />
                <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-white transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone size={18} className="text-[#0f969c]" />
                <a href={getWhatsAppLink()} className="hover:text-white transition-colors">
                  {siteConfig.contact.whatsappDisplay}
                </a>
              </li>
            </ul>

            <div className="mt-6 p-4 bg-white/5 rounded-xl">
              <p className="text-sm text-gray-300">
                <strong className="text-white">{siteConfig.doctor.name}</strong><br />
                {siteConfig.doctor.crm}<br />
                {siteConfig.doctor.specialty}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm text-center md:text-left">
              © {currentYear} {siteConfig.brand.name}. Todos os direitos reservados.
            </p>
            <p className="text-gray-500 text-sm">
              Atendimento 100% online com privacidade e sigilo
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
