"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { useLang } from "../lib/i18n";

export function Header() {
  const { t } = useLang();
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Vira "sólida" (vidro branco) ao sair do hero (vídeo) e entrar nas seções claras.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight - 90);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll do body com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const pill = solid
    ? "border-slate-200 bg-white/80 text-slate-900 shadow-[0_10px_30px_-14px_rgba(0,0,0,0.25)]"
    : "border-white/20 bg-white/10 text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.35),0_12px_30px_-12px_rgba(0,0,0,0.45)]";

  const navLink = solid
    ? "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
    : "text-white/85 hover:bg-white/10 hover:text-white";

  const iconBtn = solid ? "text-slate-700 hover:bg-slate-100" : "text-white hover:bg-white/10";

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Pílula */}
        <div
          className={`relative mt-4 flex h-14 items-center justify-between gap-4 rounded-full border pl-5 pr-2 backdrop-blur-xl backdrop-saturate-150 transition-colors duration-300 ${pill}`}
        >
          {/* brilho superior do vidro (só sobre o vídeo) */}
          {!solid && (
            <span
              aria-hidden
              className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-white/15 to-transparent"
            />
          )}

          {/* Logo — troca claro/escuro conforme o fundo (ambos pré-carregados) */}
          <Link
            href="#top"
            className="relative z-10 flex items-center"
            aria-label="Hemodoctor — início"
          >
            <Image
              src="/cropped-logo-light-200x31.webp"
              alt="Hemodoctor"
              width={200}
              height={31}
              priority
              className={`h-7 w-auto ${solid ? "hidden" : "block"}`}
            />
            <Image
              src="/logo-300x47.webp"
              alt="Hemodoctor"
              width={300}
              height={47}
              priority
              className={`h-7 w-auto ${solid ? "block" : "hidden"}`}
            />
          </Link>

          {/* Navegação (desktop) */}
          <nav className="relative z-10 hidden items-center gap-0.5 lg:flex">
            {t.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${navLink}`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Ações */}
          <div className="relative z-10 flex items-center gap-1">
            <LanguageSwitcher solid={solid} />

            <Link
              href="#demonstracao"
              className="ml-1 hidden rounded-full bg-accent px-4 py-2 text-sm font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30 sm:inline-flex"
            >
              {t.cta}
            </Link>

            {/* Hambúrguer (mobile) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden ${iconBtn}`}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
              </svg>
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {open && (
          <nav
            className={`mt-2 overflow-hidden rounded-3xl border p-2 backdrop-blur-xl backdrop-saturate-150 lg:hidden ${
              solid
                ? "border-slate-200 bg-white/90 text-slate-900 shadow-xl"
                : "border-white/20 bg-slate-900/70 text-white"
            }`}
          >
            {t.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`block rounded-2xl px-4 py-3 text-base font-medium transition-colors ${
                  solid ? "text-slate-700 hover:bg-slate-100" : "text-white/90 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#demonstracao"
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-2xl bg-accent px-4 py-3 text-center text-base font-semibold text-white transition-all duration-200 ease-out hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30"
            >
              {t.cta}
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
