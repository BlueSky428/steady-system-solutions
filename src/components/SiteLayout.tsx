import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  eyebrow,
  title,
  intro,
  children,
  className = "",
}: {
  eyebrow?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <section className={`container-x py-20 md:py-28 ${className}`}>
      {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
      {title && <h2 className="text-3xl md:text-5xl max-w-3xl leading-[1.1]">{title}</h2>}
      {intro && <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground leading-relaxed">{intro}</p>}
      {children && <div className="mt-12">{children}</div>}
    </section>
  );
}

export function Hero({
  eyebrow,
  title,
  lede,
  bullets,
  ctaPrimary,
  ctaSecondary,
}: {
  eyebrow: string;
  title: ReactNode;
  lede: ReactNode;
  bullets?: string[];
  ctaPrimary?: { to: string; label: string };
  ctaSecondary?: { to: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-signal/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[24rem] w-[24rem] rounded-full bg-signal/5 blur-3xl" />
      </div>
      <div className="container-x relative pt-20 pb-24 md:pt-32 md:pb-32">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-6 text-4xl md:text-7xl max-w-5xl leading-[1.05]">{title}</h1>
        <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed">{lede}</p>
        {bullets && (
          <ul className="mt-10 grid gap-2 max-w-2xl text-sm font-mono text-muted-foreground">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <span className="mt-2 inline-block h-px w-4 bg-signal" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {(ctaPrimary || ctaSecondary) && (
          <div className="mt-12 flex flex-wrap gap-3">
            {ctaPrimary && (
              <a href={ctaPrimary.to} className="btn-signal">{ctaPrimary.label} →</a>
            )}
            {ctaSecondary && (
              <a href={ctaSecondary.to} className="btn-ghost">{ctaSecondary.label}</a>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export function FAQ({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((it) => (
        <details key={it.q} className="group py-6">
          <summary className="cursor-pointer list-none flex items-start justify-between gap-6">
            <span className="text-lg md:text-xl font-display">{it.q}</span>
            <span className="text-signal font-mono text-2xl leading-none transition-transform group-open:rotate-45">+</span>
          </summary>
          <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">{it.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CTA({
  eyebrow = "Next Step",
  title,
  body,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: string;
  body: string;
  primary: { to: string; label: string };
  secondary?: { to: string; label: string };
}) {
  return (
    <section className="container-x py-24">
      <div className="panel p-10 md:p-16 relative overflow-hidden">
        <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-signal/10 blur-3xl" />
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl md:text-5xl max-w-3xl leading-tight">{title}</h2>
        <p className="mt-6 max-w-2xl text-muted-foreground">{body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <a href={primary.to} className="btn-signal">{primary.label} →</a>
          {secondary && <a href={secondary.to} className="btn-ghost">{secondary.label}</a>}
        </div>
      </div>
    </section>
  );
}
