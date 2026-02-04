# PrEP Saúde - Aplicativo de Prevenção de ISTs

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/razeraricardo-cmd/Prep-Tracker-1)

Aplicativo de telemedicina para prevenção de Infecções Sexualmente Transmissíveis (ISTs) e acompanhamento de PrEP (Profilaxia Pré-Exposição ao HIV), desenvolvido para o **Dr. Ricardo José Razera** (CRM SP 243.898), médico infectologista pelo Instituto de Infectologia Emílio Ribas.

## Deploy Rápido (1 clique)

**Clique no botão abaixo para publicar seu aplicativo na internet:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/razeraricardo-cmd/Prep-Tracker-1)

> Após o deploy, seu app estará disponível em um endereço como: `https://prep-saude-xxx.vercel.app`

## Funcionalidades

### Para Pacientes
- **Cadastro e Login**: Sistema completo de autenticação
- **Dashboard Personalizado**: Visão geral do status de prevenção
- **Questionário de Saúde**: Baseado nos formulários oficiais do Ministério da Saúde para PrEP
- **Agendamento de Consultas**: Primeira consulta (R$ 400) e retornos (R$ 250)
- **Pagamento Online**: Integração com sistemas de pagamento
- **Carteira de Vacinação**: Acompanhamento de vacinas relacionadas a ISTs (HPV, Hepatites)
- **Resultados de Exames**: Visualização e download de resultados
- **Conteúdo Educativo**: Artigos sobre PrEP, ISTs, prevenção combinada
- **Notificações**: Lembretes de medicação, consultas e exames

### Para o Médico (Admin)
- **Dashboard Administrativo**: Visão geral de pacientes e consultas
- **Gestão de Pacientes**: Lista completa com status de PrEP
- **Formulários PrEP**: Exportação de dados para fichas do governo
- **Análise de Questionários**: Avaliação de novos pacientes
- **Histórico de Consultas**: Acompanhamento completo

## Tecnologias

- **Framework**: Next.js 14 (App Router)
- **Linguagem**: TypeScript
- **Estilização**: Tailwind CSS
- **Ícones**: Lucide React
- **PWA**: Suporte para instalação como aplicativo

## Estrutura do Projeto

```
src/
├── app/
│   ├── page.tsx              # Landing page
│   ├── login/                # Página de login
│   ├── cadastro/             # Fluxo de cadastro
│   ├── sobre/                # Sobre o médico
│   ├── dashboard/            # Área do paciente
│   │   ├── page.tsx          # Dashboard principal
│   │   ├── prevencao/        # Status de prevenção
│   │   ├── consultas/        # Agendamento e histórico
│   │   ├── vacinas/          # Carteira de vacinação
│   │   ├── exames/           # Resultados de exames
│   │   ├── questionario/     # Questionário de saúde
│   │   ├── educacao/         # Conteúdo educativo
│   │   └── perfil/           # Perfil do usuário
│   └── admin/                # Painel administrativo
├── components/
│   ├── icons/                # Componentes de ícones/logo
│   └── layout/               # Header, Footer, Navigation
├── types/                    # Tipos TypeScript
└── styles/                   # Estilos globais
```

## Começando

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start
```

### Acessando o Aplicativo

- **Área do Paciente**: http://localhost:3000/login
- **Painel Admin**: http://localhost:3000/admin (login: admin@prepsaude.com.br)

## Valores das Consultas

| Tipo | Valor |
|------|-------|
| Primeira Consulta | R$ 400 |
| Retorno | R$ 250 |

## Sobre o PrEP no Brasil

A PrEP (Profilaxia Pré-Exposição) é disponibilizada gratuitamente pelo SUS. Este aplicativo oferece:
- Acompanhamento médico especializado
- Praticidade no atendimento 100% online
- Solicitação de exames via convênio
- Orientação personalizada
- Preenchimento das fichas obrigatórias do governo

## Contato

**Dr. Ricardo José Razera**
- CRM SP: 243.898
- Especialidade: Infectologia
- Formação: Instituto de Infectologia Emílio Ribas

---

Desenvolvido com foco em prevenção de ISTs e saúde sexual.
