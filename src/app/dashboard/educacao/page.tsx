'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Shield,
  Syringe,
  Heart,
  AlertTriangle,
  ArrowRight,
  Search,
  Play,
  FileText,
  CheckCircle
} from 'lucide-react';

interface EducationalContent {
  id: string;
  title: string;
  category: string;
  description: string;
  icon: React.ElementType;
  color: string;
  readTime: string;
  isNew?: boolean;
}

export default function EducacaoPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('todos');

  const categories = [
    { key: 'todos', label: 'Todos' },
    { key: 'prep', label: 'PrEP' },
    { key: 'ist', label: 'ISTs' },
    { key: 'vacinas', label: 'Vacinas' },
    { key: 'prevencao', label: 'Prevenção' },
  ];

  const contents: EducationalContent[] = [
    {
      id: 'prep-guia',
      title: 'Guia Completo da PrEP',
      category: 'prep',
      description: 'Tudo o que você precisa saber sobre a Profilaxia Pré-Exposição ao HIV: como funciona, quem pode usar, efeitos colaterais e mais.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      readTime: '10 min',
      isNew: true,
    },
    {
      id: 'prep-diaria-demanda',
      title: 'PrEP Diária vs. Sob Demanda',
      category: 'prep',
      description: 'Entenda as diferenças entre as duas formas de uso da PrEP e qual é mais indicada para o seu perfil.',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
      readTime: '7 min',
    },
    {
      id: 'sifilis',
      title: 'Sífilis: Prevenção e Tratamento',
      category: 'ist',
      description: 'Conheça os sintomas, formas de transmissão, diagnóstico e tratamento da sífilis, uma das ISTs mais comuns.',
      icon: AlertTriangle,
      color: 'from-red-500 to-rose-600',
      readTime: '8 min',
    },
    {
      id: 'gonorreia-clamidia',
      title: 'Gonorreia e Clamídia',
      category: 'ist',
      description: 'Infecções bacterianas comuns que muitas vezes são assintomáticas. Saiba como se proteger e tratar.',
      icon: AlertTriangle,
      color: 'from-orange-500 to-amber-600',
      readTime: '6 min',
    },
    {
      id: 'hepatites',
      title: 'Hepatites Virais A, B e C',
      category: 'ist',
      description: 'Diferenças entre os tipos de hepatite, formas de transmissão sexual e importância da vacinação.',
      icon: Heart,
      color: 'from-yellow-500 to-amber-600',
      readTime: '9 min',
    },
    {
      id: 'hpv',
      title: 'HPV e Prevenção de Cânceres',
      category: 'vacinas',
      description: 'Papilomavírus Humano: riscos, vacina, e como ela previne verrugas genitais e cânceres.',
      icon: Syringe,
      color: 'from-violet-500 to-purple-600',
      readTime: '8 min',
      isNew: true,
    },
    {
      id: 'calendario-vacinal',
      title: 'Calendário Vacinal para Adultos',
      category: 'vacinas',
      description: 'Quais vacinas são importantes na vida adulta e como manter sua carteira de vacinação em dia.',
      icon: Syringe,
      color: 'from-blue-500 to-cyan-600',
      readTime: '5 min',
    },
    {
      id: 'prevencao-combinada',
      title: 'Prevenção Combinada',
      category: 'prevencao',
      description: 'Estratégia que combina diferentes métodos de prevenção para uma proteção mais completa contra HIV e ISTs.',
      icon: Shield,
      color: 'from-pink-500 to-rose-600',
      readTime: '6 min',
    },
    {
      id: 'preservativo',
      title: 'Uso Correto do Preservativo',
      category: 'prevencao',
      description: 'Dicas para uso correto do preservativo masculino e feminino, aumentando sua eficácia de proteção.',
      icon: Heart,
      color: 'from-teal-500 to-cyan-600',
      readTime: '4 min',
    },
    {
      id: 'testagem-regular',
      title: 'Importância da Testagem Regular',
      category: 'prevencao',
      description: 'Por que fazer exames regulares mesmo sem sintomas? Entenda a janela imunológica e frequência ideal de testagem.',
      icon: FileText,
      color: 'from-indigo-500 to-blue-600',
      readTime: '5 min',
    },
  ];

  const filteredContents = contents.filter(content => {
    const matchesSearch = content.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      content.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'todos' || content.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const quickFacts = [
    {
      icon: Shield,
      title: 'PrEP é 99% eficaz',
      description: 'Quando tomada diariamente conforme prescrição',
    },
    {
      icon: Syringe,
      title: 'Vacina HPV até 45 anos',
      description: 'Indicada para homens e mulheres para prevenção de cânceres',
    },
    {
      icon: CheckCircle,
      title: 'I = I',
      description: 'Indetectável = Intransmissível - pessoa em tratamento não transmite HIV',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-slate-900">Conteúdo Educativo</h1>
        <p className="text-slate-600">Aprenda sobre prevenção de ISTs e cuidados com sua saúde</p>
      </div>

      {/* Quick Facts */}
      <div className="grid md:grid-cols-3 gap-4">
        {quickFacts.map((fact, index) => (
          <div key={index} className="card p-4 bg-gradient-to-br from-primary-50 to-accent-50">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <fact.icon className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{fact.title}</h3>
                <p className="text-sm text-slate-600 mt-1">{fact.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Buscar conteúdo..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input-field pl-12"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors ${
                activeCategory === cat.key
                  ? 'bg-primary-500 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredContents.map((content) => {
          const Icon = content.icon;
          return (
            <Link
              key={content.id}
              href={`/dashboard/educacao/${content.id}`}
              className="card card-hover p-4 group"
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${content.color} flex items-center justify-center`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                {content.isNew && (
                  <span className="px-2 py-0.5 bg-green-100 text-green-700 text-xs font-medium rounded-full">
                    Novo
                  </span>
                )}
              </div>

              <h3 className="font-semibold text-slate-900 mb-2 group-hover:text-primary-600 transition-colors">
                {content.title}
              </h3>

              <p className="text-sm text-slate-500 mb-4 line-clamp-2">
                {content.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-400">
                  {content.readTime} de leitura
                </span>
                <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-primary-500 group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          );
        })}
      </div>

      {filteredContents.length === 0 && (
        <div className="text-center py-12">
          <BookOpen className="w-12 h-12 text-slate-300 mx-auto mb-4" />
          <h3 className="font-semibold text-slate-900 mb-2">Nenhum conteúdo encontrado</h3>
          <p className="text-slate-500">Tente buscar por outro termo ou selecione outra categoria.</p>
        </div>
      )}

      {/* Video Section */}
      <div className="card p-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          <div className="flex-1">
            <h3 className="font-semibold text-white text-lg">Vídeos Educativos</h3>
            <p className="text-slate-300 text-sm mt-1">
              Assista vídeos explicativos sobre PrEP, ISTs e prevenção combinada.
            </p>
          </div>
          <button className="btn-primary text-sm py-2 px-4 flex items-center gap-2">
            Ver vídeos
            <ArrowRight size={16} />
          </button>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card p-6">
        <h2 className="font-semibold text-slate-900 text-lg mb-4">Perguntas Frequentes</h2>
        <div className="space-y-4">
          {[
            {
              q: 'A PrEP protege contra outras ISTs além do HIV?',
              a: 'Não. A PrEP é específica para prevenção do HIV. Para proteção contra outras ISTs, use preservativo e faça testagem regular.'
            },
            {
              q: 'Preciso tomar PrEP no mesmo horário todos os dias?',
              a: 'É recomendado manter uma rotina, mas não precisa ser exatamente o mesmo horário. O importante é não pular doses.'
            },
            {
              q: 'Quais exames preciso fazer para usar PrEP?',
              a: 'Antes de iniciar: teste de HIV, creatinina, hepatites B e C, e rastreio de ISTs. Depois, a cada 3 meses: teste de HIV e creatinina.'
            },
          ].map((faq, index) => (
            <details key={index} className="group">
              <summary className="flex items-center justify-between p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                <span className="font-medium text-slate-900">{faq.q}</span>
                <ArrowRight className="w-5 h-5 text-slate-400 transform group-open:rotate-90 transition-transform" />
              </summary>
              <div className="px-4 py-3 text-slate-600 text-sm">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
        <Link
          href="/dashboard/educacao/faq"
          className="inline-flex items-center gap-1 text-primary-600 hover:underline text-sm mt-4"
        >
          Ver todas as perguntas
          <ArrowRight size={14} />
        </Link>
      </div>
    </div>
  );
}
