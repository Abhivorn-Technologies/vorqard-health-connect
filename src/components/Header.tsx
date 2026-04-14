import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/vorqard-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/features", label: "Features" },
  { to: "/doctors", label: "Doctors" },
  { to: "/hospitals", label: "Hospitals" },
  { to: "/contact", label: "Contact" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card-strong">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Vorqard" className="h-10 w-auto" width={40} height={40} />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://play.google.com/store/apps/details?id=com.vorqard.app"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Download App
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="rounded-lg p-2 text-foreground md:hidden"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className={`block rounded-lg px-4 py-3 text-sm font-medium transition-colors ${
                location.pathname === link.to
                  ? "text-primary bg-secondary"
                  : "text-foreground/70"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://play.google.com/store/apps/details?id=com.vorqard.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-xl gradient-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Download App
          </a>
        </nav>
      )}
    </header>
  );
}
