import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/brain-computer-interface-software")({
  head: () => ({
    meta: [
      { title: "Real-Time BCI Software for Clinical & Research Neurotech | Mugen.Codes" },
      { name: "description", content: "BCI software development for neural signal processing, closed-loop systems, EEG platforms, and clinical neurotechnology environments." },
      { property: "og:title", content: "Real-Time BCI Software | Mugen.Codes" },
      { property: "og:description", content: "BCI software development for neural signal processing, closed-loop systems, EEG platforms, and clinical neurotechnology environments." },
    ],
  }),
  component: Page,
});

const SERVICES = [
  {
    title: "Neural Acquisition & Hardware Integration",
    body: "Software systems supporting neural acquisition hardware involving OpenBCI, Intan, Neuralynx, and related neurotechnology platforms. Real-time neural data ingestion, synchronization, device communication, and scalable acquisition infrastructure for research and clinical workflows.",
  },
  {
    title: "Neural Signal Processing & Decoding",
    body: "Real-time processing pipelines for EEG, ECoG, fNIRS, and related neural signal environments. Filtering, spike detection, artifact removal, feature extraction, spike sorting, and machine learning-based neural decoding systems for operational neurotechnology environments.",
  },
  {
    title: "Closed-Loop Neurotechnology Systems",
    body: "Software infrastructure for closed-loop BCI systems capable of reading, interpreting, and responding to neural activity in real time. Adaptive stimulation workflows, neural event triggering, feedback systems, low-latency control logic, and deterministic processing pipelines.",
  },
];

const FAQS = [
  { q: "What types of BCI software does Mugen.Codes develop?", a: "We develop software for brain-computer interfaces, neural signal processing, EEG platforms, closed-loop neurotechnology systems, neural visualization tools, and real-time neurodata infrastructure." },
  { q: "Can Mugen.Codes integrate with existing neural hardware platforms?", a: "Yes. Our teams support integration with platforms including OpenBCI, Intan, Neuralynx, Lab Streaming Layer (LSL), and other neural acquisition environments used in research and clinical settings." },
  { q: "Do you support clinical and investigational neurotechnology projects?", a: "Yes. We support neurotechnology initiatives requiring structured engineering workflows aligned with IEC 62304 environments, investigational device software support, and reproducibility-focused development practices." },
  { q: "How does Mugen.Codes handle real-time neural signal processing?", a: "Our engineering teams develop low-latency processing pipelines focused on deterministic performance, stable neural data streaming, spike detection, feature extraction, and closed-loop feedback workflows." },
  { q: "What makes Mugen.Codes different from traditional software development firms?", a: "Mugen.Codes specializes in high-reliability software systems for mission-critical environments. Our approach emphasizes senior-only engineering, structured workflows, operational reproducibility, and calm, verification-focused delivery for advanced neurotechnology platforms." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Brain-Computer Interface Software"
        title={<>Real-time <span className="text-signal italic">BCI software</span> for research &amp; clinical neurotech.</>}
        lede="Mugen.Codes develops real-time software systems for brain-computer interfaces, neural signal processing platforms, and advanced neurotechnology environments requiring low-latency performance, operational reliability, and clinical-grade engineering discipline."
        ctaPrimary={{ to: "/contact", label: "Schedule BCI Software Consultation" }}
        ctaSecondary={{ to: "/", label: "Back to home" }}
      />

      <Section eyebrow="Services" title="Our BCI software development services.">
        <div className="grid gap-6 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <div key={s.title} className="panel p-8 flex flex-col">
              <h3 className="text-xl">{s.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed flex-1">{s.body}</p>
              <a href="/contact" className="mt-8 font-mono text-xs uppercase tracking-wider text-signal hover:underline">Schedule Consultation →</a>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Clinical-Grade"
        title="We deliver clinical-grade BCI engineering & infrastructure."
        intro="Mugen.Codes develops neurotechnology software using structured engineering workflows designed for clinical reliability, operational reproducibility, and long-term scalability."
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div className="panel p-8">
            <p className="eyebrow">Regulatory & Clinical Software Alignment</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our teams support neurotechnology initiatives requiring compliance-oriented development workflows, structured documentation, traceability, and reproducibility-focused engineering for clinical and investigational environments.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Familiar with IEC 62304 software lifecycle processes, ISO 13485-aligned environments, FDA guidance for BCI systems, investigational device software support, and clinical documentation workflows.
            </p>
          </div>
          <div className="panel p-8">
            <p className="eyebrow">Real-Time Neurotechnology Stack</p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our engineering teams support modern neurotechnology environments involving C++, Python, FPGA-connected systems, Lab Streaming Layer (LSL), and low-latency neural processing infrastructure for research and clinical platforms.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              We integrate with existing neural hardware ecosystems while maintaining deterministic performance, operational flexibility, reproducibility, and long-term maintainability.
            </p>
          </div>
        </div>
      </Section>

      <Section
        eyebrow="Why Calm Delivery"
        title="Why calm delivery matters in BCI development."
        intro="BCI systems operate in environments involving live subjects, clinical workflows, investigational devices, and in some cases irreversible stimulation systems. Traditional software delivery practices are not designed for the operational discipline required in neurotechnology environments."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          Mugen.Codes uses a senior-only engineering model focused on calm, verification-driven software delivery designed to reduce operational risk through structured communication, explicit ownership, deterministic workflows, and long-term maintainability. In neurotechnology, unreliable software can compromise clinical integrity, research reproducibility, and patient safety.
        </p>
      </Section>

      <Section eyebrow="FAQs" title="Neurotechnology questions.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        title="Build the software behind your neurotechnology platform."
        body="Mugen.Codes develops real-time BCI software, neural signal processing systems, and clinical-grade neurotechnology infrastructure engineered for low-latency performance, operational reliability, and long-term scalability."
        primary={{ to: "/contact", label: "Schedule BCI Software Consultation" }}
        secondary={{ to: "/compliance-certifications-defense-space-bci", label: "IEC 62304 support" }}
      />
    </SiteLayout>
  );
}
