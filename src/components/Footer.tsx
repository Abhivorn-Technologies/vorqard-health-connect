import { Link } from "@tanstack/react-router";
import logo from "@/assets/vorqard-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <img src={logo} alt="Vorqard" className="mb-4 h-12 w-auto brightness-200" width={48} height={48} />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Your Digital Health Identity. Connecting patients, doctors, labs, and hospitals through QR-based medical records.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Pages</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/features", label: "Features" },
                { to: "/contact", label: "Contact" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/60 transition-colors hover:text-vorqard-teal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/features", label: "For Patients" },
                { to: "/doctors", label: "For Doctors" },
                { to: "/hospitals", label: "For Hospitals" },
                { to: "/features", label: "For Labs" },
              ].map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-sm text-primary-foreground/60 transition-colors hover:text-vorqard-teal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Contact</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>contact@vorqard.com</li>
              <li>Mumbai, India</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="#" className="text-primary-foreground/40 transition-colors hover:text-vorqard-teal" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/40 transition-colors hover:text-vorqard-teal" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
              <a href="#" className="text-primary-foreground/40 transition-colors hover:text-vorqard-teal" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Vorqard Health Technologies. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
