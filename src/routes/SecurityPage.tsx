import { motion } from 'framer-motion'
import { Shield, Lock, CheckCircle2, AlertTriangle } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function SecurityPage() {
  const securityFeatures = [
    {
      icon: <Lock size={24} />,
      title: "End-to-End Encryption",
      description: "All patient data is encrypted using AES-256 encryption standard. Data in transit uses TLS 1.2+ protocol."
    },
    {
      icon: <Shield size={24} />,
      title: "HIPAA Compliance",
      description: "We maintain full HIPAA compliance with regular audits and security assessments by third-party security firms."
    },
    {
      icon: <CheckCircle2 size={24} />,
      title: "Regular Security Audits",
      description: "Quarterly penetration testing and vulnerability assessments ensure our systems remain secure against emerging threats."
    },
    {
      icon: <AlertTriangle size={24} />,
      title: "Incident Response",
      description: "24/7 monitoring with rapid incident response protocols. Security team notified immediately of any suspicious activity."
    }
  ]

  const complianceStandards = [
    { name: "HIPAA", description: "Health Insurance Portability and Accountability Act" },
    { name: "GDPR", description: "General Data Protection Regulation" },
    { name: "ISO 27001", description: "Information Security Management" },
    { name: "SOC 2 Type II", description: "Security, Availability, Processing Integrity, Confidentiality, Privacy" },
    { name: "Data Protection Act", description: "India's personal data protection compliance" },
    { name: "PCI DSS", description: "Payment Card Industry Data Security Standard" }
  ]

  const securityPractices = [
    "Multi-factor authentication (MFA) for all users",
    "Role-based access control (RBAC) with granular permissions",
    "Automatic logout after 15 minutes of inactivity",
    "Password requirements: Minimum 12 characters with complexity",
    "Encrypted local storage on mobile devices",
    "Regular dependency updates and patch management",
    "VPN-only access to production environments",
    "Database encryption at rest and in transit",
    "Automated backup with encryption verification",
    "Security headers and CSP policies implemented"
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Trust & Safety</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Security is Our{" "}
              <span className="text-gradient-brand">Top Priority</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Industry-leading security measures protect your sensitive healthcare information 24/7.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Security Features" title="How We Protect Your Data" />
          <div className="grid gap-8 md:grid-cols-2">
            {securityFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <div className="rounded-lg bg-primary/10 w-fit p-3 mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Compliance" title="Industry Standards & Certifications" />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complianceStandards.map((standard, i) => (
              <motion.div
                key={standard.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border-2 border-primary/30 bg-card p-6"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 size={20} className="text-primary shrink-0" />
                  <h3 className="font-bold text-lg">{standard.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{standard.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Best Practices" title="Security Measures We Implement" />
          <div className="grid gap-4 md:grid-cols-2">
            {securityPractices.map((practice, i) => (
              <motion.div
                key={practice}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className="flex items-start gap-4 rounded-lg bg-card p-4 border border-border"
              >
                <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                <span className="text-muted-foreground">{practice}</span>
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
            <h2 className="text-3xl font-bold md:text-4xl">Security Incident? Report It</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              We take security seriously. Report vulnerabilities responsibly to our security team.
            </p>
            <a
              href="mailto:security@vorqard.com"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105"
            >
              Report Security Issue
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
