import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { CheckCircle2, Zap, QrCode, Shield, Sparkles, Building2, ChevronDown, ChevronUp } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing — Vorqard Healthcare Platform" },
      { name: "description", content: "Simple, transparent pricing for doctors, hospitals, and labs. Start free and upgrade as you grow." },
      { property: "og:title", content: "Pricing — Vorqard Healthcare Platform" },
      { property: "og:description", content: "Simple, transparent pricing for every healthcare provider." },
    ],
  }),
  component: PricingPage,
});

function PricingPage() {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <HeroSection yearly={yearly} setYearly={setYearly} />
      <DoctorPlans yearly={yearly} />
      <HospitalPlans yearly={yearly} />
      <LabPlans yearly={yearly} />
      <ComparisonTable />
      <WhyChooseSection />
      <CTASection />
      <FAQSection />
    </>
  );
}

function HeroSection({ yearly, setYearly }: { yearly: boolean; setYearly: (v: boolean) => void }) {
  return (
    <section className="hero-gradient-bg section-padding">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Simple, Transparent{" "}
            <span className="text-gradient-brand">Pricing</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Start for free. Upgrade as you grow your practice.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105">
              Start Free
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-background px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-secondary">
              Contact Sales
            </Link>
          </div>

          {/* Toggle */}
          <div className="mt-10 inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5">
            <button
              onClick={() => setYearly(false)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${!yearly ? "gradient-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${yearly ? "gradient-primary text-primary-foreground shadow" : "text-muted-foreground hover:text-foreground"}`}
            >
              Yearly <span className="text-xs opacity-80">(Save 20%)</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

interface Plan {
  name: string;
  price: number;
  period: string;
  features: string[];
  highlight?: boolean;
  badge?: string;
  cta: string;
}

function PricingCard({ plan, yearly, delay }: { plan: Plan; yearly: boolean; delay: number }) {
  const displayPrice = plan.price === 0 ? "₹0" : `₹${yearly ? Math.round(plan.price * 0.8) : plan.price}`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className={`relative rounded-2xl border p-8 transition-all hover:shadow-xl ${
        plan.highlight
          ? "border-primary gradient-primary text-primary-foreground scale-105 shadow-lg shadow-primary/20"
          : "border-border bg-card"
      }`}
    >
      {plan.badge && (
        <span className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-bold ${
          plan.highlight ? "bg-accent text-accent-foreground" : "gradient-primary text-primary-foreground"
        }`}>
          {plan.badge}
        </span>
      )}
      <h3 className="text-lg font-semibold">{plan.name}</h3>
      <div className="mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-bold">{displayPrice}</span>
        <span className={`text-sm ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
          {plan.price === 0 ? "" : `/ ${yearly ? "year" : "month"}`}
        </span>
      </div>
      <ul className="mt-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <Link
        to="/contact"
        className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
          plan.highlight ? "bg-background text-foreground" : "gradient-primary text-primary-foreground"
        }`}
      >
        {plan.cta}
      </Link>
    </motion.div>
  );
}

function DoctorPlans({ yearly }: { yearly: boolean }) {
  const plans: Plan[] = [
    {
      name: "Starter",
      price: 0,
      period: "",
      features: ["Up to 50 patients/month", "QR patient scan", "Basic patient history", "Basic prescription creation"],
      cta: "Get Started Free",
    },
    {
      name: "Pro",
      price: 199,
      period: "/month",
      features: ["Unlimited patients", "Full medical history access", "Digital prescriptions", "Appointment management", "Priority support"],
      highlight: true,
      badge: "Most Popular",
      cta: "Upgrade Now",
    },
    {
      name: "Advanced",
      price: 499,
      period: "/month",
      features: ["Everything in Pro", "Analytics dashboard", "Patient insights", "Custom branding", "AI assistant (future ready)"],
      cta: "Go Advanced",
    },
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading badge="Doctors" title="For Individual Doctors" description="Plans that grow with your practice." />
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HospitalPlans({ yearly }: { yearly: boolean }) {
  const plans: Plan[] = [
    {
      name: "Basic",
      price: 999,
      period: "/month",
      features: ["Up to 3 doctors", "Patient management", "QR system", "Appointment scheduling"],
      cta: "Start Plan",
    },
    {
      name: "Growth",
      price: 1999,
      period: "/month",
      features: ["Up to 10 doctors", "Lab integration", "Medical records system", "Role-based access"],
      highlight: true,
      badge: "Recommended",
      cta: "Choose Growth",
    },
    {
      name: "Enterprise",
      price: 3999,
      period: "/month",
      features: ["Unlimited doctors", "Full hospital system", "Analytics dashboard", "API integrations", "Priority support"],
      cta: "Contact Sales",
    },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading badge="Hospitals" title="For Hospitals & Clinics" description="Scale your hospital's digital infrastructure." />
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LabPlans({ yearly }: { yearly: boolean }) {
  const plans: Plan[] = [
    {
      name: "Basic",
      price: 499,
      period: "/month",
      features: ["Report uploads", "Patient linking", "Basic dashboard", "Email notifications"],
      cta: "Start Plan",
    },
    {
      name: "Pro",
      price: 999,
      period: "/month",
      features: ["Everything in Basic", "Booking management", "Advanced analytics", "Priority support", "API access"],
      highlight: true,
      badge: "Best Value",
      cta: "Go Pro",
    },
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-5xl">
        <SectionHeading badge="Labs" title="For Labs & Diagnostic Centers" description="Streamline your diagnostics workflow." />
        <div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">
          {plans.map((plan, i) => (
            <PricingCard key={plan.name} plan={plan} yearly={yearly} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonTable() {
  const features = [
    { name: "QR Scan", starter: true, pro: true, advanced: true, hospital: true },
    { name: "Patient Records", starter: true, pro: true, advanced: true, hospital: true },
    { name: "Digital Prescriptions", starter: true, pro: true, advanced: true, hospital: true },
    { name: "Appointments", starter: false, pro: true, advanced: true, hospital: true },
    { name: "Analytics Dashboard", starter: false, pro: false, advanced: true, hospital: true },
    { name: "Multi-user Access", starter: false, pro: false, advanced: false, hospital: true },
    { name: "Custom Branding", starter: false, pro: false, advanced: true, hospital: true },
    { name: "API Integrations", starter: false, pro: false, advanced: false, hospital: true },
    { name: "Priority Support", starter: false, pro: true, advanced: true, hospital: true },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-5xl">
        <SectionHeading badge="Compare" title="Feature Comparison" />
        <div className="overflow-x-auto rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-6 py-4 text-left font-semibold">Features</th>
                <th className="px-4 py-4 text-center font-semibold">Starter</th>
                <th className="px-4 py-4 text-center font-semibold text-primary">Pro</th>
                <th className="px-4 py-4 text-center font-semibold">Advanced</th>
                <th className="px-4 py-4 text-center font-semibold">Hospital</th>
              </tr>
            </thead>
            <tbody>
              {features.map((f) => (
                <tr key={f.name} className="border-b border-border/50 last:border-0">
                  <td className="px-6 py-3 font-medium">{f.name}</td>
                  {[f.starter, f.pro, f.advanced, f.hospital].map((v, i) => (
                    <td key={i} className="px-4 py-3 text-center">
                      {v ? <CheckCircle2 className="mx-auto h-5 w-5 text-primary" /> : <span className="text-muted-foreground">—</span>}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function WhyChooseSection() {
  const reasons = [
    { icon: <Zap size={24} />, title: "Instant Patient History", desc: "Access complete records with a single QR scan." },
    { icon: <QrCode size={24} />, title: "QR-Based System", desc: "No complex setup — scan and go." },
    { icon: <Shield size={24} />, title: "Secure & Encrypted", desc: "End-to-end encryption for all health data." },
    { icon: <Sparkles size={24} />, title: "Easy to Use", desc: "Clean interface designed for healthcare professionals." },
    { icon: <Building2 size={24} />, title: "Scalable for Hospitals", desc: "From solo practitioners to multi-department hospitals." },
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading badge="Why Vorqard" title="Why Choose Vorqard?" />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-border bg-card p-6 text-center transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <div className="mx-auto mb-4 inline-flex rounded-xl gradient-primary p-3 text-primary-foreground">{r.icon}</div>
              <h3 className="mb-2 text-sm font-semibold">{r.title}</h3>
              <p className="text-xs text-muted-foreground">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl gradient-primary p-12 text-center text-primary-foreground md:p-16"
        >
          <h2 className="text-3xl font-bold md:text-4xl">Start Digitizing Your Practice Today</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
            Join healthcare providers across India who trust Vorqard for digital health records.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105">
              Start Free
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10">
              Book Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FAQSection() {
  const faqs = [
    { q: "Is the patient app free?", a: "Yes! The Vorqard patient app is completely free. Patients can store, manage, and share their health records at no cost." },
    { q: "Can I cancel anytime?", a: "Absolutely. All paid plans are month-to-month with no lock-in. Cancel anytime from your dashboard." },
    { q: "Do you support hospitals?", a: "Yes. We offer dedicated hospital plans with multi-doctor support, department management, and advanced analytics." },
    { q: "Is data secure?", a: "All data is encrypted end-to-end. We follow industry-standard security practices and are fully compliant with healthcare data regulations." },
    { q: "Do you offer a free trial?", a: "Our Starter plan is free forever. For Pro and Advanced plans, contact us for a trial period." },
  ];

  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-3xl">
        <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-border bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between px-6 py-4 text-left text-sm font-semibold hover:bg-secondary/50 transition-colors"
              >
                {faq.q}
                {open === i ? <ChevronUp size={18} className="text-primary" /> : <ChevronDown size={18} className="text-muted-foreground" />}
              </button>
              {open === i && (
                <div className="px-6 pb-4 text-sm text-muted-foreground leading-relaxed">
                  {faq.a}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
