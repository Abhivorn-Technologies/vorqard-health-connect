import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Target, Lightbulb, ShieldCheck, Users } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import patientDoctor from '@/assets/patient-doctor.png'
import familyHealth from '@/assets/family-health.png'

export default function AboutPage() {
  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">About Us</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Transforming Healthcare,{" "}
              <span className="text-gradient-brand">One QR at a Time</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Vorqard was born from a simple frustration — the chaos of paper records, WhatsApp prescriptions, and lost medical history.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, x: -32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="mb-6 text-3xl font-bold">The Problem</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Every day, millions of patients carry stacks of paper records to doctor visits. Prescriptions are shared via WhatsApp. Lab reports get lost. Emergency situations become dangerous without access to medical history.</p>
              <p>Doctors spend precious consultation time deciphering handwritten notes from other physicians. Hospitals operate with fragmented systems that don't talk to each other.</p>
              <p>The healthcare data ecosystem is broken — and patients pay the price.</p>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src={patientDoctor} alt="Patient consulting with doctor digitally" className="w-full max-w-md mx-auto rounded-3xl" width={500} height={500} loading="lazy" />
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 items-center">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="order-2 lg:order-1">
            <img src={familyHealth} alt="Family accessing health records on Vorqard" className="w-full max-w-md mx-auto rounded-3xl" width={500} height={500} loading="lazy" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="order-1 lg:order-2">
            <h2 className="mb-6 text-3xl font-bold text-gradient-brand">The Solution</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>Vorqard creates a unified Digital Health Identity for every individual. Your complete medical history — prescriptions, lab reports, diagnoses, allergies — accessible through a single QR code.</p>
              <p>Doctors scan your QR and get instant access. Labs upload reports directly. Hospitals manage workflows digitally. Everyone stays connected, and your health data stays secure.</p>
              <p>One platform. One identity. Better healthcare for everyone.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Our Values" title="What Drives Us" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Target size={24} />, title: "Mission-Driven", desc: "Making quality healthcare accessible to every individual regardless of location." },
              { icon: <Lightbulb size={24} />, title: "Innovation", desc: "Leveraging technology to solve real healthcare challenges with simple solutions." },
              { icon: <ShieldCheck size={24} />, title: "Trust & Security", desc: "Your health data is encrypted, private, and always under your control." },
              { icon: <Users size={24} />, title: "Community", desc: "Building an ecosystem where patients, doctors, and hospitals thrive together." },
            ].map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 text-center"
              >
                <div className="mx-auto mb-4 inline-flex rounded-xl gradient-primary p-3 text-primary-foreground">{v.icon}</div>
                <h3 className="mb-2 text-lg font-semibold">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
