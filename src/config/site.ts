/**
 * CONFIGURAÇÕES DO SITE - EDITE AQUI
 *
 * Este arquivo contém todas as informações que você precisa personalizar.
 * Após editar, salve o arquivo e faça o deploy novamente no Vercel.
 */

export const siteConfig = {
  // ============================================
  // INFORMAÇÕES DO MÉDICO
  // ============================================
  doctor: {
    name: 'Dr. Ricardo Razera',
    fullName: 'Dr. Ricardo José Razera',
    crm: 'CRM-SP 243.898',
    specialty: 'Médico Infectologista',
    institution: 'Instituto de Infectologia Emílio Ribas',
  },

  // ============================================
  // CONTATO - ATUALIZE COM SEUS DADOS REAIS
  // ============================================
  contact: {
    // Número do WhatsApp (formato: código do país + DDD + número, sem espaços ou traços)
    // Exemplo: 5511999999999
    whatsapp: '5511999999999',

    // Número formatado para exibição
    whatsappDisplay: '(11) 99999-9999',

    // Email de contato
    email: 'contato@prepara.com.br',

    // Instagram (apenas o usuário, sem @)
    instagram: 'prepara.saude',
  },

  // ============================================
  // PREÇOS
  // ============================================
  pricing: {
    // Valor da consulta em reais
    consultation: 145,

    // Texto formatado
    consultationFormatted: 'R$ 145',
  },

  // ============================================
  // MARCA
  // ============================================
  brand: {
    name: 'PrEPara',
    tagline: 'Prevenção sem tabu',
    description: 'Consultas online com infectologista para PrEP e prevenção de ISTs',
  },

  // ============================================
  // REDES SOCIAIS
  // ============================================
  social: {
    instagram: 'https://instagram.com/prepara.saude',
    // Adicione outras redes se necessário:
    // facebook: 'https://facebook.com/...',
    // youtube: 'https://youtube.com/...',
  },

  // ============================================
  // CONFIGURAÇÕES DE PAGAMENTO (para integração futura)
  // ============================================
  payment: {
    // Chave PIX (pode ser email, telefone ou chave aleatória)
    pixKey: '',

    // Nome do beneficiário para PIX
    pixName: 'Ricardo José Razera',

    // Stripe ou MercadoPago (configurar quando tiver as chaves)
    stripePublicKey: '',
    mercadoPagoPublicKey: '',
  },
};

// Funções auxiliares
export function getWhatsAppLink(message?: string) {
  const baseUrl = `https://wa.me/${siteConfig.contact.whatsapp}`;
  if (message) {
    return `${baseUrl}?text=${encodeURIComponent(message)}`;
  }
  return baseUrl;
}

export function getInstagramLink() {
  return `https://instagram.com/${siteConfig.contact.instagram}`;
}

export function getEmailLink(subject?: string) {
  const baseUrl = `mailto:${siteConfig.contact.email}`;
  if (subject) {
    return `${baseUrl}?subject=${encodeURIComponent(subject)}`;
  }
  return baseUrl;
}
