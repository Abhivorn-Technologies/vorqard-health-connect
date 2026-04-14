import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { QrCode, Clock, AlertTriangle, ScanLine, FileText, Pill, Upload, CalendarCheck, Building2, Users, ClipboardList, Settings } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "Features — Vorqard Digital Health Platform" },
      { name: "description", content: "Explore Vorqard features for patients, doctors, labs, and hospitals. QR health cards, digital prescriptions, and more." },
      { property: "og:title", content: "Features — Vorqard Digital Health Platform" },
      { property: "og:description", content: "Explore features for patients, doctors, labs, and hospitals." },
    ],
  }),
  component: FeaturesPage,
});

const sections = [
  {
    badge: "Patients",
    title: "Your Health, Your Control",
    desc: "Complete digital health identity at your fingertips.",
    features: [
      { icon: <QrCode size={22} />, title: "QR Health Card", text: "Your unique QR code linked to your complete medical records. Share instantly with any doctor." },
      { icon: <Clock size={22} />, title: "Medical Records Timeline", text: "Chronological view of all prescriptions, lab reports, diagnoses, and treatments." },
      { icon: <AlertTriangle size={22} />, title: "Emergency Profile", text: "Critical health info — blood group, allergies, conditions — accessible even without login." },
    ],
  },
  {
    badge: "Doctors",
    title: "Treat Better, Faster",
    desc: "Instant access to patient history for better clinical decisions.",
    features: [
      { icon: <ScanLine size={22} />, title: "Scan QR", text: "One scan reveals the patient's complete medical history, allergies, and ongoing treatments." },
      { icon: <FileText size={22} />, title: "View Patient History", text: "Browse through past prescriptions, lab reports, and diagnoses from any provider." },
      { icon: <Pill size={22} />, title: "Digital Prescriptions", text: "Write and share digital prescriptions directly linked to the patient's profile." },
    ],
  },
  {
    badge: "Labs",
    title: "Streamline Diagnostics",
    desc: "Direct report delivery and booking management.",
    features: [
      { icon: <Upload size={22} />, title: "Upload Reports", text: "Upload test results directly to patient profiles. No more manual handovers." },
      { icon: <CalendarCheck size={22} />, title: "Manage Bookings", text: "Handle test bookings, scheduling, and status updates from one dashboard." },
    ],
  },
  {
    badge: "Hospitals",
    title: "Digital Healthcare Workflows",
    desc: "Complete hospital management on one platform.",
    features: [
      { icon: <Users size={22} />, title: "Manage Doctors", text: "Onboard and manage doctors, departments, and specializations." },
      { icon: <ClipboardList size={22} />, title: "Patient Records", text: "Centralized patient record management across all departments." },
      { icon: <Settings size={22} />, title: "Appointments", text: "Digital appointment scheduling, reminders, and queue management." },
    ],
  },
];

function FeaturesPage() {
  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Features</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Built for the Entire{" "}
              <span className="text-gradient-brand">Healthcare Ecosystem</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Purpose-built tools for patients, doctors, labs, and hospitals — all connected through Vorqard.
            </p>
          </motion.div>
        </div>
      </section>

      {sections.map((section, sIdx) => (
        <section key={section.badge} className={`section-padding ${sIdx % 2 === 1 ? "bg-section-alt" : ""}`}>
          <div className="mx-auto max-w-7xl">
            <SectionHeading badge={section.badge} title={section.title} description={section.desc} />
            <div className={`grid gap-6 ${section.features.length === 2 ? "sm:grid-cols-2 max-w-3xl mx-auto" : "sm:grid-cols-3"}`}>
              {section.features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-2xl border border-border bg-card p-8 transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                >
                  <div className="mb-5 inline-flex rounded-xl gradient-primary p-3 text-primary-foreground">{f.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
