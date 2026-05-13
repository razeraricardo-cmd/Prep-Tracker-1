import Link from 'next/link';
import { CheckCircle, ArrowRight } from 'lucide-react';

export default function QuestionarioSucessoPage() {
  return (
    <div className="max-w-2xl mx-auto text-center py-12">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
        <CheckCircle className="w-10 h-10 text-green-600" />
      </div>

      <h1 className="text-2xl font-bold text-slate-900 mb-4">
        Questionário Enviado com Sucesso!
      </h1>

      <p className="text-slate-600 mb-8 max-w-md mx-auto">
        Suas informações foram recebidas e serão analisadas pelo Dr. Ricardo antes
        da sua consulta. Isso permitirá um atendimento mais personalizado.
      </p>

      <div className="card p-6 mb-8 text-left">
        <h2 className="font-semibold text-slate-900 mb-4">Próximos passos:</h2>
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-primary-600">1</span>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Aguarde a análise</h3>
              <p className="text-sm text-slate-500">
                O Dr. Ricardo irá revisar suas informações antes da consulta.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-primary-600">2</span>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Agende sua consulta</h3>
              <p className="text-sm text-slate-500">
                Se ainda não agendou, escolha o melhor horário para sua consulta.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="font-bold text-primary-600">3</span>
            </div>
            <div>
              <h3 className="font-medium text-slate-900">Prepare-se para a consulta</h3>
              <p className="text-sm text-slate-500">
                Tenha em mãos resultados de exames recentes, se houver.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          href="/dashboard"
          className="btn-secondary flex items-center justify-center gap-2"
        >
          Ir para o Dashboard
        </Link>
        <Link
          href="/dashboard/consultas/agendar"
          className="btn-primary flex items-center justify-center gap-2"
        >
          Agendar Consulta
          <ArrowRight size={20} />
        </Link>
      </div>
    </div>
  );
}
