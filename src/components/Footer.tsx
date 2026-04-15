import { Link } from "react-router-dom";
import logo from "@/assets/vorqard-logo.png";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-1">
            <img src={logo} alt="Vorqard" className="mb-4 h-12 w-auto brightness-200" width={48} height={48} />
            <p className="text-sm text-primary-foreground/60 leading-relaxed">
              Your Digital Health Identity. Connecting patients, doctors, labs, and hospitals through QR-based medical records.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Pages</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/features", label: "Features" },
                { to: "/pricing", label: "Pricing" },
                { to: "/blog", label: "Blog" },
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

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Solutions</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/features", label: "For Patients" },
                { to: "/doctors", label: "For Doctors" },
                { to: "/hospitals", label: "For Hospitals" },
                { to: "/features", label: "For Labs" },
                { to: "/faq", label: "FAQ" },
              ].map((l, i) => (
                <li key={i}>
                  <Link to={l.to} className="text-sm text-primary-foreground/60 transition-colors hover:text-vorqard-teal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Legal</h4>
            <ul className="space-y-2.5">
              {[
                { to: "/privacy", label: "Privacy Policy" },
                { to: "/terms", label: "Terms of Service" },
                { to: "/security", label: "Security" },
                { to: "/data-protection", label: "Data Protection" },
                { to: "/changelog", label: "Changelog" },
              ].map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-primary-foreground/60 transition-colors hover:text-vorqard-teal">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-primary-foreground/40">Contact</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/60">
              <li>support@vorqard.com</li>
              <li>security@vorqard.com</li>
              <li>dpo@vorqard.com</li>
              <li className="mt-4">Mumbai, India</li>
            </ul>
            <div className="mt-6 flex gap-4">
              <a href="https://linkedin.com/company/vorqard" target="_blank" rel="noopener noreferrer" className="text-primary-foreground/40 transition-colors hover:text-vorqard-teal" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/40">
          <p>
            Developed by{" "}
            <a href="https://abhivorn.com" target="_blank" rel="noopener noreferrer" className="text-vorqard-teal hover:underline">
              Abhivorn Technologies
            </a>
          </p>
          <p className="mt-2">© 2026 Vorqard. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
