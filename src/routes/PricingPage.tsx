import { Link } from 'react-router-dom'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, ChevronDown, ChevronUp, Rocket, User, Stethoscope, ArrowRight, Zap, Building2, Pill, FlaskConical } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'

export default function PricingPage() {
  const [yearly, setYearly] = useState(true)
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null)
  const [showComingSoon, setShowComingSoon] = useState(false)


  const businessPlans = [
    { 
      name: "Hospital Plan", 
      price: yearly ? "₹14,999" : "₹1,499", 
      period: yearly ? "/year" : "/month",
      highlight: true,
      icon: <Building2 size={32} />,
      features: [
        "Staff & patient management", 
        "Unlimited patients", 
        "Multi clinic support", 
        "Appointment management", 
        "Doctor management", 
        "Advanced reports", 
        "Lab module", 
        "Pharmacy module", 
        "Role based access", 
        "24/7 priority support"
      ] 
    },
    { 
      name: "Pharmacy Plan", 
      price: yearly ? "₹4,999" : "₹499", 
      period: yearly ? "/year" : "/month",
      icon: <Pill size={32} />,
      features: [
        "Billing system", 
        "Inventory management", 
        "Stock alerts", 
        "Prescription queue", 
        "Purchase management", 
        "Reports & analytics"
      ] 
    },
    { 
      name: "Lab Plan", 
      price: yearly ? "₹4,999" : "₹499", 
      period: yearly ? "/year" : "/month",
      icon: <FlaskConical size={32} />,
      features: [
        "Test & patient management", 
        "Digital reports & QR", 
        "Revenue tracking", 
        "Performance analytics", 
        "Reports & analytics", 
        "24/7 support"
      ] 
    }
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
      <a 
        href="https://app.vorqard.com/signup"
        target="_blank" rel="noopener noreferrer"
        className={`block w-full text-center rounded-xl py-3 font-semibold transition-transform hover:scale-105 ${
          plan.highlight 
            ? "gradient-primary text-primary-foreground shadow-md" 
            : "border-2 border-primary text-primary hover:bg-primary/5"
        }`}
      >
        2 months Free Trial
      </a>
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
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4">
          {/* Global Toggle */}
          <div className="mb-16 flex items-center justify-center gap-4">
            <div className="flex items-center rounded-full bg-muted p-1 shadow-sm border border-border">
              <button
                onClick={() => setYearly(false)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  !yearly ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setYearly(true)}
                className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                  yearly ? "bg-primary text-primary-foreground shadow-md" : "text-muted-foreground hover:text-primary"
                }`}
              >
                Yearly <span className="text-[10px] opacity-80">(Save 20%)</span>
              </button>
            </div>
          </div>

          {/* Our Applications Content */}
          <div className="text-center mb-12">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary">
              Our Applications
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Two Apps. <span className="text-gradient-brand">One Purpose.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Empowering patients and doctors with smart healthcare solutions.
            </p>
          </div>

          <motion.div 
            key={yearly ? 'yearly' : 'monthly'}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-2 max-w-5xl mx-auto mb-12"
          >
            {/* Patient App Card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              viewport={{ once: true }}
              className="group relative flex flex-col rounded-3xl border border-border bg-white p-8 shadow-sm transition-shadow duration-300"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Patient App</h3>
                  <span className="text-lg font-semibold text-primary">Free</span>
                </div>
              </div>
              <ul className="mb-8 space-y-3">
                {["Health profile", "QR health card", "Records storage", "Appointments", "Reports", "Family access"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <CheckCircle2 size={18} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowComingSoon(true)}
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl gradient-primary py-4 font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 group-hover:scale-[1.02]"
              >
                Get Started <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">100% Free for all patients</p>
            </motion.div>

            {/* Doctor App Card */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              viewport={{ once: true }}
              className={`group relative flex flex-col rounded-3xl border-2 bg-white p-8 transition-all duration-300 ${
                yearly ? "border-primary shadow-xl" : "border-border shadow-sm"
              }`}
            >
              {yearly && (
                <div className="absolute -top-4 right-8 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                  MOST POPULAR
                </div>
              )}
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                  <Stethoscope size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Doctor App</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-2xl font-bold text-primary">{yearly ? "₹1,499" : "₹149"}</span>
                    <span className="text-sm text-muted-foreground">{yearly ? "/year" : "/month"}</span>
                  </div>
                </div>
              </div>
              <ul className="mb-8 space-y-3">
                {["Doctor dashboard", "Appointments", "Patient records", "Digital prescriptions", "QR scan patient history", "Earnings summary", "Teleconsultation"].map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowComingSoon(true)}
                className="mt-auto flex w-full items-center justify-center gap-2 rounded-xl gradient-primary py-4 font-bold text-primary-foreground shadow-lg transition-all hover:brightness-110 group-hover:scale-[1.02]"
              >
                Get Started <ArrowRight size={18} />
              </button>
              <p className="mt-4 text-center text-xs text-muted-foreground">Powerful tools for healthcare professionals</p>
            </motion.div>
          </motion.div>

          {/* Business Pricing Content */}
          <div className="text-center mb-8 pt-10">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              Plans for Every Healthcare Business
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Simple, affordable and built to grow with your practice.
            </p>
          </div>

          <motion.div 
            key={yearly ? 'biz-yearly' : 'biz-monthly'}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto mt-12 mb-10"
          >
            {businessPlans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ 
                  opacity: 0, 
                  x: i === 0 ? -24 : (i === 2 ? 24 : 0), 
                  y: i === 1 ? 24 : 0 
                }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" 
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: i * 0.1,
                  // Ensure hover is snappy by specifying a different transition for transform/y
                  y: { type: "spring", stiffness: 300, damping: 20 }
                }}
                className={`group relative flex flex-col rounded-3xl border-2 p-8 transition-colors duration-300 ${
                  yearly 
                    ? "border-primary bg-white shadow-xl" 
                    : "border-border bg-white shadow-sm"
                }`}
              >
                {yearly && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    MOST POPULAR
                  </div>
                )}
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-lg">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{p.name}</h3>
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl font-bold text-primary">{p.price}</span>
                      <span className="text-xs text-muted-foreground">{p.period}</span>
                    </div>
                  </div>
                </div>
                <ul className="mb-8 space-y-3 border-t border-border pt-6">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 size={16} className="shrink-0 text-primary mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <a 
                  href={`https://app.vorqard.com/signup?type=${p.name.split(' ')[0].toLowerCase()}`}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-auto block w-full text-center rounded-xl py-4 font-bold gradient-primary text-primary-foreground shadow-lg transition-all hover:brightness-110"
                >
                  2 Months Free Trial
                </a>
              </motion.div>
            ))}
          </motion.div>
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

      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader className="flex flex-col items-center text-center">
            <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Rocket size={40} className="animate-bounce" />
            </div>
            <DialogTitle className="text-2xl font-bold">App Coming Soon!</DialogTitle>
            <DialogDescription className="text-base mt-2">
              We're working hard to launch soon. Stay tuned for the best digital health experience!
            </DialogDescription>
          </DialogHeader>
          <div className="mt-6 flex justify-center">
            <button
              onClick={() => setShowComingSoon(false)}
              className="rounded-xl gradient-primary px-8 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Notify Me
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
