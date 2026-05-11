import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/defense-software-development")({
  head: () => ({
    meta: [
      { title: "Defense Software Development Company | Mugen.Codes" },
      { name: "description", content: "Mission-critical defense software development for C4ISR, embedded systems, tactical AI, and secure real-time operational platforms." },
      { property: "og:title", content: "Defense Software Development Company | Mugen.Codes" },
      { property: "og:description", content: "Mission-critical defense software development for C4ISR, embedded systems, tactical AI, and secure real-time operational platforms." },
    ],
  }),
  component: Page,
});

const SERVICES = [
  {
    title: "Embedded & Mission-Critical Systems",
    body: "Military embedded software for tactical systems, onboard processing platforms, and secure communications infrastructure. Deterministic performance, low-latency execution, long-term maintainability.",
    bullets: ["Real-time embedded software engineering", "Tactical edge computing systems", "Secure communications integration", "Sensor fusion and onboard processing", "Legacy defense system modernization"],
  },
  {
    title: "C4ISR & Tactical Software Platforms",
    body: "Command, control, communications, intelligence, surveillance, and reconnaissance initiatives requiring secure, real-time operational software.",
    bullets: ["Sensor fusion", "Tactical visualization", "Secure operational data pipelines", "Situational awareness", "Mission coordination", "Resilient communications"],
  },
  {
    title: "Defense Cybersecurity & DevSecOps",
    body: "Defense-focused DevSecOps workflows aligned with modern cybersecurity and software assurance practices. Secure CI/CD, infrastructure hardening, audit-ready processes.",
    bullets: ["NIST SSDF", "RMF", "DISA STIGs", "Zero-trust architecture", "Secure software supply chain"],
  },
];

const FAQS = [
  { q: "Can Mugen.Codes support ITAR-aware or regulated defense projects?", a: "Yes. Our engineering workflows are designed to support high-compliance environments requiring controlled access, secure development practices, auditability, and documentation discipline aligned with defense industry expectations." },
  { q: "Do you work with legacy defense systems?", a: "Yes. We support modernization initiatives involving legacy embedded systems, mission computers, tactical platforms, and aging operational infrastructure that require secure upgrades without disrupting existing workflows." },
  { q: "What types of defense software do you develop?", a: "We develop mission-critical software for embedded systems, C4ISR platforms, tactical AI, real-time operational systems, secure logistics infrastructure, and defense-focused backend platforms." },
  { q: "Can your team integrate with existing defense contractors or internal engineering teams?", a: "Yes. Mugen.Codes frequently operates as a technical partner alongside internal engineering teams, defense integrators, and program stakeholders during both short-term and long-term engagements." },
  { q: "What makes Mugen.Codes different from traditional software development firms?", a: "Our engineering approach is built specifically for high-reliability and high-compliance environments. We prioritize structured communication, senior-only execution, long-term maintainability, and operational reliability over rapid delivery cycles." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Defense Software Engineering"
        title={<>Mission-ready <span className="text-signal italic">defense software</span> development.</>}
        lede="Mugen.Codes develops mission-critical software systems for defense contractors, aerospace programs, and government technology initiatives operating in high-security, high-reliability environments. We build secure embedded platforms, C4ISR software, real-time mission systems, and defense infrastructure for long operational lifecycles."
        ctaPrimary={{ to: "/contact", label: "Request a DFARS-Compliant Quote" }}
        ctaSecondary={{ to: "/", label: "Back to home" }}
      />

      <Section
        eyebrow="Built For"
        title="Software for high-stakes defense environments."
        intro="Mugen.Codes develops defense software engineered for reliability, auditability, and operational continuity in environments where uptime and predictability directly impact mission success."
      >
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border rounded-md overflow-hidden">
          {["Military embedded software","C4ISR software","Real-time defense systems","Secure software for defense operations","DevSecOps for DoD environments","Mission-critical modernization"].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Services" title="Defense software engineering services.">
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="panel p-8 flex flex-col">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.body}</p>
              <ul className="mt-6 space-y-2 text-sm font-mono text-muted-foreground flex-1">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2"><span className="text-signal">·</span>{b}</li>
                ))}
              </ul>
              <a href="/contact" className="mt-8 font-mono text-xs uppercase tracking-wider text-signal hover:underline">Book Technical Consultation →</a>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Defense engineering questions.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        eyebrow="Request a DFARS-Compliant Quote"
        title="Engineering support for defense modernization."
        body="Mugen.Codes provides engineering support for organizations modernizing legacy defense infrastructure, developing tactical AI systems, and building mission-critical software for secure, high-compliance environments."
        primary={{ to: "/contact", label: "Request a Technical Consultation" }}
        secondary={{ to: "/compliance-certifications-defense-space-bci", label: "Compliance support" }}
      />
    </SiteLayout>
  );
}
