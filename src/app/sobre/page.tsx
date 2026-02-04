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
  Shield,
  Video,
  MessageCircle
} from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 gradient-hero">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-6 animate-slide-up">
              <span className="badge badge-teal">Médico Infectologista</span>

              <h1 className="heading-xl">
                Dr. Ricardo José Razera
              </h1>

              <p className="text-body max-w-lg">
                Médico infectologista pelo Instituto de Infectologia Emílio Ribas,
                referência nacional em doenças infecciosas. Especializado em prevenção
                de ISTs e acompanhamento de PrEP, com foco em atendimento humanizado
                e baseado em evidências científicas.
              </p>

              <div className="flex flex-wrap gap-4 py-2">
                <div className="flex items-center gap-2 text-[#1a1a2e]">
                  <Award className="w-5 h-5 text-[#0f969c]" />
                  <span className="font-semibold">CRM-SP 243.898</span>
                </div>
                <div className="flex items-center gap-2 text-[#1a1a2e]">
                  <GraduationCap className="w-5 h-5 text-[#0f969c]" />
                  <span className="font-semibold">Emílio Ribas</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/agendar" className="btn-primary">
                  Agendar consulta
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  className="btn-secondary"
                >
                  <MessageCircle size={18} />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="relative animate-fade-in">
              <div className="card-shadow p-8">
                <div className="w-28 h-28 mx-auto rounded-2xl bg-gradient-to-br from-[#0f969c] to-[#0d8287] flex items-center justify-center mb-6">
                  <span className="text-4xl font-bold text-white">RR</span>
                </div>

                <div className="text-center mb-6">
                  <h2 className="text-xl font-bold text-[#1a1a2e]">Dr. Ricardo Razera</h2>
                  <p className="text-gray-500">Médico Infectologista</p>
                </div>

                <div className="space-y-3">
                  {[
                    'Especialista em PrEP e prevenção de HIV',
                    'Atendimento online em todo o Brasil',
                    'Abordagem livre de julgamentos',
                    'Foco em saúde sexual e prevenção',
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-[#0f969c] flex-shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-[#0f969c]/20 to-[#e94560]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-4">Formação e experiência</h2>
            <p className="text-body">
              Trajetória em centros de referência em infectologia
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: GraduationCap,
                title: 'Formação',
                items: [
                  'Graduação em Medicina',
                  'Residência em Infectologia - Instituto Emílio Ribas',
                  'Especialização em HIV/AIDS e ISTs',
                ],
              },
              {
                icon: Award,
                title: 'Registro Profissional',
                items: [
                  'CRM-SP 243.898',
                  'RQE em Infectologia',
                  'Título de Especialista - SBI',
                ],
              },
              {
                icon: Stethoscope,
                title: 'Áreas de Atuação',
                items: [
                  'Profilaxia Pré-Exposição (PrEP)',
                  'Prevenção e tratamento de ISTs',
                  'Atualização de calendário vacinal',
                ],
              },
            ].map((cred, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <cred.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">{cred.title}</h3>
                <ul className="space-y-3">
                  {cred.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <CheckCircle className="w-5 h-5 text-[#0f969c] flex-shrink-0 mt-0.5" />
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
      <section className="section bg-[#fafafa]">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="heading-lg mb-4">Princípios do atendimento</h2>
            <p className="text-body">
              Valores que guiam cada consulta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Heart,
                title: 'Humanizado',
                description: 'Atendimento respeitoso e livre de julgamentos, focado em suas necessidades.',
              },
              {
                icon: Shield,
                title: 'Sigiloso',
                description: 'Confidencialidade total. Sua privacidade é nossa prioridade absoluta.',
              },
              {
                icon: BookOpen,
                title: 'Educativo',
                description: 'Informação clara para que você entenda e cuide da sua saúde.',
              },
              {
                icon: Video,
                title: 'Acessível',
                description: 'Atendimento online prático, de qualquer lugar do Brasil.',
              },
            ].map((value, index) => (
              <div key={index} className="card p-6 text-center hover:shadow-xl transition-shadow">
                <div className="w-14 h-14 bg-[#0f969c]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-[#0f969c]" />
                </div>
                <h3 className="font-bold text-lg text-[#1a1a2e] mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emílio Ribas */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="card p-8 md:p-10 bg-gradient-to-r from-[#0f969c]/5 to-[#0f969c]/10 border border-[#0f969c]/20">
              <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <GraduationCap className="w-10 h-10 text-[#0f969c]" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#1a1a2e] mb-2">
                    Instituto de Infectologia Emílio Ribas
                  </h3>
                  <p className="text-gray-600">
                    Centro de referência nacional em doenças infecciosas, localizado em São Paulo.
                    O Instituto Emílio Ribas é reconhecido pela excelência no atendimento, pesquisa
                    e formação de especialistas em infectologia, sendo um dos principais centros
                    de tratamento de HIV/AIDS e outras doenças infecciosas do Brasil.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section gradient-dark text-white">
        <div className="container-app text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Pronto para cuidar da sua saúde?
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Agende sua consulta online e tenha acesso a um atendimento especializado
            em prevenção de ISTs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#1a1a2e] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors"
            >
              Agendar consulta
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
