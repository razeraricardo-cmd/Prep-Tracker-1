'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import {
  ArrowLeft,
  Shield,
  Syringe,
  Heart,
  AlertTriangle,
  FileText,
  CheckCircle,
  BookOpen,
  Clock,
  Share2
} from 'lucide-react';

interface ContentData {
  id: string;
  title: string;
  category: string;
  readTime: string;
  content: string[];
  highlights?: string[];
  sources?: string[];
}

const educationalContents: Record<string, ContentData> = {
  'prep-guia': {
    id: 'prep-guia',
    title: 'Guia Completo da PrEP',
    category: 'prep',
    readTime: '10 min',
    content: [
      '## O que é a PrEP?',
      'A PrEP (Profilaxia Pré-Exposição ao HIV) é uma estratégia de prevenção que consiste em tomar medicamentos antes de uma possível exposição ao HIV para evitar a infecção pelo vírus.',
      'Os medicamentos utilizados são o **tenofovir** e a **entricitabina** (nome comercial: Truvada ou genéricos). Quando tomados de forma consistente, esses medicamentos impedem que o HIV se estabeleça no organismo, mesmo que a pessoa entre em contato com o vírus.',
      '## Eficácia da PrEP',
      'Estudos demonstram que a PrEP é **altamente eficaz**:',
      '- **99% de proteção** contra o HIV quando tomada diariamente',
      '- Eficácia de **96% ou mais** em relações sexuais receptivas (anal)',
      '- Proteção de **até 90%** em relações vaginais quando tomada consistentemente',
      'A chave para a eficácia é a **adesão ao tratamento**. Pular doses reduz significativamente a proteção.',
      '## Quem pode usar a PrEP?',
      'A PrEP é indicada para pessoas que têm maior exposição ao HIV, incluindo:',
      '- Pessoas com parceiros que vivem com HIV',
      '- Pessoas que têm múltiplas parcerias sexuais',
      '- Quem teve ISTs nos últimos 12 meses',
      '- Pessoas que não usam preservativo de forma consistente',
      '- Profissionais do sexo',
      '- Pessoas que praticam chemsex (uso de drogas durante o sexo)',
      '- Quem já usou PEP mais de uma vez',
      '## Exames necessários',
      'Antes de iniciar a PrEP:',
      '- Teste de HIV (deve ser negativo)',
      '- Creatinina (função renal)',
      '- Hepatites B e C',
      '- Rastreio de ISTs (sífilis, gonorreia, clamídia)',
      'A cada 3 meses durante o uso:',
      '- Teste de HIV',
      '- Creatinina',
      '- Rastreio de ISTs',
      '## Efeitos colaterais',
      'A maioria das pessoas tolera bem a PrEP. Os efeitos mais comuns são **temporários** e ocorrem nas primeiras semanas:',
      '- Náuseas leves',
      '- Dor de cabeça',
      '- Diarreia',
      '- Perda de apetite',
      'Geralmente esses sintomas desaparecem após 2-4 semanas. Efeitos a longo prazo são raros, mas o monitoramento da função renal é importante.',
      '## Como obter a PrEP no Brasil',
      'A PrEP é distribuída **gratuitamente pelo SUS** desde 2017. Para ter acesso:',
      '1. Faça uma consulta com médico infectologista ou clínico geral',
      '2. O médico avaliará sua indicação e solicitará exames',
      '3. Após confirmar que você pode usar, preencherá os formulários do Ministério da Saúde',
      '4. Você retirará o medicamento na farmácia de dispensação do SUS',
      '5. Retornos são feitos a cada 3 meses para acompanhamento',
    ],
    highlights: [
      '99% de eficácia contra HIV',
      'Medicamento gratuito pelo SUS',
      'Exames trimestrais são obrigatórios',
    ],
    sources: [
      'Ministério da Saúde - Protocolo Clínico e Diretrizes Terapêuticas para PrEP',
      'OMS - WHO Implementation Tool for Pre-Exposure Prophylaxis',
      'CDC - Preexposure Prophylaxis for the Prevention of HIV Infection',
    ],
  },
  'prep-diaria-demanda': {
    id: 'prep-diaria-demanda',
    title: 'PrEP Diária vs. Sob Demanda',
    category: 'prep',
    readTime: '7 min',
    content: [
      '## Duas formas de usar a PrEP',
      'Existem duas formas aprovadas de usar a PrEP: diária e sob demanda (também chamada de "PrEP eventual" ou "2-1-1").',
      '## PrEP Diária',
      'É a forma mais comum e recomendada:',
      '- Tomar **1 comprimido por dia**, todos os dias',
      '- No mesmo horário aproximadamente (pode variar algumas horas)',
      '- Proteção máxima após 7 dias de uso contínuo para sexo anal',
      '- Proteção máxima após 20 dias para sexo vaginal',
      '**Indicada para:**',
      '- Pessoas com vida sexual frequente',
      '- Quem tem dificuldade em planejar encontros',
      '- Pessoas com parceiros que vivem com HIV',
      '## PrEP Sob Demanda (2-1-1)',
      'Também chamada de PrEP eventual ou episódica:',
      '- **2 comprimidos** entre 2 e 24 horas ANTES da relação',
      '- **1 comprimido** 24 horas após a primeira dose',
      '- **1 comprimido** 48 horas após a primeira dose',
      '**Importante:**',
      '- Só é aprovada para **homens** que fazem sexo com homens',
      '- Não é recomendada para mulheres (proteção do tecido vaginal demora mais)',
      '- Requer planejamento das relações',
      '- Indicada para quem tem relações esporádicas',
      '## Qual escolher?',
      'A escolha depende do seu estilo de vida:',
      '| Critério | PrEP Diária | PrEP Sob Demanda |',
      '|----------|-------------|------------------|',
      '| Frequência sexual | Alta | Baixa/esporádica |',
      '| Planejamento | Não precisa | Precisa planejar |',
      '| Tipo de sexo | Anal e vaginal | Apenas anal |',
      '| Gênero | Todos | Apenas homens cis |',
      '| Facilidade | Rotina simples | Requer atenção |',
      'Converse com seu médico para definir a melhor opção para você.',
    ],
    highlights: [
      'PrEP diária: 1 comprimido por dia',
      'PrEP sob demanda: apenas para homens',
      'Ambas são igualmente eficazes se usadas corretamente',
    ],
    sources: [
      'Estudo IPERGAY - Eficácia da PrEP sob demanda',
      'Ministério da Saúde - Nota Informativa sobre PrEP sob demanda',
    ],
  },
  'sifilis': {
    id: 'sifilis',
    title: 'Sífilis: Prevenção e Tratamento',
    category: 'ist',
    readTime: '8 min',
    content: [
      '## O que é sífilis?',
      'A sífilis é uma infecção bacteriana causada pelo **Treponema pallidum**. É transmitida principalmente por relação sexual desprotegida (vaginal, anal ou oral) e da mãe para o bebê durante a gestação.',
      '## Estágios da sífilis',
      '### Sífilis primária',
      '- Aparece entre 10 e 90 dias após a infecção',
      '- Caracterizada por uma **ferida única e indolor** (cancro duro)',
      '- Geralmente no local de entrada da bactéria (genitais, boca, ânus)',
      '- Desaparece sozinha em 2-6 semanas, MAS a infecção continua',
      '### Sífilis secundária',
      '- Surge 2-8 semanas após o cancro desaparecer',
      '- **Manchas no corpo** (especialmente palmas das mãos e solas dos pés)',
      '- Pode haver febre, mal-estar, ínguas',
      '- Também desaparece sozinha, mas a bactéria permanece',
      '### Sífilis latente',
      '- Não há sintomas',
      '- Pode durar anos',
      '- A pessoa continua infectada e pode transmitir',
      '### Sífilis terciária',
      '- Ocorre em 15-30% dos casos não tratados',
      '- Pode causar problemas graves: coração, cérebro, ossos',
      '- Demora anos para se manifestar',
      '## Diagnóstico',
      'O diagnóstico é feito por exames de sangue:',
      '- **VDRL ou RPR** - exames de triagem',
      '- **FTA-Abs ou TPHA** - exames confirmatórios',
      'Importante: existe uma "janela imunológica" de até 90 dias.',
      '## Tratamento',
      'A sífilis tem cura! O tratamento é feito com **penicilina benzatina** (Benzetacil):',
      '- Sífilis recente: 1 dose única',
      '- Sífilis tardia ou desconhecida: 3 doses (1 por semana)',
      'É fundamental tratar as parcerias sexuais também.',
      '## Prevenção',
      '- Uso de preservativo em todas as relações',
      '- Testagem regular (a cada 3-6 meses se sexualmente ativo)',
      '- Tratamento precoce quando diagnosticado',
      '- Comunicação com parceiros sobre status sorológico',
    ],
    highlights: [
      'A sífilis tem cura com penicilina',
      'Sintomas desaparecem mas infecção continua',
      'Testagem regular é fundamental',
    ],
    sources: [
      'Ministério da Saúde - Protocolo Clínico e Diretrizes Terapêuticas para ISTs',
      'CDC - Sexually Transmitted Infections Treatment Guidelines',
    ],
  },
  'gonorreia-clamidia': {
    id: 'gonorreia-clamidia',
    title: 'Gonorreia e Clamídia',
    category: 'ist',
    readTime: '6 min',
    content: [
      '## O que são?',
      'São duas infecções bacterianas muito comuns, frequentemente encontradas juntas:',
      '- **Gonorreia**: causada pela bactéria *Neisseria gonorrhoeae*',
      '- **Clamídia**: causada pela bactéria *Chlamydia trachomatis*',
      'Ambas são transmitidas por relação sexual vaginal, anal ou oral sem proteção.',
      '## Sintomas',
      'O grande problema é que **muitos casos são assintomáticos**, especialmente em mulheres.',
      '### Quando há sintomas:',
      '**Em homens:**',
      '- Corrimento pelo pênis (amarelado na gonorreia, esbranquiçado na clamídia)',
      '- Ardência ao urinar',
      '- Dor ou inchaço nos testículos',
      '**Em mulheres:**',
      '- Corrimento vaginal',
      '- Sangramento entre menstruações',
      '- Dor ao urinar',
      '- Dor pélvica',
      '**Na região anal:**',
      '- Corrimento',
      '- Coceira',
      '- Dor',
      '- Sangramento',
      '**Na garganta (faringite gonocócica):**',
      '- Geralmente assintomática',
      '- Pode causar dor de garganta leve',
      '## Complicações se não tratadas',
      '- **Mulheres**: Doença Inflamatória Pélvica (DIP), infertilidade, gravidez ectópica',
      '- **Homens**: Epididimite, infertilidade (mais raro)',
      '- **Ambos**: Artrite reativa, aumento do risco de HIV',
      '## Diagnóstico',
      '- Exame de urina (PCR/NAAT)',
      '- Swab da região afetada (uretra, colo do útero, reto, garganta)',
      '## Tratamento',
      'Ambas têm cura com antibióticos:',
      '- **Clamídia**: Azitromicina (dose única) ou Doxiciclina (7 dias)',
      '- **Gonorreia**: Ceftriaxona (injeção) + Azitromicina',
      '**Importante:** A gonorreia tem apresentado resistência crescente a antibióticos, por isso o tratamento deve ser feito conforme orientação médica.',
      '## Prevenção',
      '- Preservativo em todas as relações (inclusive oral)',
      '- Testagem regular, mesmo sem sintomas',
      '- Tratamento de todas as parcerias dos últimos 60 dias',
    ],
    highlights: [
      'Muitas vezes são assintomáticas',
      'Podem causar infertilidade se não tratadas',
      'Testagem regular é essencial',
    ],
    sources: [
      'Ministério da Saúde - PCDT ISTs',
      'OMS - Guidelines for the Management of Sexually Transmitted Infections',
    ],
  },
  'hepatites': {
    id: 'hepatites',
    title: 'Hepatites Virais A, B e C',
    category: 'ist',
    readTime: '9 min',
    content: [
      '## O que são hepatites virais?',
      'As hepatites virais são inflamações do fígado causadas por vírus. As mais relevantes para a saúde sexual são os tipos A, B e C.',
      '## Hepatite A (HAV)',
      '### Transmissão:',
      '- Via fecal-oral (água e alimentos contaminados)',
      '- Contato sexual (principalmente sexo oral-anal)',
      '### Sintomas:',
      '- Náuseas, vômitos',
      '- Icterícia (pele amarelada)',
      '- Urina escura',
      '- Fezes claras',
      '- Fadiga intensa',
      '### Evolução:',
      '- Não cronifica',
      '- Cura espontaneamente em semanas a meses',
      '- Vacina disponível e altamente eficaz',
      '## Hepatite B (HBV)',
      '### Transmissão:',
      '- Sexual (principal via em adultos)',
      '- Sanguínea (compartilhamento de agulhas, tatuagem sem higiene)',
      '- Vertical (mãe para filho)',
      '### Sintomas:',
      '- Muitas vezes assintomática',
      '- Quando sintomática: icterícia, fadiga, náuseas',
      '### Evolução:',
      '- 90% dos adultos curam espontaneamente',
      '- 10% evoluem para forma crônica',
      '- Pode causar cirrose e câncer de fígado',
      '- **Existe vacina** - altamente eficaz e segura',
      '## Hepatite C (HCV)',
      '### Transmissão:',
      '- Principalmente via sanguínea',
      '- Transmissão sexual é possível, especialmente em práticas de maior risco',
      '- Risco aumentado em HIV positivos',
      '### Sintomas:',
      '- Geralmente assintomática na fase aguda',
      '- Pode causar sintomas inespecíficos: fadiga, náuseas',
      '### Evolução:',
      '- 70-85% cronificam',
      '- Principal causa de cirrose e transplante de fígado',
      '- **TEM CURA** com tratamento antiviral (mais de 95% de cura)',
      '- Não existe vacina',
      '## Prevenção',
      '### Vacinação:',
      '- **Hepatite A**: 2 doses',
      '- **Hepatite B**: 3 doses (disponível no SUS)',
      '- Existe vacina combinada A+B',
      '### Outras medidas:',
      '- Uso de preservativo',
      '- Não compartilhar objetos perfurocortantes',
      '- Testagem regular',
    ],
    highlights: [
      'Hepatites A e B têm vacina gratuita',
      'Hepatite C tem cura com tratamento',
      'Testagem regular é fundamental',
    ],
    sources: [
      'Ministério da Saúde - Manual Técnico para Diagnóstico das Hepatites Virais',
      'OMS - Guidelines on Hepatitis B and C Testing',
    ],
  },
  'hpv': {
    id: 'hpv',
    title: 'HPV e Prevenção de Cânceres',
    category: 'vacinas',
    readTime: '8 min',
    content: [
      '## O que é HPV?',
      'O HPV (Papilomavírus Humano) é um grupo de mais de 200 tipos de vírus. Cerca de 40 tipos afetam a região genital e são transmitidos sexualmente.',
      '## Tipos de HPV',
      '### HPV de baixo risco (6 e 11):',
      '- Causam **verrugas genitais** (condiloma)',
      '- Não causam câncer',
      '- São desagradáveis mas não são graves',
      '### HPV de alto risco (16 e 18 principalmente):',
      '- Podem causar **câncer**',
      '- Câncer de colo de útero (mais comum)',
      '- Câncer anal',
      '- Câncer de pênis',
      '- Câncer de orofaringe (garganta)',
      '## Transmissão',
      '- Contato sexual (vaginal, anal, oral)',
      '- Contato pele a pele na região genital',
      '- O preservativo reduz mas não elimina o risco (vírus pode estar em áreas não cobertas)',
      '## Sintomas',
      'A maioria das infecções é **assintomática** e o corpo elimina o vírus naturalmente.',
      'Quando há manifestações:',
      '- **Verrugas genitais**: lesões em formato de couve-flor',
      '- **Lesões precursoras de câncer**: detectadas em exames preventivos',
      '## A vacina contra HPV',
      'A vacina é a forma mais eficaz de prevenção:',
      '### Vacina quadrivalente (SUS):',
      '- Protege contra tipos 6, 11, 16 e 18',
      '- Previne verrugas e principais cânceres',
      '### Quem pode tomar no SUS:',
      '- Meninas de 9 a 14 anos',
      '- Meninos de 11 a 14 anos',
      '- Pessoas de 9 a 45 anos vivendo com HIV/AIDS',
      '- Transplantados e pacientes oncológicos',
      '### Na rede privada:',
      '- Disponível para qualquer adulto até 45 anos',
      '- Homens que fazem sexo com homens têm indicação especial',
      '### Esquema vacinal:',
      '- 2 doses (adolescentes até 14 anos)',
      '- 3 doses (maiores de 15 anos)',
      '## Importante saber',
      '- A vacina **não trata** infecção já existente',
      '- Mesmo vacinado, continuar fazendo exames preventivos',
      '- É segura e não causa a doença',
      '- Quanto mais cedo vacinar, melhor a resposta imune',
    ],
    highlights: [
      'HPV é a IST mais comum do mundo',
      'Vacina previne câncer e verrugas',
      'Disponível gratuitamente no SUS para grupos específicos',
    ],
    sources: [
      'Ministério da Saúde - Programa Nacional de Imunizações',
      'INCA - Instituto Nacional de Câncer',
      'OMS - WHO position paper on HPV vaccines',
    ],
  },
  'calendario-vacinal': {
    id: 'calendario-vacinal',
    title: 'Calendário Vacinal para Adultos',
    category: 'vacinas',
    readTime: '5 min',
    content: [
      '## Por que vacinar na vida adulta?',
      'Muitas vacinas importantes são negligenciadas após a infância. Adultos sexualmente ativos devem manter a carteira de vacinação em dia para proteção própria e dos parceiros.',
      '## Vacinas importantes para adultos',
      '### Hepatite B',
      '- **3 doses**: 0, 1 e 6 meses',
      '- Disponível gratuitamente no SUS',
      '- Indicada para todos que não foram vacinados',
      '- Verificar resposta com exame (anti-HBs) após esquema completo',
      '### Hepatite A',
      '- **2 doses**: 0 e 6 meses',
      '- Disponível no SUS para grupos específicos',
      '- Recomendada para homens que fazem sexo com homens',
      '- Pessoas com hepatite B ou C crônica devem vacinar',
      '### HPV (Papilomavírus Humano)',
      '- **2-3 doses** dependendo da idade',
      '- No SUS: para grupos específicos (ver artigo sobre HPV)',
      '- Recomendada até 45 anos de idade',
      '- Especialmente importante para HSH e pessoas com HIV',
      '### Outras vacinas importantes',
      '**Tétano e Difteria (dT):**',
      '- Reforço a cada 10 anos',
      '**Febre Amarela:**',
      '- Dose única (se mora ou viaja para áreas de risco)',
      '**Influenza (Gripe):**',
      '- Anual, especialmente para pessoas com HIV',
      '**COVID-19:**',
      '- Conforme orientação vigente',
      '## Para pessoas vivendo com HIV',
      'O calendário vacinal é ainda mais importante:',
      '- Todas as vacinas mencionadas são indicadas',
      '- Algumas vacinas de vírus vivo podem ter contraindicação (avaliar CD4)',
      '- Resposta pode ser menor, mas proteção ainda é significativa',
      '- Pneumocócica e Meningocócica também são recomendadas',
      '## Como atualizar sua carteira',
      '1. Verifique suas vacinas já tomadas',
      '2. Converse com seu médico sobre o que está faltando',
      '3. Vacine-se na UBS mais próxima (gratuito)',
      '4. Mantenha registro atualizado',
    ],
    highlights: [
      'Hepatite B: gratuita para todos no SUS',
      'Reforço de tétano a cada 10 anos',
      'Pessoas com HIV têm calendário especial',
    ],
    sources: [
      'Ministério da Saúde - Calendário Nacional de Vacinação',
      'SBIM - Sociedade Brasileira de Imunizações',
    ],
  },
  'prevencao-combinada': {
    id: 'prevencao-combinada',
    title: 'Prevenção Combinada',
    category: 'prevencao',
    readTime: '6 min',
    content: [
      '## O que é prevenção combinada?',
      'É uma estratégia que utiliza diferentes métodos de prevenção de forma conjunta, considerando as necessidades e escolhas de cada pessoa. Não existe uma única forma de se proteger.',
      '## O "mandala" da prevenção',
      'A prevenção combinada inclui:',
      '### Intervenções biomédicas:',
      '- **Preservativo** (masculino e feminino)',
      '- **PrEP** (Profilaxia Pré-Exposição)',
      '- **PEP** (Profilaxia Pós-Exposição)',
      '- **Tratamento como prevenção** (I=I)',
      '- **Vacinação** (HPV, Hepatites)',
      '- **Testagem regular**',
      '### Intervenções comportamentais:',
      '- Conhecer seu status sorológico',
      '- Redução de parcerias simultâneas',
      '- Uso consistente dos métodos escolhidos',
      '- Diálogo com parceiros',
      '### Intervenções estruturais:',
      '- Acesso a serviços de saúde',
      '- Combate ao estigma',
      '- Informação de qualidade',
      '## Conceitos importantes',
      '### I = I (Indetectável = Intransmissível)',
      'Pessoas vivendo com HIV que estão em tratamento e com carga viral indetectável **não transmitem** o vírus sexualmente. Isso é cientificamente comprovado.',
      '### PEP - Profilaxia Pós-Exposição',
      '- Medicamentos tomados APÓS uma situação de risco',
      '- Deve ser iniciada em até 72 horas',
      '- Quanto antes, melhor',
      '- Duração: 28 dias',
      '- Disponível gratuitamente no SUS (UPAs, hospitais)',
      '## Por que combinar métodos?',
      'Cada método tem suas vantagens e limitações:',
      '| Método | Protege contra HIV | Protege contra outras ISTs |',
      '|--------|-------------------|---------------------------|',
      '| Preservativo | Sim | Sim (maioria) |',
      '| PrEP | Sim | Não |',
      '| Tratamento HIV | Sim | Não |',
      '| Vacinas | Não | Sim (específicas) |',
      'Por isso, a combinação oferece proteção mais completa.',
      '## Monte sua estratégia',
      'Converse com seu médico para definir a melhor combinação para você, considerando:',
      '- Suas práticas sexuais',
      '- Número de parcerias',
      '- Status sorológico seu e dos parceiros',
      '- O que é viável na sua rotina',
    ],
    highlights: [
      'Não existe método único perfeito',
      'I=I: indetectável não transmite HIV',
      'Combine métodos para proteção completa',
    ],
    sources: [
      'UNAIDS - Combination Prevention',
      'Ministério da Saúde - Prevenção Combinada do HIV',
    ],
  },
  'preservativo': {
    id: 'preservativo',
    title: 'Uso Correto do Preservativo',
    category: 'prevencao',
    readTime: '4 min',
    content: [
      '## Por que usar preservativo?',
      'O preservativo (camisinha) é o único método que protege simultaneamente contra:',
      '- HIV',
      '- Outras ISTs (sífilis, gonorreia, clamídia, hepatites)',
      '- Gravidez não planejada',
      '## Preservativo masculino (externo)',
      '### Como usar corretamente:',
      '1. Verifique a validade e se a embalagem está íntegra',
      '2. Abra com cuidado (não use dentes ou objetos cortantes)',
      '3. Aperte a ponta (reservatório) para retirar o ar',
      '4. Coloque com o pênis ereto, antes de qualquer contato',
      '5. Desenrole até a base do pênis',
      '6. Após a ejaculação, segure a base e retire antes de perder a ereção',
      '7. Descarte no lixo (nunca no vaso sanitário)',
      '### Dicas importantes:',
      '- Use uma nova camisinha a cada relação',
      '- Nunca use duas ao mesmo tempo (o atrito pode romper)',
      '- Use lubrificante à base de água (nunca óleo ou vaselina)',
      '## Preservativo feminino (interno)',
      '### Vantagens:',
      '- Pode ser colocado até 8 horas antes da relação',
      '- Dá mais autonomia para a mulher',
      '- Pode ser usado em sexo anal',
      '### Como usar:',
      '1. Aperte o anel interno e introduza na vagina ou ânus',
      '2. O anel externo deve ficar para fora, cobrindo os lábios',
      '3. Após a relação, torça o anel externo e puxe suavemente',
      '4. Descarte no lixo',
      '## Uso de lubrificante',
      'O lubrificante reduz o risco de rompimento e torna a relação mais confortável.',
      '**Use:** Lubrificantes à base de água ou silicone',
      '**Nunca use:** Óleo de cozinha, vaselina, cremes hidratantes (danificam o látex)',
      '## Onde conseguir gratuitamente',
      '- Unidades Básicas de Saúde (UBS)',
      '- Centros de Testagem e Aconselhamento (CTA)',
      '- ONGs e coletivos',
      '- Máquinas de distribuição em alguns locais',
      '## Resistência ao preservativo?',
      'Se você tem dificuldade em usar preservativo:',
      '- Converse com seu médico sobre PrEP',
      '- Faça testagem regular',
      '- Mantenha vacinas em dia',
      '- Comunique-se abertamente com parceiros',
    ],
    highlights: [
      'Único método que protege contra HIV e outras ISTs',
      'Use lubrificante à base de água',
      'Disponível gratuitamente no SUS',
    ],
    sources: [
      'Ministério da Saúde - Uso do Preservativo',
      'CDC - How to Use a Condom',
    ],
  },
  'testagem-regular': {
    id: 'testagem-regular',
    title: 'Importância da Testagem Regular',
    category: 'prevencao',
    readTime: '5 min',
    content: [
      '## Por que testar regularmente?',
      'Muitas ISTs são **assintomáticas**. Você pode estar infectado e transmitindo sem saber. A testagem regular permite:',
      '- Diagnóstico precoce',
      '- Tratamento imediato',
      '- Interrupção da cadeia de transmissão',
      '- Proteção sua e dos parceiros',
      '## O que é janela imunológica?',
      'É o período entre a infecção e a detecção pelos exames:',
      '| Infecção | Janela aproximada |',
      '|----------|------------------|',
      '| HIV | 30 dias (teste rápido/ELISA) |',
      '| Sífilis | 30-90 dias |',
      '| Hepatite B | 30-60 dias |',
      '| Hepatite C | 60-90 dias |',
      '**Importante:** Um teste negativo dentro da janela não descarta infecção. Repita após o período.',
      '## Frequência recomendada',
      '### Para pessoas sexualmente ativas:',
      '- **HIV e Sífilis**: a cada 3-6 meses',
      '- **Hepatites B e C**: anualmente ou conforme risco',
      '- **Gonorreia e Clamídia**: a cada 3-6 meses (se múltiplas parcerias)',
      '### Para usuários de PrEP:',
      '- **HIV**: a cada 3 meses (obrigatório)',
      '- **ISTs**: a cada 3 meses',
      '- **Função renal**: a cada 3-6 meses',
      '## Onde fazer exames',
      '### Gratuito (SUS):',
      '- Unidades Básicas de Saúde (UBS)',
      '- Centros de Testagem e Aconselhamento (CTA)',
      '- SAE (Serviços de Atendimento Especializado)',
      '- UPAs e pronto-socorros (em situações de urgência)',
      '### Testes rápidos:',
      '- Resultado em 15-30 minutos',
      '- Disponíveis para HIV, sífilis e hepatites',
      '- Gratuitos e sigilosos',
      '## Superando barreiras',
      '### Medo do resultado:',
      '- Todas as ISTs têm tratamento',
      '- HIV é uma condição crônica controlável',
      '- Diagnóstico precoce = melhor prognóstico',
      '### Preocupação com privacidade:',
      '- Os testes são sigilosos',
      '- Você pode usar nome social',
      '- Resultados não são informados a terceiros',
      '### Vergonha:',
      '- Profissionais de saúde são treinados para não julgar',
      '- Cuidar da saúde é responsabilidade e autocuidado',
      '- Você não está sozinho',
    ],
    highlights: [
      'Muitas ISTs são assintomáticas',
      'Teste de HIV a cada 3-6 meses',
      'Exames gratuitos no SUS',
    ],
    sources: [
      'Ministério da Saúde - Departamento de HIV/Aids',
      'OMS - Consolidated Guidelines on HIV Testing Services',
    ],
  },
};

export default function EducacaoDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const content = educationalContents[id];

  if (!content) {
    return (
      <div className="text-center py-16">
        <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Conteúdo não encontrado</h1>
        <p className="text-gray-600 mb-6">O artigo que você procura não existe ou foi removido.</p>
        <Link href="/dashboard/educacao" className="btn-primary">
          Voltar para Conteúdos
        </Link>
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    prep: 'bg-teal-100 text-teal-700',
    ist: 'bg-red-100 text-red-700',
    vacinas: 'bg-violet-100 text-violet-700',
    prevencao: 'bg-blue-100 text-blue-700',
  };

  const categoryLabels: Record<string, string> = {
    prep: 'PrEP',
    ist: 'ISTs',
    vacinas: 'Vacinas',
    prevencao: 'Prevenção',
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 transition-colors"
      >
        <ArrowLeft size={20} />
        <span>Voltar</span>
      </button>

      {/* Article header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <span className={`px-3 py-1 rounded-full text-sm font-medium ${categoryColors[content.category]}`}>
            {categoryLabels[content.category]}
          </span>
          <span className="flex items-center gap-1 text-gray-500 text-sm">
            <Clock size={14} />
            {content.readTime} de leitura
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-4">{content.title}</h1>
      </div>

      {/* Highlights */}
      {content.highlights && (
        <div className="bg-teal-50 rounded-2xl p-6 mb-8">
          <h3 className="font-semibold text-teal-800 mb-3">Pontos importantes</h3>
          <ul className="space-y-2">
            {content.highlights.map((highlight, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                <span className="text-teal-900">{highlight}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Article content */}
      <div className="prose prose-lg max-w-none">
        {content.content.map((paragraph, index) => {
          // Headers
          if (paragraph.startsWith('## ')) {
            return (
              <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('### ')) {
            return (
              <h3 key={index} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
                {paragraph.replace('### ', '')}
              </h3>
            );
          }

          // List items
          if (paragraph.startsWith('- ')) {
            return (
              <div key={index} className="flex items-start gap-2 ml-4 my-1">
                <span className="text-teal-500 mt-1">•</span>
                <span
                  className="text-gray-700"
                  dangerouslySetInnerHTML={{
                    __html: paragraph
                      .replace('- ', '')
                      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                      .replace(/\*(.*?)\*/g, '<em>$1</em>'),
                  }}
                />
              </div>
            );
          }

          // Tables
          if (paragraph.startsWith('|')) {
            const lines = content.content.slice(index).filter((p) => p.startsWith('|'));
            if (index > 0 && content.content[index - 1].startsWith('|')) {
              return null; // Skip if already processed
            }

            const headers = lines[0]?.split('|').filter((c) => c.trim());
            const rows = lines.slice(2).map((row) => row.split('|').filter((c) => c.trim()));

            return (
              <div key={index} className="overflow-x-auto my-6">
                <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
                  <thead className="bg-gray-50">
                    <tr>
                      {headers?.map((header, i) => (
                        <th key={i} className="px-4 py-3 text-left text-sm font-semibold text-gray-900">
                          {header.trim()}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="px-4 py-3 text-sm text-gray-700">
                            {cell.trim()}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
          }

          // Regular paragraphs
          return (
            <p
              key={index}
              className="text-gray-700 my-4 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: paragraph
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-gray-900">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em>$1</em>'),
              }}
            />
          );
        })}
      </div>

      {/* Sources */}
      {content.sources && (
        <div className="mt-12 pt-8 border-t border-gray-200">
          <h3 className="font-semibold text-gray-900 mb-3">Fontes</h3>
          <ul className="space-y-2">
            {content.sources.map((source, index) => (
              <li key={index} className="text-sm text-gray-600 flex items-start gap-2">
                <FileText className="w-4 h-4 text-gray-400 flex-shrink-0 mt-0.5" />
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Share and actions */}
      <div className="mt-8 flex items-center justify-between py-6 border-t border-gray-200">
        <Link
          href="/dashboard/educacao"
          className="text-teal-600 hover:text-teal-700 font-medium flex items-center gap-2"
        >
          <ArrowLeft size={18} />
          Ver mais conteúdos
        </Link>
        <button className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors">
          <Share2 size={18} />
          Compartilhar
        </button>
      </div>

      {/* CTA */}
      <div className="mt-8 bg-gradient-to-r from-teal-500 to-teal-600 rounded-2xl p-8 text-white text-center">
        <h3 className="text-2xl font-bold mb-2">Tem dúvidas?</h3>
        <p className="text-teal-100 mb-6">
          Agende uma consulta e converse com o Dr. Ricardo sobre prevenção personalizada.
        </p>
        <Link
          href="/agendar"
          className="inline-flex items-center gap-2 bg-white text-teal-600 font-semibold py-3 px-6 rounded-full hover:bg-teal-50 transition-colors"
        >
          Agendar consulta
        </Link>
      </div>
    </div>
  );
}
