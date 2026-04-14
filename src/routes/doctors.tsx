import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Clock, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";

export const Route = createFileRoute("/doctors")({
  head: () => ({
    meta: [
      { title: "For Doctors — Vorqard Healthcare Platform" },
      { name: "description", content: "Increase efficiency, access patient records instantly, and write digital prescriptions with Vorqard for Doctors." },
      { property: "og:title", content: "For Doctors — Vorqard Healthcare Platform" },
      { property: "og:description", content: "Increase efficiency and access patient records instantly with Vorqard." },
    ],
  }),
  component: DoctorsPage,
});

function DoctorsPage() {
  const benefits = [
    { icon: <Clock size={24} />, title: "Save Consultation Time", description: "No more deciphering handwritten notes. Get the full picture in seconds." },
    { icon: <Zap size={24} />, title: "Instant Patient History", description: "Scan QR to see complete records — allergies, medications, past treatments." },
    { icon: <TrendingUp size={24} />, title: "Grow Your Practice", description: "Digital prescriptions and patient management tools that scale with you." },
    { icon: <Shield size={24} />, title: "Secure & Compliant", description: "Patient data is encrypted end-to-end. Fully compliant with healthcare regulations." },
  ];

  const plans = [
    { name: "Starter", price: "Free", period: "", features: ["Scan patient QR", "View basic history", "Up to 50 patients/month", "Digital prescriptions"], highlight: false },
    { name: "Professional", price: "₹999", period: "/month", features: ["Unlimited QR scans", "Full patient history", "Unlimited patients", "Digital prescriptions", "Priority support", "Analytics dashboard"], highlight: true },
    { name: "Clinic", price: "₹2,499", period: "/month", features: ["Everything in Professional", "Multi-doctor support", "Clinic branding", "Appointment management", "Dedicated account manager", "Custom integrations"], highlight: false },
  ];

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">For Doctors</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Focus on Patients,{" "}
              <span className="text-gradient-brand">Not Paperwork</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Access complete patient histories instantly. Write digital prescriptions. Manage your practice efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Benefits" title="Why Doctors Love Vorqard" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((b, i) => (
              <FeatureCard key={b.title} {...b} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Pricing" title="Subscription Plans" description="Flexible plans that grow with your practice." />
          <div className="grid gap-8 md:grid-cols-3">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`rounded-2xl border p-8 ${plan.highlight ? "border-primary gradient-primary text-primary-foreground scale-105" : "border-border bg-card"}`}
              >
                <h3 className="text-lg font-semibold">{plan.name}</h3>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && <span className={`text-sm ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>{plan.period}</span>}
                </div>
                <ul className="mt-8 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className={`h-4 w-4 shrink-0 ${plan.highlight ? "text-primary-foreground" : "text-primary"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`mt-8 block rounded-xl px-6 py-3 text-center text-sm font-semibold transition-transform hover:scale-105 ${
                    plan.highlight
                      ? "bg-background text-foreground"
                      : "gradient-primary text-primary-foreground"
                  }`}
                >
                  Get Started
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
