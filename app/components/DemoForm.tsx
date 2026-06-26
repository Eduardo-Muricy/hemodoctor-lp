"use client";

import { useState, type ReactNode } from "react";
import { useLang } from "../lib/i18n";

const inputClass =
  "w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 " +
  "placeholder:text-slate-400 transition-colors focus:border-accent focus:bg-white " +
  "focus:outline-none focus:ring-2 focus:ring-accent/25";

export function DemoForm() {
  const { t } = useLang();
  const f = t.form.fields;
  const [sent, setSent] = useState(false);

  return (
    <section id="demonstracao" className="relative overflow-hidden bg-white py-20 sm:py-28">
      {/* Marca grande, saturada (sem opacity), sangrando no canto inferior direito */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/icon-grande.PNG"
        alt=""
        className="pointer-events-none absolute -bottom-28 -right-24 hidden w-[24rem] max-w-none select-none lg:block xl:w-[30rem]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl">
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {t.form.titleBefore}{" "}
            <span className="italic text-accent">Hemodoctor</span>{" "}
            {t.form.titleAfter}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            {t.form.subtitle}
          </p>

          {sent ? (
            <div className="mt-8 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 text-emerald-800">
              <svg className="mt-0.5 h-5 w-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              <p className="text-sm leading-relaxed">{t.form.success}</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                // Sem backend ainda: só mostra o sucesso.
                // (Próximo passo real: Route Handler em app/api/demo/route.ts)
                setSent(true);
              }}
              className="mt-8 space-y-5"
            >
              <Field label={f.name}>
                <input type="text" name="name" required className={inputClass} />
              </Field>
              <Field label={f.email}>
                <input type="email" name="email" required className={inputClass} />
              </Field>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={f.phone}>
                  <input type="tel" name="phone" required className={inputClass} />
                </Field>
                <Field label={f.role}>
                  <input type="text" name="role" required className={inputClass} />
                </Field>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field label={f.company}>
                  <input type="text" name="company" required className={inputClass} />
                </Field>
                <Field label={f.segment}>
                  <input type="text" name="segment" required className={inputClass} />
                </Field>
              </div>

              <Field label={f.message}>
                <textarea name="message" rows={4} required className={`${inputClass} resize-y`} />
              </Field>

              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-base font-semibold text-white transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/30"
              >
                {t.form.submit}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

// Rótulo + campo. O <label> envolve o input: clicar no texto foca o campo.
function Field({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium text-slate-700">
        {label} <span className="text-accent">*</span>
      </span>
      {children}
    </label>
  );
}
