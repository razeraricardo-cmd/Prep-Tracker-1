// User types
export interface User {
  id: string;
  email: string;
  name: string;
  cpf: string;
  phone: string;
  birthDate: string;
  gender: 'masculino' | 'feminino' | 'outro' | 'prefiro_nao_dizer';
  identidadeGenero?: string;
  orientacaoSexual?: string;
  address: Address;
  createdAt: Date;
  updatedAt: Date;
  isApproved: boolean;
  profileComplete: boolean;
}

export interface Address {
  cep: string;
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
}

// PrEP related types
export interface PrEPRegistration {
  id: string;
  userId: string;
  // Dados pessoais
  nomeSocial?: string;
  cartaoSUS?: string;
  raca: 'branca' | 'preta' | 'parda' | 'amarela' | 'indigena' | 'nao_informado';
  escolaridade: string;
  ocupacao?: string;

  // Dados clínicos
  pesoKg: number;
  alturaM: number;

  // Comportamento de risco
  parceiroHIV: boolean;
  multiplasParcerias: boolean;
  historiaIST: boolean;
  usoPreservativoInconsistente: boolean;
  usoPEP: boolean;
  chemsex: boolean;
  trabalhoSexual: boolean;

  // Histórico
  testeHIVAnterior: boolean;
  dataUltimoTesteHIV?: string;
  resultadoUltimoTesteHIV?: 'negativo' | 'positivo' | 'indeterminado';

  // Exames
  creatinina?: number;
  dataCreatinina?: string;
  hbsag?: 'reagente' | 'nao_reagente' | 'nao_realizado';
  antiHCV?: 'reagente' | 'nao_reagente' | 'nao_realizado';
  vdrl?: 'reagente' | 'nao_reagente' | 'nao_realizado';

  createdAt: Date;
  updatedAt: Date;
}

export interface PrEPConsultation {
  id: string;
  userId: string;
  registrationId: string;
  consultationDate: Date;
  consultationType: 'inicial' | 'retorno';

  // Avaliação clínica
  sintomasIST: boolean;
  descricaoSintomas?: string;
  adesaoMedicamento?: 'boa' | 'regular' | 'ruim';
  efeitosColaterais?: string[];

  // Exames solicitados
  examsSolicited: string[];

  // Conduta
  manterPrEP: boolean;
  motivoSuspensao?: string;

  // Próximo retorno
  dataProximoRetorno?: Date;

  // Dispensação
  quantidadeMedicamento?: number; // em dias

  notes?: string;
  createdAt: Date;
}

// Vaccination types
export interface Vaccine {
  id: string;
  name: string;
  description: string;
  doses: number;
  intervalDays?: number[];
  targetAudience: string;
  isISTRelated: boolean;
  icon: string;
}

export interface VaccinationRecord {
  id: string;
  userId: string;
  vaccineId: string;
  vaccineName: string;
  doseNumber: number;
  dateAdministered: Date;
  location?: string;
  batch?: string;
  nextDoseDate?: Date;
  notes?: string;
}

// Appointment types
export interface Appointment {
  id: string;
  userId: string;
  type: 'primeira_consulta' | 'retorno';
  status: 'pendente' | 'confirmado' | 'realizado' | 'cancelado';
  scheduledDate: Date;
  scheduledTime: string;
  price: number;
  paymentStatus: 'pendente' | 'pago' | 'reembolsado';
  paymentId?: string;
  notes?: string;
  createdAt: Date;
}

// Educational content types
export interface EducationalContent {
  id: string;
  title: string;
  category: 'prep' | 'ist' | 'vacinas' | 'prevencao' | 'dicas';
  summary: string;
  content: string;
  imageUrl?: string;
  icon: string;
  tags: string[];
  createdAt: Date;
}

// Notification types
export interface Notification {
  id: string;
  userId: string;
  type: 'consulta' | 'exame' | 'vacina' | 'medicamento' | 'geral';
  title: string;
  message: string;
  read: boolean;
  actionUrl?: string;
  createdAt: Date;
}

// Form step types for questionnaire
export interface FormStep {
  id: string;
  title: string;
  description: string;
  fields: FormField[];
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'select' | 'radio' | 'checkbox' | 'number' | 'textarea';
  required: boolean;
  options?: { value: string; label: string }[];
  placeholder?: string;
  helpText?: string;
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}
