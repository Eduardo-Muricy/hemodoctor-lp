"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";

export type Lang = "pt" | "en";

type NavItem = { label: string; href: string };

type Dict = {
  nav: NavItem[];
  cta: string;
  hero: {
    badge: string;
    titleLead: string;
    titleRest: string;
    subtitle: string;
    secondary: string;
    trust: string;
  };
  features: {
    eyebrow: string;
    title: string;
    soon: string;
    items: { title: string; text: string }[];
  };
  how: {
    eyebrow: string;
    title: string;
    steps: { title: string; text: string }[];
  };
  tele: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
  };
  solutions: {
    eyebrow: string;
    title: string;
    cta: string;
    items: { title: string; text: string }[];
  };
  benefits: {
    eyebrow: string;
    title: string;
    items: string[];
  };
  form: {
    titleBefore: string;
    titleAfter: string;
    subtitle: string;
    fields: {
      name: string;
      email: string;
      phone: string;
      role: string;
      company: string;
      segment: string;
      message: string;
    };
    submit: string;
    success: string;
  };
  media: {
    eyebrow: string;
    title: string;
  };
  blog: {
    eyebrow: string;
    title: string;
    readMore: string;
    more: string;
  };
  team: {
    eyebrow: string;
    title: string;
    roles: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    cta: string;
    missionLabel: string;
    mission: string;
    visionLabel: string;
    vision: string;
    disclaimer: string;
  };
  footer: {
    tagline: string;
    nav: string;
    contact: string;
    address: string;
    incubated: string;
    rights: string;
    privacy: string;
  };
};

export const dict: Record<Lang, Dict> = {
  pt: {
    nav: [
      { label: "Sobre nós", href: "#sobre" },
      { label: "Como funciona", href: "#como-funciona" },
      { label: "Soluções", href: "#solucoes" },
      { label: "Benefícios", href: "#beneficios" },
      { label: "Blog", href: "#blog" },
    ],
    cta: "Solicite uma demonstração",
    hero: {
      badge: "1ª plataforma de IA em hematologia do mundo",
      titleLead:
        "A primeira tecnologia do mundo desenvolvida com hematologistas",
      titleRest:
        "para apoiar a análise de hemogramas com mais consistência e segurança.",
      subtitle:
        "Utilizamos inteligência artificial como suporte à avaliação médica, auxiliando na identificação de sinais de alerta laboratoriais.",
      secondary: "Como funciona",
      trust: "Reconhecida pela imprensa",
    },
    features: {
      eyebrow: "Hemodoctor",
      title: "Menos variabilidade. Mais apoio à decisão clínica.",
      soon: "Em breve",
      items: [
        {
          title: "Análise com IA",
          text: "Análise assistiva de hemogramas com base em IA, desenvolvida e validada com hematologistas.",
        },
        {
          title: "Suporte clínico",
          text: "Suporte clínico assistivo para médicos na análise de exames laboratoriais.",
        },
        {
          title: "TeleHemato",
          text: "Apoio especializado sob demanda, fora do fluxo automatizado do software (serviço independente, acionado pelo médico quando necessário).",
        },
        {
          title: "Dashboards analíticos",
          text: "Monitoramento epidemiológico e apoio à gestão em saúde com visão de dados.",
        },
        {
          title: "Priorização de exames",
          text: "Apoio à priorização de exames críticos, para fluxos assistenciais mais eficientes.",
        },
      ],
    },
    how: {
      eyebrow: "Como Funciona",
      title: "Inteligência aplicada ao apoio da análise de exames laboratoriais",
      steps: [
        {
          title: "Integração com laboratórios e prontuários eletrônicos",
          text: "Sem digitação manual: a Hemodoctor recebe automaticamente os exames.",
        },
        {
          title: "Análise com Inteligência Artificial",
          text: "Nosso algoritmo, desenvolvido em colaboração com hematologistas, identifica padrões laboratoriais e sinais de alerta que merecem atenção clínica, apoiando a avaliação médica.",
        },
        {
          title: "Suporte para Condutas Clínicas",
          text: "Suporte à avaliação clínica. Receba hipóteses assistivas e sugestões de investigação*",
        },
      ],
    },
    tele: {
      eyebrow: "Tele Hemato",
      title: "Suporte remoto com especialistas",
      text: "Sem hematologistas na equipe? A TeleHemato conecta médicos a especialistas para suporte clínico imediato.",
      cta: "Teste agora",
    },
    solutions: {
      eyebrow: "Soluções",
      title: "A plataforma de inteligência artificial para diagnósticos hematológicos",
      cta: "Descubra como podemos ajudar",
      items: [
        {
          title: "Redes hospitalares e operadoras",
          text: "Redução de custos com exames desnecessários e otimização da equipe médica.",
        },
        {
          title: "Serviço Público",
          text: "Dashboards epidemiológicos que ajudam no planejamento e combate a surtos de doenças.",
        },
        {
          title: "Médicos",
          text: "Apoio à análise de exames laboratoriais, mesmo em contextos com acesso limitado a especialistas.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefícios",
      title: "Tecnologia a favor da eficiência diagnóstica",
      items: [
        "Identifica padrões laboratoriais associados a condições hematológicas que podem exigir investigação especializada.",
        "IA validada: discordância de apenas 1,32% entre os casos avaliados.",
        "Apoia a triagem de casos prioritários, reduzindo o risco de atrasos assistenciais.",
        "Tecnologia integrada ao fluxo clínico do médico, sem substituir seu julgamento profissional.",
        "Apoio clínico mesmo em locais sem especialistas.",
      ],
    },
    form: {
      titleBefore: "Teste a",
      titleAfter: "na sua instituição",
      subtitle:
        "Experimente gratuitamente e veja como a Hemodoctor pode apoiar sua rotina clínica com segurança e escala.",
      fields: {
        name: "Seu nome",
        email: "E-mail",
        phone: "Telefone",
        role: "Cargo",
        company: "Empresa",
        segment: "Segmento",
        message: "Sua mensagem",
      },
      submit: "Agendar Demonstração",
      success: "Solicitação enviada! Nossa equipe entrará em contato em breve.",
    },
    media: {
      eyebrow: "Mídia",
      title: "Destaques na imprensa",
    },
    blog: {
      eyebrow: "Blog",
      title: "Inteligência diagnóstica em evolução",
      readMore: "Ler mais",
      more: "Ver outros conteúdos",
    },
    team: {
      eyebrow: "Nossa Equipe",
      title:
        "Especialistas em IA, tecnologia, hematologia e gestão em saúde comprometidos em transformar o diagnóstico médico.",
      roles: [
        "Hematologista. Pesquisador. Especialista em oncohematologia.",
        "Hematologista. Diretor hospitalar. Especialista em oncohematologia.",
        "Empreendedor. Experiência em tecnologia e inovação na saúde.",
      ],
    },
    about: {
      eyebrow: "Quem somos",
      title: "Tecnologia e ciência a serviço da saúde",
      cta: "Conecte-se conosco",
      missionLabel: "Missão",
      mission:
        "Democratizar o acesso à saúde de qualidade, encurtando a jornada diagnóstica com tecnologia e inteligência de dados.",
      visionLabel: "Visão",
      vision: "Ser a plataforma mais assertiva para suporte à saúde primária no mundo.",
      disclaimer:
        "*Sempre como apoio à decisão do profissional de saúde. A Hemodoctor é uma ferramenta de suporte à decisão clínica (CDSS). Não realiza diagnóstico médico, não define condutas terapêuticas e não substitui o julgamento do profissional de saúde.",
    },
    footer: {
      tagline:
        "Apoio à decisão clínica no hemograma, construído com hematologistas e IA validada.",
      nav: "Navegação",
      contact: "Contato",
      address: "Av. Paulista, 1636. Conjunto 4. Pavimento 15. Bela Vista, São Paulo/SP.",
      incubated: "Startup incubada",
      rights: "Todos os direitos reservados.",
      privacy: "Política de Privacidade",
    },
  },
  en: {
    nav: [
      { label: "About us", href: "#sobre" },
      { label: "How it works", href: "#como-funciona" },
      { label: "Solutions", href: "#solucoes" },
      { label: "Benefits", href: "#beneficios" },
      { label: "Blog", href: "#blog" },
    ],
    cta: "Request a demo",
    hero: {
      badge: "World's 1st AI platform in hematology",
      titleLead: "The world's first technology developed with hematologists",
      titleRest:
        "to support blood count analysis with greater consistency and safety.",
      subtitle:
        "We use artificial intelligence to support medical evaluation, helping to identify laboratory warning signs.",
      secondary: "How it works",
      trust: "Featured in the press",
    },
    features: {
      eyebrow: "Hemodoctor",
      title: "Less variability. More clinical decision support.",
      soon: "Coming soon",
      items: [
        {
          title: "AI analysis",
          text: "Assistive blood count analysis powered by AI, developed and validated with hematologists.",
        },
        {
          title: "Clinical support",
          text: "Assistive clinical support for physicians in the analysis of laboratory tests.",
        },
        {
          title: "TeleHemato",
          text: "Specialized support on demand, outside the automated software flow (independent service, triggered by the physician when needed).",
        },
        {
          title: "Analytical dashboards",
          text: "Epidemiological monitoring and health management support with data insights.",
        },
        {
          title: "Test prioritization",
          text: "Support for prioritizing critical tests, for more efficient care workflows.",
        },
      ],
    },
    how: {
      eyebrow: "How it works",
      title: "Intelligence applied to support laboratory test analysis",
      steps: [
        {
          title: "Integration with labs and electronic health records",
          text: "No manual data entry: Hemodoctor receives exams automatically.",
        },
        {
          title: "Analysis with Artificial Intelligence",
          text: "Our algorithm, developed in collaboration with hematologists, identifies laboratory patterns and warning signs that deserve clinical attention, supporting medical evaluation.",
        },
        {
          title: "Support for Clinical Decisions",
          text: "Support for clinical evaluation. Receive assistive hypotheses and investigation suggestions*",
        },
      ],
    },
    tele: {
      eyebrow: "Tele Hemato",
      title: "Remote support with specialists",
      text: "No hematologists on your team? TeleHemato connects physicians to specialists for immediate clinical support.",
      cta: "Try now",
    },
    solutions: {
      eyebrow: "Solutions",
      title: "The artificial intelligence platform for hematological diagnostics",
      cta: "Discover how we can help",
      items: [
        {
          title: "Hospital networks & payers",
          text: "Reduced costs from unnecessary tests and a more efficient medical team.",
        },
        {
          title: "Public health",
          text: "Epidemiological dashboards that help with planning and fighting disease outbreaks.",
        },
        {
          title: "Physicians",
          text: "Support for lab test analysis, even in settings with limited access to specialists.",
        },
      ],
    },
    benefits: {
      eyebrow: "Benefits",
      title: "Technology for diagnostic efficiency",
      items: [
        "Identifies laboratory patterns associated with hematological conditions that may require specialized investigation.",
        "Validated AI: only 1.32% discordance among evaluated cases.",
        "Supports triage of priority cases, reducing the risk of care delays.",
        "Technology integrated into the physician's clinical workflow, without replacing their professional judgment.",
        "Clinical support even in places without specialists.",
      ],
    },
    form: {
      titleBefore: "Try",
      titleAfter: "at your institution",
      subtitle:
        "Try it for free and see how Hemodoctor can support your clinical routine with safety and scale.",
      fields: {
        name: "Your name",
        email: "E-mail",
        phone: "Phone",
        role: "Role",
        company: "Company",
        segment: "Segment",
        message: "Your message",
      },
      submit: "Schedule a demo",
      success: "Request sent! Our team will contact you shortly.",
    },
    media: {
      eyebrow: "Media",
      title: "Featured in the press",
    },
    blog: {
      eyebrow: "Blog",
      title: "Diagnostic intelligence in evolution",
      readMore: "Read more",
      more: "See more content",
    },
    team: {
      eyebrow: "Our Team",
      title:
        "Experts in AI, technology, hematology and health management committed to transforming medical diagnosis.",
      roles: [
        "Hematologist. Researcher. Specialist in onco-hematology.",
        "Hematologist. Hospital director. Specialist in onco-hematology.",
        "Entrepreneur. Experience in technology and health innovation.",
      ],
    },
    about: {
      eyebrow: "About us",
      title: "Technology and science at the service of health",
      cta: "Connect with us",
      missionLabel: "Mission",
      mission:
        "Democratize access to quality healthcare, shortening the diagnostic journey with technology and data intelligence.",
      visionLabel: "Vision",
      vision: "To be the world's most accurate platform for primary care support.",
      disclaimer:
        "*Always as support for the health professional's decision. Hemodoctor is a clinical decision support tool (CDSS). It does not perform medical diagnosis, does not define therapeutic conduct, and does not replace the health professional's judgment.",
    },
    footer: {
      tagline:
        "Clinical decision support for blood counts, built with hematologists and validated AI.",
      nav: "Navigation",
      contact: "Contact",
      address: "Av. Paulista, 1636. Suite 4. Floor 15. Bela Vista, São Paulo/SP.",
      incubated: "Incubated startup",
      rights: "All rights reserved.",
      privacy: "Privacy Policy",
    },
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "lang";

// Lê o idioma salvo (cliente). Primitivo => comparado por valor, sem loop.
function getClientLang(): Lang {
  try {
    return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "pt";
  } catch {
    return "pt";
  }
}

// Valor usado no servidor e na hidratação (evita mismatch).
function getServerLang(): Lang {
  return "pt";
}

// Avisa o React quando o idioma muda. "storage" só dispara em OUTROS tabs,
// por isso disparamos também um evento próprio no tab atual.
function subscribeLang(callback: () => void) {
  window.addEventListener("lang-change", callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener("lang-change", callback);
    window.removeEventListener("storage", callback);
  };
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Lê o idioma de uma fonte externa (localStorage) de forma SSR-safe,
  // sem setState em efeito: é exatamente para isso que existe este hook.
  const lang = useSyncExternalStore(subscribeLang, getClientLang, getServerLang);

  const setLang = useCallback((next: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {}
    window.dispatchEvent(new Event("lang-change"));
  }, []);

  // Efeito "do bem": atualiza um sistema externo (o atributo lang do <html>)
  // com o estado atual — não chama setState.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dict[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLang precisa estar dentro de <LanguageProvider>");
  return ctx;
}
