"use client";

import { useLang } from "../lib/i18n";

// Nomes e fotos ficam aqui (pessoas reais, não traduzem). Os cargos vêm do
// dicionário (t.team.roles), indexados na mesma ordem — assim traduzem no EN.
const members = [
  { image: "/Image_20251007_103715_915.webp", name: "Abel Costa" },
  { image: "/Image_20250217_105508_130.webp", name: "Lucyo Diniz" },
  { image: "/raphael.webp", name: "Raphael Saraiva" },
];

export function Team() {
  const { t } = useLang();

  return (
    <section id="equipe" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold tracking-wide text-accent">{t.team.eyebrow}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.15] tracking-tight text-slate-900 sm:text-4xl">
            {t.team.title}
          </h2>
        </div>

        {/* Membros */}
        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {members.map((m, i) => (
            <article key={i} className="flex flex-col">
              <div className="overflow-hidden rounded-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={m.image}
                  alt={m.name}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale"
                />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-display)] text-xl font-bold tracking-tight text-accent">
                {m.name}
              </h3>
              <p className="mt-2 text-base leading-relaxed text-slate-600">{t.team.roles[i]}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
