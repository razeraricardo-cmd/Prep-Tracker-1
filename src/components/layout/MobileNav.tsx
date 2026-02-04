'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  BookOpen,
  Calendar,
  User,
  Shield
} from 'lucide-react';

export default function MobileNav() {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', icon: Home, label: 'Início' },
    { href: '/dashboard/prevencao', icon: Shield, label: 'Prevenção' },
    { href: '/dashboard/consultas', icon: Calendar, label: 'Consultas' },
    { href: '/dashboard/educacao', icon: BookOpen, label: 'Aprenda' },
    { href: '/dashboard/perfil', icon: User, label: 'Perfil' },
  ];

  return (
    <nav className="mobile-nav md:hidden">
      {navItems.map((item) => {
        const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
        const Icon = item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-lg transition-colors ${
              isActive
                ? 'text-primary-600'
                : 'text-slate-400 hover:text-slate-600'
            }`}
          >
            <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
            <span className={`text-xs ${isActive ? 'font-semibold' : 'font-medium'}`}>
              {item.label}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
