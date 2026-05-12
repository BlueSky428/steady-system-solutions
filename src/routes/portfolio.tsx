import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout, Hero, Section, CTA } from "@/components/SiteLayout";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio | Mugen.Codes" },
      { name: "description", content: "Explore Mugen.Codes projects across defense, aerospace, neurotechnology, embedded systems, and mission-critical software engineering." },
      { property: "og:title", content: "Portfolio | Mugen.Codes" },
      { property: "og:description", content: "ATLAS: multi-sensor intelligence platform for U.S. DEA counter-narcotics operations, and other mission-critical engagements." },
    ],
  }),
  component: Page,
});

const FEATURES = [
  {
    n: "01",
    t: "Multi-sensor ingestion & self-identification",
    items: [
      "Ingests 16+ concurrent sensors (target 24, stretch 32)",
      "Video (CCTV, UAV, body-worn), RF detections (SDR, emitters), Drone telemetry",
      "Acoustic triggers (gunshot, engine, rotor), Telemetry (GPS, IMU, vehicle bus)",
      "Automatic sensor classification & health monitoring",
      "Offline ingestion ≥60 minutes without network connectivity",
    ],
  },
  {
    n: "02",
    t: "Advanced computer vision & attribute extraction",
    items: [
      "Object detection: people, vehicles, drones",
      "Vehicle classification: car, SUV, truck, motorcycle",
      "Aircraft classification: plane vs drone discrimination",
      "Motion attributes: speed, direction, acceleration",
      "Persistent multi-object tracking across camera handovers",
    ],
  },
  {
    n: "03",
    t: "Behavior recognition & intent cues",
    items: [
      "≤500 ms latency from sensor event to behavior hypothesis",
      "Loitering, rapid approach, perimeter probing, formation movement",
      "Intent hypotheses with confidence updates",
      "e.g. \"reconnaissance (82%)\", \"assault approach (67%)\"",
    ],
  },
  {
    n: "04",
    t: "Multi-sensor fusion & incident reasoning",
    items: [
      "Time-space-behavior fusion across object tracks, RF emissions, acoustic events",
      "Plain-language narrative summary generation",
      "Evidence-linked confidence explanation per alert",
      "Incident creation latency ≤500 ms",
    ],
  },
  {
    n: "05",
    t: "Deployment-ready operator UI",
    items: [
      "Dark-mode optimized for night operations",
      "Tablet-first, ruggedized vehicle deployment",
      "Operational, Spatial, Incident, and Sensor views",
      "Operator clarity: actionable info understood in ≤10 seconds",
    ],
  },
  {
    n: "06",
    t: "Edge hardware deployment & validation",
    items: [
      "NVIDIA Jetson Orin AGX",
      "Rugged x86 + NVIDIA RTX A-Series",
      "Performance benchmarking at 16+ sensor streams",
      "Thermal validation (continuous operation at 45°C ambient)",
      "Full offline operation ≥60 minutes (validated with network cut)",
    ],
  },
];

const SECTORS = [
  { t: "Border Security (CBP)", b: "Detect tunnel entrances (acoustic + vibration), drone smugglers (RF + video), and rapid approach incursions." },
  { t: "Counter-Terrorism (FBI, JTTF)", b: "Loitering and formation movement detection near critical infrastructure." },
  { t: "Base Protection (DoD, USMC)", b: "Perimeter probing, drone swarm detection, offline fusion in austere environments." },
  { t: "Law Enforcement Intel (HIDTA, OCDETF)", b: "Correlate RF intercepts with vehicle tracks in real time." },
];

function Page() {
  return (
    <SiteLayout>
      <Hero
        eyebrow="Case Study · ATLAS"
        title={<>ATLAS: Multi-sensor <span className="text-signal italic">intelligence platform</span>.</>}
        lede="Edge-deployable, offline-capable intelligence system that fuses video, RF, drone, acoustic, and telemetry data into real-time incident reasoning, used in high-tempo counter-narcotics missions."
        bullets={[
          "End User: U.S. Drug Enforcement Administration, Counter-Narcotics Operations",
          "Role: Software engineering & systems integration by Mugen.Codes",
          "16+ concurrent sensors · ≤500 ms behavior hypothesis · ≥60 min offline",
        ]}
        ctaPrimary={{ to: "/contact", label: "Discuss a Similar Engagement" }}
      />

      <Section
        eyebrow="Mission Context"
        title="Why ATLAS exists."
        intro="Mexican Transnational Criminal Organizations (e.g., Sinaloa, CJNG) use sophisticated surveillance-evasion tactics: rapid movement, drone overwatch, RF spectrum hopping, and remote triggering of perimeter sensors. Traditional intelligence systems are too slow, too centralized, or unable to correlate multi-domain signals in real time."
      >
        <p className="max-w-3xl text-muted-foreground leading-relaxed">
          Mugen.Codes was sub-contracted to deliver ATLAS, a modular, edge-deployable platform that ingests 16+ concurrent sensor types, fuses them into behavior-based incidents, and presents actionable intelligence to operators in ≤10 seconds, while operating offline for ≥60 minutes in austere environments.
        </p>
        <blockquote className="mt-10 border-l-2 border-signal pl-6 font-display text-2xl italic max-w-2xl">
          "Calm delivery of mission-critical software for the hardest environments."
          <footer className="mt-3 not-italic text-sm font-mono text-muted-foreground">Mugen.Codes</footer>
        </blockquote>
      </Section>

      <Section eyebrow="Capabilities" title="ATLAS: key features.">
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURES.map((f) => (
            <div key={f.n} className="panel p-8">
              <div className="flex items-baseline gap-4">
                <span className="font-mono text-signal text-xs">{f.n}</span>
                <h3 className="text-xl">{f.t}</h3>
              </div>
              <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                {f.items.map((it) => (
                  <li key={it} className="flex gap-3"><span className="text-signal mt-1">▸</span><span className="leading-relaxed">{it}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Modular Adapters" title="Supported sensor & signal types.">
        <p className="max-w-2xl text-muted-foreground mb-8">All sensors are pluggable adapters, never hardcoded.</p>
        <ul className="grid gap-px sm:grid-cols-2 lg:grid-cols-3 bg-border border border-border rounded-md overflow-hidden">
          {[
            "RF detections (SDR, emitters, spectrum events)",
            "Acoustic triggers",
            "Motion sensors",
            "Perimeter sensors",
            "AIS / ADS-B feeds (aviation & maritime)",
            "External intel feeds (CSV, JSON, REST)",
            "Partner event feeds (third-party systems)",
            "Video (CCTV, UAV, body-worn)",
            "Drone telemetry & video",
          ].map((r) => (
            <li key={r} className="bg-background p-5 font-mono text-sm flex items-center gap-3">
              <span className="text-signal">▸</span>{r}
            </li>
          ))}
        </ul>
      </Section>

      <Section
        eyebrow="Cross-Agency"
        title="Why other government agencies should evaluate ATLAS."
        intro="The same ATLAS platform, developed for DEA counter-cartel operations, applies directly to adjacent mission sets."
      >
        <div className="grid gap-6 md:grid-cols-2">
          {SECTORS.map((s) => (
            <div key={s.t} className="panel p-8">
              <h3 className="text-xl">{s.t}</h3>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </Section>

      <CTA
        title="Need a similar capability?"
        body="Mugen.Codes designs and delivers edge-AI, sensor-fusion, and mission-critical software for defense, aerospace, and neurotechnology programs."
        primary={{ to: "/contact", label: "Start a Conversation" }}
        secondary={{ to: "/defense-software-development", label: "Defense capabilities" }}
      />
    </SiteLayout>
  );
}
