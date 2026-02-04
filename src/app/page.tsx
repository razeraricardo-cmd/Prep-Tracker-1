'use client';

import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { siteConfig, getWhatsAppLink } from '@/config/site';
import {
  Shield,
  Syringe,
  FileText,
  Video,
  Clock,
  CheckCircle,
  ArrowRight,
  Play,
  Pill,
  TestTube,
  Calendar,
  Lock,
  Smartphone,
  HeartPulse,
  Truck,
  MessageCircle,
  Star,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />

      {/* Hero Section */}
      <section className="pt-28 pb-20 md:pt-36 md:pb-28 gradient-hero overflow-hidden">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0f969c]/10 rounded-full">
                <Shield className="w-4 h-4 text-[#0f969c]" />
                <span className="text-[#0f969c] font-semibold text-sm">
                  Prevenção de ISTs com especialista
                </span>
              </div>

              <h1 className="heading-xl">
                Cuide da sua saúde sexual{' '}
                <span className="text-gradient">sem sair de casa</span>
              </h1>

              <p className="text-body max-w-lg">
                Consultas online com infectologista especializado em PrEP e prevenção
                de ISTs. Atendimento discreto, prático e sem julgamentos.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/agendar" className="btn-primary">
                  Agendar consulta por R$145
                  <ArrowRight size={18} />
                </Link>
                <Link href="/#como-funciona" className="btn-secondary">
                  <Play size={18} className="text-[#e94560]" />
                  Como funciona
                </Link>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-[#0f969c] to-[#6fcfcf] border-2 border-white flex items-center justify-center"
                      >
                        <span className="text-white text-xs font-bold">
                          {String.fromCharCode(64 + i)}
                        </span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">
                    <strong className="text-[#1a1a2e]">500+</strong> pacientes atendidos
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} size={16} className="fill-[#f59e0b] text-[#f59e0b]" />
                  ))}
                  <span className="text-sm text-gray-600 ml-1">4.9/5</span>
                </div>
              </div>
            </div>

            {/* Hero Image/Card */}
            <div className="relative hidden lg:block animate-fade-in">
              <div className="relative z-10">
                {/* Main Card */}
                <div className="card-shadow p-8 space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden bg-gradient-to-br from-[#0f969c] to-[#0d8287] flex items-center justify-center">
                      <span className="text-3xl font-bold text-white">RR</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-[#1a1a2e]">Dr. Ricardo Razera</h3>
                      <p className="text-gray-500">Médico Infectologista</p>
                      <p className="text-sm text-[#0f969c] font-medium">CRM-SP 243.898</p>
                    </div>
                  </div>

                  <div className="space-y-3 py-4 border-y border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#0f969c]/10 flex items-center justify-center">
                        <HeartPulse className="w-5 h-5 text-[#0f969c]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1a1a2e]">Instituto Emílio Ribas</p>
                        <p className="text-sm text-gray-500">Referência em infectologia no Brasil</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#e94560]/10 flex items-center justify-center">
                        <Shield className="w-5 h-5 text-[#e94560]" />
                      </div>
                      <div>
                        <p className="font-medium text-[#1a1a2e]">Especialista em PrEP</p>
                        <p className="text-sm text-gray-500">Prevenção personalizada de HIV e ISTs</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-[#0f969c] to-[#0d8287] rounded-2xl p-5 text-white">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white/80 text-sm">Consulta online</p>
                        <p className="text-3xl font-bold">R$ 145</p>
                      </div>
                      <Link
                        href="/agendar"
                        className="bg-white text-[#0f969c] font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Agendar
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl p-4 animate-float">
                  <div className="flex items-center gap-2">
                    <Video className="w-5 h-5 text-[#0f969c]" />
                    <span className="text-sm font-medium">100% Online</span>
                  </div>
                </div>

                <div className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl p-4">
                  <div className="flex items-center gap-2">
                    <Lock className="w-5 h-5 text-[#e94560]" />
                    <span className="text-sm font-medium">Sigilo total</span>
                  </div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-[#0f969c]/20 to-[#e94560]/10 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge badge-accent mb-4">Para quem é a PrEPara</span>
            <h2 className="heading-lg mb-4">
              Prevenção para quem quer se cuidar sem complicação
            </h2>
            <p className="text-body">
              Se você se identifica com alguma dessas situações, a PrEPara pode te ajudar.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Quer iniciar a PrEP',
                description: 'Tenho interesse na profilaxia pré-exposição ao HIV mas não sei por onde começar.',
              },
              {
                icon: TestTube,
                title: 'Precisa de exames de IST',
                description: 'Quero fazer um check-up completo de infecções sexualmente transmissíveis.',
              },
              {
                icon: Syringe,
                title: 'Atualizar vacinas',
                description: 'Preciso verificar e completar vacinas como HPV, Hepatite A e B.',
              },
              {
                icon: Clock,
                title: 'Falta tempo',
                description: 'Não consigo ir presencialmente ao médico, preciso de praticidade.',
              },
              {
                icon: Lock,
                title: 'Busca discrição',
                description: 'Quero cuidar da minha saúde sexual com privacidade e sem julgamentos.',
              },
              {
                icon: MessageCircle,
                title: 'Tem dúvidas',
                description: 'Quero tirar dúvidas sobre prevenção com um especialista.',
              },
            ].map((item, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="section bg-[#fafafa]">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="badge badge-teal mb-4">Simples e rápido</span>
            <h2 className="heading-lg mb-4">
              Como funciona
            </h2>
            <p className="text-body">
              Em poucos passos você começa seu acompanhamento com especialista.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Agende online',
                description: 'Escolha o melhor horário e faça o pagamento de forma segura.',
                icon: Calendar,
              },
              {
                step: '02',
                title: 'Preencha o questionário',
                description: 'Responda algumas perguntas sobre sua saúde antes da consulta.',
                icon: FileText,
              },
              {
                step: '03',
                title: 'Consulta por vídeo',
                description: 'Converse com o Dr. Ricardo por videochamada, do seu celular ou computador.',
                icon: Video,
              },
              {
                step: '04',
                title: 'Receba suas orientações',
                description: 'Pedidos de exames, receitas e orientações enviadas digitalmente.',
                icon: Truck,
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="relative inline-block mb-6">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0f969c] to-[#0d8287] flex items-center justify-center mx-auto">
                      <item.icon className="w-8 h-8 text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#e94560] text-white text-sm font-bold flex items-center justify-center">
                      {item.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-[#1a1a2e] mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-10 left-[60%] w-[80%]">
                    <div className="border-t-2 border-dashed border-gray-200" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About PrEP Section */}
      <section id="sobre-prep" className="section bg-white">
        <div className="container-app">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="badge badge-teal mb-4">Entenda a prevenção</span>
              <h2 className="heading-lg mb-6">
                O que é a PrEP?
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  A <strong className="text-[#1a1a2e]">PrEP (Profilaxia Pré-Exposição)</strong> é uma
                  estratégia de prevenção que consiste em tomar medicamentos antes de uma possível
                  exposição ao HIV, para evitar a infecção.
                </p>
                <p>
                  São dois medicamentos combinados (<strong>tenofovir + entricitabina</strong>) que
                  bloqueiam os caminhos que o vírus HIV usa para infectar o organismo. Quando tomada
                  corretamente, a PrEP tem <strong className="text-[#0f969c]">eficácia de até 99%</strong> na
                  prevenção do HIV.
                </p>
                <p>
                  No Brasil, o medicamento é <strong>distribuído gratuitamente pelo SUS</strong>.
                  O papel do médico é avaliar a indicação, solicitar exames necessários,
                  fazer o acompanhamento e preencher a documentação para você retirar na farmácia do SUS.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="bg-[#0f969c]/5 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-[#0f969c]">99%</p>
                  <p className="text-sm text-gray-600">de eficácia contra HIV</p>
                </div>
                <div className="bg-[#e94560]/5 rounded-2xl p-5">
                  <p className="text-3xl font-bold text-[#e94560]">Grátis</p>
                  <p className="text-sm text-gray-600">medicamento pelo SUS</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-[#1a1a2e] mb-4">Quem pode usar a PrEP?</h3>
              {[
                'Pessoas com parcerias sexuais vivendo com HIV',
                'Quem tem múltiplas parcerias sexuais',
                'Histórico de ISTs nos últimos 12 meses',
                'Uso inconsistente de preservativo',
                'Pessoas que praticam chemsex',
                'Profissionais do sexo',
                'Quem já usou PEP mais de uma vez',
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl">
                  <CheckCircle className="w-5 h-5 text-[#0f969c] flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Prevention Section */}
      <section id="prevencao" className="section gradient-dark text-white">
        <div className="container-app">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full text-white/90 text-sm font-semibold mb-4">
              <Shield className="w-4 h-4" />
              Prevenção completa
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Não é só PrEP. É prevenção combinada.
            </h2>
            <p className="text-lg text-white/70">
              Além do HIV, cuidamos da prevenção de todas as ISTs com uma abordagem completa.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Pill,
                title: 'PrEP',
                description: 'Profilaxia pré-exposição ao HIV com acompanhamento médico.',
              },
              {
                icon: TestTube,
                title: 'Exames de ISTs',
                description: 'HIV, sífilis, hepatites, clamídia, gonorreia e outros.',
              },
              {
                icon: Syringe,
                title: 'Vacinas',
                description: 'HPV, Hepatite A, Hepatite B e orientação sobre o calendário.',
              },
              {
                icon: FileText,
                title: 'Orientações',
                description: 'Uso correto de preservativo, lubrificantes e redução de danos.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 hover:bg-white/15 transition-colors">
                <item.icon className="w-10 h-10 text-[#6fcfcf] mb-4" />
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/70">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/agendar" className="inline-flex items-center gap-2 bg-white text-[#1a1a2e] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Quero me prevenir
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-app">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="badge badge-accent mb-4">Valor único</span>
              <h2 className="heading-lg mb-4">Consulta acessível e transparente</h2>
              <p className="text-body">
                Sem surpresas, sem taxas escondidas. Um único valor para cuidar da sua saúde.
              </p>
            </div>

            <div className="card-shadow p-8 md:p-12 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-[#0f969c]/10 to-[#e94560]/5 rounded-full blur-3xl -z-0" />

              <div className="relative z-10">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <p className="text-gray-500 mb-2">Consulta com infectologista</p>
                    <div className="flex items-baseline gap-2 mb-6">
                      <span className="text-5xl md:text-6xl font-bold text-[#1a1a2e]">R$ 145</span>
                      <span className="text-gray-400">/consulta</span>
                    </div>

                    <ul className="space-y-3">
                      {[
                        'Consulta por videochamada',
                        'Avaliação completa de saúde',
                        'Pedidos de exames',
                        'Prescrição digital',
                        'Preenchimento de fichas para PrEP no SUS',
                        'Orientações de prevenção personalizadas',
                        'Receitas enviadas por e-mail',
                      ].map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-[#0f969c] flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="bg-gradient-to-br from-[#0f969c] to-[#0d8287] rounded-3xl p-8 text-white text-center">
                    <Smartphone className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="text-2xl font-bold mb-2">100% Online</h3>
                    <p className="text-white/80 mb-6">
                      Atendimento do conforto da sua casa, com total privacidade.
                    </p>
                    <Link
                      href="/agendar"
                      className="block w-full bg-white text-[#0f969c] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Agendar agora
                    </Link>
                    <p className="text-white/60 text-sm mt-4">
                      Pagamento seguro via PIX ou cartão
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 text-sm mt-6">
              * Os exames são realizados em laboratórios parceiros ou pelo seu convênio.
              O medicamento da PrEP é gratuito pelo SUS.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="section bg-[#fafafa]">
        <div className="container-app">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="heading-lg mb-4">Perguntas frequentes</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'A PrEP tem efeitos colaterais?',
                  answer: 'Os efeitos colaterais são geralmente leves e temporários, como náusea, dor de cabeça ou diarreia nas primeiras semanas. A maioria das pessoas tolera muito bem o medicamento.',
                },
                {
                  question: 'Preciso tomar a PrEP para sempre?',
                  answer: 'Não necessariamente. A PrEP é indicada enquanto houver situações de exposição ao HIV. Se sua situação de vida mudar, é possível interromper com orientação médica.',
                },
                {
                  question: 'A PrEP protege contra outras ISTs?',
                  answer: 'A PrEP protege apenas contra o HIV. Por isso trabalhamos com prevenção combinada: exames regulares, vacinas e orientações sobre uso de preservativo.',
                },
                {
                  question: 'Como recebo minhas receitas e pedidos de exames?',
                  answer: 'Tudo é enviado digitalmente por e-mail logo após a consulta. Receitas com assinatura digital são aceitas em todo o Brasil.',
                },
              ].map((item, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-2xl border border-gray-100 overflow-hidden"
                >
                  <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                    <span className="font-semibold text-[#1a1a2e] pr-4">{item.question}</span>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-open:rotate-90 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600">
                    {item.answer}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-gradient-to-r from-[#e94560] to-[#f472b6]">
        <div className="container-app text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Comece a se cuidar hoje
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Sua saúde sexual merece atenção especializada. Agende sua consulta e tenha
            acompanhamento com um infectologista de verdade.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agendar"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#e94560] font-semibold py-4 px-8 rounded-full hover:bg-gray-100 transition-colors shadow-lg"
            >
              Agendar consulta
              <ArrowRight size={18} />
            </Link>
            <Link
              href={getWhatsAppLink()}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold py-4 px-8 rounded-full border-2 border-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
