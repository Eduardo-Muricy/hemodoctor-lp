"use client";

import { useEffect, useRef, useState } from "react";
import { MdLanguage } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useLang, type Lang } from "../lib/i18n";

const options: { code: Lang; label: string }[] = [
  { code: "pt", label: "Português" },
  { code: "en", label: "English" },
];

export function LanguageSwitcher({ solid = false }: { solid?: boolean }) {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora
  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Selecionar idioma"
        className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-2 text-sm font-medium transition-colors ${
          solid
            ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
            : "text-white/90 hover:bg-white/10 hover:text-white"
        }`}
      >
        <MdLanguage className="h-5 w-5" aria-hidden />
        <span className="uppercase tracking-wide">{lang}</span>
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-50 mt-2 w-44 overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 p-1 text-white shadow-xl shadow-black/30 backdrop-blur-xl backdrop-saturate-150"
        >
          {options.map((opt) => {
            const active = lang === opt.code;
            return (
              <li key={opt.code}>
                <button
                  role="option"
                  aria-selected={active}
                  onClick={() => {
                    setLang(opt.code);
                    setOpen(false);
                  }}
                  className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-white/15 ${
                    active ? "bg-white/10 font-medium" : "text-white/85"
                  }`}
                >
                  {opt.label}
                  {active && <FiCheck className="h-4 w-4 text-emerald-400" aria-hidden />}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
