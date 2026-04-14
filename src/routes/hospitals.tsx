import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, ClipboardList, Settings, Plug, BarChart3, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import hospitalDashboard from "@/assets/hospital-dashboard.png";

export const Route = createFileRoute("/hospitals")({
  head: () => ({
    meta: [
      { title: "For Hospitals — Vorqard Healthcare Platform" },
      { name: "description", content: "Digitize hospital workflows with Vorqard. Manage doctors, patients, appointments, and records from one platform." },
      { property: "og:title", content: "For Hospitals — Vorqard Healthcare Platform" },
      { property: "og:description", content: "Digitize hospital workflows with Vorqard." },
    ],
  }),
  component: HospitalsPage,
});

function HospitalsPage() {
  const adminFeatures = [
    { icon: <LayoutDashboard size={24} />, title: "Hospital Dashboard", description: "Real-time overview of operations — patient flow, appointments, and doctor availability." },
    { icon: <Users size={24} />, title: "Doctor Management", description: "Onboard doctors, manage departments, specializations, and schedules." },
    { icon: <ClipboardList size={24} />, title: "Patient Records", description: "Centralized digital patient records accessible across all departments." },
    { icon: <Settings size={24} />, title: "Appointment System", description: "Digital booking, queue management, reminders, and automated workflows." },
    { icon: <BarChart3 size={24} />, title: "Analytics & Reports", description: "Insights on patient volume, revenue, doctor performance, and more." },
    { icon: <Plug size={24} />, title: "Integrations", description: "Connect with existing hospital management systems, labs, and pharmacies." },
  ];

  const integrations = [
    "Electronic Health Records (EHR)",
    "Laboratory Information Systems",
    "Pharmacy Management",
    "Billing & Insurance",
    "Telemedicine Platforms",
    "Government Health Portals",
  ];

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-7xl grid gap-12 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">For Hospitals</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Digitize Your{" "}
              <span className="text-gradient-brand">Hospital Workflows</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              One platform to manage doctors, patients, appointments, and records. Built for modern hospitals.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <img src={hospitalDashboard} alt="Hospital dashboard management" className="w-full max-w-md mx-auto rounded-3xl" width={500} height={500} loading="eager" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Admin Features" title="Complete Hospital Management" description="Everything you need to run a digital-first hospital." />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {adminFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Integrations" title="Works With Your Existing Systems" description="Seamless integration with popular healthcare systems." />
          <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-2">
            {integrations.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-3xl gradient-primary p-12 text-center text-primary-foreground md:p-16"
          >
            <h2 className="text-3xl font-bold md:text-4xl">Ready to Go Digital?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
              Join leading hospitals already using Vorqard to transform their healthcare delivery.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              Request a Demo
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
