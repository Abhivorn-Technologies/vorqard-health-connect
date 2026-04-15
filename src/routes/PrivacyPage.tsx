import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content: "We collect information you provide directly (name, email, phone, medical records) and automatically (IP address, browser type, usage patterns). Third-party integrations may share healthcare provider data with your consent."
    },
    {
      title: "2. How We Use Your Information",
      content: "Your data is used to provide healthcare services, improve our platform, comply with legal obligations, and communicate important updates. We never sell your personal information to third parties."
    },
    {
      title: "3. Data Security",
      content: "We use industry-standard encryption (AES-256), secure authentication protocols, and regular security audits. Your data is stored on secure servers with redundant backups. All data transfers are encrypted using TLS/SSL protocols."
    },
    {
      title: "4. Data Retention",
      content: "Patient records are maintained according to applicable healthcare regulations. You can request data deletion anytime, except where legally required to maintain records. Deleted data is permanently removed from our systems."
    },
    {
      title: "5. Your Rights",
      content: "You have the right to access, modify, or delete your personal information. GDPR and HIPAA compliant data portability is available. Contact support for data access requests within 30 days."
    },
    {
      title: "6. Cookies and Tracking",
      content: "We use essential cookies for functionality and analytics cookies (Google Analytics) for improvement. You can disable non-essential cookies anytime through your browser settings."
    },
    {
      title: "7. Third-Party Sharing",
      content: "We share data with healthcare providers you authorize, payment processors, and law enforcement when legally required. We do NOT share with marketing companies or advertisers."
    },
    {
      title: "8. Children's Privacy",
      content: "Vorqard is not intended for children under 13. If we discover a child has provided information, we immediately delete it. Parental consent is required for users 13-18."
    },
    {
      title: "9. Changes to This Policy",
      content: "We may update this Privacy Policy occasionally. Changes will be posted here with an updated date. Continued use indicates acceptance of the updated policy."
    },
    {
      title: "10. Contact Us",
      content: "For privacy concerns or data requests, email privacy@vorqard.com or contact our Data Protection Officer at dpo@vorqard.com. Response time: 7-10 business days."
    }
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Privacy Policy</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: April 2026</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="prose prose-invert max-w-none space-y-8">
            {sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card p-8"
              >
                <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
                <p className="text-muted-foreground text-lg leading-relaxed">{section.content}</p>
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
            <h2 className="text-2xl font-bold mb-4">Questions About Your Privacy?</h2>
            <p className="text-muted-foreground mb-8">
              Our Data Protection team is here to help. Response time: 24-48 hours.
            </p>
            <a
              href="mailto:privacy@vorqard.com"
              className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Contact Privacy Team
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
