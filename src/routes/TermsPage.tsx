import { motion } from 'framer-motion'
import SectionHeading from '@/components/SectionHeading'

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Vorqard, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      title: "2. Use License",
      content: "Permission is granted to temporarily download one copy of the materials (information or software) on Vorqard for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy materials, use materials for any commercial purpose or any public display, attempt to decompile or reverse engineer any software contained on Vorqard, remove any copyright or proprietary notations, transfer materials to another person or \"mirror\" materials on any other server."
    },
    {
      title: "3. Disclaimer",
      content: "The materials on Vorqard are provided on an 'as is' basis. Vorqard makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights."
    },
    {
      title: "4. Limitations",
      content: "In no event shall Vorqard or our suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Vorqard, even if we have been notified orally or in writing of the possibility of such damage."
    },
    {
      title: "5. Accuracy of Materials",
      content: "The materials appearing on Vorqard could include technical, typographical, or photographic errors. Vorqard does not warrant that any of the materials on its website are accurate, complete, or current. Vorqard may make changes to the materials contained on its website at any time without notice."
    },
    {
      title: "6. Materials and Content",
      content: "Vorqard has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Vorqard of the site. Use of any such linked website is at the user's own risk."
    },
    {
      title: "7. Modifications",
      content: "Vorqard may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service."
    },
    {
      title: "8. Governing Law",
      content: "These terms and conditions are governed by and construed in accordance with the laws of India, and you irrevocably submit to the exclusive jurisdiction of the courts in that location."
    },
    {
      title: "9. User Responsibilities",
      content: "Users are responsible for maintaining the confidentiality of their passwords and account information. You agree to accept responsibility for all activities that occur under your account. You must notify Vorqard immediately of any unauthorized use of your account."
    },
    {
      title: "10. Medical Disclaimer",
      content: "Vorqard is not a substitute for professional medical advice. Always consult with qualified healthcare professionals. The information provided is for informational purposes only and should not be used for self-diagnosis or treatment."
    }
  ]

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Terms of Service</h1>
            <p className="mt-4 text-lg text-muted-foreground">Last updated: April 2026</p>
            <p className="mt-6 max-w-2xl mx-auto text-lg text-muted-foreground">
              Please read these terms carefully before using Vorqard.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
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
    </>
  )
}
