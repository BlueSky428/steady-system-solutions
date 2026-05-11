import { Link } from "@tanstack/react-router";
import { useState } from "react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/defense-software-development", label: "Defense" },
  { to: "/space-software-engineering", label: "Space" },
  { to: "/brain-computer-interface-software", label: "BCI" },
  { to: "/mission-critical-software-company", label: "Mission-Critical" },
  { to: "/compliance-certifications-defense-space-bci", label: "Compliance" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-mono text-sm tracking-tight">
          <span className="inline-block h-2 w-2 rounded-full bg-signal animate-pulse" />
          <span className="font-medium">Mugen<span className="text-signal">.</span>Codes</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {NAV.slice(1).map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-xs font-mono uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
              activeProps={{ className: "px-3 py-2 text-xs font-mono uppercase tracking-wider text-signal" }}
              activeOptions={{ exact: true }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden lg:inline-flex btn-signal !py-2 !px-4 !text-[0.7rem]">
          Book Consultation
        </Link>

        <button
          className="lg:hidden font-mono text-xs uppercase tracking-wider"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation"
        >
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 font-mono text-sm uppercase tracking-wider text-muted-foreground hover:text-foreground"
                activeProps={{ className: "py-2 font-mono text-sm uppercase tracking-wider text-signal" }}
              >
                {n.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
