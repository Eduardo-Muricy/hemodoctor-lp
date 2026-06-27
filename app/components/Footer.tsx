"use client";

import Link from "next/link";
import Image from "next/image";
import { useLang } from "../lib/i18n";

const EMAIL = "contato@hemodoctor.com";

export function Footer() {
  const { t } = useLang();
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0e1033] via-[#1b1c52] to-[#2a1c5e] text-white">
      {/* Glows decorativos sutis */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-purple-500/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1.2fr_1fr]">
          {/* Marca + tagline */}
          <div>
            <Image
              src="/cropped-logo-light-200x31.webp"
              alt="Hemodoctor"
              width={200}
              height={31}
              className="h-7 w-auto"
            />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/70">
              {t.footer.tagline}
            </p>
          </div>

          {/* Navegação */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {t.footer.nav}
            </h3>
            <ul className="mt-5 space-y-3">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={`/${item.href}`}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {t.footer.contact}
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li>
                <a href={`mailto:${EMAIL}`} className="transition-colors hover:text-white">
                  {EMAIL}
                </a>
              </li>
              <li className="max-w-xs leading-relaxed">{t.footer.address}</li>
            </ul>
          </div>

          {/* Startup incubada */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-white/90">
              {t.footer.incubated}
            </h3>
            {/* Insper é um logo escuro → embranquecido via filtro pra aparecer no fundo escuro */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/insper.webp"
              alt="Insper"
              className="mt-5 h-10 w-auto opacity-90 brightness-0 invert"
            />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 sm:flex-row">
          <p className="text-xs text-white/60">
            © {year} Hemodoctor. {t.footer.rights}
          </p>
          <Link
            href="/politica-de-privacidade"
            className="text-xs text-white/60 transition-colors hover:text-white"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
