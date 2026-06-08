"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
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
  },
};

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Dict;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("pt");

  // Restore the saved preference after mount (avoids hydration mismatch).
  useEffect(() => {
    const stored = localStorage.getItem("lang");
    if (stored === "pt" || stored === "en") setLangState(stored);
  }, []);

  // Keep the document language in sync for SEO/accessibility.
  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  function setLang(next: Lang) {
    setLangState(next);
    try {
      localStorage.setItem("lang", next);
    } catch {}
  }

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
