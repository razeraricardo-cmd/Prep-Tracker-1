import Link from 'next/link';
import {
  Shield,
  Calendar,
  Syringe,
  FileText,
  ArrowRight,
  CheckCircle,
  Clock,
  AlertTriangle,
  TrendingUp,
  Heart,
  Pill,
  Bell
} from 'lucide-react';

export default function DashboardPage() {
  // Mock data - in production this would come from API/database
  const userData = {
    name: 'Usuário',
    prepStatus: 'ativo',
    lastConsultation: '2024-12-15',
    nextConsultation: '2025-03-15',
    daysUntilRefill: 45,
    completedSteps: 3,
    totalSteps: 5,
  };

  const quickActions = [
    {
      icon: Calendar,
      title: 'Agendar Consulta',
      description: 'Marque sua próxima consulta',
      href: '/dashboard/consultas/agendar',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: FileText,
      title: 'Meus Exames',
      description: 'Veja resultados e pedidos',
      href: '/dashboard/exames',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Syringe,
      title: 'Vacinas',
      description: 'Acompanhe sua carteira vacinal',
      href: '/dashboard/vacinas',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: Shield,
      title: 'Minha Prevenção',
      description: 'Status da sua prevenção',
      href: '/dashboard/prevencao',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const notifications = [
    {
      type: 'reminder',
      icon: Pill,
      title: 'Lembrete de medicação',
      message: 'Não esqueça de tomar sua PrEP hoje',
      time: 'Agora',
    },
    {
      type: 'appointment',
      icon: Calendar,
      title: 'Consulta se aproximando',
      message: 'Sua próxima consulta é em 45 dias',
      time: '2h atrás',
    },
    {
      type: 'education',
      icon: Heart,
      title: 'Nova dica de prevenção',
      message: 'Saiba mais sobre prevenção combinada',
      time: '1 dia atrás',
    },
  ];

  const healthTips = [
    {
      title: 'PrEP é 99% eficaz',
      description: 'Quando tomada diariamente, a PrEP previne até 99% das infecções por HIV.',
    },
    {
      title: 'Exames regulares',
      description: 'Faça exames de ISTs a cada 3 meses para manter sua saúde em dia.',
    },
    {
      title: 'Prevenção combinada',
      description: 'Use preservativo junto com a PrEP para proteção contra outras ISTs.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="card p-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white relative overflow-hidden">
        <div className="absolute right-0 top-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/4" />
        <div className="absolute right-20 bottom-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2" />

        <div className="relative z-10">
          <h1 className="text-2xl font-bold mb-2">
            Olá, {userData.name}!
          </h1>
          <p className="text-white/90 mb-4">
            Sua prevenção está em dia. Continue assim!
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Shield size={18} />
              </div>
              <div>
                <p className="text-xs text-white/70">Status PrEP</p>
                <p className="font-semibold">Ativo</p>
              </div>
            </div>

            <div className="w-px h-10 bg-white/20" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <Calendar size={18} />
              </div>
              <div>
                <p className="text-xs text-white/70">Próximo retorno</p>
                <p className="font-semibold">{userData.daysUntilRefill} dias</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Card */}
      <div className="card p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-slate-900">Seu progresso</h2>
          <span className="text-sm text-slate-500">
            {userData.completedSteps}/{userData.totalSteps} etapas
          </span>
        </div>

        <div className="progress-bar mb-4">
          <div
            className="progress-bar-fill"
            style={{ width: `${(userData.completedSteps / userData.totalSteps) * 100}%` }}
          />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {[
            { label: 'Cadastro', done: true },
            { label: 'Questionário', done: true },
            { label: 'Primeira consulta', done: true },
            { label: 'Exames', done: false },
            { label: 'Retorno', done: false },
          ].map((step, index) => (
            <div
              key={index}
              className={`flex items-center gap-2 p-2 rounded-lg ${
                step.done ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-500'
              }`}
            >
              {step.done ? (
                <CheckCircle size={16} className="flex-shrink-0" />
              ) : (
                <Clock size={16} className="flex-shrink-0" />
              )}
              <span className="text-xs font-medium truncate">{step.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link
            key={index}
            href={action.href}
            className="card card-hover p-4"
          >
            <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3`}>
              <action.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-slate-900 mb-1">{action.title}</h3>
            <p className="text-sm text-slate-500">{action.description}</p>
          </Link>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Notifications */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <Bell size={20} className="text-primary-500" />
              Notificações
            </h2>
            <Link href="/dashboard/notificacoes" className="text-sm text-primary-600 hover:underline">
              Ver todas
            </Link>
          </div>

          <div className="space-y-3">
            {notifications.map((notification, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl hover:bg-slate-100 transition-colors cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                  notification.type === 'reminder'
                    ? 'bg-primary-100 text-primary-600'
                    : notification.type === 'appointment'
                    ? 'bg-amber-100 text-amber-600'
                    : 'bg-pink-100 text-pink-600'
                }`}>
                  <notification.icon size={20} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-slate-900 text-sm">{notification.title}</h4>
                  <p className="text-sm text-slate-500 truncate">{notification.message}</p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">{notification.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Health Tips */}
        <div className="card p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-semibold text-slate-900 flex items-center gap-2">
              <TrendingUp size={20} className="text-emerald-500" />
              Dicas de Saúde
            </h2>
            <Link href="/dashboard/educacao" className="text-sm text-primary-600 hover:underline">
              Ver mais
            </Link>
          </div>

          <div className="space-y-3">
            {healthTips.map((tip, index) => (
              <div key={index} className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl">
                <h4 className="font-medium text-emerald-900 mb-1">{tip.title}</h4>
                <p className="text-sm text-emerald-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upcoming Appointment Card */}
      <div className="card p-6 border-l-4 border-primary-500">
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <Calendar className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900">Próxima consulta de retorno</h3>
              <p className="text-slate-500">
                Agendada para 15 de março de 2025 às 14:00
              </p>
            </div>
          </div>

          <div className="flex gap-3">
            <button className="btn-secondary text-sm py-2 px-4">
              Remarcar
            </button>
            <Link href="/dashboard/consultas/detalhes" className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
              Ver detalhes
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
