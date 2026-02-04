'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Users,
  Calendar,
  FileText,
  TrendingUp,
  Search,
  Filter,
  MoreVertical,
  Eye,
  CheckCircle,
  Clock,
  AlertTriangle,
  Download,
  Bell,
  Settings,
  LogOut
} from 'lucide-react';
import Logo from '@/components/icons/Logo';

interface Patient {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'ativo' | 'pendente' | 'inativo';
  prepStatus: 'em_uso' | 'avaliacao' | 'nao_indicado';
  lastConsultation: string;
  nextConsultation?: string;
  questionnaireFilled: boolean;
}

export default function AdminPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('todos');

  // Mock data
  const stats = {
    totalPatients: 156,
    activePrep: 89,
    pendingEvaluation: 12,
    consultationsThisMonth: 47,
  };

  const patients: Patient[] = [
    {
      id: '1',
      name: 'João Silva',
      email: 'joao@email.com',
      phone: '(11) 99999-1111',
      status: 'ativo',
      prepStatus: 'em_uso',
      lastConsultation: '2024-12-15',
      nextConsultation: '2025-03-15',
      questionnaireFilled: true,
    },
    {
      id: '2',
      name: 'Maria Santos',
      email: 'maria@email.com',
      phone: '(11) 99999-2222',
      status: 'pendente',
      prepStatus: 'avaliacao',
      lastConsultation: '',
      questionnaireFilled: true,
    },
    {
      id: '3',
      name: 'Pedro Oliveira',
      email: 'pedro@email.com',
      phone: '(11) 99999-3333',
      status: 'ativo',
      prepStatus: 'em_uso',
      lastConsultation: '2024-11-20',
      nextConsultation: '2025-02-20',
      questionnaireFilled: true,
    },
    {
      id: '4',
      name: 'Ana Costa',
      email: 'ana@email.com',
      phone: '(11) 99999-4444',
      status: 'pendente',
      prepStatus: 'avaliacao',
      lastConsultation: '',
      questionnaireFilled: false,
    },
    {
      id: '5',
      name: 'Carlos Lima',
      email: 'carlos@email.com',
      phone: '(11) 99999-5555',
      status: 'ativo',
      prepStatus: 'em_uso',
      lastConsultation: '2024-12-01',
      nextConsultation: '2025-03-01',
      questionnaireFilled: true,
    },
  ];

  const recentConsultations = [
    { patient: 'João Silva', type: 'Retorno', date: '2024-12-15', time: '14:00' },
    { patient: 'Carlos Lima', type: 'Retorno', date: '2024-12-01', time: '10:00' },
    { patient: 'Pedro Oliveira', type: 'Retorno', date: '2024-11-20', time: '15:30' },
  ];

  const pendingActions = [
    { type: 'questionario', patient: 'Maria Santos', message: 'Questionário preenchido - aguardando análise' },
    { type: 'consulta', patient: 'Ana Costa', message: 'Nova consulta agendada - aguardando pagamento' },
    { type: 'exame', patient: 'Pedro Oliveira', message: 'Resultados de exames disponíveis' },
  ];

  const filteredPatients = patients.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'todos' || p.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: Patient['status']) => {
    switch (status) {
      case 'ativo':
        return 'bg-green-100 text-green-700';
      case 'pendente':
        return 'bg-amber-100 text-amber-700';
      case 'inativo':
        return 'bg-slate-100 text-slate-700';
    }
  };

  const getPrepStatusBadge = (status: Patient['prepStatus']) => {
    switch (status) {
      case 'em_uso':
        return { bg: 'bg-emerald-100 text-emerald-700', label: 'Em uso' };
      case 'avaliacao':
        return { bg: 'bg-blue-100 text-blue-700', label: 'Em avaliação' };
      case 'nao_indicado':
        return { bg: 'bg-slate-100 text-slate-700', label: 'Não indicado' };
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-slate-200 flex-col hidden lg:flex z-40">
        <div className="p-4 border-b border-slate-100">
          <Logo size="sm" />
        </div>

        <nav className="flex-1 p-4 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary-100 text-primary-700 font-semibold"
          >
            <TrendingUp size={20} />
            Dashboard
          </Link>
          <Link
            href="/admin/pacientes"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <Users size={20} />
            Pacientes
          </Link>
          <Link
            href="/admin/consultas"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <Calendar size={20} />
            Consultas
          </Link>
          <Link
            href="/admin/formularios"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100"
          >
            <FileText size={20} />
            Formulários PrEP
          </Link>

          <div className="pt-4 mt-4 border-t border-slate-100">
            <Link
              href="/admin/configuracoes"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-slate-600 hover:bg-slate-100"
            >
              <Settings size={20} />
              Configurações
            </Link>
          </div>
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
              <span className="text-sm font-bold text-white">RR</span>
            </div>
            <div>
              <p className="font-medium text-slate-900 text-sm">Dr. Ricardo Razera</p>
              <p className="text-xs text-slate-500">CRM SP 243.898</p>
            </div>
          </div>
          <button className="flex items-center gap-3 px-4 py-2 w-full rounded-xl text-red-600 hover:bg-red-50 transition-colors text-sm">
            <LogOut size={18} />
            Sair
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
          <div>
            <h1 className="text-lg font-semibold text-slate-900">Dashboard Médico</h1>
            <p className="text-sm text-slate-500">Bem-vindo, Dr. Ricardo</p>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 rounded-lg hover:bg-slate-100 relative">
              <Bell size={22} className="text-slate-600" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-6 space-y-6">
          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.totalPatients}</p>
                  <p className="text-sm text-slate-500">Total de Pacientes</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <CheckCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.activePrep}</p>
                  <p className="text-sm text-slate-500">Em uso de PrEP</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-amber-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.pendingEvaluation}</p>
                  <p className="text-sm text-slate-500">Aguardando Avaliação</p>
                </div>
              </div>
            </div>

            <div className="card p-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-violet-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-slate-900">{stats.consultationsThisMonth}</p>
                  <p className="text-sm text-slate-500">Consultas este mês</p>
                </div>
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Pending Actions */}
            <div className="card p-4">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-amber-500" />
                Ações Pendentes
              </h2>
              <div className="space-y-3">
                {pendingActions.map((action, index) => (
                  <div key={index} className="p-3 bg-amber-50 border border-amber-100 rounded-xl">
                    <p className="font-medium text-amber-900 text-sm">{action.patient}</p>
                    <p className="text-xs text-amber-700 mt-1">{action.message}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Consultations */}
            <div className="card p-4 lg:col-span-2">
              <h2 className="font-semibold text-slate-900 mb-4 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-primary-500" />
                Consultas Recentes
              </h2>
              <div className="space-y-3">
                {recentConsultations.map((consultation, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-50 rounded-xl">
                    <div>
                      <p className="font-medium text-slate-900">{consultation.patient}</p>
                      <p className="text-sm text-slate-500">{consultation.type}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-slate-900">
                        {new Date(consultation.date).toLocaleDateString('pt-BR')}
                      </p>
                      <p className="text-xs text-slate-500">{consultation.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Patient List */}
          <div className="card p-4">
            <div className="flex items-center justify-between mb-4 flex-wrap gap-4">
              <h2 className="font-semibold text-slate-900">Pacientes</h2>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Buscar paciente..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-400"
                  />
                </div>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-400"
                >
                  <option value="todos">Todos</option>
                  <option value="ativo">Ativos</option>
                  <option value="pendente">Pendentes</option>
                  <option value="inativo">Inativos</option>
                </select>
                <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                  <Download size={16} />
                  Exportar
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Paciente</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Status</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">PrEP</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Última Consulta</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Questionário</th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-slate-600">Ações</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map((patient) => {
                    const prepStatus = getPrepStatusBadge(patient.prepStatus);
                    return (
                      <tr key={patient.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div>
                            <p className="font-medium text-slate-900">{patient.name}</p>
                            <p className="text-sm text-slate-500">{patient.email}</p>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(patient.status)}`}>
                            {patient.status.charAt(0).toUpperCase() + patient.status.slice(1)}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${prepStatus.bg}`}>
                            {prepStatus.label}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-sm text-slate-600">
                          {patient.lastConsultation
                            ? new Date(patient.lastConsultation).toLocaleDateString('pt-BR')
                            : '-'}
                        </td>
                        <td className="py-3 px-4">
                          {patient.questionnaireFilled ? (
                            <CheckCircle className="w-5 h-5 text-green-500" />
                          ) : (
                            <Clock className="w-5 h-5 text-amber-500" />
                          )}
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Link
                              href={`/admin/pacientes/${patient.id}`}
                              className="p-2 hover:bg-slate-100 rounded-lg"
                              title="Ver detalhes"
                            >
                              <Eye size={18} className="text-slate-600" />
                            </Link>
                            <button className="p-2 hover:bg-slate-100 rounded-lg" title="Mais opções">
                              <MoreVertical size={18} className="text-slate-600" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
