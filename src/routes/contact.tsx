import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Mugen.Codes | Mission-Critical Software Engineering" },
      { name: "description", content: "Contact Mugen.Codes for mission-critical software engineering, compliance support, aerospace, defense, and neurotechnology projects." },
      { property: "og:title", content: "Contact Mugen.Codes" },
      { property: "og:description", content: "Contact Mugen.Codes for mission-critical software engineering, compliance support, aerospace, defense, and neurotechnology projects." },
    ],
  }),
  component: Page,
});

const FAQS = [
  { q: "Is the initial consultation free?", a: "Yes. Initial technical consultations are provided at no cost and are designed to help both parties evaluate technical fit, operational requirements, and project complexity." },
  { q: "Can Mugen.Codes sign an NDA before discussing project details?", a: "Yes. Mutual non-disclosure agreements can be executed prior to detailed technical discussions involving confidential or regulated information." },
  { q: "Do you support secure communications for defense or regulated projects?", a: "Yes. PGP-encrypted email, Signal, and Wickr communication workflows are available for organizations requiring additional confidentiality and operational security." },
  { q: "What industries does Mugen.Codes support?", a: "We primarily support defense, aerospace, neurotechnology, and other high-compliance industries requiring mission-critical software engineering and verification-focused development practices." },
  { q: "Will I speak with engineers or sales representatives?", a: "Initial consultations are led by technical personnel familiar with engineering environments, compliance requirements, and operational constraints relevant to mission-critical systems." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Contact"
        title={<>Get in <span className="text-signal italic">touch</span>.</>}
        lede="Mugen.Codes works with organizations building mission-critical systems in defense, aerospace, neurotechnology, and other high-compliance environments. Whether you are exploring a new platform, modernizing legacy infrastructure, preparing for certification, or scaling an existing engineering initiative, our teams are available to discuss in a secure and structured environment."
      />

      <Section eyebrow="Direct Contact" title="Reach the engineering team.">
        <div className="grid gap-6 md:grid-cols-2">
          <a href="mailto:ceo@capa.cloud" className="panel p-8 hover:border-signal transition-colors">
            <p className="eyebrow">Encrypted Email</p>
            <p className="mt-4 font-display text-2xl">ceo@capa.cloud</p>
            <p className="mt-3 text-sm text-muted-foreground">PGP public key available upon request for sensitive technical discussions.</p>
          </a>
          <div className="panel p-8">
            <p className="eyebrow">Secure Messaging</p>
            <p className="mt-4 font-display text-2xl">Signal &amp; Wickr</p>
            <p className="mt-3 text-sm text-muted-foreground">Available for organizations requiring secure real-time coordination during early-stage project discussions. Request channel via email.</p>
          </div>
        </div>
      </Section>

      <Section eyebrow="Support Available For" title="What we support.">
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border rounded-md overflow-hidden">
          {[
            "Defense software consulting",
            "Space software engineering",
            "BCI software development",
            "Mission-critical modernization initiatives",
            "Verification-focused development workflows",
            "Compliance and certification support",
          ].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Confidentiality" title="NDA & secure workflows.">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="panel p-8">
            <p className="eyebrow">Encrypted Communication</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">PGP-encrypted email is available for technical discussions, documentation exchange, and project communication involving sensitive operational details.</p>
          </div>
          <div className="panel p-8">
            <p className="eyebrow">NDA & Confidentiality</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">We can execute mutual non-disclosure agreements prior to detailed technical discussions. Structured confidentiality workflows for high-trust engineering environments.</p>
          </div>
          <div className="panel p-8">
            <p className="eyebrow">24×7×365 Availability</p>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">Mission-critical programs do not always operate on standard schedules. Support workflows aligned with program-specific operational and response requirements.</p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="What to Expect"
        title="Technical conversations without sales pressure."
        intro="Initial consultations are focused on understanding your engineering environment, operational requirements, technical constraints, and compliance considerations. Our goal is to determine whether Mugen.Codes is the right technical fit for your organization."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          There is no hard-sell process or generic discovery script. Following the consultation, our teams provide a structured written summary outlining technical observations, potential engineering considerations, and recommended next steps where appropriate.
        </p>
      </Section>

      <Section eyebrow="FAQs" title="Frequently asked questions.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        title="Speak with our team."
        body="We deliver engineering support for high-consequence systems: defense software development, space software consulting, BCI development, verification-focused engineering, compliance support, and mission-critical modernization."
        primary={{ to: "mailto:ceo@capa.cloud", label: "Request a Technical Consultation" }}
      />
    </SiteLayout>
  );
}
