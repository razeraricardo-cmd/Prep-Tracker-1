'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/icons/Logo';
import MobileNav from '@/components/layout/MobileNav';
import {
  Home,
  Shield,
  Calendar,
  BookOpen,
  User,
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  Syringe,
  FileText,
  MessageCircle
} from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const mainNav = [
    { href: '/dashboard', icon: Home, label: 'Início' },
    { href: '/dashboard/prevencao', icon: Shield, label: 'Minha Prevenção' },
    { href: '/dashboard/consultas', icon: Calendar, label: 'Consultas' },
    { href: '/dashboard/vacinas', icon: Syringe, label: 'Vacinas' },
    { href: '/dashboard/exames', icon: FileText, label: 'Meus Exames' },
    { href: '/dashboard/educacao', icon: BookOpen, label: 'Aprenda' },
  ];

  const secondaryNav = [
    { href: '/dashboard/perfil', icon: User, label: 'Meu Perfil' },
    { href: '/dashboard/configuracoes', icon: Settings, label: 'Configurações' },
    { href: '/dashboard/suporte', icon: MessageCircle, label: 'Suporte' },
  ];

  const NavLink = ({ item, onClick }: { item: typeof mainNav[0]; onClick?: () => void }) => {
    const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));
    const Icon = item.icon;

    return (
      <Link
        href={item.href}
        onClick={onClick}
        className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
          isActive
            ? 'bg-primary-100 text-primary-700 font-semibold'
            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
        }`}
      >
        <Icon size={20} />
        <span>{item.label}</span>
      </Link>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex-col z-40">
        <div className="p-4 border-b border-slate-100">
          <Link href="/dashboard">
            <Logo size="sm" />
          </Link>
        </div>

        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {mainNav.map((item) => (
            <NavLink key={item.href} item={item} />
          ))}

          <div className="pt-4 mt-4 border-t border-slate-100">
            <p className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase">
              Conta
            </p>
            {secondaryNav.map((item) => (
              <NavLink key={item.href} item={item} />
            ))}
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Mobile Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 z-40">
        <Link href="/dashboard">
          <Logo size="sm" showText={false} />
        </Link>

        <div className="flex items-center gap-2">
          <button className="p-2 rounded-lg hover:bg-slate-100 relative">
            <Bell size={22} className="text-slate-600" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu size={22} className="text-slate-600" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-50"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Mobile Sidebar */}
      <aside
        className={`md:hidden fixed top-0 right-0 bottom-0 w-72 bg-white z-50 transform transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          <Logo size="sm" />
          <button
            onClick={() => setSidebarOpen(false)}
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <X size={22} className="text-slate-600" />
          </button>
        </div>

        <nav className="p-4 space-y-1">
          {mainNav.map((item) => (
            <NavLink key={item.href} item={item} onClick={() => setSidebarOpen(false)} />
          ))}

          <div className="pt-4 mt-4 border-t border-slate-100">
            <p className="px-4 mb-2 text-xs font-semibold text-slate-400 uppercase">
              Conta
            </p>
            {secondaryNav.map((item) => (
              <NavLink key={item.href} item={item} onClick={() => setSidebarOpen(false)} />
            ))}
          </div>
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-100">
          <button className="flex items-center gap-3 px-4 py-3 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors">
            <LogOut size={20} />
            <span>Sair</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-64 pt-16 md:pt-0 pb-20 md:pb-0">
        {/* Desktop Header */}
        <header className="hidden md:flex h-16 bg-white border-b border-slate-200 items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">
              Olá, bem-vindo de volta!
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-100 relative">
              <Bell size={22} className="text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>

            <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                <span className="text-sm font-bold text-white">U</span>
              </div>
              <div className="text-sm">
                <p className="font-medium text-slate-900">Usuário</p>
                <p className="text-slate-500 text-xs">Paciente</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {children}
        </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <MobileNav />
    </div>
  );
}
