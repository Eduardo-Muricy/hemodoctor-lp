"use client";

import { useLang } from "../lib/i18n";

const press = ["Veja", "InfoMoney", "Correio Braziliense", "Estado de Minas"];

export function Hero() {
  const { t } = useLang();

  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      {/* Camada 0 — fallback: aparece se o vídeo não carregar */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700" />

      {/* Camada 1 — vídeo de fundo (cover) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      >
        <source src="/Video-hemodoctor.mp4" type="video/mp4" />
      </video>

      {/* Camada 2 — overlay azul (mais forte em cima e embaixo, pra ancorar o texto) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-950/75 via-blue-900/45 to-blue-950/80" />

      {/* Camada 3 — conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 pt-28 pb-24 text-center text-white">
        {/* Badge */}
        <span className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-wider backdrop-blur-md sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {t.hero.badge}
        </span>

        {/* Título */}
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-extrabold leading-[1.08] tracking-tight [text-shadow:0_2px_18px_rgba(0,0,0,0.55)] sm:text-5xl lg:text-6xl">
          <span className="text-accent">{t.hero.titleLead}</span>{" "}
          {t.hero.titleRest}
        </h1>

        {/* Subtítulo */}
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/90 [text-shadow:0_1px_10px_rgba(0,0,0,0.5)] sm:text-lg lg:text-xl">
          {t.hero.subtitle}
        </p>

        {/* CTAs */}
        <div className="mt-9 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
          <a
            href="#demonstracao"
            className="inline-flex w-full items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white shadow-lg shadow-accent/30 transition-all hover:-translate-y-0.5 hover:bg-accent-hover sm:w-auto"
          >
            {t.cta}
          </a>
          <a
            href="#como-funciona"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/70 px-8 py-4 text-base font-semibold backdrop-blur-sm transition-colors hover:bg-white hover:text-blue-700 sm:w-auto"
          >
            {t.hero.secondary}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>

        {/* Prova social — imprensa */}
        <div className="mt-14">
          <p className="text-xs uppercase tracking-[0.2em] text-white/60">{t.hero.trust}</p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-x-7 gap-y-2 text-sm font-semibold text-white/80">
            {press.map((name) => (
              <span key={name} className="transition-colors hover:text-white">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Indicador de scroll */}
      <a
        href="#sobre"
        aria-label="Rolar para baixo"
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-white/70 transition-colors hover:text-white"
      >
        <svg className="h-7 w-7 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
