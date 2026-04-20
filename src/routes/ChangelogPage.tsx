import { motion } from 'framer-motion'
import { CheckCircle2, AlertCircle, Zap } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function ChangelogPage() {
  const releases = [
    {
      version: "v2.1.0",
      date: "April 15, 2026",
      type: "Feature Release",
      icon: <Zap size={20} />,
      changes: [
        "Added AI-powered symptom checker",
        "New prescription management dashboard",
        "Real-time appointment reminders via SMS",
        "Integration with 50+ hospital networks",
        "Improved mobile app performance (40% faster loading)"
      ]
    },
    {
      version: "v2.0.5",
      date: "March 28, 2026",
      type: "Bug Fixes",
      icon: <CheckCircle2 size={20} />,
      changes: [
        "Fixed PDF export encoding issues",
        "Resolved QR code scanning timeout",
        "Improved search functionality for patient records",
        "Fixed data sync on weak connections",
        "Enhanced error messages for better UX"
      ]
    },
    {
      version: "v2.0.0",
      date: "March 10, 2026",
      type: "Major Release",
      icon: <Zap size={20} />,
      changes: [
        "Complete redesign of healthcare ecosystem",
        "New patient-doctor matching algorithm",
        "Hospital workflow automation",
        "Advanced analytics dashboard for providers",
        "Multi-language support (English, Hindi, Tamil, Telugu)"
      ]
    },
    {
      version: "v1.8.3",
      date: "February 15, 2026",
      type: "Security Update",
      icon: <AlertCircle size={20} />,
      changes: [
        "Security patch for authentication vulnerability",
        "Updated encryption protocols to TLS 1.3",
        "Enhanced biometric security",
        "Fixed permission escalation bug",
        "Implemented rate limiting for API endpoints"
      ]
    },
    {
      version: "v1.8.0",
      date: "January 30, 2026",
      type: "Feature Release",
      icon: <Zap size={20} />,
      changes: [
        "Lab results integration",
        "Automated appointment scheduling",
        "Medication reminder system",
        "Family member access (with permissions)",
        "Dark mode support"
      ]
    },
    {
      version: "v1.7.0",
      date: "January 5, 2026",
      type: "Feature Release",
      icon: <Zap size={20} />,
      changes: [
        "Initial public beta launch",
        "Core QR-based health records",
        "Patient-Doctor portal",
        "Basic analytics",
        "Appointment scheduling alpha"
      ]
    }
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Updates</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Release{" "}
              <span className="text-gradient-brand">Changelog</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Stay updated with the latest features, improvements, and security patches.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {releases.map((release, i) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card p-8 relative"
              >
                {i !== releases.length - 1 && (
                  <div className="absolute left-8 top-full w-0.5 h-6 bg-gradient-to-b from-primary to-transparent" />
                )}

                <div className="flex items-start gap-6">
                  <div className="rounded-xl bg-primary/10 p-3 text-primary shrink-0">
                    {release.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-bold">{release.version}</h3>
                      <span className="inline-block rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-primary">
                        {release.type}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mb-6">{release.date}</p>
                    <ul className="space-y-2">
                      {release.changes.map((change) => (
                        <li key={change} className="flex items-start gap-3 text-muted-foreground">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 shrink-0" />
                          <span>{change}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Subscribe to Updates</h2>
            <p className="text-muted-foreground mb-8">
              Get notified when we release new features and security updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder=""
                className="flex-1 rounded-xl border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring/20"
              />
              <button className="rounded-xl gradient-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
