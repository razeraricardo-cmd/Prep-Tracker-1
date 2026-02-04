'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Calendar,
  Clock,
  Video,
  CheckCircle,
  XCircle,
  Plus,
  ArrowRight,
  CreditCard,
  FileText,
  MessageCircle
} from 'lucide-react';

interface Appointment {
  id: string;
  type: 'primeira_consulta' | 'retorno';
  status: 'agendada' | 'realizada' | 'cancelada';
  date: string;
  time: string;
  price: number;
  paymentStatus: 'pago' | 'pendente';
  notes?: string;
}

export default function ConsultasPage() {
  const [activeTab, setActiveTab] = useState<'proximas' | 'historico'>('proximas');

  const appointments: Appointment[] = [
    {
      id: '1',
      type: 'retorno',
      status: 'agendada',
      date: '2025-03-15',
      time: '14:00',
      price: 250,
      paymentStatus: 'pago',
    },
    {
      id: '2',
      type: 'primeira_consulta',
      status: 'realizada',
      date: '2024-12-15',
      time: '10:00',
      price: 400,
      paymentStatus: 'pago',
      notes: 'Primeira consulta realizada. Iniciado acompanhamento para PrEP.',
    },
    {
      id: '3',
      type: 'retorno',
      status: 'realizada',
      date: '2024-09-20',
      time: '15:30',
      price: 250,
      paymentStatus: 'pago',
    },
  ];

  const upcomingAppointments = appointments.filter(a => a.status === 'agendada');
  const pastAppointments = appointments.filter(a => a.status !== 'agendada');

  const getStatusConfig = (status: Appointment['status']) => {
    switch (status) {
      case 'agendada':
        return { color: 'blue', label: 'Agendada', icon: Clock };
      case 'realizada':
        return { color: 'green', label: 'Realizada', icon: CheckCircle };
      case 'cancelada':
        return { color: 'red', label: 'Cancelada', icon: XCircle };
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Minhas Consultas</h1>
          <p className="text-slate-600">Gerencie suas consultas e agendamentos</p>
        </div>
        <Link href="/dashboard/consultas/agendar" className="btn-primary flex items-center gap-2">
          <Plus size={18} />
          Agendar Consulta
        </Link>
      </div>

      {/* Info Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="card p-6 border-l-4 border-primary-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Video className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Primeira Consulta</h3>
              <p className="text-slate-500 text-sm">Avaliação completa • R$ 400</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Consulta inicial com avaliação completa do histórico de saúde,
            orientações sobre PrEP e prevenção, solicitação de exames.
          </p>
        </div>

        <div className="card p-6 border-l-4 border-accent-500">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Retorno</h3>
              <p className="text-slate-500 text-sm">Acompanhamento • R$ 250</p>
            </div>
          </div>
          <p className="text-sm text-slate-600 mt-4">
            Consulta de acompanhamento para análise de exames,
            renovação de prescrições e ajustes no tratamento.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-slate-200">
        <button
          onClick={() => setActiveTab('proximas')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'proximas'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Próximas ({upcomingAppointments.length})
        </button>
        <button
          onClick={() => setActiveTab('historico')}
          className={`px-4 py-3 font-medium text-sm border-b-2 transition-colors ${
            activeTab === 'historico'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-slate-500 hover:text-slate-700'
          }`}
        >
          Histórico ({pastAppointments.length})
        </button>
      </div>

      {/* Appointments List */}
      <div className="space-y-4">
        {(activeTab === 'proximas' ? upcomingAppointments : pastAppointments).map((appointment) => {
          const statusConfig = getStatusConfig(appointment.status);
          const StatusIcon = statusConfig.icon;

          return (
            <div key={appointment.id} className="card p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    appointment.type === 'primeira_consulta'
                      ? 'bg-primary-100'
                      : 'bg-accent-100'
                  }`}>
                    <Video className={`w-6 h-6 ${
                      appointment.type === 'primeira_consulta'
                        ? 'text-primary-600'
                        : 'text-accent-600'
                    }`} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-slate-900">
                        {appointment.type === 'primeira_consulta' ? 'Primeira Consulta' : 'Retorno'}
                      </h3>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                        statusConfig.color === 'blue'
                          ? 'bg-blue-100 text-blue-700'
                          : statusConfig.color === 'green'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}>
                        {statusConfig.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{new Date(appointment.date).toLocaleDateString('pt-BR')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        <span>{appointment.time}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mt-2">
                      <div className="flex items-center gap-1 text-sm">
                        <CreditCard size={16} className="text-slate-400" />
                        <span className="text-slate-600">R$ {appointment.price}</span>
                        <span className={`text-xs px-1.5 py-0.5 rounded ${
                          appointment.paymentStatus === 'pago'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}>
                          {appointment.paymentStatus === 'pago' ? 'Pago' : 'Pendente'}
                        </span>
                      </div>
                    </div>

                    {appointment.notes && (
                      <p className="mt-2 text-sm text-slate-600 bg-slate-50 p-2 rounded-lg">
                        {appointment.notes}
                      </p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  {appointment.status === 'agendada' && (
                    <>
                      <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
                        <Video size={16} />
                        Entrar
                      </button>
                      <button className="btn-secondary text-sm py-2 px-4">
                        Remarcar
                      </button>
                    </>
                  )}
                  {appointment.status === 'realizada' && (
                    <Link
                      href={`/dashboard/consultas/${appointment.id}`}
                      className="btn-secondary text-sm py-2 px-4 flex items-center gap-2"
                    >
                      <FileText size={16} />
                      Ver detalhes
                    </Link>
                  )}
                </div>
              </div>
            </div>
          );
        })}

        {(activeTab === 'proximas' ? upcomingAppointments : pastAppointments).length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-2">
              {activeTab === 'proximas' ? 'Nenhuma consulta agendada' : 'Nenhuma consulta no histórico'}
            </h3>
            <p className="text-slate-500 mb-4">
              {activeTab === 'proximas'
                ? 'Agende sua próxima consulta para continuar seu acompanhamento.'
                : 'Seu histórico de consultas aparecerá aqui.'}
            </p>
            {activeTab === 'proximas' && (
              <Link href="/dashboard/consultas/agendar" className="btn-primary inline-flex items-center gap-2">
                <Plus size={18} />
                Agendar Consulta
              </Link>
            )}
          </div>
        )}
      </div>

      {/* Help Card */}
      <div className="card p-6 bg-slate-50">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
            <MessageCircle className="w-5 h-5 text-primary-600" />
          </div>
          <div>
            <h3 className="font-semibold text-slate-900">Dúvidas sobre agendamento?</h3>
            <p className="text-sm text-slate-600 mt-1">
              As consultas são realizadas por videochamada. Após o agendamento e pagamento,
              você receberá o link de acesso por e-mail. Caso precise remarcar, faça com
              pelo menos 24h de antecedência.
            </p>
            <Link
              href="/dashboard/suporte"
              className="inline-flex items-center gap-1 text-sm text-primary-600 hover:underline mt-2"
            >
              Falar com suporte
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
