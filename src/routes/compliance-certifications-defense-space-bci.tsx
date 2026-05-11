import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/compliance-certifications-defense-space-bci")({
  head: () => ({
    meta: [
      { title: "Compliance & Certification Support for Critical Software | Mugen.Codes" },
      { name: "description", content: "Compliance and certification support for aerospace, defense, MedTech, and mission-critical software environments requiring verification." },
      { property: "og:title", content: "Compliance & Certification Support | Mugen.Codes" },
      { property: "og:description", content: "Compliance and certification support for aerospace, defense, MedTech, and mission-critical software environments requiring verification." },
    ],
  }),
  component: Page,
});

const SERVICES = [
  {
    t: "Aerospace & Flight Software Compliance",
    b: "Aerospace software initiatives aligned with DO-178C, DO-254, ECSS-E-ST-40C, NASA NPR 7150.2, and mission-assurance engineering. Documentation workflows, verification planning, traceability support, fault-tolerant engineering, long-lifecycle aerospace environments.",
  },
  {
    t: "Defense & Government Engineering Workflows",
    b: "Structured engineering discipline, operational traceability, and secure development practices aligned with modern defense expectations. Familiar with MIL-STD-882E, NIST SSDF, RMF-oriented workflows, secure SDLC practices, audit-ready documentation.",
  },
  {
    t: "Medical & Neurotechnology Software Support",
    b: "Neurotechnology and medical software initiatives requiring structured development and reproducibility-focused workflows. IEC 62304 software lifecycle, ISO 13485-aligned, investigational device support, and compliance-oriented documentation.",
  },
];

const FAQS = [
  { q: "What types of compliance and certification support does Mugen.Codes provide?", a: "Mugen.Codes supports organizations requiring structured engineering workflows aligned with standards such as DO-178C, DO-254, MIL-STD-882E, IEC 62304, NIST SSDF, and FDA software validation guidance for mission-critical software environments." },
  { q: "Can Mugen.Codes help prepare documentation and evidence for certification reviews?", a: "Yes. Our teams support the development of traceability systems, verification documentation, validation reports, software development plans, hazard analysis artifacts, and audit-ready engineering evidence." },
  { q: "Do you support both defense and medical software environments?", a: "Yes. We support defense, aerospace, neurotechnology, and medical software initiatives requiring verification-focused engineering practices and structured documentation workflows." },
  { q: "How does Mugen.Codes reduce certification and compliance costs?", a: "We integrate verification, traceability, and documentation discipline directly into the engineering lifecycle from the beginning of development. This reduces rework, improves audit readiness, and minimizes the operational overhead of late-stage compliance efforts." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Compliance & Certification"
        title={<>Compliance &amp; certification support for <span className="text-signal italic">critical software</span>.</>}
        lede="Mugen.Codes provides compliance and certification support for organizations developing mission-critical software in regulated and high-consequence environments. Defense, aerospace, neurotechnology, and MedTech teams requiring structured workflows, verification evidence, traceability, and audit-ready documentation."
        ctaPrimary={{ to: "/contact", label: "Request a Compliance Gap Analysis" }}
        ctaSecondary={{ to: "/", label: "Back to home" }}
      />

      <Section
        eyebrow="High-Compliance Environments"
        title="Engineering support beyond functional code."
        intro="Mission-critical software systems require more than functional code. Organizations operating in defense, aerospace, medical technology, and high-integrity environments must maintain traceability, verification discipline, structured change management, and audit-ready engineering processes throughout the lifecycle."
      >
        <ul className="grid gap-px sm:grid-cols-2 bg-border border border-border rounded-md overflow-hidden">
          {[
            "Verification-focused development workflows",
            "Compliance-oriented software practices",
            "Structured validation processes",
            "Requirements traceability",
            "Controlled documentation environments",
            "Long-term maintainability planning",
            "Auditability across the software lifecycle",
          ].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
        <a href="/contact" className="mt-8 inline-flex btn-ghost">Speak With a Compliance Specialist →</a>
      </Section>

      <Section eyebrow="Services" title="Compliance & certification support services.">
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.t} className="panel p-8 flex flex-col">
              <h3 className="text-xl">{s.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{s.b}</p>
              <a href="/contact" className="mt-8 font-mono text-xs uppercase tracking-wider text-signal hover:underline">Speak With an Expert →</a>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Documentation"
        title="Documentation & traceability support."
        intro="Mission-critical environments require engineering documentation that remains usable long after deployment."
      >
        <ul className="grid gap-px sm:grid-cols-2 bg-border border border-border rounded-md overflow-hidden">
          {[
            "Requirements traceability matrices",
            "Verification documentation",
            "Engineering change records",
            "Audit-ready development workflows",
            "Structured test documentation",
            "Operational handoff documentation",
            "Long-lifecycle maintenance planning",
          ].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Process"
        title="Compliance is integrated, not appended."
        intro="Mugen.Codes integrates verification-focused engineering practices throughout the software lifecycle to improve reliability, traceability, and operational predictability before deployment."
      >
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border rounded-md overflow-hidden">
          {[
            "Structured validation workflows",
            "Deterministic system behavior",
            "Controlled change management",
            "Explicit ownership and accountability",
            "Traceable engineering decisions",
            "Verification-first development",
          ].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="FAQs" title="Compliance questions.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        title="Support for your next compliance-critical project."
        body="Mugen.Codes supports organizations developing aerospace and flight software, defense operational systems, neurotechnology platforms, embedded mission-critical environments, and high-integrity software infrastructure."
        primary={{ to: "/contact", label: "Schedule a Compliance Engineering Consultation" }}
      />
    </SiteLayout>
  );
}
