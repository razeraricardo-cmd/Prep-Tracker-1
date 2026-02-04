'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Logo from '@/components/icons/Logo';
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Video,
  CreditCard,
  CheckCircle,
  Shield,
  Lock,
  Mail,
  Phone,
  User,
  AlertCircle
} from 'lucide-react';

type Step = 'dados' | 'horario' | 'pagamento' | 'confirmacao';

export default function AgendarPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('dados');
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    data: '',
    horario: '',
    pagamento: 'pix'
  });

  const steps = [
    { key: 'dados', label: 'Seus dados', number: 1 },
    { key: 'horario', label: 'Data e hora', number: 2 },
    { key: 'pagamento', label: 'Pagamento', number: 3 },
    { key: 'confirmacao', label: 'Confirmação', number: 4 },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  // Generate available dates (next 30 weekdays)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let count = 0;
    let daysChecked = 0;

    while (count < 30 && daysChecked < 60) {
      const date = new Date(today);
      date.setDate(today.getDate() + daysChecked + 1);
      daysChecked++;

      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push(date.toISOString().split('T')[0]);
        count++;
      }
    }
    return dates;
  };

  const availableDates = getAvailableDates();

  const availableTimes = [
    '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async () => {
    setIsLoading(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCurrentStep('confirmacao');
    setIsLoading(false);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 'dados':
        return formData.nome && formData.email && formData.telefone;
      case 'horario':
        return formData.data && formData.horario;
      case 'pagamento':
        return true;
      default:
        return false;
    }
  };

  const formatDate = (dateStr: string) => {
    if (!dateStr) return '';
    const date = new Date(dateStr + 'T12:00:00');
    return date.toLocaleDateString('pt-BR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long'
    });
  };

  return (
    <div className="min-h-screen bg-[#fafafa]">
      {/* Header */}
      <header className="bg-white border-b border-gray-100">
        <div className="container-app">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <Logo size="sm" />
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Lock size={14} />
              Ambiente seguro
            </div>
          </div>
        </div>
      </header>

      <main className="container-app py-8 md:py-12">
        <div className="max-w-2xl mx-auto">
          {/* Back link */}
          {currentStep !== 'confirmacao' && (
            <Link
              href={currentStepIndex === 0 ? '/' : '#'}
              onClick={(e) => {
                if (currentStepIndex > 0) {
                  e.preventDefault();
                  setCurrentStep(steps[currentStepIndex - 1].key as Step);
                }
              }}
              className="inline-flex items-center gap-2 text-gray-500 hover:text-gray-700 mb-8"
            >
              <ArrowLeft size={18} />
              Voltar
            </Link>
          )}

          {/* Progress */}
          {currentStep !== 'confirmacao' && (
            <div className="mb-10">
              <div className="flex items-center justify-between">
                {steps.slice(0, 3).map((step, index) => (
                  <div key={step.key} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm transition-colors ${
                        index < currentStepIndex
                          ? 'bg-[#0f969c] text-white'
                          : index === currentStepIndex
                          ? 'bg-[#e94560] text-white'
                          : 'bg-gray-200 text-gray-500'
                      }`}
                    >
                      {index < currentStepIndex ? <CheckCircle size={18} /> : step.number}
                    </div>
                    {index < 2 && (
                      <div
                        className={`w-20 sm:w-32 h-1 mx-2 rounded ${
                          index < currentStepIndex ? 'bg-[#0f969c]' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-2">
                {steps.slice(0, 3).map((step) => (
                  <span key={step.key} className="text-xs text-gray-500 w-24 text-center">
                    {step.label}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Step 1: Dados pessoais */}
          {currentStep === 'dados' && (
            <div className="card p-6 md:p-8 animate-fade-in">
              <h1 className="text-2xl font-bold text-[#1a1a2e] mb-2">Seus dados</h1>
              <p className="text-gray-500 mb-8">
                Precisamos de algumas informações para agendar sua consulta.
              </p>

              <div className="space-y-5">
                <div>
                  <label className="input-label">Nome completo</label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      placeholder="Seu nome"
                    />
                  </div>
                </div>

                <div>
                  <label className="input-label">E-mail</label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    Enviaremos a confirmação e o link da consulta para este e-mail.
                  </p>
                </div>

                <div>
                  <label className="input-label">WhatsApp</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      className="input-field pl-12"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>
              </div>

              <button
                onClick={() => setCurrentStep('horario')}
                disabled={!canProceed()}
                className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* Step 2: Data e hora */}
          {currentStep === 'horario' && (
            <div className="card p-6 md:p-8 animate-fade-in">
              <h1 className="text-2xl font-bold text-[#1a1a2e] mb-2">Escolha a data e horário</h1>
              <p className="text-gray-500 mb-8">
                Selecione o melhor momento para sua consulta.
              </p>

              <div className="space-y-6">
                <div>
                  <label className="input-label">Data da consulta</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <select
                      name="data"
                      value={formData.data}
                      onChange={handleInputChange}
                      className="input-field pl-12 appearance-none cursor-pointer"
                    >
                      <option value="">Selecione uma data</option>
                      {availableDates.map((date) => (
                        <option key={date} value={date}>
                          {formatDate(date)}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {formData.data && (
                  <div>
                    <label className="input-label">Horário disponível</label>
                    <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData({ ...formData, horario: time })}
                          className={`py-3 px-3 rounded-xl text-sm font-medium transition-all ${
                            formData.horario === time
                              ? 'bg-[#0f969c] text-white shadow-lg shadow-[#0f969c]/20'
                              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button
                onClick={() => setCurrentStep('pagamento')}
                disabled={!canProceed()}
                className="btn-primary w-full mt-8 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight size={18} />
              </button>
            </div>
          )}

          {/* Step 3: Pagamento */}
          {currentStep === 'pagamento' && (
            <div className="card p-6 md:p-8 animate-fade-in">
              <h1 className="text-2xl font-bold text-[#1a1a2e] mb-2">Pagamento</h1>
              <p className="text-gray-500 mb-8">
                Escolha a forma de pagamento e finalize seu agendamento.
              </p>

              {/* Resumo */}
              <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <h3 className="font-semibold text-[#1a1a2e] mb-4">Resumo da consulta</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Paciente</span>
                    <span className="text-[#1a1a2e] font-medium">{formData.nome}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Data</span>
                    <span className="text-[#1a1a2e] font-medium">{formatDate(formData.data)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Horário</span>
                    <span className="text-[#1a1a2e] font-medium">{formData.horario}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Modalidade</span>
                    <span className="text-[#1a1a2e] font-medium flex items-center gap-1">
                      <Video size={14} /> Videochamada
                    </span>
                  </div>
                  <div className="border-t border-gray-200 pt-3 flex justify-between items-center">
                    <span className="font-semibold text-[#1a1a2e]">Total</span>
                    <span className="text-2xl font-bold text-[#0f969c]">R$ 145</span>
                  </div>
                </div>
              </div>

              {/* Métodos de pagamento */}
              <div className="space-y-3 mb-6">
                <label className="input-label">Forma de pagamento</label>

                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.pagamento === 'pix'
                      ? 'border-[#0f969c] bg-[#0f969c]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="pagamento"
                    value="pix"
                    checked={formData.pagamento === 'pix'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#0f969c]"
                  />
                  <div className="flex-1">
                    <span className="font-semibold text-[#1a1a2e]">PIX</span>
                    <span className="text-sm text-gray-500 ml-2">Aprovação instantânea</span>
                  </div>
                  <span className="badge badge-teal text-xs">Recomendado</span>
                </label>

                <label
                  className={`flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all ${
                    formData.pagamento === 'cartao'
                      ? 'border-[#0f969c] bg-[#0f969c]/5'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="pagamento"
                    value="cartao"
                    checked={formData.pagamento === 'cartao'}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-[#0f969c]"
                  />
                  <CreditCard size={20} className="text-gray-500" />
                  <div className="flex-1">
                    <span className="font-semibold text-[#1a1a2e]">Cartão de crédito</span>
                    <span className="text-sm text-gray-500 ml-2">Parcele em até 3x</span>
                  </div>
                </label>
              </div>

              {/* Card form (shown when credit card is selected) */}
              {formData.pagamento === 'cartao' && (
                <div className="space-y-4 mb-6 animate-fade-in">
                  <input
                    type="text"
                    placeholder="Número do cartão"
                    className="input-field"
                  />
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="MM/AA"
                      className="input-field"
                    />
                    <input
                      type="text"
                      placeholder="CVV"
                      className="input-field"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Nome impresso no cartão"
                    className="input-field"
                  />
                </div>
              )}

              {/* Security badges */}
              <div className="flex items-center justify-center gap-6 py-4 mb-6 border-y border-gray-100">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Lock size={16} className="text-[#0f969c]" />
                  Pagamento seguro
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Shield size={16} className="text-[#0f969c]" />
                  Dados protegidos
                </div>
              </div>

              <button
                onClick={handlePayment}
                disabled={isLoading}
                className="btn-primary w-full"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    Pagar R$ 145 e confirmar
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>
          )}

          {/* Step 4: Confirmação */}
          {currentStep === 'confirmacao' && (
            <div className="text-center animate-fade-in">
              <div className="w-20 h-20 bg-[#0f969c] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-3xl font-bold text-[#1a1a2e] mb-4">
                Consulta agendada!
              </h1>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Enviamos a confirmação e o link para a videochamada para <strong>{formData.email}</strong>.
              </p>

              <div className="card p-6 text-left mb-8">
                <h3 className="font-semibold text-[#1a1a2e] mb-4">Detalhes da sua consulta</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-[#0f969c]" />
                    <span className="text-gray-700">{formatDate(formData.data)}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-[#0f969c]" />
                    <span className="text-gray-700">{formData.horario}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-[#0f969c]" />
                    <span className="text-gray-700">Videochamada (link enviado por e-mail)</span>
                  </div>
                </div>
              </div>

              <div className="bg-[#0f969c]/10 rounded-2xl p-6 mb-8">
                <h4 className="font-semibold text-[#1a1a2e] mb-3">Próximos passos</h4>
                <ol className="text-left text-sm text-gray-600 space-y-2">
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0f969c]">1.</span>
                    Verifique seu e-mail com a confirmação
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0f969c]">2.</span>
                    Preencha o questionário de saúde (enviado por e-mail)
                  </li>
                  <li className="flex gap-2">
                    <span className="font-bold text-[#0f969c]">3.</span>
                    No dia, acesse o link da videochamada 5 minutos antes
                  </li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="btn-secondary">
                  Voltar ao início
                </Link>
                <a
                  href={`https://wa.me/5511999999999?text=Olá! Acabei de agendar uma consulta para ${formatDate(formData.data)} às ${formData.horario}`}
                  target="_blank"
                  className="btn-primary"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
