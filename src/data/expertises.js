import CasaPNG from "../assets/images/Cards/casa-imobiliario.png";
import FamiliaPNG from "../assets/images/Cards/familia-e-sucessoes.png";
import PredioPNG from "../assets/images/Cards/predio-da-empresa.png";
import TratorPNG from "../assets/images/Cards/trator-do-agro.png";
import AcordoPNG from "../assets/images/Cards/acordo.png";
import SaudePNG from "../assets/images/Cards/saude.png";
import PenalPNG from "../assets/images/Cards/penal.png";
import TrabalhistaPNG from "../assets/images/Cards/trabalhista.png";
import AmbientalPNG from "../assets/images/Cards/ambiental.png";
import PrevidenciarioPNG from "../assets/images/Cards/balanca.png";

export const expertises = [
  {
    id: "agro",
    label: "Direito do Agro",
    icon: TratorPNG,
    summary: "Segurança jurídica para o produtor rural.",
    details: {
      fullTitle: "Direito do Agronegócio e Contratos Agrários",
      description:
        "Atuação especializada na defesa dos direitos do produtor, focada em segurança jurídica, planejamento sucessório e contratos complexos do setor.",
      benefits: [
        "Proteção patrimonial da família do campo",
        "Redução de riscos em contratos de arrendamento",
        "Assessoria em crédito e financiamento agrícola",
      ],
      cases: [
        "Regularização de propriedades rurais de grande porte",
        "Defesa em disputas de posse de terra",
      ],
    },
  },
  {
    id: "familia",
    label: "Família e Sucessões",
    icon: FamiliaPNG,
    summary: "Proteção patrimonial e planejamento familiar.",
    details: {
      fullTitle: "Direito de Família e Planejamento Sucessório",
      description:
        "Assessoria humanizada e estratégica para a preservação do patrimônio familiar e resolução de conflitos geracionais com o menor impacto possível.",
      benefits: [
        "Planejamento sucessório seguro e redução de custos tributários",
        "Condução ágil de inventários, partilhas e divórcios",
        "Mediação de conflitos familiares e proteção de menores",
      ],
      cases: [
        "Estruturação de holding familiar para blindagem de bens",
        "Homologação de acordos complexos de partilha de bens",
      ],
    },
  },
  {
    id: "empresarial",
    label: "Direito Empresarial",
    icon: PredioPNG,
    summary: "Soluções estratégicas para sua empresa.",
    details: {
      fullTitle: "Direito Empresarial e Governança Corporativa",
      description:
        "Suporte jurídico consultivo e contencioso para mitigar riscos operacionais, proteger sócios e impulsionar o crescimento sustentável do negócio.",
      benefits: [
        "Mitigação de passivos trabalhistas, fiscais e cíveis",
        "Segurança jurídica na redação de contratos e estatutos sociais",
        "Suporte em fusões, aquisições e reestruturações",
      ],
      cases: [
        "Assessoria na venda e transição de controle societário",
        "Defesa bem-sucedida em ações de cobrança de alta complexidade",
      ],
    },
  },
  {
    id: "imobiliario",
    label: "Direito Imobiliário",
    icon: CasaPNG,
    summary: "Assessoria completa em negócios imobiliários.",
    details: {
      fullTitle: "Direito Imobiliário e Transações Imobiliárias",
      description:
        "Consultoria especializada em operações de compra, venda, locação e regularização de imóveis, garantindo transações sem surpresas.",
      benefits: [
        "Auditoria jurídica (due diligence) para aquisições seguras",
        "Regularização ágil de escrituras, registros e posses",
        "Redução de riscos em contratos de locação e incorporação",
      ],
      cases: [
        "Regularização jurídica de empreendimentos urbanos",
        "Resolução de litígios contratuais indevidos em distratos",
      ],
    },
  },
    {
    id: "penal",
    label: "Direito Penal",
    icon: PenalPNG, // Lembre-se de importar o ícone correspondente
    summary: "Defesa estratégica e preservação de garantias fundamentais.",
    details: {
      fullTitle: "Direito Penal Corporativo e Econômico",
      description: "Atuação especializada na defesa de pessoas físicas e jurídicas em crimes de colarinho branco, crimes econômicos, ambientais e contra a administração pública.",
      benefits: [
        "Defesa técnica altamente especializada com foco em mitigar riscos reputacionais",
        "Implementação de programas de compliance criminal preventivo para empresas",
        "Acompanhamento e suporte imediato em procedimentos investigatórios e inquéritos",
      ],
      cases: [
        "Absorção e arquivamento de inquérito policial envolvendo diretores de grandes empresas",
        "Defesa complexa bem-sucedida em acusações de crimes contra a ordem tributária",
      ],
    },
  },

  {
    id: "previdenciario",
    label: "Direito Previdenciário",
    icon: PrevidenciarioPNG, // Lembre-se de importar o ícone correspondente
    summary: "Planejamento e concessão de benefícios complexos.",
    details: {
      fullTitle: "Direito Previdenciário e Planejamento de Aposentadoria",
      description:
        "Consultoria voltada para a análise detalhada de tempo de contribuição, visando à obtenção do melhor benefício financeiro possível para o segurado.",
      benefits: [
        "Planejamento detalhado para garantir a maior renda mensal possível",
        "Análise minuciosa de aposentadorias especiais e regras de transição",
        "Atuação ágil na reversão de negativas indevidas do INSS",
      ],
      cases: [
        "Concessão de aposentadoria de teto máximo para executivos",
        "Revisão de benefício com aumento substancial do valor mensal recebido",
      ],
    },
  },
  {
    id: "trabalhista",
    label: "Direito Trabalhista",
    icon: TrabalhistaPNG, // Lembre-se de importar o ícone correspondente
    summary: "Defesa e consultoria estratégica para empresas.",
    details: {
      fullTitle: "Direito do Trabalho e Advocacia Corporativa",
      description:
        "Atuação focada na defesa dos interesses de empregadores, com foco em consultoria preventiva, redução de passivos trabalhistas e compliance sindical.",
      benefits: [
        "Prevenção e redução drástica de ações trabalhistas judiciais",
        "Auditoria de procedimentos e adequação de rotinas de RH",
        "Defesa técnica robusta em reclamatórias de alta complexidade",
      ],
      cases: [
        "Redução expressiva de condenações em dissídios coletivos",
        "Reestruturação interna de contratos de trabalho para corte de custos ilegítimos",
      ],
    },
  },

  {
    id: "medico",
    label: "Direito Médico e da Saúde",
    icon: SaudePNG, // Lembre-se de importar o ícone correspondente
    summary: "Defesa de profissionais e instituições de saúde.",
    details: {
      fullTitle: "Direito Médico, Odontológico e da Saúde",
      description:
        "Assessoria jurídica especializada na proteção de médicos, clínicas e hospitais, focada em compliance regulatório e gerenciamento de crises.",
      benefits: [
        "Defesa em processos ético-profissionais perante conselhos (CRM)",
        "Prevenção de riscos com elaboração de termos de consentimento seguros",
        "Blindagem jurídica contra ações de responsabilidade civil",
      ],
      cases: [
        "Defesa absolutória em alegações de erro médico",
        "Consultoria de riscos e implementação de compliance em clínicas",
      ],
    },
  },
  {
    id: "ambiental",
    label: "Direito Ambiental",
    icon: AmbientalPNG, // Lembre-se de importar o ícone correspondente
    summary: "Segurança jurídica e sustentabilidade para o seu negócio.",
    details: {
      fullTitle: "Direito Ambiental e Sustentabilidade Corporativa",
      description:
        "Assessoria estratégica no cumprimento da legislação ambiental, processos de licenciamento e defesa em crimes ou infrações administrativas ambientais.",
      benefits: [
        "Segurança jurídica em processos de licenciamento ambiental complexos",
        "Defesa eficiente contra multas e embargos de órgãos reguladores",
        "Mitigação de riscos em auditorias de compra e venda de áreas verdes",
      ],
      cases: [
        "Desinterdição de atividades empresariais após sanções ambientais",
        "Condução de Termos de Ajustamento de Conduta (TAC) com o Ministério Público",
      ],
    },
  },

  {
    id: "civil",
    label: "Contratos e Responsabilidade Civil",
    icon: AcordoPNG, // Lembre-se de importar o ícone correspondente
    summary: "Segurança na celebração de negócios e indenizações.",
    details: {
      fullTitle: "Direito Civil, Contratos e Responsabilidade Civil",
      description:
        "Soluções amplas voltadas para a estruturação de negócios privados, cobranças complexas e ações de reparação de danos materiais e morais.",
      benefits: [
        "Redação de contratos personalizados com alta força executiva",
        "Garantia de direitos em disputas contratuais e inadimplemento",
        "Proteção patrimonial contra cobranças e penhoras indevidas",
      ],
      cases: [
        "Resolução favorável em disputa contratual de alta relevância comercial",
        "Ações de indenização por perdas e danos de grande escala",
      ],
    },
  },
];
