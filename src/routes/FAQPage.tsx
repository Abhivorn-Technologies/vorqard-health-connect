import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function FAQPage() {
  const [expanded, setExpanded] = useState<number | null>(0)

  const faqs = [
    {
      category: "Getting Started",
      items: [
        {
          q: "What is Vorqard?",
          a: "Vorqard is a digital health platform that enables secure storage, sharing, and access to medical records through QR codes. It connects patients, doctors, hospitals, and labs in a unified ecosystem."
        },
        {
          q: "How do I create an account?",
          a: "Visit vorqard.com, click 'Sign Up', and choose your role (Patient, Doctor, Hospital, or Lab). Fill in your details and verify your email. Patient accounts are free to create."
        },
        {
          q: "Is Vorqard free to use?",
          a: "Yes! Patients can use Vorqard for free. Doctors can create a free account. Hospitals and Labs have subscription plans starting at $199/month."
        }
      ]
    },
    {
      category: "Security & Privacy",
      items: [
        {
          q: "Is my medical data safe on Vorqard?",
          a: "Yes. We use AES-256 encryption, HIPAA compliance, and regular security audits. Your data is encrypted both in transit and at rest. We never sell your personal information."
        },
        {
          q: "What happens if I delete my account?",
          a: "Your data will be securely deleted within 30 days. Medical records required by law will be maintained as per healthcare regulations. You'll receive a confirmation email."
        },
        {
          q: "Who can access my medical records?",
          a: "Only you and healthcare providers you explicitly authorize. You can grant or revoke access anytime through the app settings."
        }
      ]
    },
    {
      category: "QR Code Features",
      items: [
        {
          q: "How does the QR code work?",
          a: "Your QR code contains encrypted links to your medical records. When scanned by an authorized healthcare provider, it grants temporary access to your health information."
        },
        {
          q: "Can someone else use my QR code?",
          a: "QR codes are personalized and encrypted. Unauthorized scanning won't reveal sensitive information. You can regenerate your QR code anytime."
        },
        {
          q: "What if I lose my QR code card?",
          a: "No problem. Generate a new one in seconds from your profile. Your digital QR code is always available in the app."
        }
      ]
    },
    {
      category: "For Doctors",
      items: [
        {
          q: "How do I access patient records?",
          a: "Scan the patient's QR code or request access through the app. You'll see only the records the patient has authorized you to view."
        },
        {
          q: "Can I send prescriptions through Vorqard?",
          a: "Yes! Professional and Enterprise plans include digital prescriptions. Prescriptions are signed digitally and can be shared directly with pharmacies."
        },
        {
          q: "Do you offer practice management tools?",
          a: "Yes. Appointment scheduling, patient notes, analytics, and integrations with existing EMR systems are available on Professional plans."
        }
      ]
    },
    {
      category: "For Hospitals",
      items: [
        {
          q: "Can Vorqard integrate with our existing systems?",
          a: "Yes. We support integration with most hospital management systems, EHRs, labs, and pharmacies. Enterprise plans include custom integrations."
        },
        {
          q: "What's the setup time?",
          a: "Setup typically takes 1-2 weeks for configuration and staff training. Our dedicated team handles migration of existing records if needed."
        },
        {
          q: "Do you provide training?",
          a: "Absolutely. All plans include onboarding and staff training. Enterprise plans get dedicated support during and after implementation."
        }
      ]
    },
    {
      category: "Technical Support",
      items: [
        {
          q: "How do I contact support?",
          a: "Email support@vorqard.com or use the in-app support chat. Response time is 24-48 hours for general inquiries, immediate for critical issues."
        },
        {
          q: "Is there a mobile app?",
          a: "Yes! Vorqard is available on iOS and Android. Download from App Store or Google Play Store. All features sync seamlessly."
        },
        {
          q: "What browsers does Vorqard support?",
          a: "We support Chrome, Firefox, Safari, and Edge (latest versions). The mobile app requires iOS 12+ or Android 8+."
        }
      ]
    }
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Support</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Frequently Asked{" "}
              <span className="text-gradient-brand">Questions</span>
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Find answers to common questions about Vorqard and how it works.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          {faqs.map((category, catIdx) => (
            <div key={category.category} className="mb-16">
              <SectionHeading badge={`Category ${catIdx + 1}`} title={category.category} />
              <div className="space-y-4">
                {category.items.map((item, idx) => {
                  const uniqueId = `${catIdx}-${idx}`
                  const isExpanded = expanded === parseInt(uniqueId)

                  return (
                    <motion.div
                      key={uniqueId}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: idx * 0.05 }}
                      className="rounded-xl border border-border bg-card overflow-hidden"
                    >
                      <button
                        onClick={() => setExpanded(!isExpanded ? parseInt(uniqueId) : null)}
                        className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                      >
                        <span className="text-left font-semibold text-lg">{item.q}</span>
                        <div className="shrink-0 ml-4">
                          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </div>
                      </button>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="border-t border-border px-6 py-4 text-muted-foreground"
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </motion.div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-muted-foreground mb-8">
              Our support team is ready to help. Get in touch with us today.
            </p>
            <a
              href="mailto:support@vorqard.com"
              className="inline-flex items-center gap-2 rounded-xl gradient-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-lg transition-transform hover:scale-105"
            >
              Contact Support
            </a>
          </motion.div>
        </div>
      </section>
    </>
  )
}
