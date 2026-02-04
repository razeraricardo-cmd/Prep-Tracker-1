'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import {
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  MapPin,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Eye,
  EyeOff,
  Shield
} from 'lucide-react';

interface FormData {
  // Step 1 - Dados básicos
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;

  // Step 2 - Dados pessoais
  cpf: string;
  birthDate: string;
  gender: string;
  identidadeGenero: string;
  orientacaoSexual: string;

  // Step 3 - Endereço
  cep: string;
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  city: string;
  state: string;

  // Step 4 - Termos
  acceptTerms: boolean;
  acceptPrivacy: boolean;
  acceptMarketing: boolean;
}

export default function CadastroPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    cpf: '',
    birthDate: '',
    gender: '',
    identidadeGenero: '',
    orientacaoSexual: '',
    cep: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    acceptTerms: false,
    acceptPrivacy: false,
    acceptMarketing: false,
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const formatCPF = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
    }
    return value;
  };

  const formatPhone = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 11) {
      return numbers
        .replace(/(\d{2})(\d)/, '($1) $2')
        .replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value;
  };

  const formatCEP = (value: string) => {
    const numbers = value.replace(/\D/g, '');
    if (numbers.length <= 8) {
      return numbers.replace(/(\d{5})(\d)/, '$1-$2');
    }
    return value;
  };

  const handleFormattedInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    let formattedValue = value;

    if (name === 'cpf') {
      formattedValue = formatCPF(value);
    } else if (name === 'phone') {
      formattedValue = formatPhone(value);
    } else if (name === 'cep') {
      formattedValue = formatCEP(value);
    }

    setFormData(prev => ({ ...prev, [name]: formattedValue }));
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Store in localStorage for demo
    localStorage.setItem('user', JSON.stringify({
      ...formData,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      isApproved: false,
      profileComplete: true
    }));

    router.push('/cadastro/sucesso');
  };

  const genderOptions = [
    { value: 'masculino', label: 'Masculino' },
    { value: 'feminino', label: 'Feminino' },
    { value: 'outro', label: 'Outro' },
    { value: 'prefiro_nao_dizer', label: 'Prefiro não dizer' },
  ];

  const identidadeOptions = [
    { value: 'cisgênero', label: 'Cisgênero' },
    { value: 'transgênero', label: 'Transgênero' },
    { value: 'não-binário', label: 'Não-binário' },
    { value: 'outro', label: 'Outro' },
    { value: 'prefiro_nao_dizer', label: 'Prefiro não dizer' },
  ];

  const orientacaoOptions = [
    { value: 'heterossexual', label: 'Heterossexual' },
    { value: 'homossexual', label: 'Homossexual' },
    { value: 'bissexual', label: 'Bissexual' },
    { value: 'pansexual', label: 'Pansexual' },
    { value: 'outro', label: 'Outro' },
    { value: 'prefiro_nao_dizer', label: 'Prefiro não dizer' },
  ];

  const stateOptions = [
    'AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS',
    'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC',
    'SP', 'SE', 'TO'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <Header />

      <main className="pt-24 pb-16 px-4">
        <div className="max-w-2xl mx-auto">
          {/* Progress bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                      step < currentStep
                        ? 'bg-green-500 text-white'
                        : step === currentStep
                        ? 'bg-primary-500 text-white'
                        : 'bg-slate-200 text-slate-500'
                    }`}
                  >
                    {step < currentStep ? <CheckCircle size={20} /> : step}
                  </div>
                  {step < totalSteps && (
                    <div
                      className={`w-full h-1 mx-2 rounded ${
                        step < currentStep ? 'bg-green-500' : 'bg-slate-200'
                      }`}
                      style={{ width: '60px' }}
                    />
                  )}
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600">
              Passo {currentStep} de {totalSteps}
            </p>
          </div>

          <div className="card p-8">
            <form onSubmit={handleSubmit}>
              {/* Step 1: Dados básicos */}
              {currentStep === 1 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <User className="w-8 h-8 text-primary-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Crie sua conta</h1>
                    <p className="text-slate-600 mt-2">Vamos começar com seus dados de acesso</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Nome completo *
                    </label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="input-field pl-12"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      E-mail *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="input-field pl-12"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Telefone *
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleFormattedInput}
                        className="input-field pl-12"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Senha *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        className="input-field pl-12 pr-12"
                        placeholder="Mínimo 8 caracteres"
                        minLength={8}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                      >
                        {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Confirmar senha *
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type={showPassword ? 'text' : 'password'}
                        name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        className="input-field pl-12"
                        placeholder="Repita a senha"
                        required
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Dados pessoais */}
              {currentStep === 2 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Shield className="w-8 h-8 text-accent-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Dados Pessoais</h1>
                    <p className="text-slate-600 mt-2">Informações confidenciais para seu atendimento</p>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      CPF *
                    </label>
                    <input
                      type="text"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleFormattedInput}
                      className="input-field"
                      placeholder="000.000.000-00"
                      maxLength={14}
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Data de nascimento *
                    </label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                      <input
                        type="date"
                        name="birthDate"
                        value={formData.birthDate}
                        onChange={handleInputChange}
                        className="input-field pl-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Sexo biológico *
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                      className="input-field"
                      required
                    >
                      <option value="">Selecione</option>
                      {genderOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Identidade de gênero
                    </label>
                    <select
                      name="identidadeGenero"
                      value={formData.identidadeGenero}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Selecione (opcional)</option>
                      {identidadeOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Orientação sexual
                    </label>
                    <select
                      name="orientacaoSexual"
                      value={formData.orientacaoSexual}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Selecione (opcional)</option>
                      {orientacaoOptions.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-500 mt-2">
                      Essa informação é importante para adequar o atendimento às suas necessidades.
                      Tratamos todos os dados com total confidencialidade.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 3: Endereço */}
              {currentStep === 3 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <MapPin className="w-8 h-8 text-emerald-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Endereço</h1>
                    <p className="text-slate-600 mt-2">Para envio de documentos quando necessário</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2 sm:col-span-1">
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        CEP *
                      </label>
                      <input
                        type="text"
                        name="cep"
                        value={formData.cep}
                        onChange={handleFormattedInput}
                        className="input-field"
                        placeholder="00000-000"
                        maxLength={9}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Rua *
                    </label>
                    <input
                      type="text"
                      name="street"
                      value={formData.street}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Nome da rua"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Número *
                      </label>
                      <input
                        type="text"
                        name="number"
                        value={formData.number}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="123"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Complemento
                      </label>
                      <input
                        type="text"
                        name="complement"
                        value={formData.complement}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Apto, bloco..."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bairro *
                    </label>
                    <input
                      type="text"
                      name="neighborhood"
                      value={formData.neighborhood}
                      onChange={handleInputChange}
                      className="input-field"
                      placeholder="Seu bairro"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Cidade *
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="input-field"
                        placeholder="Sua cidade"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">
                        Estado *
                      </label>
                      <select
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                        className="input-field"
                        required
                      >
                        <option value="">UF</option>
                        {stateOptions.map(state => (
                          <option key={state} value={state}>{state}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Termos */}
              {currentStep === 4 && (
                <div className="space-y-6 animate-fade-in">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600" />
                    </div>
                    <h1 className="text-2xl font-bold text-slate-900">Quase lá!</h1>
                    <p className="text-slate-600 mt-2">Revise e aceite os termos para finalizar</p>
                  </div>

                  <div className="space-y-4">
                    <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                      <input
                        type="checkbox"
                        name="acceptTerms"
                        checked={formData.acceptTerms}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500"
                        required
                      />
                      <div>
                        <span className="text-slate-700 font-medium">
                          Aceito os Termos de Uso *
                        </span>
                        <p className="text-sm text-slate-500 mt-1">
                          Li e concordo com os{' '}
                          <Link href="/termos" className="text-primary-600 hover:underline">
                            Termos de Uso
                          </Link>{' '}
                          do serviço.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                      <input
                        type="checkbox"
                        name="acceptPrivacy"
                        checked={formData.acceptPrivacy}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500"
                        required
                      />
                      <div>
                        <span className="text-slate-700 font-medium">
                          Aceito a Política de Privacidade *
                        </span>
                        <p className="text-sm text-slate-500 mt-1">
                          Li e concordo com a{' '}
                          <Link href="/privacidade" className="text-primary-600 hover:underline">
                            Política de Privacidade
                          </Link>{' '}
                          e tratamento de dados de saúde.
                        </p>
                      </div>
                    </label>

                    <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100 transition-colors">
                      <input
                        type="checkbox"
                        name="acceptMarketing"
                        checked={formData.acceptMarketing}
                        onChange={handleInputChange}
                        className="mt-1 w-5 h-5 text-primary-600 rounded border-slate-300 focus:ring-primary-500"
                      />
                      <div>
                        <span className="text-slate-700 font-medium">
                          Receber dicas de saúde
                        </span>
                        <p className="text-sm text-slate-500 mt-1">
                          Desejo receber e-mails com dicas de prevenção e lembretes de consultas.
                        </p>
                      </div>
                    </label>
                  </div>

                  <div className="p-4 bg-primary-50 rounded-xl">
                    <h3 className="font-semibold text-primary-900 mb-2">
                      Próximos passos:
                    </h3>
                    <ul className="text-sm text-primary-700 space-y-1">
                      <li>1. Você receberá um e-mail de confirmação</li>
                      <li>2. Complete o questionário de saúde</li>
                      <li>3. Agende sua primeira consulta</li>
                      <li>4. Realize o pagamento e aguarde a confirmação</li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Voltar
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                  >
                    <ArrowLeft size={20} />
                    Cancelar
                  </Link>
                )}

                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary flex items-center gap-2"
                  >
                    Próximo
                    <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isLoading || !formData.acceptTerms || !formData.acceptPrivacy}
                    className="btn-primary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Criando conta...
                      </>
                    ) : (
                      <>
                        Criar Conta
                        <ArrowRight size={20} />
                      </>
                    )}
                  </button>
                )}
              </div>
            </form>
          </div>

          <p className="text-center text-slate-600 mt-6">
            Já tem uma conta?{' '}
            <Link href="/login" className="text-primary-600 hover:underline font-medium">
              Faça login
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
