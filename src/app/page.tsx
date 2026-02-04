'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Shield,
  Syringe,
  FileText,
  Video,
  Clock,
  CheckCircle,
  Heart,
  Activity,
  Calendar,
  MessageCircle,
  ArrowRight,
  Star,
  Users,
  Award
} from 'lucide-react';

export default function HomePage() {
  const services = [
    {
      icon: Shield,
      title: 'PrEP - Profilaxia HIV',
      description: 'Acompanhamento completo para profilaxia pré-exposição ao HIV com prescrição e monitoramento.',
      color: 'from-emerald-500 to-teal-600',
    },
    {
      icon: Activity,
      title: 'Prevenção de ISTs',
      description: 'Rastreio e prevenção de sífilis, clamídia, gonorreia, hepatites e outras infecções.',
      color: 'from-blue-500 to-cyan-600',
    },
    {
      icon: Syringe,
      title: 'Atualização Vacinal',
      description: 'Orientação sobre vacinas importantes como HPV, Hepatite A e B, e outras.',
      color: 'from-violet-500 to-purple-600',
    },
    {
      icon: FileText,
      title: 'Solicitação de Exames',
      description: 'Pedidos de exames laboratoriais para seu convênio ou particular.',
      color: 'from-orange-500 to-amber-600',
    },
  ];

  const benefits = [
    { icon: Video, text: 'Atendimento 100% online' },
    { icon: Clock, text: 'Praticidade e comodidade' },
    { icon: CheckCircle, text: 'Médico infectologista especializado' },
    { icon: Heart, text: 'Cuidado personalizado' },
  ];

  const steps = [
    {
      number: '1',
      title: 'Cadastre-se',
      description: 'Crie sua conta e preencha o questionário de saúde inicial.',
    },
    {
      number: '2',
      title: 'Agende sua Consulta',
      description: 'Escolha o melhor horário e realize o pagamento online.',
    },
    {
      number: '3',
      title: 'Consulta Online',
      description: 'Atendimento por videochamada com o Dr. Ricardo.',
    },
    {
      number: '4',
      title: 'Receba sua Orientação',
      description: 'Prescrições, pedidos de exames e orientações por e-mail.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
                <Shield className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700 font-medium text-sm">
                  Prevenção Inteligente de ISTs
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                Sua saúde sexual
                <span className="gradient-text"> em primeiro lugar</span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Acompanhamento médico especializado em prevenção de ISTs e PrEP,
                com praticidade e confidencialidade. Atendimento 100% online com
                infectologista.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/cadastro" className="btn-primary flex items-center justify-center gap-2">
                  Começar Agora
                  <ArrowRight size={20} />
                </Link>
                <Link href="/sobre" className="btn-secondary flex items-center justify-center gap-2">
                  Conhecer o Médico
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 pt-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 text-slate-600">
                    <benefit.icon className="w-5 h-5 text-primary-500" />
                    <span className="text-sm font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-slide-up hidden lg:block">
              <div className="relative z-10">
                <div className="card p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                      <span className="text-2xl font-bold text-white">RR</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">Dr. Ricardo Razera</h3>
                      <p className="text-sm text-slate-500">Infectologista | CRM SP 243.898</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-slate-600">
                      <Award className="w-5 h-5 text-primary-500" />
                      <span className="text-sm">Instituto de Infectologia Emílio Ribas</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Users className="w-5 h-5 text-primary-500" />
                      <span className="text-sm">Especialista em PrEP e ISTs</span>
                    </div>
                    <div className="flex items-center gap-3 text-slate-600">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="text-sm">Atendimento humanizado e confidencial</span>
                    </div>
                  </div>

                  <Link
                    href="/cadastro"
                    className="block w-full btn-accent text-center"
                  >
                    Agendar Consulta
                  </Link>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-40 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-40 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Serviços Especializados
            </h2>
            <p className="text-lg text-slate-600">
              Cuidado completo para sua saúde sexual com acompanhamento médico especializado
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="card card-hover p-6 space-y-4"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-lg text-slate-900">{service.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-lg text-slate-600">
              Processo simples e rápido para você começar a cuidar da sua saúde
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-6 space-y-4 text-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mx-auto">
                    <span className="text-xl font-bold text-white">{step.number}</span>
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{step.title}</h3>
                  <p className="text-slate-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-slate-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Valores Transparentes
            </h2>
            <p className="text-lg text-slate-600">
              Investimento na sua saúde com preços justos e acessíveis
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* First Consultation */}
            <div className="card p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-2xl -z-10 transform translate-x-8 -translate-y-8" />

              <div className="space-y-6">
                <div>
                  <span className="badge-info">Primeira Consulta</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-slate-900">R$ 400</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Avaliação completa do histórico de saúde</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Solicitação de exames necessários</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Prescrições digitais</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Orientação sobre PrEP e vacinação</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Atendimento por videochamada</span>
                  </li>
                </ul>
                <Link href="/cadastro" className="block w-full btn-primary text-center">
                  Agendar Primeira Consulta
                </Link>
              </div>
            </div>

            {/* Follow-up */}
            <div className="card p-8 border-2 border-primary-200 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </span>
              </div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full blur-2xl -z-10 transform translate-x-8 -translate-y-8" />

              <div className="space-y-6">
                <div>
                  <span className="badge-success">Retorno</span>
                </div>
                <div>
                  <span className="text-4xl font-bold text-slate-900">R$ 250</span>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Consulta de acompanhamento</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Análise de resultados de exames</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Renovação de prescrições</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Atualização da ficha de PrEP</span>
                  </li>
                  <li className="flex items-center gap-3 text-slate-600">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span>Suporte contínuo via app</span>
                  </li>
                </ul>
                <Link href="/login" className="block w-full btn-accent text-center">
                  Agendar Retorno
                </Link>
              </div>
            </div>
          </div>

          <p className="text-center text-slate-500 text-sm mt-8">
            * Exames laboratoriais são cobertos pelo seu convênio ou podem ser feitos em laboratórios particulares.
            <br />
            A PrEP (medicamento) é dispensada gratuitamente pelo SUS.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Comece hoje mesmo sua jornada de prevenção com acompanhamento médico especializado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro"
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Criar Minha Conta
              <ArrowRight size={20} />
            </Link>
            <Link
              href="/educacao"
              className="border-2 border-white text-white font-semibold py-4 px-8 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <MessageCircle size={20} />
              Saiba Mais sobre PrEP
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
