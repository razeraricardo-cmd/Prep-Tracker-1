'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  FileText,
  Download,
  Upload,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  Plus,
  Search,
  Filter,
  Eye
} from 'lucide-react';

interface Exam {
  id: string;
  name: string;
  category: string;
  date: string;
  status: 'disponivel' | 'pendente' | 'solicitado';
  result?: string;
  resultStatus?: 'normal' | 'alterado' | 'atencao';
  fileUrl?: string;
}

export default function ExamesPage() {
  const [activeTab, setActiveTab] = useState<'resultados' | 'solicitados'>('resultados');
  const [searchTerm, setSearchTerm] = useState('');

  const exams: Exam[] = [
    {
      id: '1',
      name: 'Teste HIV (4ª geração)',
      category: 'HIV',
      date: '2024-12-01',
      status: 'disponivel',
      result: 'Não reagente',
      resultStatus: 'normal',
      fileUrl: '#',
    },
    {
      id: '2',
      name: 'Creatinina',
      category: 'Função Renal',
      date: '2024-12-01',
      status: 'disponivel',
      result: '0.9 mg/dL',
      resultStatus: 'normal',
      fileUrl: '#',
    },
    {
      id: '3',
      name: 'HBsAg (Hepatite B)',
      category: 'Hepatites',
      date: '2024-12-01',
      status: 'disponivel',
      result: 'Não reagente',
      resultStatus: 'normal',
      fileUrl: '#',
    },
    {
      id: '4',
      name: 'Anti-HCV (Hepatite C)',
      category: 'Hepatites',
      date: '2024-12-01',
      status: 'disponivel',
      result: 'Não reagente',
      resultStatus: 'normal',
      fileUrl: '#',
    },
    {
      id: '5',
      name: 'VDRL (Sífilis)',
      category: 'ISTs',
      date: '2024-12-01',
      status: 'disponivel',
      result: 'Não reagente',
      resultStatus: 'normal',
      fileUrl: '#',
    },
    {
      id: '6',
      name: 'Pesquisa de Clamídia/Gonorreia',
      category: 'ISTs',
      date: '2024-12-01',
      status: 'disponivel',
      result: 'Negativo',
      resultStatus: 'normal',
      fileUrl: '#',
    },
  ];

  const requestedExams = [
    {
      id: '7',
      name: 'Teste HIV (4ª geração)',
      category: 'HIV',
      date: '2025-01-15',
      status: 'solicitado' as const,
    },
    {
      id: '8',
      name: 'Creatinina',
      category: 'Função Renal',
      date: '2025-01-15',
      status: 'solicitado' as const,
    },
  ];

  const getResultStatusConfig = (status?: Exam['resultStatus']) => {
    switch (status) {
      case 'normal':
        return { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' };
      case 'alterado':
        return { icon: AlertTriangle, color: 'text-red-600', bg: 'bg-red-100' };
      case 'atencao':
        return { icon: Clock, color: 'text-amber-600', bg: 'bg-amber-100' };
      default:
        return { icon: Clock, color: 'text-slate-600', bg: 'bg-slate-100' };
    }
  };

  const filteredExams = exams.filter(exam =>
    exam.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    exam.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Meus Exames</h1>
          <p className="text-slate-600">Acompanhe seus resultados e solicitações</p>
        </div>
        <div className="flex gap-3">
          <button className="btn-secondary flex items-center gap-2 text-sm">
            <Upload size={18} />
            Enviar Exame
          </button>
          <Link href="/dashboard/exames/solicitar" className="btn-primary flex items-center gap-2 text-sm">
            <Plus size={18} />
            Solicitar Exames
          </Link>
        </div>
      </div>

      {/* Info Card */}
      <div className="card p-4 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <Calendar className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-primary-900">Próximos exames recomendados</h3>
            <p className="text-sm text-primary-700 mt-1">
              Seus exames de rotina para PrEP devem ser realizados a cada 3 meses.
              Próxima data recomendada: <strong>15 de março de 2025</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Search and Tabs */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex gap-2 border-b border-slate-200 w-full sm:w-auto">
          <button
            onClick={() => setActiveTab('resultados')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'resultados'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Resultados ({exams.length})
          </button>
          <button
            onClick={() => setActiveTab('solicitados')}
            className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
              activeTab === 'solicitados'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-slate-500 hover:text-slate-700'
            }`}
          >
            Solicitados ({requestedExams.length})
          </button>
        </div>

        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar exame..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-primary-400 w-full sm:w-64"
          />
        </div>
      </div>

      {/* Results Tab */}
      {activeTab === 'resultados' && (
        <div className="space-y-4">
          {filteredExams.map((exam) => {
            const statusConfig = getResultStatusConfig(exam.resultStatus);
            const StatusIcon = statusConfig.icon;

            return (
              <div key={exam.id} className="card p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${statusConfig.bg}`}>
                      <StatusIcon className={`w-6 h-6 ${statusConfig.color}`} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">{exam.name}</h3>
                      <div className="flex items-center gap-3 mt-1">
                        <span className="text-sm text-slate-500">{exam.category}</span>
                        <span className="text-xs text-slate-400">•</span>
                        <span className="text-sm text-slate-500">
                          {new Date(exam.date).toLocaleDateString('pt-BR')}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className={`font-semibold ${statusConfig.color}`}>{exam.result}</p>
                    </div>

                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-100 rounded-lg" title="Visualizar">
                        <Eye size={18} className="text-slate-600" />
                      </button>
                      <button className="p-2 hover:bg-slate-100 rounded-lg" title="Download">
                        <Download size={18} className="text-slate-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {filteredExams.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Nenhum exame encontrado</h3>
              <p className="text-slate-500">Seus resultados de exames aparecerão aqui.</p>
            </div>
          )}
        </div>
      )}

      {/* Requested Tab */}
      {activeTab === 'solicitados' && (
        <div className="space-y-4">
          {requestedExams.map((exam) => (
            <div key={exam.id} className="card p-4">
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                    <Clock className="w-6 h-6 text-blue-600" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-slate-900">{exam.name}</h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span className="text-sm text-slate-500">{exam.category}</span>
                      <span className="text-xs text-slate-400">•</span>
                      <span className="text-sm text-slate-500">
                        Solicitado em {new Date(exam.date).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </div>
                </div>

                <span className="badge-info">Aguardando resultado</span>
              </div>
            </div>
          ))}

          {requestedExams.length === 0 && (
            <div className="text-center py-12">
              <FileText className="w-12 h-12 text-slate-300 mx-auto mb-4" />
              <h3 className="font-semibold text-slate-900 mb-2">Nenhuma solicitação pendente</h3>
              <p className="text-slate-500">Você não tem exames aguardando resultado.</p>
            </div>
          )}
        </div>
      )}

      {/* Exam Categories Legend */}
      <div className="card p-4 bg-slate-50">
        <h4 className="font-medium text-slate-900 mb-3">Legenda dos resultados</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-green-600" />
            </div>
            <span className="text-sm text-slate-600">Normal / Não reagente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center">
              <Clock className="w-4 h-4 text-amber-600" />
            </div>
            <span className="text-sm text-slate-600">Requer atenção</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-red-600" />
            </div>
            <span className="text-sm text-slate-600">Alterado / Reagente</span>
          </div>
        </div>
      </div>
    </div>
  );
}
