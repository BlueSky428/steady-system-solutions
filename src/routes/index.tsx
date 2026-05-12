import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, FAQ, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mugen.Codes: Mission-Critical AI, Defense, Space & BCI Software Engineering" },
      {
        name: "description",
        content:
          "Mugen.Codes develops mission-critical software for defense, aerospace, and neurotechnology organizations, including edge AI, flight software, secure infrastructure, and BCI platforms.",
      },
      { property: "og:title", content: "Mugen.Codes: Mission-Critical Software Engineering" },
      {
        property: "og:description",
        content:
          "Calm delivery of mission-critical software for defense, space & brain-computer interface organizations.",
      },
    ],
  }),
  component: Index,
});

const PROBLEMS = [
  ["Chat-based chaos", "Written specifications, change logs, and explicit approval gates"],
  ["Unclear responsibility", "OWNERS file per module, peer-reviewed merge requests"],
  ["Late integration hell", "Continuous verification with formal methods"],
  ["Knowledge loss after departure", "Living documentation + knowledge transfer runbooks"],
  ["Compliance anxiety", "Traceability from requirements to code to test results"],
];

const REQUIREMENTS = [
  "Predictable engineering execution",
  "Hardened software architectures",
  "Data sovereignty and controlled environments",
  "Long-lifecycle system reliability",
  "Low-latency and real-time performance",
  "Auditability and traceability",
  "Legacy system integration",
  "Compliance-ready development practices",
];

const STACK = [
  ["Languages & Systems", "Rust · C++ · C · Ada/SPARK · Python · Go · TypeScript"],
  ["Real-Time & Embedded", "VxWorks · FreeRTOS · Zephyr · QNX · Linux RT"],
  ["AI & Edge Systems", "TensorRT · ONNX · embedded inference · model optimization"],
  ["Defense & Security", "MIL-STD-1553 · tactical data systems · DISA STIGs · FIPS"],
  ["Space Systems", "CCSDS · ECSS · cFS · F´ (Fprime) · onboard autonomy"],
  ["Neurotechnology", "OpenBCI · BrainVision · Intan · Neuralynx · LSL · neural pipelines"],
];

const PROCESS = [
  ["01", "Requirements capture & hazard analysis", "Written scope of work with functional requirements, safety goals, and security controls. TEMP for defense, FMEA for space, IEC 62304 for BCI."],
  ["02", "Architecture & formal specification", "Modular, deterministic systems with clear interfaces. TLA+ or SPARK/Ada to mathematically verify correctness before target code is written."],
  ["03", "Calm, senior-only development", "10+ year domain engineers. Written daily updates instead of frantic standups. Asynchronous approval respects deep work."],
  ["04", "Continuous verification & validation", "Unit, integration, and hardware-in-the-loop tests. Formal proofs where required. Every build produces a verification report."],
  ["05", "Deliverable & knowledge transfer", "Source repo, requirements traceability matrix, test results, safety/security case, operational runbooks, and a recorded handover."],
  ["06", "Long-term support & maintenance", "SLAs from business hours to 24/7 mission-critical support. Lifecycle management for software that must run for 10+ years."],
];

const FAQS = [
  { q: "How does Mugen.Codes handle ITAR / EAR controlled data?", a: "We operate under strict data segregation. For ITAR-restricted defense projects, we use dedicated, audited environments with access limited to US-persons (if required). EAR-controlled space/BCI data is similarly isolated. We sign DD2345 and MPAs as needed." },
  { q: "What makes your \"calm delivery\" different from agile or waterfall?", a: "Calm delivery is a risk-first philosophy: we prioritize written clarity, explicit ownership, and asynchronous decision-making over ceremonies. You get predictability without burnout, and a full audit trail." },
  { q: "Do you offer subcontracting to prime defense/space integrators?", a: "Yes. We have experience as a subcontractor to DEA and other agencies (previous projects under NDA). We provide SOWs, CDRLs, and DI-MISC compliant documentation." },
  { q: "Can you work with existing legacy codebases (e.g., Ada for space)?", a: "Absolutely. Our senior engineers have revived and modernized legacy missile guidance, satellite command & control, and neural recording systems, while preserving qualification evidence." },
  { q: "What about BCI? Do you build both research and clinical systems?", a: "Yes. For research: real-time data acquisition, stimulation controllers, and analysis pipelines. For clinical (pre-market): IEC 62304 compliant software, integration with investigational devices, and support for IDE/510(k) documentation." },
  { q: "How do you price projects?", a: "Fixed price for clearly scoped modules (preferred for defense/space contracting), or T&M with monthly caps. We offer milestone-based invoicing aligned to CDRL deliveries." },
  { q: "What is your geographical presence?", a: "Headquartered in the US, with senior engineers in Japan and around the globe. We serve clients worldwide." },
];

function Index() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Mission-Critical Software · Defense · Space · BCI"
        title={<>Calm delivery of <span className="text-signal italic">mission-critical</span> software for defense, space &amp; brain-computer interface.</>}
        lede="Mugen.Codes develops sovereign AI systems, flight software, secure infrastructure, and real-time neural processing platforms for defense contractors, aerospace companies, and neurotechnology organizations operating in high-compliance environments."
        bullets={[
          "ITAR-aware engineering workflows",
          "Senior-only engineering teams",
          "Edge AI & autonomous systems",
          "Flight-critical and low-latency software",
          "BCI & neural signal processing expertise",
        ]}
        ctaPrimary={{ to: "/mission-critical-software-company", label: "Explore Our Capabilities" }}
        ctaSecondary={{ to: "/contact", label: "Book Consultation" }}
      />

      <Section
        eyebrow="Trusted For"
        title={<>High-compliance engineering environments where <span className="text-signal italic">zero surprises</span> is the requirement.</>}
        intro="From guided munitions and C4ISR systems to satellite flight software and real-time BCI signal processing. Your mission depends on zero surprises. Mugen.Codes combines Japanese engineering discipline with a calm, documented workflow that eliminates ambiguity, reduces risk, and delivers systems that stay reliable for decades."
      >
        <ul className="grid gap-px sm:grid-cols-2 bg-border border border-border rounded-md overflow-hidden">
          {REQUIREMENTS.map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section eyebrow="What We Do" title="Three sectors. One discipline.">
        <div className="grid gap-6 lg:grid-cols-3">
          {[
            { to: "/defense-software-development", title: "Defense software development", body: "Safety-critical and security-hardened software for command & control, embedded systems, threat detection, and logistics platforms. Aligned with MIL-STD-882E, NIST SSDF, and CMMI." },
            { to: "/space-software-engineering", title: "Space software engineering", body: "Flight software, on-board data handling, fault management, and ground segment systems. Experience with DO-178C (Level A/B), ECSS, and radiation-hardened targets." },
            { to: "/brain-computer-interface-software", title: "Brain-computer interface software", body: "Low-latency signal acquisition, spike sorting, real-time feature extraction, and closed-loop neuromodulation. For research, clinical neurotech, and implantable devices." },
          ].map((c) => (
            <Link key={c.to} to={c.to} className="panel p-8 hover:border-signal transition-colors group block">
              <div className="font-mono text-xs text-signal">{c.title.split(" ")[0].toUpperCase()}</div>
              <h3 className="mt-4 text-2xl">{c.title}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{c.body}</p>
              <div className="mt-8 font-mono text-xs uppercase tracking-wider text-muted-foreground group-hover:text-signal">Learn more →</div>
            </Link>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="The Discipline"
        title="Why calm delivery wins in mission-critical environments."
        intro="Most software failures in defense, space, and BCI are not caused by bad coders; they are caused by rushed communication, unclear ownership, and undocumented assumptions. Mugen.Codes fixes that at the process level."
      >
        <div className="panel overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-4 border-b border-border font-mono text-xs uppercase tracking-wider text-muted-foreground">
            <div className="col-span-5">Problem</div>
            <div className="col-span-7">Our calm solution</div>
          </div>
          {PROBLEMS.map(([p, s]) => (
            <div key={p} className="grid grid-cols-12 px-6 py-5 border-b border-border last:border-b-0 items-start">
              <div className="col-span-5 font-mono text-sm">{p}</div>
              <div className="col-span-7 text-sm text-muted-foreground">{s}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="How We Work"
        title="Auditable. Reproducible. Calm."
        intro="Our process is designed for sectors where human lives, billions of dollars, or scientific breakthroughs are at stake."
      >
        <div className="grid gap-px sm:grid-cols-2 bg-border border border-border rounded-md overflow-hidden">
          {PROCESS.map(([n, t, d]) => (
            <div key={n} className="bg-background p-8">
              <div className="font-mono text-signal text-xs">{n}</div>
              <h3 className="mt-3 text-xl">{t}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Technical Stack" title="What we work with.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {STACK.map(([t, v]) => (
            <div key={t} className="panel p-6">
              <p className="eyebrow">{t}</p>
              <p className="mt-3 text-sm font-mono leading-relaxed">{v}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Frequently Asked" title="Questions answered in writing.">
        <FAQ items={FAQS} />
      </Section>

      <CTA
        title="Ready to discuss your mission?"
        body="Whether you need a sovereign AI system, a flight software module, a BCI real-time processing pipeline, or a full-lifecycle defense system, we provide the engineering depth and operational discipline required for high-stakes systems."
        primary={{ to: "/contact", label: "Contact Mugen.Codes" }}
        secondary={{ to: "/portfolio", label: "View portfolio" }}
      />
    </SiteLayout>
  );
}
