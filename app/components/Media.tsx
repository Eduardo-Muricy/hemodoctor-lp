"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useLang } from "../lib/i18n";

// Menções na imprensa (logo + frase + link da matéria). São reais, em PT,
// então não vão pro dicionário de tradução.
const items = [
  {
    logo: "/correios-brasiliense.PNG",
    quote: "Anemia: veja quando a falta de ferro esconde doenças mais sérias",
    link: "https://www.correiobraziliense.com.br/revista-do-correio/2025/12/7312936-anemia-veja-quando-a-falta-de-ferro-esconde-doencas-mais-serias.html",
  },
  {
    logo: "/estado-de-minas.PNG",
    quote: "Leucemia infantil: inteligência artificial pode ajudar no diagnóstico?",
    link: "https://www.em.com.br/saude/2025/10/7262387-leucemia-infantil-inteligencia-artificial-pode-ajudar-no-diagnostico.html",
  },
  {
    logo: "/infomoney.PNG",
    quote: "Startup pernambucana testa IA para diagnóstico precoce de leucemia no SUS",
    link: "https://www.infomoney.com.br/saude/startup-pernambucana-testa-ia-para-diagnostico-precoce-de-leucemia-no-sus/",
  },
  {
    logo: "/veja.PNG",
    quote: "IA nos hospitais: ferramenta ajuda a diagnosticar doenças do sangue",
    link: "https://veja.abril.com.br/saude/ia-nos-hospitais-ferramenta-ajuda-a-diagnosticar-doencas-do-sangue/",
  },
  {
    logo: "/impactstartup.PNG",
    quote: "Uma startup de impacto pelos critérios da ONU",
    link: "https://rio.websummit.com/appearances/rio25/40b7f95a-7b59-4f83-af97-e9cdbf3e275c/hemodoctor/",
  },
  {
    logo: "/medicinasa.PNG",
    quote: "Como a inteligência artificial pode fortalecer a atenção primária",
    link: "https://medicinasa.com.br/ia-atencao-primaria/",
  },
];

const arrowBtn =
  "absolute top-1/2 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full " +
  "border border-slate-200 bg-white text-slate-600 shadow-sm transition-colors hover:border-accent hover:text-accent sm:flex";

export function Media() {
  const { t } = useLang();

  // loop: volta ao início; o plugin Autoplay passa sozinho (pausando no hover).
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [
    Autoplay({ delay: 4500, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);

  const [selected, setSelected] = useState(0);
  const [snaps, setSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((i: number) => emblaApi?.scrollTo(i), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const update = () => {
      setSnaps(emblaApi.scrollSnapList());
      setSelected(emblaApi.selectedScrollSnap());
    };
    update();
    emblaApi.on("select", update);
    emblaApi.on("reInit", update);
    return () => {
      emblaApi.off("select", update);
      emblaApi.off("reInit", update);
    };
  }, [emblaApi]);

  return (
    <section id="midia" className="bg-white py-20 sm:py-24">
      {/* Cabeçalho */}
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm font-bold tracking-wide text-accent">{t.media.eyebrow}</p>
        <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
          {t.media.title}
        </h2>
      </div>

      {/* Faixa cinza com o carrossel */}
      <div className="mt-12 bg-[#ececec] py-20">
        <div className="relative mx-auto max-w-6xl px-4 sm:px-12 lg:px-16">
          {/* Seta esquerda */}
          <button type="button" onClick={scrollPrev} aria-label="Anterior" className={`${arrowBtn} left-2 sm:left-4`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Viewport do Embla */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {items.map((it, i) => (
                <div key={i} className="min-w-0 flex-[0_0_100%] px-8 md:flex-[0_0_50%]">
                  <a
                    href={it.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex h-full flex-col items-center justify-between gap-10 text-center"
                  >
                    <p className="text-xl font-medium italic leading-snug text-slate-600 transition-colors group-hover:text-slate-900 sm:text-2xl">
                      “{it.quote}”
                    </p>
                    <span className="h-px w-16 bg-slate-300" />
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={it.logo}
                      alt=""
                      draggable={false}
                      loading="lazy"
                      className="h-16 w-auto max-w-[240px] object-contain opacity-80 transition-opacity group-hover:opacity-100 sm:h-20 sm:max-w-[280px]"
                    />
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Seta direita */}
          <button type="button" onClick={scrollNext} aria-label="Próximo" className={`${arrowBtn} right-2 sm:right-4`}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="mt-10 flex items-center justify-center gap-2">
            {snaps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => scrollTo(i)}
                aria-label={`Ir para o slide ${i + 1}`}
                className={`h-2 rounded-full transition-all ${
                  i === selected ? "w-5 bg-accent" : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
