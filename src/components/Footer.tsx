import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 font-mono text-sm">
            <span className="inline-block h-2 w-2 rounded-full bg-signal" />
            Mugen<span className="text-signal">.</span>Codes
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground leading-relaxed">
            Calm delivery of mission-critical software for defense, space, and brain-computer interface organizations.
          </p>
          <div className="mt-6 space-y-1 text-xs font-mono text-muted-foreground">
            <p>📧 ceo@capa.cloud</p>
            <p>🔒 PGP / Signal available on request</p>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Capabilities</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/defense-software-development" className="text-muted-foreground hover:text-signal">Defense Software</Link></li>
            <li><Link to="/space-software-engineering" className="text-muted-foreground hover:text-signal">Space Engineering</Link></li>
            <li><Link to="/brain-computer-interface-software" className="text-muted-foreground hover:text-signal">BCI Software</Link></li>
            <li><Link to="/mission-critical-software-company" className="text-muted-foreground hover:text-signal">Mission-Critical</Link></li>
            <li><Link to="/compliance-certifications-defense-space-bci" className="text-muted-foreground hover:text-signal">Compliance</Link></li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm">
            <li><Link to="/portfolio" className="text-muted-foreground hover:text-signal">Portfolio</Link></li>
            <li><Link to="/contact" className="text-muted-foreground hover:text-signal">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-x py-6 text-xs font-mono text-muted-foreground space-y-2 md:flex md:items-center md:justify-between md:space-y-0">
          <div>
            <p>Mugen.Codes is a DBA of CAPACLOUD CORP</p>
            <p>1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801</p>
          </div>
          <p>© CapaCloud Corp 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
