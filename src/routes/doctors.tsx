import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Zap, Clock, TrendingUp, Shield, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import doctorRecords from "@/assets/doctor-records.png";

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

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">For Doctors</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Focus on Patients,{" "}
              <span className="text-gradient-brand">Not Paperwork</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Access complete patient histories instantly. Write digital prescriptions. Manage your practice efficiently.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link to="/pricing" className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105">
                View Plans
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-background px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-secondary">
                Book Demo
              </Link>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={doctorRecords} alt="Doctor viewing patient records" className="w-full max-w-md mx-auto rounded-3xl" width={500} height={500} loading="eager" />
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
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl gradient-primary p-12 text-center text-primary-foreground md:p-16"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Modernize Your Practice?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
              Join thousands of doctors already using Vorqard to deliver better patient care.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/pricing"
                className="inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
              >
                See Pricing
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
