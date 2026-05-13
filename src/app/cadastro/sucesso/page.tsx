import Link from 'next/link';
import { CheckCircle, Mail, ArrowRight, Calendar } from 'lucide-react';

export default function CadastroSucessoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full">
        <div className="card p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fade-in">
            <CheckCircle className="w-10 h-10 text-green-600" />
          </div>

          <h1 className="text-2xl font-bold text-slate-900 mb-4">
            Conta criada com sucesso!
          </h1>

          <p className="text-slate-600 mb-8">
            Bem-vindo ao PrEP Saúde! Sua conta foi criada e você já pode começar
            a usar o aplicativo.
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-4 p-4 bg-primary-50 rounded-xl text-left">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <h3 className="font-semibold text-primary-900">Confirme seu e-mail</h3>
                <p className="text-sm text-primary-700">
                  Enviamos um e-mail de confirmação para você.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-accent-50 rounded-xl text-left">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Calendar className="w-5 h-5 text-accent-600" />
              </div>
              <div>
                <h3 className="font-semibold text-accent-900">Próximo passo</h3>
                <p className="text-sm text-accent-700">
                  Complete o questionário de saúde para agendar sua consulta.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <Link
              href="/dashboard"
              className="btn-primary w-full flex items-center justify-center gap-2"
            >
              Ir para o Dashboard
              <ArrowRight size={20} />
            </Link>

            <Link
              href="/dashboard/questionario"
              className="btn-secondary w-full flex items-center justify-center gap-2"
            >
              Preencher Questionário de Saúde
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
