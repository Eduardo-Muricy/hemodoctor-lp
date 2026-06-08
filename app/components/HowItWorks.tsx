"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/i18n";

// Blobs = a forma orgânica da marca (09.webp), recolorida para branco translúcido
// (brightness-0 + invert) e suavizada. Cada um: posição, rotação/flip, opacidade e ritmo.
const blobs = [
  { wrap: "h-72 w-72 -left-16 top-[10vh]", img: "rotate-[10deg]", op: "opacity-50", delay: "0s", dur: "11s" },
  { wrap: "h-[26rem] w-[26rem] -left-28 bottom-[-8rem]", img: "-rotate-12 scale-x-[-1]", op: "opacity-60", delay: "1.2s", dur: "14s" },
  { wrap: "h-72 w-72 left-1/4 bottom-[-7rem]", img: "rotate-[130deg]", op: "opacity-40", delay: "2.2s", dur: "16s" },
  { wrap: "h-56 w-56 -right-10 top-[8vh]", img: "rotate-[210deg]", op: "opacity-40", delay: "0.7s", dur: "12s" },
  { wrap: "h-52 w-52 right-1/4 bottom-[-5rem]", img: "rotate-[70deg] scale-x-[-1]", op: "opacity-30", delay: "1.8s", dur: "13s" },
];

export function HowItWorks() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="como-funciona" ref={ref} className={`relative ${visible ? "is-visible" : ""}`}>
      {/* Fundo PRESO à viewport (parallax): camada fixa, atrás de tudo (-z-10),
          visível só enquanto a seção está na tela. As seções vizinhas (opacas)
          cobrem o resto; só esta seção (transparente) revela o fundo. */}
      <div
        aria-hidden
        className={`pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-700 ${
          inView ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: "linear-gradient(90deg,#b384d3 0%,#7a63d0 45%,#3027c8 100%)",
        }}
      >
        {blobs.map((b, i) => (
          <div
            key={i}
            className={`float-anim absolute ${b.wrap}`}
            style={{ animationDelay: b.delay, animationDuration: b.dur }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/09.webp"
              alt=""
              className={`h-full w-full object-contain blur-xl brightness-0 invert ${b.img} ${b.op}`}
            />
          </div>
        ))}
      </div>

      {/* Conteúdo (rola por cima do fundo fixo) */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Esquerda — cabeçalho */}
          <div className="reveal-l">
            <p className="inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.2em] text-white/80">
              <span className="h-px w-8 bg-accent" />
              {t.how.eyebrow}
            </p>
            <h2 className="mt-5 font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
              {t.how.title}
            </h2>
          </div>

          {/* Direita — timeline com círculos numerados */}
          <ol className="reveal-r" style={{ transitionDelay: "120ms" }}>
            {t.how.steps.map((step, i) => {
              const last = i === t.how.steps.length - 1;
              return (
                <li key={i} className="flex gap-5">
                  {/* número + linha conectora */}
                  <div className="flex flex-col items-center">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-white/60 font-[family-name:var(--font-display)] text-lg font-bold text-white">
                      {i + 1}
                    </span>
                    {!last && <span className="my-2 w-px flex-1 bg-white/30" />}
                  </div>

                  {/* texto */}
                  <div className={last ? "pt-1" : "pb-8 pt-1"}>
                    <h3 className="font-[family-name:var(--font-display)] text-lg font-bold leading-snug text-white sm:text-xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                      {step.text}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
