import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/mission-critical-software-company")({
  head: () => ({
    meta: [
      { title: "The Mission-Critical Software Development Company | Mugen.Codes" },
      { name: "description", content: "Mission-critical software engineering for defense, aerospace, autonomous systems, and neurotechnology environments requiring reliability." },
      { property: "og:title", content: "The Mission-Critical Software Development Company | Mugen.Codes" },
      { property: "og:description", content: "Mission-critical software engineering for defense, aerospace, autonomous systems, and neurotechnology environments requiring reliability." },
    ],
  }),
  component: Page,
});

const PILLARS = [
  { t: "Calm Delivery as a Service", b: "Calm delivery methodology built for high-consequence engineering environments where reliability matters more than release velocity. Written communication, verification-first workflows, controlled change management, explicit ownership, and long-term maintainability." },
  { t: "Senior Engineers for High-Stakes Development", b: "Mission-critical systems require experienced engineers in high-reliability environments with strict compliance. Mugen.Codes is built around senior talent with experience across aerospace, defense infrastructure, embedded software, real-time processing, and neurotechnology platforms." },
  { t: "Designed for Mission-Critical Environments", b: "Traditional software agencies optimize around speed and high-volume delivery. Mugen.Codes is designed for environments where reliability, traceability, and engineering discipline are operational requirements. Verification-focused development, structured documentation, stable ownership, predictable execution." },
];

const INDUSTRIES = [
  { to: "/defense-software-development", t: "Defense Software Engineering", b: "Mission-critical software for tactical systems, C4ISR platforms, embedded defense infrastructure, and secure operational environments." },
  { to: "/space-software-engineering", t: "Space Software Engineering", b: "Flight software, satellite platforms, mission operations infrastructure, and fault-tolerant aerospace systems engineered for long-duration missions." },
  { to: "/brain-computer-interface-software", t: "Brain-Computer Interface Software", b: "Real-time neural processing systems, closed-loop BCI infrastructure, and neurotechnology software for research and clinical environments." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Mission-Critical Software Company"
        title={<>The mission-critical <span className="text-signal italic">software development</span> company.</>}
        lede="Mugen.Codes develops mission-critical software for organizations operating in environments where software failure can result in loss of life, mission failure, operational compromise, or catastrophic financial impact."
        ctaPrimary={{ to: "/contact", label: "Book Consultation" }}
        ctaSecondary={{ to: "/portfolio", label: "View portfolio" }}
      />

      <Section
        eyebrow="What We Build"
        title="Software systems for environments where failure is not acceptable."
        intro="Mugen.Codes develops software systems for environments where operational failure is not acceptable. Our teams support projects involving autonomous systems, embedded software platforms, flight and satellite software, neural signal processing environments, secure operational infrastructure, and real-time processing systems."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          We engineer software designed to remain stable, maintainable, and operationally predictable across constrained hardware environments, long-duration deployments, and high-integrity operational workflows.
        </p>
        <Link to="/" className="mt-8 inline-flex btn-ghost">Learn more →</Link>
      </Section>

      <Section
        eyebrow="Why Different"
        title="Engineered for high-reliability environments."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {PILLARS.map((p) => (
            <div key={p.t} className="panel p-8">
              <h3 className="text-xl">{p.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{p.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Industries" title="Industries we support.">
        <div className="grid gap-6 lg:grid-cols-3">
          {INDUSTRIES.map((i) => (
            <Link key={i.to} to={i.to} className="panel p-8 hover:border-signal transition-colors block">
              <h3 className="text-xl">{i.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{i.b}</p>
              <div className="mt-8 font-mono text-xs uppercase tracking-wider text-signal">Explore →</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section eyebrow="How We Work" title="Verification-focused engineering.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-8">
            <p className="eyebrow">Compliance & Standards</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our teams are familiar with standards including MIL-STD-882E, DO-178C / DO-254, IEC 62304, NIST SSDF, ECSS-E-ST-40C, and ISO 13485 support environments across aerospace, defense, and neurotechnology systems.
            </p>
          </div>
          <div className="panel p-8">
            <p className="eyebrow">Our Expertise</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Senior-only engineering model with experience across aerospace software, defense infrastructure, embedded systems, autonomous platforms, real-time environments, and advanced neurotechnology applications.
            </p>
          </div>
        </div>
      </Section>

      <CTA
        title="We build mission-critical software that cannot fail."
        body="Mugen.Codes develops mission-critical software for defense systems, aerospace platforms, autonomous environments, and advanced neurotechnology applications where operational reliability is non-negotiable."
        primary={{ to: "/contact", label: "Book a Technical Consultation" }}
      />
    </SiteLayout>
  );
}
