"use client";

import { useLang } from "../lib/i18n";

export function Benefits() {
  const { t } = useLang();

  return (
    <section id="beneficios" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Marca da Hemodoctor atrás do título, com opacidade baixa pra virar o
          lilás pastel do original (que lá é desenhado via ::before no CSS). */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icon-grande.PNG"
          alt=""
          className="absolute -left-24 top-0 h-[42rem] max-w-none object-contain opacity-30"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Esquerda — cabeçalho */}
          <div className="lg:self-center">
            <p className="text-sm font-bold tracking-wide text-accent">
              {t.benefits.eyebrow}
            </p>
            <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              {t.benefits.title}
            </h2>
          </div>

          {/* Direita — lista de benefícios (cada um com o blob da marca) */}
          <ul className="space-y-8">
            {t.benefits.items.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/09.webp"
                  alt=""
                  className="mt-0.5 h-12 w-12 shrink-0 object-contain"
                  loading="lazy"
                />
                <p className="text-lg leading-relaxed text-slate-700">{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
