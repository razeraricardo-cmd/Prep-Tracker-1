'use client';

import Link from 'next/link';
import {
  Shield,
  Pill,
  Calendar,
  CheckCircle,
  AlertCircle,
  Clock,
  FileText,
  ArrowRight,
  TrendingUp,
  Heart,
  Activity,
  Info
} from 'lucide-react';

export default function PrevencaoPage() {
  // Mock data
  const prepData = {
    status: 'ativo',
    startDate: '2024-06-15',
    lastDispensation: '2024-12-01',
    nextDispensation: '2025-03-30',
    daysRemaining: 45,
    totalDays: 120,
    adherenceRate: 95,
    medication: 'Truvada (TDF/FTC)',
  };

  const recentExams = [
    { name: 'Teste HIV', date: '2024-12-01', result: 'Não reagente', status: 'ok' },
    { name: 'Creatinina', date: '2024-12-01', result: '0.9 mg/dL', status: 'ok' },
    { name: 'HBsAg', date: '2024-12-01', result: 'Não reagente', status: 'ok' },
    { name: 'Anti-HCV', date: '2024-12-01', result: 'Não reagente', status: 'ok' },
    { name: 'VDRL (Sífilis)', date: '2024-12-01', result: 'Não reagente', status: 'ok' },
  ];

  const preventionChecklist = [
    { item: 'Tomar PrEP diariamente', completed: true },
    { item: 'Usar preservativo quando possível', completed: true },
    { item: 'Fazer exames regulares (a cada 3 meses)', completed: true },
    { item: 'Vacinas em dia (HPV, Hepatites)', completed: false },
    { item: 'Conversar sobre status com parceiros', completed: true },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Minha Prevenção</h1>
          <p className="text-slate-600">Acompanhe seu status de prevenção de ISTs</p>
        </div>
        <Link
          href="/dashboard/prevencao/historico"
          className="text-primary-600 hover:underline text-sm font-medium flex items-center gap-1"
        >
          Ver histórico
          <ArrowRight size={16} />
        </Link>
      </div>

      {/* PrEP Status Card */}
      <div className="card overflow-hidden">
        <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-6 text-white">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
              <Shield size={24} />
            </div>
            <div>
              <h2 className="text-xl font-bold">Status da PrEP</h2>
              <p className="text-white/80">Profilaxia Pré-Exposição ao HIV</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-6">
            <div>
              <p className="text-white/70 text-sm">Status</p>
              <div className="flex items-center gap-2 mt-1">
                <div className="w-3 h-3 bg-green-300 rounded-full animate-pulse" />
                <span className="font-semibold text-lg">Ativo</span>
              </div>
            </div>
            <div>
              <p className="text-white/70 text-sm">Medicamento</p>
              <p className="font-semibold text-lg mt-1">{prepData.medication}</p>
            </div>
            <div>
              <p className="text-white/70 text-sm">Adesão</p>
              <p className="font-semibold text-lg mt-1">{prepData.adherenceRate}%</p>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold text-slate-900">Próxima dispensação</h3>
            <span className="badge-info">Em {prepData.daysRemaining} dias</span>
          </div>

          <div className="progress-bar h-3 mb-4">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all"
              style={{ width: `${((prepData.totalDays - prepData.daysRemaining) / prepData.totalDays) * 100}%` }}
            />
          </div>

          <div className="flex justify-between text-sm text-slate-500">
            <span>Última: {new Date(prepData.lastDispensation).toLocaleDateString('pt-BR')}</span>
            <span>Próxima: {new Date(prepData.nextDispensation).toLocaleDateString('pt-BR')}</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Recent Exams */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Activity size={20} className="text-primary-500" />
              Últimos Exames
            </h2>
            <Link href="/dashboard/exames" className="text-sm text-primary-600 hover:underline">
              Ver todos
            </Link>
          </div>

          <div className="space-y-3">
            {recentExams.map((exam, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    exam.status === 'ok' ? 'bg-green-100 text-green-600' : 'bg-yellow-100 text-yellow-600'
                  }`}>
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-slate-900 text-sm">{exam.name}</p>
                    <p className="text-xs text-slate-500">{new Date(exam.date).toLocaleDateString('pt-BR')}</p>
                  </div>
                </div>
                <span className="text-sm font-medium text-green-600">{exam.result}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Prevention Checklist */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Heart size={20} className="text-pink-500" />
              Checklist de Prevenção
            </h2>
            <span className="text-sm text-slate-500">
              {preventionChecklist.filter(i => i.completed).length}/{preventionChecklist.length}
            </span>
          </div>

          <div className="space-y-3">
            {preventionChecklist.map((item, index) => (
              <label
                key={index}
                className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors ${
                  item.completed ? 'bg-green-50' : 'bg-slate-50 hover:bg-slate-100'
                }`}
              >
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                  item.completed
                    ? 'border-green-500 bg-green-500'
                    : 'border-slate-300'
                }`}>
                  {item.completed && <CheckCircle size={14} className="text-white" />}
                </div>
                <span className={`text-sm ${
                  item.completed ? 'text-green-700' : 'text-slate-700'
                }`}>
                  {item.item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* IST Prevention Info */}
      <div className="card p-6">
        <div className="flex items-center gap-2 mb-4">
          <Info size={20} className="text-primary-500" />
          <h2 className="font-semibold text-slate-900">Outras ISTs monitoradas</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { name: 'Sífilis', status: 'Negativo', lastTest: '01/12/2024', color: 'emerald' },
            { name: 'Clamídia', status: 'Negativo', lastTest: '01/12/2024', color: 'blue' },
            { name: 'Gonorreia', status: 'Negativo', lastTest: '01/12/2024', color: 'violet' },
            { name: 'Hepatite B', status: 'Imune (vacina)', lastTest: '01/12/2024', color: 'amber' },
          ].map((ist, index) => (
            <div key={index} className={`p-4 rounded-xl bg-${ist.color}-50 border border-${ist.color}-100`}>
              <h3 className={`font-semibold text-${ist.color}-900`}>{ist.name}</h3>
              <p className={`text-sm text-${ist.color}-700 mt-1`}>{ist.status}</p>
              <p className={`text-xs text-${ist.color}-500 mt-2`}>Último teste: {ist.lastTest}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <Link
          href="/dashboard/consultas/agendar"
          className="card card-hover p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
            <Calendar className="w-6 h-6 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Agendar Retorno</h3>
            <p className="text-sm text-slate-500">Marque sua próxima consulta</p>
          </div>
        </Link>

        <Link
          href="/dashboard/exames/solicitar"
          className="card card-hover p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Solicitar Exames</h3>
            <p className="text-sm text-slate-500">Peça novos exames ao médico</p>
          </div>
        </Link>

        <Link
          href="/dashboard/educacao/prep"
          className="card card-hover p-4 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-accent-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Saiba mais sobre PrEP</h3>
            <p className="text-sm text-slate-500">Tire suas dúvidas</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
