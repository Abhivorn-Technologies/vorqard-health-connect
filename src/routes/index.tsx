import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { QrCode, Shield, Stethoscope, Building2, FlaskConical, Heart, ArrowRight, CheckCircle2, Star } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import FeatureCard from "@/components/FeatureCard";
import heroImage from "@/assets/hero-qr-scan.png";
import qrSharing from "@/assets/qr-sharing.png";
import familyHealth from "@/assets/family-health.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vorqard — Your Digital Health Identity Platform" },
      { name: "description", content: "Scan Once. Treat Better. Vorqard connects patients, doctors, labs, and hospitals with QR-based digital health records." },
      { property: "og:title", content: "Vorqard — Your Digital Health Identity Platform" },
      { property: "og:description", content: "Scan Once. Treat Better. Vorqard connects patients, doctors, labs, and hospitals with QR-based digital health records." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden hero-gradient-bg section-padding">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 lg:flex-row">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex-1 text-center lg:text-left"
        >
          <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
            Digital Health Platform
          </span>
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
            Your{" "}
            <span className="text-gradient-brand">Digital Health</span>
            <br />Identity
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Scan Once. Treat Better. Connect patients, doctors, labs, and hospitals with secure QR-based medical records.
          </p>
          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <a
              href="https://play.google.com/store/apps/details?id=com.vorqard.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-transform hover:scale-105"
            >
              Download App <ArrowRight size={18} />
            </a>
            <Link
              to="/features"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary bg-background px-8 py-4 text-base font-semibold text-primary transition-colors hover:bg-secondary"
            >
              Explore Features
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex-1"
        >
          <div className="relative flex items-center justify-center">
            <div className="absolute -inset-4 rounded-3xl gradient-primary opacity-10 blur-3xl" />
            <img
              src={heroImage}
              alt="Patient sharing QR health card with doctor"
              className="relative mx-auto w-full max-w-lg rounded-3xl"
              width={600}
              height={600}
              loading="eager"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function FeaturesSection() {
  const features = [
    { icon: <Heart size={24} />, title: "For Patients", description: "Store and share your complete medical history securely via your personal QR health card." },
    { icon: <Stethoscope size={24} />, title: "For Doctors", description: "Instantly access patient records with a quick QR scan. Write digital prescriptions." },
    { icon: <FlaskConical size={24} />, title: "For Labs", description: "Upload test reports directly to patient profiles. Manage bookings seamlessly." },
    { icon: <Building2 size={24} />, title: "For Hospitals", description: "Complete digital healthcare workflow management — doctors, patients, and appointments." },
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Features"
          title="Healthcare for Everyone"
          description="Vorqard empowers every stakeholder in the healthcare ecosystem with purpose-built digital tools."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <FeatureCard key={f.title} {...f} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    { num: "01", title: "Create Profile", desc: "Sign up and create your digital health profile in seconds." },
    { num: "02", title: "Get QR Card", desc: "Receive your unique QR Health Card linked to your records." },
    { num: "03", title: "Share with Doctor", desc: "Doctor scans your QR code to instantly access your history." },
    { num: "04", title: "Track Health", desc: "All reports, prescriptions, and records in one secure timeline." },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="How It Works"
          title="Simple. Secure. Smart."
          description="Four easy steps to digitize your complete health identity."
        />
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <div className="grid gap-8 sm:grid-cols-2">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="text-center sm:text-left"
              >
                <div className="mx-auto sm:mx-0 mb-4 flex h-14 w-14 items-center justify-center rounded-2xl gradient-primary text-xl font-bold text-primary-foreground">
                  {step.num}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.desc}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={qrSharing} alt="Patient and doctor sharing QR codes" className="mx-auto w-full max-w-md rounded-3xl" width={500} height={500} loading="lazy" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const benefits = [
    "No more carrying paper records",
    "Instant access in emergencies",
    "Complete medical history timeline",
    "Secure & encrypted data",
    "Easy sharing with any doctor",
    "Lab reports auto-linked to profile",
  ];

  return (
    <section className="section-padding">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          badge="Benefits"
          title="Why Choose Vorqard?"
          description="A smarter way to manage healthcare records for the entire ecosystem."
        />
        <div className="grid gap-12 items-center lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img src={familyHealth} alt="Family using Vorqard health app" className="mx-auto w-full max-w-md rounded-3xl" width={500} height={500} loading="lazy" />
          </motion.div>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 rounded-xl border border-border bg-card p-4"
              >
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                <span className="text-sm font-medium">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  const testimonials = [
    { name: "Dr. Priya Sharma", role: "Cardiologist", text: "Vorqard has transformed how I access patient records. A quick scan and I have the complete history.", rating: 5 },
    { name: "Rahul Mehta", role: "Patient", text: "No more carrying bulky files to every appointment. My QR card has everything my doctor needs.", rating: 5 },
    { name: "LifeCare Hospital", role: "Healthcare Partner", text: "Managing patient records across departments is seamless now. Vorqard is a game-changer.", rating: 5 },
  ];

  return (
    <section className="section-padding bg-section-alt">
      <div className="mx-auto max-w-7xl">
        <SectionHeading badge="Testimonials" title="Trusted by Healthcare Professionals" />
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-card p-8"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
              <div>
                <p className="font-semibold text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="section-padding">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl gradient-primary p-12 text-center text-primary-foreground md:p-16"
        >
          <QrCode className="mx-auto mb-6 h-12 w-12" />
          <h2 className="text-3xl font-bold md:text-4xl">Ready to Digitize Your Health?</h2>
          <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
            Download Vorqard today and carry your complete medical history in your pocket.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://play.google.com/store/apps/details?id=com.vorqard.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              Google Play Store
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-primary-foreground/30 px-8 py-4 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
