'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Syringe,
  CheckCircle,
  Clock,
  AlertTriangle,
  Calendar,
  Info,
  ArrowRight,
  Plus,
  FileText,
  Shield
} from 'lucide-react';

interface Vaccine {
  id: string;
  name: string;
  description: string;
  totalDoses: number;
  completedDoses: number;
  dates: string[];
  nextDoseDate?: string;
  status: 'completa' | 'em_andamento' | 'pendente' | 'atrasada';
  isISTRelated: boolean;
  category: string;
}

export default function VacinasPage() {
  const [activeTab, setActiveTab] = useState<'todas' | 'ist' | 'pendentes'>('todas');

  const vaccines: Vaccine[] = [
    {
      id: '1',
      name: 'HPV (Papilomavírus Humano)',
      description: 'Previne verrugas genitais e cânceres relacionados ao HPV',
      totalDoses: 3,
      completedDoses: 2,
      dates: ['2024-06-15', '2024-08-15'],
      nextDoseDate: '2025-02-15',
      status: 'em_andamento',
      isISTRelated: true,
      category: 'IST',
    },
    {
      id: '2',
      name: 'Hepatite B',
      description: 'Proteção contra o vírus da Hepatite B',
      totalDoses: 3,
      completedDoses: 3,
      dates: ['2020-01-10', '2020-02-10', '2020-07-10'],
      status: 'completa',
      isISTRelated: true,
      category: 'IST',
    },
    {
      id: '3',
      name: 'Hepatite A',
      description: 'Proteção contra o vírus da Hepatite A',
      totalDoses: 2,
      completedDoses: 2,
      dates: ['2023-03-20', '2023-09-20'],
      status: 'completa',
      isISTRelated: true,
      category: 'IST',
    },
    {
      id: '4',
      name: 'Meningocócica ACWY',
      description: 'Proteção contra meningite bacteriana',
      totalDoses: 1,
      completedDoses: 0,
      dates: [],
      status: 'pendente',
      isISTRelated: false,
      category: 'Geral',
    },
    {
      id: '5',
      name: 'Influenza (Gripe)',
      description: 'Proteção anual contra a gripe',
      totalDoses: 1,
      completedDoses: 1,
      dates: ['2024-04-15'],
      nextDoseDate: '2025-04-01',
      status: 'completa',
      isISTRelated: false,
      category: 'Geral',
    },
    {
      id: '6',
      name: 'COVID-19',
      description: 'Proteção contra o coronavírus',
      totalDoses: 4,
      completedDoses: 4,
      dates: ['2021-06-01', '2021-07-01', '2022-01-15', '2023-06-01'],
      status: 'completa',
      isISTRelated: false,
      category: 'Geral',
    },
    {
      id: '7',
      name: 'Tétano, Difteria e Coqueluche (dTpa)',
      description: 'Reforço a cada 10 anos',
      totalDoses: 1,
      completedDoses: 0,
      dates: [],
      status: 'atrasada',
      isISTRelated: false,
      category: 'Geral',
    },
  ];

  const filteredVaccines = vaccines.filter(v => {
    if (activeTab === 'ist') return v.isISTRelated;
    if (activeTab === 'pendentes') return v.status === 'pendente' || v.status === 'atrasada' || v.status === 'em_andamento';
    return true;
  });

  const getStatusConfig = (status: Vaccine['status']) => {
    switch (status) {
      case 'completa':
        return { icon: CheckCircle, color: 'green', label: 'Completa', bg: 'bg-green-100 text-green-700' };
      case 'em_andamento':
        return { icon: Clock, color: 'blue', label: 'Em andamento', bg: 'bg-blue-100 text-blue-700' };
      case 'pendente':
        return { icon: Clock, color: 'amber', label: 'Pendente', bg: 'bg-amber-100 text-amber-700' };
      case 'atrasada':
        return { icon: AlertTriangle, color: 'red', label: 'Atrasada', bg: 'bg-red-100 text-red-700' };
    }
  };

  const stats = {
    total: vaccines.length,
    completas: vaccines.filter(v => v.status === 'completa').length,
    emAndamento: vaccines.filter(v => v.status === 'em_andamento').length,
    pendentes: vaccines.filter(v => v.status === 'pendente' || v.status === 'atrasada').length,
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Carteira de Vacinação</h1>
          <p className="text-slate-600">Acompanhe suas vacinas e próximas doses</p>
        </div>
        <button className="btn-primary flex items-center gap-2 text-sm">
          <Plus size={18} />
          Adicionar Vacina
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
              <Syringe className="w-5 h-5 text-primary-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.total}</p>
              <p className="text-sm text-slate-500">Total</p>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.completas}</p>
              <p className="text-sm text-slate-500">Completas</p>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.emAndamento}</p>
              <p className="text-sm text-slate-500">Em andamento</p>
            </div>
          </div>
        </div>

        <div className="card p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
            </div>
            <div>
              <p className="text-2xl font-bold text-slate-900">{stats.pendentes}</p>
              <p className="text-sm text-slate-500">Pendentes</p>
            </div>
          </div>
        </div>
      </div>

      {/* IST Vaccines Info */}
      <div className="card p-4 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Shield className="w-5 h-5 text-violet-600" />
          </div>
          <div>
            <h3 className="font-semibold text-violet-900">Vacinas importantes para prevenção de ISTs</h3>
            <p className="text-sm text-violet-700 mt-1">
              HPV, Hepatite A e Hepatite B são vacinas essenciais para quem busca prevenção completa.
              A vacina de HPV previne verrugas genitais e cânceres, enquanto as hepatites A e B podem
              ser transmitidas sexualmente.
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
        {[
          { key: 'todas', label: 'Todas' },
          { key: 'ist', label: 'Relacionadas a ISTs' },
          { key: 'pendentes', label: 'Pendentes' },
        ].map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key as typeof activeTab)}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === tab.key
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Vaccine List */}
      <div className="space-y-4">
        {filteredVaccines.map((vaccine) => {
          const statusConfig = getStatusConfig(vaccine.status);
          const StatusIcon = statusConfig.icon;
          const progress = (vaccine.completedDoses / vaccine.totalDoses) * 100;

          return (
            <div key={vaccine.id} className="card p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    vaccine.isISTRelated ? 'bg-violet-100' : 'bg-slate-100'
                  }`}>
                    <Syringe className={`w-6 h-6 ${
                      vaccine.isISTRelated ? 'text-violet-600' : 'text-slate-600'
                    }`} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-slate-900">{vaccine.name}</h3>
                      {vaccine.isISTRelated && (
                        <span className="text-xs px-2 py-0.5 bg-violet-100 text-violet-700 rounded-full">
                          IST
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{vaccine.description}</p>

                    {/* Progress */}
                    <div className="mt-3">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-slate-600">
                          {vaccine.completedDoses} de {vaccine.totalDoses} doses
                        </span>
                        <span className={statusConfig.bg + ' text-xs px-2 py-0.5 rounded-full font-medium'}>
                          {statusConfig.label}
                        </span>
                      </div>
                      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className={`h-full rounded-full transition-all ${
                            vaccine.status === 'completa'
                              ? 'bg-green-500'
                              : vaccine.status === 'atrasada'
                              ? 'bg-red-500'
                              : 'bg-blue-500'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    {/* Dates */}
                    {vaccine.dates.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {vaccine.dates.map((date, index) => (
                          <span
                            key={index}
                            className="text-xs px-2 py-1 bg-slate-100 text-slate-600 rounded-lg"
                          >
                            {index + 1}ª dose: {new Date(date).toLocaleDateString('pt-BR')}
                          </span>
                        ))}
                      </div>
                    )}

                    {/* Next dose */}
                    {vaccine.nextDoseDate && (
                      <div className="mt-3 flex items-center gap-2 text-sm text-amber-600">
                        <Calendar size={16} />
                        <span>
                          Próxima dose: {new Date(vaccine.nextDoseDate).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Info Card */}
      <div className="card p-6 bg-slate-50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Info className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Sobre o calendário vacinal</h3>
            <p className="text-sm text-slate-600 mt-1">
              O calendário de vacinação é baseado nas recomendações do Ministério da Saúde e
              da Sociedade Brasileira de Imunizações (SBIm). Converse com o Dr. Ricardo sobre
              quais vacinas são indicadas para o seu perfil.
            </p>
            <Link
              href="/dashboard/educacao/vacinas"
              className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mt-2"
            >
              Saiba mais sobre vacinas
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
