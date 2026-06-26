"use client";

import { useLang } from "../lib/i18n";

// Imagens na ordem do print (cada card usa a sua)
const images = [
  "/freepik__adjust__85803.webp", // Redes hospitalares (placa "+HOS")
  "/freepik__adjust__21698.webp", // Serviço Público (aperto de mãos)
  "/freepik__adjust__26891.webp", // Médicos (médico)
];

export function Solutions() {
  const { t } = useLang();

  return (
    <section id="solucoes" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold tracking-wide text-accent">
            {t.solutions.eyebrow}
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-4xl">
            {t.solutions.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {t.solutions.items.map((item, i) => (
            <article key={i} className="group flex flex-col">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={images[i]}
                  alt={item.title}
                  className="aspect-[3/4] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-accent">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 flex justify-center">
          <a
            href="#demonstracao"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30"
          >
            {t.solutions.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
