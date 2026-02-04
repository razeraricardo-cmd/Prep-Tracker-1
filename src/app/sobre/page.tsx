'use client';

import Link from 'next/link';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  Award,
  BookOpen,
  Users,
  Heart,
  CheckCircle,
  ArrowRight,
  GraduationCap,
  Stethoscope,
  Shield
} from 'lucide-react';

export default function SobrePage() {
  const credentials = [
    {
      icon: GraduationCap,
      title: 'Formação',
      items: [
        'Médico formado pela Faculdade de Medicina',
        'Residência em Infectologia pelo Instituto de Infectologia Emílio Ribas',
        'Especialização em HIV/AIDS e ISTs',
      ],
    },
    {
      icon: Award,
      title: 'Registro Profissional',
      items: [
        'CRM SP 243.898',
        'RQE em Infectologia',
        'Título de Especialista pela Sociedade Brasileira de Infectologia',
      ],
    },
    {
      icon: Stethoscope,
      title: 'Áreas de Atuação',
      items: [
        'Profilaxia Pré-Exposição (PrEP) ao HIV',
        'Prevenção e tratamento de ISTs',
        'Atualização de calendário vacinal',
        'Acompanhamento de pessoas vivendo com HIV',
      ],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Atendimento Humanizado',
      description: 'Cada paciente é único e merece um atendimento respeitoso, livre de julgamentos e focado em suas necessidades individuais.',
    },
    {
      icon: Shield,
      title: 'Confidencialidade',
      description: 'Sigilo absoluto sobre todas as informações compartilhadas. Sua privacidade é nossa prioridade.',
    },
    {
      icon: BookOpen,
      title: 'Educação em Saúde',
      description: 'Acreditamos que informação é a melhor forma de prevenção. Trabalhamos para que você entenda e cuide da sua saúde.',
    },
    {
      icon: Users,
      title: 'Acesso à Saúde',
      description: 'Facilitamos o acesso à prevenção de ISTs através de atendimento online, prático e acessível.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-16 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full">
                <Stethoscope className="w-5 h-5 text-primary-600" />
                <span className="text-primary-700 font-medium text-sm">
                  Infectologista Especializado
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
                Dr. Ricardo José Razera
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed">
                Médico infectologista pelo Instituto de Infectologia Emílio Ribas,
                referência nacional em doenças infecciosas. Especializado em prevenção
                de ISTs e acompanhamento de PrEP, com foco em atendimento humanizado
                e baseado em evidências científicas.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-slate-600">
                  <Award className="w-5 h-5 text-primary-500" />
                  <span className="font-medium">CRM SP 243.898</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600">
                  <GraduationCap className="w-5 h-5 text-primary-500" />
                  <span className="font-medium">Emílio Ribas</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/cadastro" className="btn-primary flex items-center justify-center gap-2">
                  Agendar Consulta
                  <ArrowRight size={20} />
                </Link>
                <Link href="/contato" className="btn-secondary flex items-center justify-center gap-2">
                  Entrar em Contato
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="card p-8 relative z-10">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">RR</span>
                </div>

                <div className="text-center">
                  <h2 className="text-2xl font-bold text-slate-900">Dr. Ricardo Razera</h2>
                  <p className="text-slate-500 mt-1">Médico Infectologista</p>
                </div>

                <div className="mt-6 space-y-3">
                  {[
                    'Especialista em PrEP e prevenção de HIV',
                    'Atendimento online em todo o Brasil',
                    'Abordagem livre de julgamentos',
                    'Foco em saúde sexual e prevenção',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 w-64 h-64 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full blur-3xl opacity-40 -z-10" />
              <div className="absolute -bottom-4 -left-4 w-48 h-48 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full blur-3xl opacity-40 -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Qualificações e Experiência
            </h2>
            <p className="text-lg text-slate-600">
              Formação sólida e experiência em centros de referência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {credentials.map((cred, index) => (
              <div key={index} className="card p-6">
                <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-4">
                  <cred.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="font-bold text-xl text-slate-900 mb-4">{cred.title}</h3>
                <ul className="space-y-3">
                  {cred.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-lg text-slate-600">
              Princípios que guiam nosso atendimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="card card-hover p-6 text-center">
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-bold text-lg text-slate-900 mb-2">{value.title}</h3>
                <p className="text-slate-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instituto Emílio Ribas */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 bg-gradient-to-r from-primary-50 to-accent-50 border border-primary-100">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="w-24 h-24 bg-white rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                <GraduationCap className="w-12 h-12 text-primary-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Instituto de Infectologia Emílio Ribas
                </h3>
                <p className="text-slate-600">
                  Centro de referência nacional em doenças infecciosas, localizado em São Paulo.
                  O Instituto Emílio Ribas é reconhecido pela excelência no atendimento, pesquisa
                  e formação de especialistas em infectologia, sendo um dos principais centros
                  de tratamento de HIV/AIDS e outras doenças infecciosas do Brasil.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary-600 to-accent-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Agende sua consulta online e tenha acesso a um atendimento especializado
            em prevenção de ISTs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/cadastro"
              className="bg-white text-primary-600 font-semibold py-4 px-8 rounded-xl hover:bg-slate-100 transition-all duration-300 shadow-lg flex items-center justify-center gap-2"
            >
              Começar Agora
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
