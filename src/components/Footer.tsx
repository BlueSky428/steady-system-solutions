import { Link } from "@tanstack/react-router";

import logo from "@/logo.png";
import capaCloudLogo from "@/capacloud-logo.png";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border bg-surface">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 font-mono text-sm">
            <img src={logo} alt="" width={36} height={36} className="h-9 w-9 shrink-0 object-contain" />
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
        <div className="container-x py-6 text-xs font-mono text-muted-foreground md:flex md:items-start md:justify-between md:gap-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-3">
            <a
              href="https://capa.cloud"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 opacity-90 transition-opacity hover:opacity-100"
              aria-label="CapaCloud (opens in new tab)"
            >
              <img
                src={capaCloudLogo}
                alt=""
                width={50}
                height={50}
                className="h-10 w-10 object-contain"
              />
            </a>
            <div className="space-y-2">
              <p>Mugen.Codes is a DBA of CAPACLOUD CORP</p>
              <p>1309 Coffeen Avenue STE 1200, Sheridan, Wyoming 82801</p>
            </div>
          </div>
          <div className="mt-4 shrink-0 md:mt-0 space-y-2 text-right">
            <p>
              <Link to="/privacy-policy" className="hover:text-signal transition-colors">
                Privacy Policy
              </Link>
            </p>
            <p>© CapaCloud Corp 2026. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
