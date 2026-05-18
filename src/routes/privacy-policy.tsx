import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Mugen.Codes" },
      {
        name: "description",
        content:
          "How Mugen.Codes collects, uses, and protects information in the course of mission-critical software development and consultancy services.",
      },
      { property: "og:title", content: "Privacy Policy | Mugen.Codes" },
      {
        property: "og:description",
        content:
          "How Mugen.Codes collects, uses, and protects information in the course of mission-critical software development and consultancy services.",
      },
    ],
  }),
  component: Page,
});

const COLLECT_ITEMS = [
  {
    title: "Personal Information",
    body: "Personal information such as name, email, and company.",
  },
  {
    title: "Consultation Data",
    body: "Information shared during initial consultation calls to understand your objectives and requirements.",
  },
  {
    title: "Project Requirements",
    body: "Data gathered through structured interviews and documented findings intended for project scope.",
  },
  {
    title: "System Documentation",
    body: "Technical details and architecture plans required to build and maintain your specific software solutions.",
  },
];

const USE_ITEMS = [
  {
    title: "Project Execution",
    body: "To translate your objectives into formal agreement documents and technical architectures.",
  },
  {
    title: "Communication",
    body: "To provide consistent updates through a dedicated project manager who serves as your primary point of contact.",
  },
  {
    title: "Ongoing Support",
    body: "To provide post-launch maintenance, bug fixes, and system optimization.",
  },
];

const RIGHTS_ITEMS = [
  "Access and correction of your personal information on request",
  "Opt-out of marketing communications via unsubscribe instructions",
  "Services intended for professional software development—not directed at children under 13",
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Legal"
        title={
          <>
            Privacy <span className="text-signal italic">Policy</span>
          </>
        }
        lede="How Mugen.Codes handles information in the course of software development and consultancy services—for predictable delivery, maintainable systems, and strict data segregation in regulated environments."
        ctaPrimary={{ to: "/contact", label: "Contact the team" }}
        ctaSecondary={{ to: "/", label: "Back to home" }}
      />

      <Section
        eyebrow="Overview"
        title="Information handling for mission-critical engagements."
        intro="Welcome to Mugen Codes (“we” or “us” or “our”). We are a team of senior engineers providing reliable software delivery for critical systems, specializing in architecture, documentation, and safe delivery practices. This Privacy Policy describes how we handle information in the course of our software development and consultancy services."
      />

      <Section
        eyebrow="Information We Collect"
        title="Data necessary for senior-level execution."
        intro="We collect information necessary to provide senior-level software execution and project management."
      >
        <div className="grid gap-6 sm:grid-cols-2">
          {COLLECT_ITEMS.map((item) => (
            <div key={item.title} className="panel p-8">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Use Your Information"
        title="Predictable delivery and maintainable systems."
        intro="Your information is used to ensure predictable delivery and maintainable systems throughout the engagement lifecycle."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {USE_ITEMS.map((item) => (
            <div key={item.title} className="panel p-8 flex flex-col">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{item.body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Disclosure" title="When information may be disclosed.">
        <div className="panel p-8 max-w-3xl">
          <p className="eyebrow">Legal Requirements</p>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            We may disclose information if required by law or to protect the safety and security of the
            website.
          </p>
        </div>
      </Section>

      <Section
        eyebrow="Data Security"
        title="Strict segregation for regulated programs."
        intro="We operate under strict data segregation aligned with defense, space, and neurotechnology compliance requirements."
      >
        <div className="panel p-8 md:p-10 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-signal/10 blur-3xl pointer-events-none" />
          <p className="relative max-w-3xl text-muted-foreground leading-relaxed">
            For ITAR‑restricted defense projects, we use dedicated, audited environments with access
            limited to US‑persons (if required). EAR‑controlled space/BCI data is similarly isolated. We
            sign DD2345 and MPAs as needed.
          </p>
          <Link
            to="/compliance-certifications-defense-space-bci"
            className="relative mt-8 inline-flex font-mono text-xs uppercase tracking-wider text-signal hover:underline"
          >
            Compliance &amp; certification support →
          </Link>
        </div>
      </Section>

      <Section eyebrow="Your Rights" title="Access, correction, and communication preferences.">
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border rounded-md overflow-hidden">
          {RIGHTS_ITEMS.map((item) => (
            <li key={item} className="bg-background p-5 font-mono text-sm flex items-start gap-3">
              <span className="text-signal shrink-0 mt-0.5">▸</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="Policy Updates" title="Changes to this Privacy Policy.">
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will be posted on this page.
          We encourage you to review this Privacy Policy periodically to stay informed about how we
          collect, use, and protect your information.
        </p>
      </Section>

      <Section eyebrow="Governing Law" title="Wyoming jurisdiction and dispute resolution.">
        <div className="panel p-8 md:p-10">
          <p className="max-w-3xl text-sm text-muted-foreground leading-relaxed">
            Any disputes or claims arising out of or in connection with this Privacy Policy, its subject
            matter, or its formation (including non-contractual disputes or claims) shall be governed by and
            construed in accordance with the laws of the State of Wyoming, United States of America,
            without regard to its conflict of law principles. Any dispute, controversy, or claim arising
            out of or relating to this Privacy Policy, including its interpretation, validity,
            performance, breach, or termination, shall be subject to the exclusive jurisdiction of the
            state and federal courts located in the State of Wyoming. By accessing or using our website or
            services, you irrevocably consent and submit to the personal jurisdiction and venue of such
            courts and waive any objection based on inconvenient forum or lack of jurisdiction.
          </p>
        </div>
      </Section>

      <Section eyebrow="Contact" title="Questions about this policy.">
        <div className="grid gap-6 md:grid-cols-2">
          <a
            href="mailto:ceo@capa.cloud"
            className="panel p-8 hover:border-signal transition-colors"
          >
            <p className="eyebrow">Email</p>
            <p className="mt-4 font-display text-2xl">ceo@capa.cloud</p>
            <p className="mt-3 text-sm text-muted-foreground">
              If you have questions regarding this policy or need more help, contact the Mugen Codes team.
            </p>
          </a>
          <Link to="/contact" className="panel p-8 hover:border-signal transition-colors block">
            <p className="eyebrow">Contact Page</p>
            <p className="mt-4 font-display text-2xl">Get in touch</p>
            <p className="mt-3 text-sm text-muted-foreground">
              Secure messaging, NDA workflows, and technical consultations for mission-critical programs.
            </p>
          </Link>
        </div>
      </Section>

      <CTA
        eyebrow="Next Step"
        title="Speak with our team."
        body="Questions about data handling, ITAR/EAR environments, or engagement confidentiality? Our engineering team is available for structured, secure discussions."
        primary={{ to: "/contact", label: "Contact Mugen.Codes" }}
        secondary={{ to: "/compliance-certifications-defense-space-bci", label: "Compliance support" }}
      />
    </SiteLayout>
  );
}
