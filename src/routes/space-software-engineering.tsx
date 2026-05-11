import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/space-software-engineering")({
  head: () => ({
    meta: [
      { title: "Flight-Proven Space Software Engineering Services | Mugen.Codes" },
      { name: "description", content: "Space software engineering for flight systems, satellites, ground infrastructure, and real-time aerospace platforms built for reliability." },
      { property: "og:title", content: "Flight-Proven Space Software Engineering | Mugen.Codes" },
      { property: "og:description", content: "Space software engineering for flight systems, satellites, ground infrastructure, and real-time aerospace platforms built for reliability." },
    ],
  }),
  component: Page,
});

const FAQS = [
  { q: "What types of space software does Mugen.Codes develop?", a: "Mugen.Codes develops flight software, satellite software, embedded aerospace systems, mission control infrastructure, telemetry platforms, onboard processing systems, and deep-space mission software for commercial and government aerospace programs." },
  { q: "Do you support aerospace standards like DO-178C and ECSS?", a: "Yes. Our teams are familiar with aerospace engineering workflows aligned with DO-178C, DO-254, ECSS-E-ST-40C, NASA NPR 7150.2, CCSDS protocols, and other mission-assurance and verification-focused development practices." },
  { q: "Can Mugen.Codes work with existing satellite or legacy aerospace systems?", a: "Yes. We support modernization efforts involving legacy embedded systems, onboard software upgrades, mission operations infrastructure, and long-lifecycle aerospace platforms requiring reliable integration and maintainability." },
  { q: "What technologies and platforms do your aerospace teams support?", a: "Our teams work with technologies including cFS (Core Flight System), Fprime (F'), VxWorks, RTEMS, Linux with PREEMPT_RT, embedded Linux environments, telemetry systems, and real-time aerospace software platforms." },
  { q: "How does Mugen.Codes reduce operational risk for space missions?", a: "Our engineering approach focuses on deterministic behavior, structured verification workflows, fault-tolerant architecture, graceful anomaly recovery, and long-term maintainability to reduce the likelihood of operational failures after deployment." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Space Software Engineering"
        title={<>Flight-proven <span className="text-signal italic">space software</span> engineering.</>}
        lede="Mugen.Codes develops mission-critical space software for satellites, onboard systems, mission operations infrastructure, and deep-space platforms operating in high-reliability environments. We support aerospace companies, satellite operators, launch providers, and advanced space programs requiring secure, fault-tolerant software for long-duration missions."
        ctaPrimary={{ to: "/contact", label: "Book a Consultation" }}
        ctaSecondary={{ to: "/", label: "Back to home" }}
      />

      <Section
        eyebrow="Calm Delivery"
        title="Why calm delivery reduces in-orbit surprises."
        intro="Traditional software delivery practices are not designed for orbital environments. Space systems require structured engineering discipline, operational predictability, rigorous validation, and controlled change management because rushed software decisions can become mission-critical failures after deployment."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          Mugen.Codes uses a senior-only engineering model focused on calm, verification-driven software delivery. Our approach emphasizes written technical communication, explicit ownership, verification-focused workflows, and long-term maintainability to reduce operational risk before launch.
        </p>
        <a href="/contact" className="mt-8 inline-flex btn-ghost">Get in touch →</a>
      </Section>

      <Section eyebrow="Standards & Verification" title="Aerospace standards, verification & fault-tolerant engineering.">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-8">
            <p className="eyebrow">Aerospace Standards & Mission Assurance</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our teams are familiar with DO-178C and DO-254 workflows up to Level A/B, ECSS-E-ST-40C, NASA NPR 7150.2, CCSDS communication protocols, cFS (Core Flight System), and Fprime (F´).
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We understand the documentation, traceability, and engineering discipline required for aerospace systems where software reliability directly impacts mission continuity.
            </p>
          </div>
          <div className="panel p-8">
            <p className="eyebrow">Fault-Tolerant & Radiation-Aware Software</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Space systems must continue operating under degraded conditions and unexpected anomalies. Our engineering approach prioritizes graceful reboot handling, watchdog management, fault isolation, autonomous recovery workflows, deterministic system behavior, and radiation-aware operational resilience.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Where required, we support formal methods using technologies such as SPARK/Ada and TLA+ to improve fault protection and reduce operational risk before launch.
            </p>
          </div>
        </div>
      </Section>

      <Section eyebrow="FAQs" title="Aerospace engineering questions.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        title="Engineering support for your next mission."
        body="Mugen.Codes supports aerospace organizations building flight software, satellite platforms, embedded space systems, mission control infrastructure, autonomous spacecraft software, and deep-space operational systems."
        primary={{ to: "/contact", label: "Contact Us About Your Next Mission" }}
        secondary={{ to: "/compliance-certifications-defense-space-bci", label: "DO-178C support" }}
      />
    </SiteLayout>
  );
}
