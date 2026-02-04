'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  User,
  Heart,
  Activity,
  Shield,
  FileText,
  AlertCircle,
  Info
} from 'lucide-react';

type Step = 'dados_pessoais' | 'comportamento' | 'historico_saude' | 'ist_prevencao' | 'revisao';

interface FormData {
  // Dados pessoais complementares
  nomeSocial: string;
  cartaoSUS: string;
  raca: string;
  escolaridade: string;
  ocupacao: string;
  estadoCivil: string;
  pesoKg: string;
  alturaM: string;

  // Comportamento de risco
  parceiroHIV: boolean;
  parceiroHIVTratamento: boolean;
  multiplasParcerias: boolean;
  quantidadeParcerias: string;
  relacaoDesprotegida: boolean;
  frequenciaPreservativo: string;
  usoAlcoolDrogas: boolean;
  chemsex: boolean;
  trabalhoSexual: boolean;

  // Histórico de saúde
  testeHIVAnterior: boolean;
  dataUltimoTesteHIV: string;
  resultadoUltimoTesteHIV: string;
  usouPEP: boolean;
  vezesPEP: string;
  historicoIST: boolean;
  quaisIST: string[];
  doencaRenal: boolean;
  doencaHepatica: boolean;
  usaMedicamentos: boolean;
  quaisMedicamentos: string;
  alergias: string;

  // IST e Prevenção
  sintomasAtuais: boolean;
  descricaoSintomas: string;
  vacinasEmDia: boolean;
  vacinasRecebidas: string[];
  interessePrEP: boolean;
  motivoPrEP: string;
  conhecePrevencaoCombinada: boolean;
}

export default function QuestionarioPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState<Step>('dados_pessoais');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    nomeSocial: '',
    cartaoSUS: '',
    raca: '',
    escolaridade: '',
    ocupacao: '',
    estadoCivil: '',
    pesoKg: '',
    alturaM: '',

    parceiroHIV: false,
    parceiroHIVTratamento: false,
    multiplasParcerias: false,
    quantidadeParcerias: '',
    relacaoDesprotegida: false,
    frequenciaPreservativo: '',
    usoAlcoolDrogas: false,
    chemsex: false,
    trabalhoSexual: false,

    testeHIVAnterior: false,
    dataUltimoTesteHIV: '',
    resultadoUltimoTesteHIV: '',
    usouPEP: false,
    vezesPEP: '',
    historicoIST: false,
    quaisIST: [],
    doencaRenal: false,
    doencaHepatica: false,
    usaMedicamentos: false,
    quaisMedicamentos: '',
    alergias: '',

    sintomasAtuais: false,
    descricaoSintomas: '',
    vacinasEmDia: false,
    vacinasRecebidas: [],
    interessePrEP: false,
    motivoPrEP: '',
    conhecePrevencaoCombinada: false,
  });

  const steps: { key: Step; label: string; icon: React.ElementType }[] = [
    { key: 'dados_pessoais', label: 'Dados Pessoais', icon: User },
    { key: 'comportamento', label: 'Comportamento', icon: Heart },
    { key: 'historico_saude', label: 'Histórico', icon: Activity },
    { key: 'ist_prevencao', label: 'IST/Prevenção', icon: Shield },
    { key: 'revisao', label: 'Revisão', icon: FileText },
  ];

  const currentStepIndex = steps.findIndex(s => s.key === currentStep);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCheckboxArray = (name: keyof FormData, value: string) => {
    setFormData(prev => {
      const currentArray = prev[name] as string[];
      if (currentArray.includes(value)) {
        return { ...prev, [name]: currentArray.filter(v => v !== value) };
      } else {
        return { ...prev, [name]: [...currentArray, value] };
      }
    });
  };

  const nextStep = () => {
    const stepOrder: Step[] = ['dados_pessoais', 'comportamento', 'historico_saude', 'ist_prevencao', 'revisao'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex < stepOrder.length - 1) {
      setCurrentStep(stepOrder[currentIndex + 1]);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    const stepOrder: Step[] = ['dados_pessoais', 'comportamento', 'historico_saude', 'ist_prevencao', 'revisao'];
    const currentIndex = stepOrder.indexOf(currentStep);
    if (currentIndex > 0) {
      setCurrentStep(stepOrder[currentIndex - 1]);
      window.scrollTo(0, 0);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    localStorage.setItem('healthQuestionnaire', JSON.stringify(formData));
    router.push('/dashboard/questionario/sucesso');
  };

  const racaOptions = [
    { value: 'branca', label: 'Branca' },
    { value: 'preta', label: 'Preta' },
    { value: 'parda', label: 'Parda' },
    { value: 'amarela', label: 'Amarela' },
    { value: 'indigena', label: 'Indígena' },
    { value: 'nao_informado', label: 'Prefiro não informar' },
  ];

  const escolaridadeOptions = [
    { value: 'fundamental_incompleto', label: 'Fundamental Incompleto' },
    { value: 'fundamental_completo', label: 'Fundamental Completo' },
    { value: 'medio_incompleto', label: 'Médio Incompleto' },
    { value: 'medio_completo', label: 'Médio Completo' },
    { value: 'superior_incompleto', label: 'Superior Incompleto' },
    { value: 'superior_completo', label: 'Superior Completo' },
    { value: 'pos_graduacao', label: 'Pós-Graduação' },
  ];

  const istOptions = [
    'Sífilis',
    'Gonorreia',
    'Clamídia',
    'Herpes genital',
    'HPV / Condiloma',
    'Hepatite B',
    'Hepatite C',
    'Outra',
  ];

  const vacinasOptions = [
    'Hepatite B',
    'Hepatite A',
    'HPV',
    'COVID-19',
    'Influenza',
    'Meningocócica',
  ];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <Link
        href="/dashboard"
        className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 mb-6"
      >
        <ArrowLeft size={20} />
        Voltar ao dashboard
      </Link>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex items-center justify-between overflow-x-auto pb-2">
          {steps.map((step, index) => {
            const StepIcon = step.icon;
            return (
              <div key={step.key} className="flex items-center flex-shrink-0">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    index < currentStepIndex
                      ? 'bg-green-500 text-white'
                      : index === currentStepIndex
                      ? 'bg-primary-500 text-white'
                      : 'bg-slate-200 text-slate-500'
                  }`}
                >
                  {index < currentStepIndex ? <CheckCircle size={20} /> : <StepIcon size={20} />}
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`w-8 sm:w-12 h-1 mx-1 rounded ${
                      index < currentStepIndex ? 'bg-green-500' : 'bg-slate-200'
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
        <p className="text-center text-sm text-slate-600 mt-2">
          {steps[currentStepIndex].label} ({currentStepIndex + 1}/{steps.length})
        </p>
      </div>

      {/* Info Banner */}
      <div className="bg-primary-50 border border-primary-100 rounded-xl p-4 mb-6 flex items-start gap-3">
        <Info className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
        <div>
          <p className="text-sm text-primary-800">
            <strong>Suas informações são confidenciais.</strong> Este questionário é baseado nos
            formulários oficiais do Ministério da Saúde para acompanhamento de PrEP e prevenção de ISTs.
            Os dados serão utilizados apenas para seu atendimento médico.
          </p>
        </div>
      </div>

      <div className="card p-6">
        {/* Step 1: Dados Pessoais */}
        {currentStep === 'dados_pessoais' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Dados Pessoais Complementares</h1>
              <p className="text-slate-600 mt-2">Informações adicionais para seu cadastro</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Nome social (opcional)
                </label>
                <input
                  type="text"
                  name="nomeSocial"
                  value={formData.nomeSocial}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Como você prefere ser chamado(a)"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Cartão SUS (opcional)
                </label>
                <input
                  type="text"
                  name="cartaoSUS"
                  value={formData.cartaoSUS}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Número do Cartão SUS"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Necessário para retirada da PrEP no SUS
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Raça/Cor *
                </label>
                <select
                  name="raca"
                  value={formData.raca}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Selecione</option>
                  {racaOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Escolaridade *
                </label>
                <select
                  name="escolaridade"
                  value={formData.escolaridade}
                  onChange={handleInputChange}
                  className="input-field"
                  required
                >
                  <option value="">Selecione</option>
                  {escolaridadeOptions.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Ocupação
                </label>
                <input
                  type="text"
                  name="ocupacao"
                  value={formData.ocupacao}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Sua profissão"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Peso (kg) *
                </label>
                <input
                  type="number"
                  name="pesoKg"
                  value={formData.pesoKg}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Ex: 70"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Altura (m) *
                </label>
                <input
                  type="text"
                  name="alturaM"
                  value={formData.alturaM}
                  onChange={handleInputChange}
                  className="input-field"
                  placeholder="Ex: 1.75"
                  required
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Comportamento */}
        {currentStep === 'comportamento' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Avaliação de Comportamento</h1>
              <p className="text-slate-600 mt-2">Informações para avaliar seu perfil de prevenção</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="parceiroHIV"
                  checked={formData.parceiroHIV}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Tenho parceiro(a) vivendo com HIV
                  </span>
                  <p className="text-sm text-slate-500 mt-1">
                    Parcerias sorodiferentes são uma das principais indicações para PrEP
                  </p>
                </div>
              </label>

              {formData.parceiroHIV && (
                <div className="ml-8">
                  <label className="flex items-center gap-3 p-3 bg-primary-50 rounded-lg">
                    <input
                      type="checkbox"
                      name="parceiroHIVTratamento"
                      checked={formData.parceiroHIVTratamento}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-primary-600 rounded"
                    />
                    <span className="text-sm text-primary-800">
                      Meu parceiro(a) está em tratamento e com carga viral indetectável
                    </span>
                  </label>
                </div>
              )}

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="multiplasParcerias"
                  checked={formData.multiplasParcerias}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Tenho múltiplas parcerias sexuais
                  </span>
                </div>
              </label>

              {formData.multiplasParcerias && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quantas parcerias nos últimos 6 meses?
                  </label>
                  <select
                    name="quantidadeParcerias"
                    value={formData.quantidadeParcerias}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Selecione</option>
                    <option value="2-5">2 a 5</option>
                    <option value="6-10">6 a 10</option>
                    <option value="mais_10">Mais de 10</option>
                  </select>
                </div>
              )}

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="relacaoDesprotegida"
                  checked={formData.relacaoDesprotegida}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Tenho relações sexuais sem preservativo
                  </span>
                </div>
              </label>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Com que frequência usa preservativo?
                </label>
                <select
                  name="frequenciaPreservativo"
                  value={formData.frequenciaPreservativo}
                  onChange={handleInputChange}
                  className="input-field"
                >
                  <option value="">Selecione</option>
                  <option value="sempre">Sempre (100%)</option>
                  <option value="quase_sempre">Quase sempre (mais de 80%)</option>
                  <option value="as_vezes">Às vezes (50%)</option>
                  <option value="raramente">Raramente (menos de 20%)</option>
                  <option value="nunca">Nunca</option>
                </select>
              </div>

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="usoAlcoolDrogas"
                  checked={formData.usoAlcoolDrogas}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Uso de álcool ou drogas em contextos sexuais
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="chemsex"
                  checked={formData.chemsex}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Pratico chemsex (uso de drogas para melhorar experiência sexual)
                  </span>
                </div>
              </label>

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="trabalhoSexual"
                  checked={formData.trabalhoSexual}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Trabalho sexual
                  </span>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Step 3: Histórico de Saúde */}
        {currentStep === 'historico_saude' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Histórico de Saúde</h1>
              <p className="text-slate-600 mt-2">Informações sobre seu histórico médico</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="testeHIVAnterior"
                  checked={formData.testeHIVAnterior}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Já fiz teste de HIV anteriormente
                  </span>
                </div>
              </label>

              {formData.testeHIVAnterior && (
                <div className="ml-8 grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Data do último teste
                    </label>
                    <input
                      type="date"
                      name="dataUltimoTesteHIV"
                      value={formData.dataUltimoTesteHIV}
                      onChange={handleInputChange}
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Resultado
                    </label>
                    <select
                      name="resultadoUltimoTesteHIV"
                      value={formData.resultadoUltimoTesteHIV}
                      onChange={handleInputChange}
                      className="input-field"
                    >
                      <option value="">Selecione</option>
                      <option value="negativo">Negativo (não reagente)</option>
                      <option value="positivo">Positivo (reagente)</option>
                      <option value="indeterminado">Indeterminado</option>
                    </select>
                  </div>
                </div>
              )}

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="usouPEP"
                  checked={formData.usouPEP}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Já usei PEP (Profilaxia Pós-Exposição)
                  </span>
                </div>
              </label>

              {formData.usouPEP && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quantas vezes nos últimos 12 meses?
                  </label>
                  <select
                    name="vezesPEP"
                    value={formData.vezesPEP}
                    onChange={handleInputChange}
                    className="input-field"
                  >
                    <option value="">Selecione</option>
                    <option value="1">1 vez</option>
                    <option value="2">2 vezes</option>
                    <option value="3_mais">3 ou mais vezes</option>
                  </select>
                </div>
              )}

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="historicoIST"
                  checked={formData.historicoIST}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Já tive alguma IST (Infecção Sexualmente Transmissível)
                  </span>
                </div>
              </label>

              {formData.historicoIST && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quais ISTs? (selecione todas que se aplicam)
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    {istOptions.map((ist) => (
                      <label key={ist} className="flex items-center gap-2 p-2 bg-white rounded-lg">
                        <input
                          type="checkbox"
                          checked={formData.quaisIST.includes(ist)}
                          onChange={() => handleCheckboxArray('quaisIST', ist)}
                          className="w-4 h-4 text-primary-600 rounded"
                        />
                        <span className="text-sm text-slate-700">{ist}</span>
                      </label>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    name="doencaRenal"
                    checked={formData.doencaRenal}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary-600 rounded"
                  />
                  <span className="font-medium text-slate-900">
                    Tenho doença renal
                  </span>
                </label>

                <label className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                  <input
                    type="checkbox"
                    name="doencaHepatica"
                    checked={formData.doencaHepatica}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-primary-600 rounded"
                  />
                  <span className="font-medium text-slate-900">
                    Tenho doença hepática
                  </span>
                </label>
              </div>

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="usaMedicamentos"
                  checked={formData.usaMedicamentos}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Uso medicamentos regularmente
                  </span>
                </div>
              </label>

              {formData.usaMedicamentos && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Quais medicamentos?
                  </label>
                  <textarea
                    name="quaisMedicamentos"
                    value={formData.quaisMedicamentos}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={3}
                    placeholder="Liste os medicamentos que você usa"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Alergias conhecidas
                </label>
                <textarea
                  name="alergias"
                  value={formData.alergias}
                  onChange={handleInputChange}
                  className="input-field"
                  rows={2}
                  placeholder="Liste suas alergias ou escreva 'Nenhuma'"
                />
              </div>
            </div>
          </div>
        )}

        {/* Step 4: IST e Prevenção */}
        {currentStep === 'ist_prevencao' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">IST e Prevenção</h1>
              <p className="text-slate-600 mt-2">Avaliação atual e interesse em prevenção</p>
            </div>

            <div className="space-y-4">
              <label className="flex items-start gap-3 p-4 bg-amber-50 border border-amber-200 rounded-xl cursor-pointer hover:bg-amber-100">
                <input
                  type="checkbox"
                  name="sintomasAtuais"
                  checked={formData.sintomasAtuais}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-amber-600 rounded"
                />
                <div>
                  <span className="font-medium text-amber-900">
                    Estou com sintomas atualmente
                  </span>
                  <p className="text-sm text-amber-700 mt-1">
                    Ex: feridas, corrimento, coceira, dor ao urinar, etc.
                  </p>
                </div>
              </label>

              {formData.sintomasAtuais && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Descreva os sintomas
                  </label>
                  <textarea
                    name="descricaoSintomas"
                    value={formData.descricaoSintomas}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={3}
                    placeholder="Descreva seus sintomas, quando começaram, etc."
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Vacinas que você já tomou (selecione as que se aplicam)
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {vacinasOptions.map((vacina) => (
                    <label key={vacina} className="flex items-center gap-2 p-3 bg-slate-50 rounded-lg hover:bg-slate-100 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={formData.vacinasRecebidas.includes(vacina)}
                        onChange={() => handleCheckboxArray('vacinasRecebidas', vacina)}
                        className="w-4 h-4 text-primary-600 rounded"
                      />
                      <span className="text-sm text-slate-700">{vacina}</span>
                    </label>
                  ))}
                </div>
              </div>

              <label className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-xl cursor-pointer hover:bg-green-100">
                <input
                  type="checkbox"
                  name="interessePrEP"
                  checked={formData.interessePrEP}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-green-600 rounded"
                />
                <div>
                  <span className="font-medium text-green-900">
                    Tenho interesse em iniciar a PrEP
                  </span>
                  <p className="text-sm text-green-700 mt-1">
                    Profilaxia Pré-Exposição ao HIV - prevenção diária ou sob demanda
                  </p>
                </div>
              </label>

              {formData.interessePrEP && (
                <div className="ml-8">
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Por que você tem interesse na PrEP?
                  </label>
                  <textarea
                    name="motivoPrEP"
                    value={formData.motivoPrEP}
                    onChange={handleInputChange}
                    className="input-field"
                    rows={3}
                    placeholder="Conte um pouco sobre sua motivação"
                  />
                </div>
              )}

              <label className="flex items-start gap-3 p-4 bg-slate-50 rounded-xl cursor-pointer hover:bg-slate-100">
                <input
                  type="checkbox"
                  name="conhecePrevencaoCombinada"
                  checked={formData.conhecePrevencaoCombinada}
                  onChange={handleInputChange}
                  className="mt-1 w-5 h-5 text-primary-600 rounded"
                />
                <div>
                  <span className="font-medium text-slate-900">
                    Conheço o conceito de prevenção combinada
                  </span>
                  <p className="text-sm text-slate-500 mt-1">
                    Uso conjunto de diferentes métodos de prevenção (preservativo, PrEP, testagem regular, etc.)
                  </p>
                </div>
              </label>
            </div>
          </div>
        )}

        {/* Step 5: Revisão */}
        {currentStep === 'revisao' && (
          <div className="space-y-6 animate-fade-in">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-slate-900">Revisão do Questionário</h1>
              <p className="text-slate-600 mt-2">Confira suas respostas antes de enviar</p>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Dados Pessoais</h3>
                <div className="grid grid-cols-2 gap-2 text-sm">
                  <span className="text-slate-500">Peso:</span>
                  <span className="text-slate-900">{formData.pesoKg} kg</span>
                  <span className="text-slate-500">Altura:</span>
                  <span className="text-slate-900">{formData.alturaM} m</span>
                  <span className="text-slate-500">Cartão SUS:</span>
                  <span className="text-slate-900">{formData.cartaoSUS || 'Não informado'}</span>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Comportamento</h3>
                <div className="space-y-1 text-sm">
                  {formData.parceiroHIV && <p className="text-slate-700">• Parceiro(a) vivendo com HIV</p>}
                  {formData.multiplasParcerias && <p className="text-slate-700">• Múltiplas parcerias sexuais</p>}
                  {formData.relacaoDesprotegida && <p className="text-slate-700">• Relações sem preservativo</p>}
                  {formData.chemsex && <p className="text-slate-700">• Pratica chemsex</p>}
                  {!formData.parceiroHIV && !formData.multiplasParcerias && !formData.relacaoDesprotegida && (
                    <p className="text-slate-500">Nenhum comportamento de risco reportado</p>
                  )}
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Histórico de Saúde</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700">
                    • Teste HIV anterior: {formData.testeHIVAnterior ? 'Sim' : 'Não'}
                  </p>
                  <p className="text-slate-700">
                    • Uso de PEP: {formData.usouPEP ? 'Sim' : 'Não'}
                  </p>
                  <p className="text-slate-700">
                    • Histórico de IST: {formData.historicoIST ? 'Sim' : 'Não'}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-xl">
                <h3 className="font-semibold text-slate-900 mb-3">Prevenção</h3>
                <div className="space-y-1 text-sm">
                  <p className="text-slate-700">
                    • Interesse em PrEP: {formData.interessePrEP ? 'Sim' : 'Não'}
                  </p>
                  <p className="text-slate-700">
                    • Vacinas registradas: {formData.vacinasRecebidas.length > 0 ? formData.vacinasRecebidas.join(', ') : 'Nenhuma'}
                  </p>
                </div>
              </div>

              {formData.sintomasAtuais && (
                <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <AlertCircle className="w-5 h-5 text-amber-600" />
                    <h3 className="font-semibold text-amber-900">Sintomas Reportados</h3>
                  </div>
                  <p className="text-sm text-amber-800">{formData.descricaoSintomas}</p>
                </div>
              )}
            </div>

            <div className="p-4 bg-primary-50 border border-primary-100 rounded-xl">
              <p className="text-sm text-primary-800">
                Ao enviar este questionário, você confirma que as informações são verdadeiras
                e autoriza o uso dos dados para seu atendimento médico. Os dados são protegidos
                de acordo com a LGPD.
              </p>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
          {currentStepIndex > 0 ? (
            <button
              onClick={prevStep}
              className="text-slate-600 hover:text-slate-900 font-medium flex items-center gap-2"
            >
              <ArrowLeft size={20} />
              Voltar
            </button>
          ) : (
            <div />
          )}

          {currentStep !== 'revisao' ? (
            <button
              onClick={nextStep}
              className="btn-primary flex items-center gap-2"
            >
              Continuar
              <ArrowRight size={20} />
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="btn-primary flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Enviando...
                </>
              ) : (
                <>
                  Enviar Questionário
                  <CheckCircle size={20} />
                </>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
