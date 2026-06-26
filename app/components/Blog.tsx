"use client";

import { useLang } from "../lib/i18n";

// Posts do blog (conteúdo real em PT). Os links ainda não existem —
// os botões são placeholders até criarmos as rotas (/blog/[slug]).
const posts = [
  {
    image: "/female-nurse-older-woman-conversing-laptop-nursing-home-1-1024x684.webp",
    title:
      "IA na jornada diagnóstica de doenças hematológicas: uma revolução silenciosa, mas urgente",
    date: "04/06/2025",
    excerpt:
      "Imagine uma paciente idosa, na zona rural do Brasil, que procura o posto de saúde...",
  },
  {
    image: "/team-specialists-reviewing-ecg-results-meeting-private-clinic-1024x683.webp",
    title: "HemoDoctor: Uma solução integrada, impacto em toda a jornada de saúde",
    date: "25/04/2025",
    excerpt:
      "A inteligência artificial da HemoDoctor foi concebida para ser uma ferramenta versátil, capaz de otimizar...",
  },
  {
    image: "/scientist-is-analyzing-data-laptop-hightech-server-room-1024x574.webp",
    title:
      "HemoDoctor: A inteligência artificial que ilumina o caminho para o diagnóstico precoce em hematologia",
    date: "24/04/2025",
    excerpt:
      "Em um cenário onde a interpretação minuciosa do hemograma pode ser desafiadora para o clínico...",
  },
];

const ctaClass =
  "inline-flex cursor-pointer items-center justify-center rounded-full bg-accent text-sm font-semibold " +
  "text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover " +
  "hover:shadow-lg hover:shadow-accent/30";

export function Blog() {
  const { t } = useLang();

  return (
    <section id="blog" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        {/* Cabeçalho */}
        <div className="text-center">
          <p className="text-sm font-bold tracking-wide text-accent">{t.blog.eyebrow}</p>
          <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.blog.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <article key={i} className="flex flex-col overflow-hidden rounded-2xl bg-slate-50">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={post.image}
                alt={post.title}
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-slate-500">{post.date}</p>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.excerpt}</p>
                {/* mt-auto empurra o botão pro rodapé do card (alinha os 3) */}
                <div className="mt-auto pt-6">
                  <button type="button" className={`${ctaClass} px-6 py-3`}>
                    {t.blog.readMore}
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA geral */}
        <div className="mt-14 flex justify-center">
          <button type="button" className={`${ctaClass} px-8 py-4 text-base`}>
            {t.blog.more}
          </button>
        </div>
      </div>
    </section>
  );
}
