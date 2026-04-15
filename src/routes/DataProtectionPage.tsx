import { motion } from 'framer-motion'
import { Shield, lock, Compass, BarChart3 } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function DataProtectionPage() {
  const principles = [
    {
      icon: <Shield size={24} />,
      title: "Lawfulness, Fairness & Transparency",
      description: "We collect data lawfully and inform users about our practices. You always know what data we collect and how it's used."
    },
    {
      icon: <lock size={24} />,
      title: "Purpose Limitation",
      description: "Data is collected for specific, explicit purposes. We don't use your data for unrelated purposes without consent."
    },
    {
      icon: <Compass size={24} />,
      title: "Data Minimization",
      description: "We only collect data necessary for our services. Unnecessary data collection is avoided to minimize risks."
    },
    {
      icon: <BarChart3 size={24} />,
      title: "Accuracy & Integrity",
      description: "Your data is kept accurate and up-to-date. We implement security measures to prevent unauthorized access and alteration."
    }
  ]

  const userRights = [
    "Right to know what personal data we hold about you",
    "Right to correct inaccurate or incomplete data",
    "Right to delete your data (right to be forgotten)",
    "Right to restrict processing of your data",
    "Right to data portability (export your data)",
    "Right to object to processing",
    "Right to lodge a complaint with the Data Protection Authority",
    "Right to request human review of automated decisions"
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Rights & Compliance</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Data Protection &{" "}
              <span className="text-gradient-brand">Your Rights</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              We follow strict data protection principles to ensure your information is handled responsibly and securely.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Our Principles" title="Data Protection Framework" description="We adhere to GDPR, HIPAA, and Indian data protection laws." />
          <div className="grid gap-8 md:grid-cols-2">
            {principles.map((principle, i) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="rounded-lg bg-primary/10 w-fit p-3 mb-4 text-primary">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Your Rights" title="Data Rights You Can Exercise" description="You have full control over your personal data." />
          <div className="grid gap-4 md:grid-cols-2">
            {userRights.map((right, i) => (
              <motion.div
                key={right}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-4 rounded-lg bg-card p-6 border border-border"
              >
                <div className="rounded-full bg-primary/10 p-2 text-primary shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <span className="text-muted-foreground pt-1">{right}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <SectionHeading badge="Data Requests" title="How to Exercise Your Rights" />
          <div className="space-y-8">
            {[
              {
                title: "Data Access Request",
                description: "Want to see what data we have? Email dpo@vorqard.com with 'Data Access Request' and we'll provide your data within 7 days."
              },
              {
                title: "Data Correction",
                description: "Found incorrect information? Log into your account and update it directly, or contact us for assistance."
              },
              {
                title: "Data Deletion",
                description: "Want to delete your account? Use the delete option in settings or email us. We'll remove your data within 30 days (except legally required records)."
              },
              {
                title: "Data Portability",
                description: "Need your data in a portable format? Request a complete export from your account settings or by contacting support."
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-lg">{item.description}</p>
              </motion.div>
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
            <h2 className="text-3xl font-bold md:text-4xl">Data Protection Officer</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              Have concerns about your data? Our DPO is available to assist.
            </p>
            <div className="mt-8 space-y-3">
              <a
                href="mailto:dpo@vorqard.com"
                className="block text-primary-foreground font-semibold hover:underline"
              >
                dpo@vorqard.com
              </a>
              <p className="text-sm text-primary-foreground/70">
                Response time: 7-10 business days
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
