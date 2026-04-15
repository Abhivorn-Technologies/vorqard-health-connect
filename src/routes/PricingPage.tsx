import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'

export default function PricingPage() {
  const [yearly, setYearly] = useState(true)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)

  const doctorPlans = [
    { name: "Basic", price: yearly ? "$299" : "$29", period: yearly ? "/year" : "/month", features: ["Up to 50 patients", "QR card scanning", "Basic records", "Email support"] },
    { name: "Professional", price: yearly ? "$599" : "$59", period: yearly ? "/year" : "/month", highlight: true, features: ["Unlimited patients", "Digital prescriptions", "Patient notes", "Analytics dashboard", "Priority support"] },
    { name: "Enterprise", price: "Custom", period: "", features: ["Multi-clinic support", "Custom integrations", "API access", "Dedicated account manager"] },
  ]

  const hospitalPlans = [
    { name: "Small Hospital", price: yearly ? "$1,999" : "$199", period: yearly ? "/year" : "/month", features: ["Up to 100 patients", "Basic admin dashboard", "Doctor management", "Email support"] },
    { name: "Large Hospital", price: yearly ? "$4,999" : "$499", period: yearly ? "/year" : "/month", highlight: true, features: ["Unlimited patients", "Full hospital workflow", "Advanced analytics", "Multi-department support", "Priority support"] },
    { name: "Medical Network", price: "Custom", period: "", features: ["Multiple hospitals", "Custom workflows", "Full API access", "Dedicated support team"] },
  ]

  const labPlans = [
    { name: "Startup Lab", price: yearly ? "$399" : "$39", period: yearly ? "/year" : "/month", features: ["Up to 100 tests/month", "Digital report sharing", "Basic integrations", "Email support"] },
    { name: "Professional Lab", price: yearly ? "$799" : "$79", period: yearly ? "/year" : "/month", highlight: true, features: ["Up to 500 tests/month", "Advanced integrations", "Analytics", "API access", "Priority support"] },
    { name: "Reference Lab", price: "Custom", period: "", features: ["Unlimited tests", "Custom workflows", "Full integrations", "Dedicated support"] },
  ]

  const faqItems = [
    { q: "Is there a free trial?", a: "Yes! All plans come with a 14-day free trial. No credit card required." },
    { q: "Can I cancel anytime?", a: "Absolutely. Cancel your subscription anytime with no penalties or hidden fees." },
    { q: "Do you offer discounts for annual billing?", a: "Yes, save 20% when you choose annual billing compared to monthly." },
    { q: "What payment methods do you accept?", a: "We accept all major credit cards, UPI, and bank transfers for Indian users." },
    { q: "Do you provide onboarding and training?", a: "Yes, all plans include onboarding. Professional and Enterprise plans get dedicated training." },
    { q: "What is your data backup policy?", a: "We backup all data daily with redundancy across multiple servers. Your data is always safe." },
  ]

  const PricingCard = ({ plan, delay }: { plan: (typeof doctorPlans)[0]; delay: number }) => (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className={`relative rounded-3xl border-2 p-8 transition-transform hover:scale-105 ${
        plan.highlight ? "border-primary bg-gradient-to-b from-primary/10 to-background shadow-lg" : "border-border bg-card"
      }`}
    >
      {plan.highlight && <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">MOST POPULAR</div>}
      <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
      <div className="mb-1">
        <span className="text-4xl font-bold text-primary">{plan.price}</span>
        <span className="text-muted-foreground">{plan.period}</span>
      </div>
      <ul className="mb-8 space-y-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm">
            <CheckCircle2 size={16} className="shrink-0 text-primary mt-0.5" />
            <span>{f}</span>
          </li>
        ))}
      </ul>
      <button className={`w-full rounded-xl py-3 font-semibold transition-transform hover:scale-105 ${plan.highlight ? "gradient-primary text-primary-foreground" : "border-2 border-primary text-primary"}`}>
        Get Started
      </button>
    </motion.div>
  )

  return (
    <>
      <section className="hero-gradient-bg section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="mb-4 inline-block rounded-full bg-secondary px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">Pricing</span>
            <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">
              Simple,{" "}
              <span className="text-gradient-brand">Transparent Pricing</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
              Choose the plan that fits your needs. Pay only for what you use.
            </p>
            <div className="mt-8 flex items-center justify-center gap-4">
              <span className={`text-sm font-medium ${!yearly ? "text-muted-foreground" : ""}`}>Monthly</span>
              <button
                onClick={() => setYearly(!yearly)}
                className="relative h-8 w-16 rounded-full bg-muted transition-colors"
                style={{ background: yearly ? "hsl(var(--primary))" : "" }}
              >
                <motion.div
                  initial={false}
                  animate={{ x: yearly ? 32 : 0 }}
                  className="absolute top-1 left-1 h-6 w-6 rounded-full bg-white shadow-md"
                />
              </button>
              <span className={`text-sm font-medium ${yearly ? "text-muted-foreground" : ""}`}>
                Yearly <span className="text-xs text-primary">(Save 20%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="For Doctors" title="Pricing for Individual Doctors" />
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {doctorPlans.map((p, i) => (
              <PricingCard key={p.name} plan={p} delay={i * 0.1} />
            ))}
          </div>

          <SectionHeading badge="For Hospitals" title="Hospital & Clinic Pricing" />
          <div className="grid gap-8 md:grid-cols-3 mb-16">
            {hospitalPlans.map((p, i) => (
              <PricingCard key={p.name} plan={p} delay={i * 0.1} />
            ))}
          </div>

          <SectionHeading badge="For Labs" title="Laboratory Services Pricing" />
          <div className="grid gap-8 md:grid-cols-3">
            {labPlans.map((p, i) => (
              <PricingCard key={p.name} plan={p} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-alt">
        <div className="mx-auto max-w-7xl">
          <SectionHeading badge="Comparison" title="See What's Included" />
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">Basic</th>
                  <th className="px-6 py-4 text-center font-semibold">Professional</th>
                  <th className="px-6 py-4 text-center font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Patient/Doctor Records", basic: true, pro: true, ent: true },
                  { name: "QR Scanning", basic: true, pro: true, ent: true },
                  { name: "Digital Prescriptions", basic: false, pro: true, ent: true },
                  { name: "Analytics", basic: false, pro: true, ent: true },
                  { name: "API Access", basic: false, pro: false, ent: true },
                  { name: "Custom Integration", basic: false, pro: false, ent: true },
                  { name: "Priority Support", basic: false, pro: true, ent: true },
                  { name: "SLA Guarantee", basic: false, pro: false, ent: true },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-border">
                    <td className="px-6 py-4">{item.name}</td>
                    <td className="px-6 py-4 text-center">{item.basic ? "✓" : "—"}</td>
                    <td className="px-6 py-4 text-center">{item.pro ? "✓" : "—"}</td>
                    <td className="px-6 py-4 text-center">{item.ent ? "✓" : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-4xl">
          <SectionHeading badge="FAQ" title="Frequently Asked Questions" />
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="rounded-xl border border-border bg-card overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === i ? null : i)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
                >
                  <span className="font-semibold text-left">{item.q}</span>
                  <div className="shrink-0 ml-4">
                    {expandedFAQ === i ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                  </div>
                </button>
                {expandedFAQ === i && (
                  <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="border-t border-border px-6 py-4 text-muted-foreground">
                    {item.a}
                  </motion.div>
                )}
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
            <h2 className="text-3xl font-bold md:text-4xl">Still have questions?</h2>
            <p className="mx-auto mt-4 max-w-lg text-lg text-primary-foreground/80">
              Our team is here to help you find the right plan for your organization.
            </p>
            <Link to="/contact" className="mt-8 inline-flex items-center gap-2 rounded-xl bg-background px-8 py-4 text-base font-semibold text-foreground shadow-lg transition-transform hover:scale-105">
              Contact Sales
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  )
}
