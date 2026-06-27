"use client";

import { useLang } from "../lib/i18n";

export function About() {
  const { t } = useLang();

  const cards = [
    { label: t.about.missionLabel, text: t.about.mission },
    { label: t.about.visionLabel, text: t.about.vision },
  ];

  return (
    <section id="quem-somos" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_2.3fr] lg:items-center lg:gap-10">
          {/* Esquerda — cabeçalho + CTA */}
          <div>
            <p className="text-sm font-bold tracking-wide text-accent">{t.about.eyebrow}</p>
            <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              {t.about.title}
            </h2>
            <a
              href="#demonstracao"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-blue-700 px-8 py-3.5 text-base font-semibold text-blue-700 transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-blue-700 hover:text-white hover:shadow-lg hover:shadow-blue-700/30"
            >
              {t.about.cta}
            </a>
          </div>

          {/* Direita — blobs Missão / Visão (imagem real da marca).
              Missão = o mesmo blob girado 180° e espelhado. */}
          <div className="grid gap-14 sm:grid-cols-2">
            {cards.map((c, i) => (
              <div key={i} className="relative">
                {/* Blob na proporção NATURAL (w-full, sem esticar) — o tamanho real
                    cresce porque a coluna ficou mais larga */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/bloob.png"
                  alt=""
                  aria-hidden
                  draggable={false}
                  className="w-full select-none"
                  style={{ transform: `${i === 0 ? "rotate(180deg) " : ""}scale(1.1)` }}
                />
                {/* Texto por cima, centralizado. O Missão (girado 180°) recebe
                    um nudge pra baixo pra cair no miolo visual do blob. */}
                <div
                  className={`absolute inset-0 flex flex-col justify-center px-12 ${
                    i === 0 ? "translate-x-8 translate-y-6" : ""
                  }`}
                >
                  <h3 className="font-[family-name:var(--font-display)] text-2xl font-bold text-blue-900">
                    {c.label}
                  </h3>
                  <p className="mt-3 text-lg leading-relaxed text-slate-700">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Aviso legal (CDSS) */}
        <p className="mt-16 max-w-5xl text-sm leading-relaxed text-slate-500">
          {t.about.disclaimer}
        </p>
      </div>
    </section>
  );
}
