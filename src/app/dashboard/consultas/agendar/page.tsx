'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  Calendar,
  Clock,
  Video,
  CreditCard,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Shield,
  FileText,
  User
} from 'lucide-react';

type AppointmentType = 'primeira_consulta' | 'retorno';
type Step = 'tipo' | 'data' | 'pagamento' | 'confirmacao';

export default function AgendarConsultaPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('tipo');
  const [appointmentType, setAppointmentType] = useState<AppointmentType | null>(null);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  // Available times
  const availableTimes = [
    '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
    '14:00', '14:30', '15:00', '15:30', '16:00', '16:30', '17:00'
  ];

  // Generate next 30 days
  const availableDates = Array.from({ length: 30 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    // Skip weekends
    if (date.getDay() === 0 || date.getDay() === 6) return null;
    return date.toISOString().split('T')[0];
  }).filter(Boolean) as string[];

  const price = appointmentType === 'primeira_consulta' ? 400 : 250;

  const steps: { key: Step; label: string }[] = [
    { key: 'tipo', label: 'Tipo' },
    { key: 'data', label: 'Data/Hora' },
    { key: 'pagamento', label: 'Pagamento' },
    { key: 'confirmacao', label: 'Confirmação' },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  const handlePayment = async () => {
    setIsProcessing(true);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    setCurrentStep('confirmacao');
    setIsProcessing(false);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        href="/dashboard/consultas"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft size={20} />
        Voltar para consultas
      </Link>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((step, index) => (
            <div key={step.key} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                  index < currentStepIndex
                    ? 'bg-green-500 text-white'
                    : index === currentStepIndex
                    ? 'bg-primary-500 text-white'
                    : 'bg-slate-200 text-slate-500'
                }`}
              >
                {index < currentStepIndex ? <CheckCircle size={20} /> : index + 1}
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`w-16 sm:w-24 h-1 mx-2 rounded ${
                    index < currentStepIndex ? 'bg-green-500' : 'bg-slate-200'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
        <div className="flex justify-between mt-2">
          {steps.map((step) => (
            <span key={step.key} className="text-xs text-slate-500 text-center" style={{ width: '60px' }}>
              {step.label}
            </span>
          ))}
        </div>
      </div>

      <div className="card p-6">
        {/* Step 1: Tipo de consulta */}
        {currentStep === 'tipo' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Escolha o tipo de consulta</h1>
              <p className="text-slate-600 mt-2">Selecione o tipo de atendimento que você precisa</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <button
                onClick={() => setAppointmentType('primeira_consulta')}
                className={`p-6 rounded-xl border-2 text-left transition-all ${
                  appointmentType === 'primeira_consulta'
                    ? 'border-primary-500 bg-primary-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <User className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Primeira Consulta</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Avaliação completa para novos pacientes
                </p>
                <p className="text-2xl font-bold text-primary-600">R$ 400</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Avaliação completa do histórico
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Solicitação de exames
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Orientação sobre PrEP
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Prescrição digital
                  </li>
                </ul>
              </button>

              <button
                onClick={() => setAppointmentType('retorno')}
                className={`p-6 rounded-xl border-2 text-left transition-all ${
                  appointmentType === 'retorno'
                    ? 'border-accent-500 bg-accent-50'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-6 h-6 text-accent-600" />
                </div>
                <h3 className="font-semibold text-slate-900 mb-1">Retorno</h3>
                <p className="text-sm text-slate-500 mb-3">
                  Acompanhamento para pacientes ativos
                </p>
                <p className="text-2xl font-bold text-accent-600">R$ 250</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Análise de exames
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Renovação de prescrição
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Atualização da ficha PrEP
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-green-500" />
                    Orientações de prevenção
                  </li>
                </ul>
              </button>
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={() => setCurrentStep('data')}
                disabled={!appointmentType}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Data e hora */}
        {currentStep === 'data' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Escolha a data e horário</h1>
              <p className="text-slate-600 mt-2">Selecione o melhor momento para sua consulta</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Data da consulta
              </label>
              <select
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="input-field"
              >
                <option value="">Selecione uma data</option>
                {availableDates.map((date) => (
                  <option key={date} value={date}>
                    {new Date(date + 'T12:00:00').toLocaleDateString('pt-BR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long'
                    })}
                  </option>
                ))}
              </select>
            </div>

            {selectedDate && (
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Horário disponível
                </label>
                <div className="grid grid-cols-4 sm:grid-cols-6 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors ${
                        selectedTime === time
                          ? 'bg-primary-500 text-white'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setCurrentStep('tipo')}
                className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Voltar
              </button>
              <button
                onClick={() => setCurrentStep('pagamento')}
                disabled={!selectedDate || !selectedTime}
                className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuar
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        )}

        {/* Step 3: Pagamento */}
        {currentStep === 'pagamento' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Resumo e Pagamento</h1>
              <p className="text-slate-600 mt-2">Confira os dados e realize o pagamento</p>
            </div>

            {/* Summary */}
            <div className="bg-slate-50 rounded-xl p-4 space-y-3">
              <div className="flex justify-between">
                <span className="text-slate-600">Tipo de consulta</span>
                <span className="font-medium text-slate-900">
                  {appointmentType === 'primeira_consulta' ? 'Primeira Consulta' : 'Retorno'}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Data</span>
                <span className="font-medium text-slate-900">
                  {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', {
                    weekday: 'long',
                    day: 'numeric',
                    month: 'long'
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Horário</span>
                <span className="font-medium text-slate-900">{selectedTime}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Modalidade</span>
                <span className="font-medium text-slate-900 flex items-center gap-1">
                  <Video size={16} />
                  Videochamada
                </span>
              </div>
              <div className="border-t border-slate-200 pt-3 flex justify-between">
                <span className="font-semibold text-slate-900">Total</span>
                <span className="font-bold text-2xl text-primary-600">R$ {price}</span>
              </div>
            </div>

            {/* Payment methods */}
            <div>
              <h3 className="font-medium text-slate-900 mb-3">Forma de pagamento</h3>
              <div className="space-y-2">
                <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                  <input
                    type="radio"
                    name="payment"
                    defaultChecked
                    className="w-4 h-4 text-primary-600"
                  />
                  <CreditCard size={20} className="text-slate-600" />
                  <span className="font-medium text-slate-900">Cartão de crédito/débito</span>
                </label>
                <label className="flex items-center gap-3 p-4 border border-slate-200 rounded-xl cursor-pointer hover:bg-slate-50">
                  <input
                    type="radio"
                    name="payment"
                    className="w-4 h-4 text-primary-600"
                  />
                  <span className="font-bold text-slate-600 text-sm">PIX</span>
                  <span className="font-medium text-slate-900">PIX (aprovação imediata)</span>
                </label>
              </div>
            </div>

            {/* Card form placeholder */}
            <div className="space-y-4">
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
                placeholder="Nome no cartão"
                className="input-field"
              />
            </div>

            <div className="flex justify-between pt-4">
              <button
                onClick={() => setCurrentStep('data')}
                className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2"
              >
                <ArrowLeft size={20} />
                Voltar
              </button>
              <button
                onClick={handlePayment}
                disabled={isProcessing}
                className="btn-primary flex items-center gap-2"
              >
                {isProcessing ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Processando...
                  </>
                ) : (
                  <>
                    Pagar R$ {price}
                    <ArrowRight size={20} />
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* Step 4: Confirmação */}
        {currentStep === 'confirmacao' && (
          <div className="text-center space-y-6 animate-fade-in py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10 text-green-600" />
            </div>

            <div>
              <h1 className="text-2xl font-bold text-slate-900">Consulta Agendada!</h1>
              <p className="text-slate-600 mt-2">
                Sua consulta foi agendada com sucesso. Você receberá uma confirmação por e-mail.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 text-left max-w-md mx-auto">
              <h3 className="font-semibold text-slate-900 mb-4">Detalhes da consulta</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-600">
                  <Calendar size={18} />
                  <span>
                    {new Date(selectedDate + 'T12:00:00').toLocaleDateString('pt-BR', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'long'
                    })}
                  </span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Clock size={18} />
                  <span>{selectedTime}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600">
                  <Video size={18} />
                  <span>Videochamada (link será enviado por e-mail)</span>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-4 max-w-md mx-auto text-left">
              <h4 className="font-medium text-primary-900 mb-2">Próximos passos:</h4>
              <ul className="text-sm text-primary-700 space-y-1">
                <li>1. Você receberá um e-mail com a confirmação</li>
                <li>2. Complete o questionário de saúde (se ainda não fez)</li>
                <li>3. No dia da consulta, acesse o link enviado</li>
              </ul>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
              <Link
                href="/dashboard"
                className="btn-secondary flex items-center justify-center gap-2"
              >
                Ir para o Dashboard
              </Link>
              <Link
                href="/dashboard/questionario"
                className="btn-primary flex items-center justify-center gap-2"
              >
                Preencher Questionário
                <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
