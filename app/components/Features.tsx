"use client";

import { useLang } from "../lib/i18n";

// Ícones na ordem (já vêm com o "blob" azul-claro embutido no SVG)
const icons = [
  "/ico-ia.svg",
  "/icon-doc.svg",
  "/phone.svg",
  "/dash.svg",
  "/time.svg",
];

// Índice do card que recebe o selo "Em breve" (TeleHemato)
const BADGE_INDEX = 2;

export function Features() {
  const { t } = useLang();

  return (
    <section id="sobre" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Bolhas decorativas (lilás), como no fundo do site original */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-violet-300/30 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-violet-300/30 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-accent">
            {t.features.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {t.features.title}
          </h2>
        </div>

        {/* Grade de cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.features.items.map((item, i) => (
            <article
              key={i}
              className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-slate-900/5"
            >
              {i === BADGE_INDEX && (
                <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 text-xs font-semibold text-white shadow-md">
                  {t.features.soon}
                </span>
              )}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={icons[i]}
                alt=""
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-base font-bold tracking-tight text-slate-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 flex justify-center">
          <a
            href="#demonstracao"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30"
          >
            {t.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
