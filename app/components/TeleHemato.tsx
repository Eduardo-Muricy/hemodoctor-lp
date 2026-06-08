"use client";

import { useEffect, useRef, useState } from "react";
import { useLang } from "../lib/i18n";

export function TeleHemato() {
  const { t } = useLang();
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="solucoes"
      ref={ref}
      className={`relative overflow-hidden bg-white py-20 sm:py-28 ${
        visible ? "is-visible" : ""
      }`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Esquerda — imagem (os blobs azuis já vêm embutidos no .webp) */}
          <div className="reveal-l flex justify-center lg:justify-start">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Grupo-115.webp"
              alt="Hematologista em atendimento remoto com notebook e headset"
              className="h-auto w-full max-w-md"
              loading="lazy"
            />
          </div>

          {/* Direita — texto + CTA */}
          <div className="reveal-r" style={{ transitionDelay: "120ms" }}>
            <p className="text-sm font-bold tracking-wide text-accent">
              {t.tele.eyebrow}
            </p>
            <h2 className="mt-3 max-w-md font-[family-name:var(--font-display)] text-3xl font-extrabold leading-[1.12] tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
              {t.tele.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-slate-600">
              {t.tele.text}
            </p>
            <a
              href="#demonstracao"
              className="mt-8 inline-flex items-center justify-center rounded-full border-2 border-blue-700 px-8 py-3.5 text-base font-semibold text-blue-700 transition-colors hover:border-accent hover:bg-accent hover:text-white"
            >
              {t.tele.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
